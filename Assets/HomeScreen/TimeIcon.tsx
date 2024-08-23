import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TimeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.625}
      d="M21.02 11c0 5.535-4.485 10.021-10.02 10.021-5.535 0-10.021-4.486-10.021-10.02C.979 5.466 5.465.98 10.999.98 16.536.98 21.022 5.466 21.022 11Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.625}
      d="m14.717 14.188-4.084-2.436V6.5"
    />
  </Svg>
)
export default TimeIcon
