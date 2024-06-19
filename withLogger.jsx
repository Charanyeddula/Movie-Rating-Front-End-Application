import React from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(`Rendering ${WrappedComponent.name}`);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
