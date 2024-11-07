import React from "react";
import { FaFile, FaFolder } from "react-icons/fa";

{
  /* <FaFolder style={{ color: "red" }} />; */
}
{
  /* <FaFile />; */
}

const Helper = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        if (item.type === "file") {
          return (
            <li>
              <FaFile /> {item.name}
            </li>
          );
        }

        return (
          <li>
            <FaFolder style={{ color: "red" }} /> {item.name}
            <Helper data={item.children} />
          </li>
        );
      })}
    </ul>
  );
};

export default Helper;
