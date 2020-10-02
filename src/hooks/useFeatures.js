import { useState, useEffect } from "react";

const useFeatures = (observable) => {
  const [controls, setControls] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setControls);
    return () => sub.unsubscribe();
  }, [observable]);

  return controls;
};

export default useFeatures;
