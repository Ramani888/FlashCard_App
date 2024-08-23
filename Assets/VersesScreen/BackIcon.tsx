import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.25 7.274h15M7.3 13.299 1.25 7.275 7.3 1.25"
    />
  </Svg>
)
export default BackIcon
