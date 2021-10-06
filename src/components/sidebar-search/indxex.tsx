import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Badge from '../../common/badge'
import { getForecast } from '../../api'
import { getParameterByCityName } from '../../utils'
import CloseIcon from '../../assets/images/close.svg'
import { colors } from '../../assets/styles/colors'
import {
  Header,
  SearchLocation,
  SearchLocationButton,
  SearchLocationInput,
  SidebarSearchContainer
} from './style'

interface Props {
  handleCloseModal: () => void
}

const SidebarSearch = ({ handleCloseModal }: Props) => {
  const [cityName, setCityName] = useState<string>('')

  const dispatch = useDispatch()

  const handleCitySearch = () => {
    if (!cityName) {
      return
    } else {
      dispatch(getForecast(getParameterByCityName(cityName)))
      setCityName('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setCityName(value)
  }

  return (
    <SidebarSearchContainer>
      <Header>
        <Badge background={colors.transparent} onClick={handleCloseModal}>
          <img src={CloseIcon} alt="close-icon" />
        </Badge>
      </Header>
      <SearchLocation>
        <SearchLocationInput
          name="cityName"
          placeholder="search location"
          value={cityName}
          onChange={handleChange}
        />
        <SearchLocationButton buttonLabel="Search" onClick={handleCitySearch} />
      </SearchLocation>
    </SidebarSearchContainer>
  )
}

export default SidebarSearch
