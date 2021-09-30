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
import { changeCelsiusToFahrenheit } from '../../utils'
import HumidityBar from '../../common/humidity-bar'
import WindStatusIcon from '../../assets/images/navigation.svg'
import {
  Body,
  ConsolidatedWeatherInfo,
  DetailedForecast,
  Forecast,
  Header,
  MainContainer,
  TempContainer,
  TempBadgets,
  WeatherNameTitle,
  WindStatusBadge,
  AditionalInfo,
  WindDirection
} from './style'
import CelsiusIcon from '../../assets/images/celsius'
import FahrenheitIcon from '../../assets/images/fahrenheit'
import Badge from '../../common/badge'
import { background, primary } from '../../assets/styles/styles'

const Main: React.FC = (): JSX.Element => {
  const { forecastData }: ForecastInitialState = useSelector(
    (state: RootState) => state.forecastData
  )
  const { consolidated_weather }: ForecastData = forecastData

  const {
    wind_speed,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure
  }: ConsolidatedWeather = forecastData.consolidated_weather[0]

  const [selectedTemperatureUnit, setSelectedTemperatureUnit] =
    useState<string>(temperatureUnit.CELSIUS)

  const handleClickToF = (): void => {
    setSelectedTemperatureUnit(temperatureUnit.FAHRENHEIT)
  }

  const handleClickToC = (): void => {
    setSelectedTemperatureUnit(temperatureUnit.CELSIUS)
  }

  return (
    <MainContainer>
      <Forecast>
        <Header>
          <TempContainer>
            <TempBadgets>
              <Badge
                background={
                  selectedTemperatureUnit === temperatureUnit.CELSIUS
                    ? `${background.color_5}`
                    : `${background.color_7}`
                }
                onClick={handleClickToC}
              >
                <CelsiusIcon
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  fill={
                    selectedTemperatureUnit === temperatureUnit.CELSIUS
                      ? `${primary.color_4}`
                      : `${primary.color_1}`
                  }
                />
              </Badge>

              <Badge
                onClick={handleClickToF}
                background={
                  selectedTemperatureUnit === temperatureUnit.CELSIUS
                    ? `${background.color_7}`
                    : `${background.color_5}`
                }
              >
                <FahrenheitIcon
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  fill={
                    selectedTemperatureUnit !== temperatureUnit.CELSIUS
                      ? `${primary.color_4}`
                      : `${primary.color_1}`
                  }
                />
              </Badge>
            </TempBadgets>
          </TempContainer>
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
                        selectedTemperatureUnit === temperatureUnit.CELSIUS
                          ? `${fixedMaxTemp} °C`
                          : `${changeCelsiusToFahrenheit(fixedMaxTemp)} °F`
                      }
                      min_temp={
                        selectedTemperatureUnit === temperatureUnit.CELSIUS
                          ? `${fixedMinTemp} °C`
                          : `${changeCelsiusToFahrenheit(fixedMinTemp)} °F`
                      }
                    />
                  )
                }
              )}
          </ConsolidatedWeatherInfo>
        </Header>
        <Body>
          <WeatherNameTitle>{`Today's Hightlights`}</WeatherNameTitle>
          <DetailedForecast>
            <DetailedForecastInfo
              title="Wind Status"
              value={parseFloat(wind_speed.toFixed(1))}
              text="mph"
              additionalInfo={
                <WindDirection>
                  <WindStatusBadge src={WindStatusIcon} alt="wind-icon" />
                  {wind_direction_compass}
                </WindDirection>
              }
            />
            <DetailedForecastInfo
              title="Humidity"
              value={humidity}
              text="%"
              additionalInfo={
                <AditionalInfo>
                  <HumidityBar width={humidity} />
                </AditionalInfo>
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
