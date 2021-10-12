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

const SidebarSearch = ({ handleCloseModal }: any) => {
  const [cityName, setCityName] = useState<string>('')

  const dispatch = useDispatch()

  const handleCitySearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!cityName) {
      return
    } else {
      dispatch(getForecast(getParameterByCityName(cityName)))
      setCityName('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
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
