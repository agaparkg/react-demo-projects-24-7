import React from "react";

const ChildComp = ({ name }) => {
  console.log("Child Component Rendering");
  return <div>Child Component - Name is: {name}</div>;
};

// export const MemoizedChildComp = React.memo(ChildComp);

export default React.memo(ChildComp);
