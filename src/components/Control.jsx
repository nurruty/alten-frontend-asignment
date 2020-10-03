import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Control = (props) => {
  const { name = "-", dev = "-", devOutTot = "-" } = props;

  let iconColor;
  if (dev !== "-") {
    if (dev < 0.03) {
      iconColor = "green";
    } else if (dev < 0.06) {
      iconColor = "yellow";
    } else {
      iconColor = "red";
    }
  }

  return (
    <tr>
      <th>{name}</th>
      <th>{dev !== "-" ? dev.toFixed(3) : dev}</th>
      <th>{devOutTot !== "-" ? devOutTot.toFixed(3) : devOutTot}</th>
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
