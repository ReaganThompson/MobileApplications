import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({fill, ...rest}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...rest}>
    <Path
      fill={fill || "#5357B6"}
      d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333a1.75 1.75 0 0 0 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
    />
  </Svg>
)
export default SvgComponent
