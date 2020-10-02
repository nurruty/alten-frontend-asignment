import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Control = (props) => {
  const { name = "-", dev = "-", devOutTot = "-" } = props;

  let iconColor;
  if (dev !== "-") {
    if (dev < 0.3) {
      iconColor = "#5cb85c";
    } else if (dev < 0.6) {
      iconColor = "f0ad4e";
    } else {
      iconColor = "d9534f";
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
