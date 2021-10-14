import ChevronRight from '../../common/icons/chevron-right'
import { CityName, SingleItem } from './style'

interface SearchHistorySingleItemProps {
  city: string
  onClick: React.MouseEventHandler
}

const SearchHistorySingleItem = ({
  city,
  onClick
}: SearchHistorySingleItemProps) => {
  const formattedParam: string =
    city[0].toUpperCase() + city.slice(1).toLowerCase()

  return (
    <SingleItem onClick={onClick}>
      <CityName>{formattedParam}</CityName>
      <ChevronRight width="18" height="18" />
    </SingleItem>
  )
}

export default SearchHistorySingleItem
