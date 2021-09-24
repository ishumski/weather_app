import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/root-reducer'
import { temperatureUnit } from '../../types/enum'
import {
  ConsolidatedWeather,
  ForecastData,
  ForecastInitialState
} from '../../types/interfaces'
import ForecastSingleItem from '../forecast-single-item'
import ForecastInfo from '../../common/forecast-info'
import DetailedForecastInfo from '../../common/detailed-forecast-info'

import CelsiusIcon from '../../assets/images/celsiusIcon.svg'
import FahrenheitIcon from '../../assets/images/Fahrenheit.svg'
import WindStatusIcon from '../../assets/images/navigation.svg'

import {
  Body,
  CelsiusBadget,
  ConsolidatedWeatherInfo,
  DetailedForecast,
  FahrenheitBadget,
  Forecast,
  Header,
  MainContainer,
  TemperatureBadgets,
  WeatherNameTitle,
  WindStatusBadge,
  BarValue,
  HumidityBar
} from './style'
import { changeCelsiusToFahrenheit } from '../../utils'

const Main: React.FC = (): JSX.Element => {
  const { forecastData }: ForecastInitialState = useSelector(
    (state: RootState) => state.forecastData
  )
  const { consolidated_weather }: ForecastData = forecastData

  const {
    wind_speed,
    wind_direction_compass,
    weather_state_name,
    humidity,
    visibility,
    air_pressure
  }: ConsolidatedWeather = forecastData.consolidated_weather[0]

  const [isCelsius, setIsCelsius] = useState<string>(temperatureUnit.CELSIUS)

  const handleClickToF = (): void => {
    setIsCelsius(temperatureUnit.FAHRENHEIT)
  }

  const handleClickToC = (): void => {
    setIsCelsius(temperatureUnit.CELSIUS)
  }

  return (
    <MainContainer>
      <Forecast>
        <Header>
          <TemperatureBadgets>
            <CelsiusBadget
              icon={CelsiusIcon}
              alt={'celsius-icon'}
              onClick={handleClickToC}
            />
            <FahrenheitBadget
              icon={FahrenheitIcon}
              alt={'fahrenheit-icon'}
              onClick={handleClickToF}
            />
          </TemperatureBadgets>
          <ConsolidatedWeatherInfo>
            {consolidated_weather
              .slice(1)
              .map(
                ({
                  weather_state_abbr,
                  applicable_date,
                  id,
                  max_temp,
                  min_temp
                }: ConsolidatedWeather) => {
                  const fixedMaxTemp: number = parseFloat(max_temp.toFixed(1))
                  const fixedMinTemp: number = parseFloat(min_temp.toFixed(1))

                  return (
                    <ForecastSingleItem
                      key={id}
                      applicable_date={applicable_date}
                      id={id}
                      weather_state_abbr={`https://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`}
                      max_temp={
                        isCelsius === temperatureUnit.CELSIUS
                          ? `${fixedMaxTemp} C`
                          : `${changeCelsiusToFahrenheit(fixedMaxTemp)} F`
                      }
                      min_temp={
                        isCelsius === temperatureUnit.CELSIUS
                          ? `${fixedMinTemp} C`
                          : `${changeCelsiusToFahrenheit(fixedMinTemp)} F`
                      }
                    />
                  )
                }
              )}
          </ConsolidatedWeatherInfo>
        </Header>
        <Body>
          <WeatherNameTitle>{`Today's ${weather_state_name}`}</WeatherNameTitle>
          <DetailedForecast>
            <DetailedForecastInfo
              title="Wind Status"
              value={parseFloat(wind_speed.toFixed(1))}
              text="mph"
              additionalInfo={
                <>
                  <WindStatusBadge src={WindStatusIcon} alt="" />
                  {wind_direction_compass}
                </>
              }
            />
            <DetailedForecastInfo
              title="Humidity"
              value={humidity}
              text=" %"
              additionalInfo={
                <>
                  <BarValue>
                    <span>0</span>
                    <span>50</span>
                    <span>100%</span>
                  </BarValue>
                  <HumidityBar
                    type="range"
                    value={humidity}
                    onChange={e => e.target.value}
                  />
                </>
              }
            />
            <ForecastInfo
              title="Visibility"
              value={parseFloat(visibility.toFixed(1))}
              text="miles"
            />
            <ForecastInfo
              title={'Air Pressure'}
              value={air_pressure}
              text="mb"
            />
          </DetailedForecast>
        </Body>
      </Forecast>
    </MainContainer>
  )
}

export default Main
