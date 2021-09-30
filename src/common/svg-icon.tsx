interface SVGElement {
  width: string
  height: string
  viewBox: string
  fill: string
  d: string
}

const SVGIcon = ({
  width,
  height,
  viewBox,
  fill,
  d
}: SVGElement): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={fill} d={d}></path>
    </svg>
  )
}

export default SVGIcon
