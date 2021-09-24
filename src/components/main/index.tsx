import { useSelector } from 'react-redux'

import { RootState } from '../../store/root-reducer'
import ForecastSingleItem from '../forecast-single-item'
import DetailedForecastInfo from '../../common/detailed-forecast-info'

import CelsiusIcon from '../../assets/images/celsiusIcon.svg'
import FahrenheitIcon from '../../assets/images/Fahrenheit.svg'
import ForecastInfo from '../../common/forecast-info'
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
  WeatherNameTitle
} from './style'
import { ConsolidatedWeather, TempValue } from '../../types/interfaces'
import { useState } from 'react'

const Main: React.FC = (): JSX.Element => {
  const { forecastData } = useSelector((state: RootState) => state.forecastData)
  const { consolidated_weather } = forecastData

  let {
    wind_speed,
    wind_direction_compass,
    weather_state_name,
    humidity,
    visibility,
    air_pressure,
    max_temp,
    min_temp
  } = forecastData.consolidated_weather[0]

  let [temp, setTemp] = useState<TempValue>({
    maxTemp: 0,
    minTemp: 0
  })

  const changeCelsiusToFahrenheit = (t: number) => {
    const changedToFahrenheit = parseFloat(((t * 9) / 5 + 32).toFixed(2))
    return changedToFahrenheit
  }

  const handleClickToF = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTemp({
      maxTemp: changeCelsiusToFahrenheit(max_temp),
      minTemp: changeCelsiusToFahrenheit(min_temp)
    })
  }

  const handleClickToC = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTemp({
      maxTemp: max_temp,
      minTemp: min_temp
    })
  }

  return (
    <MainContainer>
      <Forecast>
        <Header>
          <TemperatureBadgets>
            <CelsiusBadget
              src={CelsiusIcon}
              alt={'celsius-icon'}
              onClick={handleClickToC}
            >
              C
            </CelsiusBadget>
            <FahrenheitBadget
              src={FahrenheitIcon}
              alt={'fahrenheit-icon'}
              onClick={handleClickToF}
            >
              F
            </FahrenheitBadget>
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
                  // const fixedMaxTemp: number = parseFloat(
                  //   temp.maxTemp.toFixed(2)
                  // )
                  // const fixedMinTemp: number = parseFloat(
                  //   temp.minTemp.toFixed(2)
                  // )

                  const fixedMaxTemp: number = parseFloat(max_temp.toFixed(2))
                  const fixedMinTemp: number = parseFloat(min_temp.toFixed(2))

                  return (
                    <ForecastSingleItem
                      key={id}
                      applicable_date={applicable_date}
                      id={id}
                      weather_state_abbr={`https://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`}
                      max_temp={fixedMaxTemp}
                      min_temp={fixedMinTemp}
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
              value={wind_speed.toFixed(1)}
              text="mph"
              additionalInfo={wind_direction_compass}
            />
            <DetailedForecastInfo
              title="Humidity"
              value={humidity}
              text=" %"
              additionalInfo={'percentage scale'}
            />
            <ForecastInfo
              title="Visibility"
              value={visibility.toFixed(1)}
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
