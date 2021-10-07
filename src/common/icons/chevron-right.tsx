import SVGIconTemplate from './svg-icon-template'

interface ChevronRightProps {
  width: string
  height: string
  fill?: string
}

const ChevronRight = ({ width, height, fill }: ChevronRightProps) => {
  return (
    <SVGIconTemplate
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
    />
  )
}

export default ChevronRight
