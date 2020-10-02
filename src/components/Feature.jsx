import React from "react";
import Control from "./Control";
import "./Feature.css";

const Feature = ({ controls }) => {
  let columns = [];

  let i,
    j,
    temparray,
    chunk = 12;
  for (i = 0, j = controls.length; i < j; i += chunk) {
    temparray = controls.slice(i, i + chunk);
    if (i + chunk > j) {
      if (temparray.length % 6 === 0) {
        columns.push(temparray);
      } else {
        const diff = 6 - temparray.length;
        const newArr = temparray.concat(Array.from({ length: diff }));
        columns.push(newArr);
      }
    } else {
      columns.push(temparray);
    }
  }

  return (
    <div className="Feature">
      <table className="Feature-Table">
        <div className="Table-Header">
          <thead>
            <tr>
              <th>Features Table</th>
            </tr>
          </thead>
        </div>
        <div className="Table-Body">
          {columns.map((col, indx) => {
            return (
              <table className="Table-Column">
                <tr>
                  <th>Control</th>
                  <th>Dev</th>
                  <th>Dev out Tot</th>
                </tr>
                {col &&
                  col.map((control) => {
                    if (control) {
                      return <Control key={control.id} {...control} />;
                    } else {
                      return <div>HOLA</div>;
                    }
                  })}
              </table>
            );
          })}
        </div>
      </table>
    </div>
  );
};

export default Feature;
