//Refresh.js
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Refresh = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
    <Path
      fill="#FFF"
      d="M7.188 10.667a.208.208 0 0 1 .147.355l-2.344 2.206a5.826 5.826 0 0 0 9.578-2.488l2.387.746A8.322 8.322 0 0 1 3.17 14.94l-2.149 2.022a.208.208 0 0 1-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 0 1 .355.146v6.23h-6.498a.208.208 0 0 1-.147-.356L13 4.765A5.825 5.825 0 0 0 3.43 7.26l-2.386-.746a8.32 8.32 0 0 1 13.76-3.477z"
      opacity={0.5}
    />
  </Svg>
)
export default Refresh;
