import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Control = (props) => {
  const { name, dev, devOutTot, iconColor } = props;

  return (
    <tr>
      <th>{name}</th>
      <th>{dev}</th>
      <th>{devOutTot}</th>
      <th>
        <FontAwesomeIcon icon={faCheckCircle} color={iconColor} />
      </th>
    </tr>
  );
};

export default Control;
