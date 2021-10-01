import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { getForecast } from '../../api'
import { getParameterByCoords } from '../../utils'
import {
  ConsolidatedWeather,
  ForecastData,
  ForecastInitialState
} from '../../types/interfaces'
import CelsiusIcon from '../../common/icons/celsius'
import Button from '../../common/button'
import Badge from '../../common/badge'
import ShowCurrentDate from '../show-current-date'
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
  WeatherStateName,
  Footer,
  CurrentDate,
  DotIcon,
  Location,
  LocationTitle,
  WeatherIcon
} from './style'

const Sidebar: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect((): void => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude }: GeolocationCoordinates = position.coords

        const fixedLatitude: number = parseFloat(latitude.toFixed(2))
        const fixedLongitude: number = parseFloat(longitude.toFixed(2))

        dispatch(
          getForecast(getParameterByCoords(fixedLatitude, fixedLongitude))
        )
      }
    )
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

  return (
    <SidebarContaner>
      <Header>
        <Button buttonLabel="Search for places" />
        <Badge background={colors.whiteOpacity}>
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
          {fixedTemp}
          <CelsiusIcon
            width="60px"
            height="102px"
            viewBox="5 -10 21 30"
            fill={colors.primaryLightgrey}
          />
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
    </SidebarContaner>
  )
}

export default Sidebar
