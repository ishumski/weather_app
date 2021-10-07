import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getForecast } from '../../api'
import Badge from '../../common/badge'
import SearchHistorySingleItem from '../search-history-single-item'
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

interface SidebarSearchProps {
  handleCloseModal: () => void
}

const SidebarSearch = ({ handleCloseModal }: SidebarSearchProps) => {
  const [cityName, setCityName] = useState<string>('')
  const [cityHistory, setCityHistory] = useState<Array<string>>([])

  const dispatch = useDispatch()

  const handleCitySearch = () => {
    if (!cityName) {
      return
    } else {
      handleCloseModal()
      dispatch(getForecast(getParameterByCityName(cityName)))
      setCityHistory([...cityHistory, cityName])
      localStorage.setItem('data', JSON.stringify([...cityHistory, cityName]))
      setCityName('')
    }
  }

  const savedCityHistory = JSON.parse(localStorage['data'] || null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setCityName(value)
  }

  const handleForecastSearchByCurrentCity = (param: string) => {
    dispatch(getForecast(getParameterByCityName(param)))
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
      {savedCityHistory?.length &&
        savedCityHistory.map((elem: string, idx: number) => {
          return (
            <SearchHistorySingleItem
              key={idx}
              city={elem}
              onClick={() => handleForecastSearchByCurrentCity(elem)}
            />
          )
        })}
    </SidebarSearchContainer>
  )
}

export default SidebarSearch
