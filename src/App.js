import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useFeatures from "./hooks/useFeatures";
import getFeatures from "./api/getFeatures";
import Feature from "./components/Feature";

function App() {
  //const features = useFeatures(getFeatures);
  console.log("App -> features", features);

  console.log("Feature -> columns", features);
  const displayColumns = [];

  if (features) {
    for (let z = 0, l = 1; z < features.length; z = z + l) {
      l = 1;
      const feature = features[z];
      const nextFeature = features[z + 1];

      if (feature.length > 6) {
        displayColumns.push([feature]);
      } else if (nextFeature.length <= 6) {
        displayColumns.push([feature, nextFeature]);
        l = 2;
      } else {
        displayColumns.push([feature]);
      }
    }
  }
  console.log("Feature -> displayColumns", displayColumns);

  return (
    <div className="App">
      <div className="App-Part">
        {displayColumns &&
          displayColumns.map((featureColumn, indx) => {
            return (
              <div className="Feature-wrapper">
                {featureColumn.map((column) => (
                  <Feature key={indx} controls={column} />
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

const features = [
  [
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },

    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "length",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "diameter",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "length",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },

    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
  ],
  [
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
  ],
  [
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
  ],
  [
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
  ],
  [
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
    {
      dev: "0.332",
      id: "x0.332",
      name: "x",
    },
  ],
];
