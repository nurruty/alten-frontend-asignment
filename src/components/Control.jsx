import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Control = (props) => {
  const { name = "-", dev = "-", devOutTot = "-" } = props;

  let iconColor;
  if (dev !== "-") {
    if (dev < 0.3) {
      iconColor = "green";
    } else if (dev < 0.6) {
      iconColor = "yellow";
    } else {
      iconColor = "red";
    }
  }

  return (
    <tr>
      <th>{name}</th>
      <th>{dev}</th>
      <th>{devOutTot}</th>
      {iconColor ? (
        <th>
          <FontAwesomeIcon icon={faCheckCircle} color={iconColor} />
        </th>
      ) : (
        <th></th>
      )}
    </tr>
  );
};

export default Control;
