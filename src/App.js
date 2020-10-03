import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useFeatures from "./hooks/useFeatures";
import getFeatures from "./api/getFeatures";
import Feature from "./components/Feature";

function App() {
  const features = useFeatures(getFeatures);
  const [state, setState] = useState({ lastNDevs: {} });

  const totalDev = features ? getTotalDeviationPiece(features) : {};

  useEffect(() => {
    if (totalDev) {
      const newTotalDev = Object.assign({}, totalDev);

      Object.keys(totalDev).forEach((control) => {
        const lastDev = state.lastNDevs[control];

        if (lastDev) {
          const newDev = parseFloat(lastDev) + parseFloat(totalDev[control]);

          newTotalDev[control] = newDev;
        }
      });

      setState({ lastNDevs: newTotalDev });
    }
  }, [features]);

  let displayColumns = [];

  if (features) {
    displayColumns = getFeaturesDisplay(features);
  }

  return (
    <div className="App">
      <div className="App-Part">
        {displayColumns.length ? (
          displayColumns.map((featureColumn, indx) => {
            return (
              <div className="Feature-wrapper">
                {featureColumn.map((column, index) => (
                  <div style={{ marginTop: index === 1 ? "10px" : "0" }}>
                    <Feature
                      key={indx}
                      name={mockFeaturesNames[indx % 4]}
                      controls={column}
                      totalDev={state.lastNDevs}
                    />
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <div className="App-Loader">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;

const mockFeaturesNames = ["Seam", "Slot", "Hole", "Other"];

const getTotalDeviationPiece = (features) => {
  const lastDevByControl = {};
  features.forEach((controls) => {
    controls.forEach((c) => {
      if (lastDevByControl[c.name]) {
        const devControl = lastDevByControl[c.name];
        lastDevByControl[c.name] = devControl + parseFloat(c.dev);
      } else {
        lastDevByControl[c.name] = parseFloat(c.dev);
      }
    });
  });
  return lastDevByControl;
};

const getFeaturesDisplay = (features) => {
  let displayColumns = [];
  for (let z = 0, l = 1; z < features.length; z = z + l) {
    l = 1;
    const feature = features[z];
    const nextFeature = features[z + 1];

    if (feature.length > 8) {
      displayColumns.push([feature]);
    } else if (nextFeature && nextFeature.length <= 8) {
      displayColumns.push([feature, nextFeature]);
      l = 2;
    } else {
      displayColumns.push([feature]);
    }
  }
  return displayColumns;
};
