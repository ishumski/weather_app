import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { getForecast } from '../../api'
import { getParameterByCoords } from '../../utils'
import {
  ConsolidatedWeather,
  ForecastData,
  ForecastInitialState
} from '../../types/interfaces'
import Button from '../../common/button'
import Badge from '../../common/badge'
import ShowCurrentDate from '../show-current-date/ShowCurrentDate'
import CloudIcon from '../../assets/images/cloudy.png'
import GeopositionIcon from '../../assets/images/geoposition.svg'
import LocationIcon from '../../assets/images/location.svg'
import Dot from '../../assets/images/dot.svg'
import { colors } from '../../assets/styles/colors'
import {
  SidebarContaner,
  Header,
  Body,
  SmallCloud,
  MediumCloudRight,
  MediumCloudLeft,
  LargeCloud,
  Temperature,
  CelsiusIcon,
  WeatherStateName,
  Footer,
  CurrentDate,
  DotIcon,
  Location,
  LocationTitle,
  TempValue,
  WeatherIcon
} from './style'
import SidebarSearch from '../sidebar-search/SidebarSearch'

const Sidebar: React.FC = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const dispatch = useDispatch()

  const getCurrentGeoposition = () => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords

        const fixedLatitude: number = parseFloat(latitude.toFixed(2))
        const fixedLongitude: number = parseFloat(longitude.toFixed(2))

        dispatch(
          getForecast(getParameterByCoords(fixedLatitude, fixedLongitude))
        )
      }
    )
  }

  useEffect((): void => {
    getCurrentGeoposition()
  }, [])

  const { forecastData }: ForecastInitialState = useSelector(
    (state: RootState) => state.forecastData
  )

  const { title, consolidated_weather }: ForecastData = forecastData
  const {
    weather_state_name,
    weather_state_abbr,
    the_temp
  }: ConsolidatedWeather = consolidated_weather[0]

  const fixedTemp: number = parseFloat(the_temp.toFixed(1))

  const handleOpenModal = () => setIsModalVisible(true)
  const handleCloseModal = () => setIsModalVisible(false)

  return (
    <SidebarContaner>
      <Header>
        <Button buttonLabel="Search for places" onClick={handleOpenModal} />
        <Badge background={colors.whiteOpacity} onClick={getCurrentGeoposition}>
          <img src={GeopositionIcon} alt="geoposition-icon" />
        </Badge>
      </Header>
      <Body>
        <SmallCloud src={CloudIcon} alt="small-cloud-icon" />
        <MediumCloudRight src={CloudIcon} alt="medium-cloud-icon" />
        <MediumCloudLeft src={CloudIcon} alt="medium-cloud-icon" />
        <LargeCloud src={CloudIcon} alt="large-cloud-icon" />
        <WeatherIcon
          src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
          alt="weather-icon"
        />
        <Temperature>
          <TempValue> {fixedTemp}</TempValue>
          <CelsiusIcon>°C</CelsiusIcon>
        </Temperature>
        <WeatherStateName>{weather_state_name}</WeatherStateName>
      </Body>
      <Footer>
        <CurrentDate>
          <p>Today</p>
          <DotIcon src={Dot} alt="dot-icon" />
          <ShowCurrentDate />
        </CurrentDate>
        <Location>
          <img src={LocationIcon} alt="location-icon" />
          <LocationTitle>{title}</LocationTitle>
        </Location>
      </Footer>
      {isModalVisible && <SidebarSearch handleCloseModal={handleCloseModal} />}
    </SidebarContaner>
  )
}

export default Sidebar
