import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getForecast } from '../../api'
import SearchHistorySingleItem from '../../components/search-history-single-item/SearchHistorySingleItem'
import Badge from '../badge'
import CloseIcon from '../../assets/images/close.svg'
import { getParameterByCityName } from '../../utils/utils'
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

  useEffect((): void => {
    const getCityData: string | null = localStorage.getItem('cityData')
    const historyCityData: Array<string> =
      getCityData === null ? [] : JSON.parse(getCityData)
    setCityHistory(historyCityData)
  }, [])

  const handleCitySearch = () => {
    if (!cityName) {
      return
    } else {
      handleCloseModal()
      dispatch(getForecast(getParameterByCityName(cityName)))
      setCityHistory([cityName, ...cityHistory].splice(0, 9))
      localStorage.setItem(
        'cityData',
        JSON.stringify([cityName, ...cityHistory].splice(0, 9))
      )
      setCityName('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setCityName(value)
  }

  const handleForecastSearchByCurrentCity = (param: string) => {
    handleCloseModal()
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
      {cityHistory?.length
        ? cityHistory.map((elem: string, idx: number) => {
            return (
              <SearchHistorySingleItem
                key={idx}
                city={elem}
                onClick={() => handleForecastSearchByCurrentCity(elem)}
              />
            )
          })
        : null}
    </SidebarSearchContainer>
  )
}

export default SidebarSearch
