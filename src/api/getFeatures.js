import { interval } from "rxjs";
import { map } from "rxjs/operators";

const params = ["x", "y", "z", "length", "diameter", "temperature"];

const getFeatures = interval(5000).pipe(
  map((p) => {
    const features = [];
    const totFeatures = Math.floor(Math.random() * 6) + 1;

    for (let i = 0; i < totFeatures; i++) {
      const totControls = Math.floor(Math.random() * 6) + 1;

      let controls = [];
      for (let j = 0; j < totControls; j++) {
        controls = controls.concat(
          params.map((pr) => {
            const m = Math.random() / 10;
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
