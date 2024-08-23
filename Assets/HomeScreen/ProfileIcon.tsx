import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const ProfileIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={9.544}
      cy={6.885}
      r={5.176}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.625}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.625}
      d="M1.333 19.26a2.4 2.4 0 0 1 .238-1.051c.496-.992 1.894-1.517 3.055-1.756a18.19 18.19 0 0 1 2.538-.356c1.58-.14 3.17-.14 4.75 0 .853.06 1.702.179 2.539.356 1.16.239 2.558.715 3.054 1.756a2.459 2.459 0 0 1 0 2.112c-.496 1.041-1.894 1.517-3.055 1.745-.835.186-1.684.309-2.538.367a27.966 27.966 0 0 1-3.867.06c-.298 0-.585 0-.883-.06a16.719 16.719 0 0 1-2.528-.367c-1.17-.228-2.559-.704-3.065-1.745a2.469 2.469 0 0 1-.238-1.061Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ProfileIcon
