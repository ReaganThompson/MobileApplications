//Moon.js
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Moon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} {...props}>
    <Path
      fill="#FFF"
      d="M22.157 17.366a.802.802 0 0 0-.891-.248 8.463 8.463 0 0 1-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 0 1 3.856-7.274.801.801 0 0 0-.334-1.454A7.766 7.766 0 0 0 12 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 0 0-.061-.925z"
    />
  </Svg>
)
export default Moon;
