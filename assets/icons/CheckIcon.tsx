import React from "react";
import Svg, { Path } from "react-native-svg";

export const CheckIcon = (props: any) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.16666 9.99998L8.33332 14.1666L16.6667 5.83331"
        stroke={props?.color || "#ADAFBB"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
