import { interval } from "rxjs";
import { map } from "rxjs/operators";

const params = ["x", "y", "z", "length", "diameter"];

const getFeatures = interval(10000).pipe(
  map((p) => {
    const features = [];
    const totFeatures = Math.floor(Math.random() * 6) + 1;

    for (let i = 0; i < totFeatures; i++) {
      const totControls = Math.floor(Math.random() * 6) + 1;

      let controls = [];
      for (let j = 0; j < totControls; j++) {
        controls = controls.concat(
          params.map((pr) => {
            const m = Math.random().toFixed(3);
            return {
              id: pr + m.toString(),
              name: pr,
              dev: m,
            };
          })
        );
      }
      features.push(controls);
    }

    return features;
  })
);

export default getFeatures;
