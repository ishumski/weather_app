import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store/root-reducer'
import { getForecast } from '../../store/action'
import { getCurrentLocationForecast } from '../../api'

import ShowerIcon from '../../assets/images/shower.png'
import CloudIcon from '../../assets/images/cloudy.png'

import {
  SidebarContaner,
  Header,
  SearchButton,
  GeolocationButton,
  Body,
  SmallCloud,
  MediumCloudRight,
  MediumCloudLeft,
  LargeCloud,
  WeatherIcon,
  Temperature,
  TemperatureUnit,
  WeatherStateName,
  Footer,
  CurrentDate,
  Location,
  VectorIcon,
  CurrentLocation
} from './style'

const Sidebar: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect((): any => {
    currentLocationForecast()
  }, [])

  const { forecastData } = useSelector((state: RootState) => state.forecastData)
  const { title, consolidated_weather } = forecastData
  const { weather_state_name, applicable_date, the_temp } =
    consolidated_weather[0]

  const fixedTemp: number = parseFloat(the_temp.toFixed(1))

  const currentLocationForecast = (): any => {
    getCurrentLocationForecast().then((data: any) => {
      dispatch(getForecast(data))
    })
  }

  return (
    <SidebarContaner>
      <Header>
        <SearchButton>Search for place</SearchButton>
        <GeolocationButton>O</GeolocationButton>
      </Header>
      <Body>
        <SmallCloud
          width="147px"
          height="109px"
          src={CloudIcon}
          alt="small-cloud-icon"
        />
        <MediumCloudRight src={CloudIcon} alt="medium-cloud-icon" />
        <MediumCloudLeft src={CloudIcon} alt="medium-cloud-icon" />
        <LargeCloud
          width="248px"
          height="183px"
          src={CloudIcon}
          alt="large-cloud-icon"
        />
        <WeatherIcon src={ShowerIcon} alt="weather-icon" />
        <Temperature>
          {fixedTemp}
          <TemperatureUnit>С</TemperatureUnit>
        </Temperature>
        <WeatherStateName>{weather_state_name}</WeatherStateName>
      </Body>
      <Footer>
        <CurrentDate>
          <p>Today</p>
          <span>.</span>
          <p>{applicable_date}</p>
        </CurrentDate>
        <Location>
          <VectorIcon src="" alt="" />
          <CurrentLocation>{title}</CurrentLocation>
        </Location>
      </Footer>
    </SidebarContaner>
  )
}

export default Sidebar
