import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SearchIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12.267}
      cy={11.767}
      r={8.989}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.518 18.485 22.042 22"
    />
  </Svg>
)
export default SearchIcon
