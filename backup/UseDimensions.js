import React from "react";
import { useDimensions } from "react-native-responsive-ui";

export default ({ children }) => {
  const { width, height } = useDimensions();
  console.log(`New window dimensions: ${width}x${height}`);
  return children;
};
