import React from "react";
import Control from "./Control";
import "./Feature.css";
import { reduce } from "rxjs/operators";

const Feature = ({ controls, totalDev = {} }) => {
  const columns = getControlsColumns(controls);
  const totalDeviation = Object.keys.length
    ? Object.keys(totalDev).reduce((total, control) => {
        return total + parseFloat(totalDev[control]).toFixed(3);
      }, 0)
    : 0;

  const avgDeviation = controls
    ? parseFloat(totalDeviation) / controls.length
    : 0;

  console.log("Feature -> avgDeviation", avgDeviation);
  return (
    <div className="Feature">
      <table className="Feature-Table">
        <div
          className="Table-Header"
          style={{ backgroundColor: getBackgroundColor(avgDeviation) }}
        >
          <thead>
            <tr>
              <th>Features Table</th>
            </tr>
          </thead>
        </div>
        <div className="Table-Body">
          {columns.map((col, indx) => {
            return (
              <table
                className="Table-Column"
                style={{ width: `${100 / columns.length}%` }}
              >
                <tr>
                  <th>Control</th>
                  <th>Dev</th>
                  <th>Dev out Tot</th>
                </tr>
                {col &&
                  col.map((control, ix) => {
                    return (
                      <Control
                        key={control ? control.id : `rand-${ix}`}
                        devOutTot={control ? totalDev[control.name] : "-"}
                        {...control}
                      />
                    );
                  })}
              </table>
            );
          })}
        </div>

        <tfoot>
          <tr>
            <td>---</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const getBackgroundColor = (deviation) => {
  if (deviation < 1) {
    return "green";
  }

  if (deviation < 3) {
    return "yellow";
  }

  if (deviation >= 3) {
    return "red";
  }
};

const getControlsColumns = (controls) => {
  const size = 20;
  let columns = [];

  let i,
    j,
    temparray,
    chunk = controls.length >= size / 2 - 2 ? size : size / 2 - 2;
  for (i = 0, j = controls.length; i < j; i += chunk) {
    temparray = controls.slice(i, i + chunk);
    if (temparray.length < chunk) {
      const diff = Math.abs(chunk - temparray.length);
      const newArr = temparray.concat(Array.from({ length: diff }));
      columns.push(newArr);
    } else {
      columns.push(temparray);
    }
  }

  return columns;
};

export default Feature;
