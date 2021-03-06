import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { temperatureUnit } from '../../types/enum'
import {
  ConsolidatedWeather,
  ForecastData,
  ForecastInitialState
} from '../../types/interfaces'
import ForecastSingleItem from '../../components/forecast-single-item/ForecastSingleItem'
import HumidityBar from '../../components/humidity-bar/HumidityBar'
import ForecastInfo from '../../components/forecast-info/ForecastInfo'
import Badge from '../../common/badge'
import CelsiusIcon from '../../common/icons/celsius'
import FahrenheitIcon from '../../common/icons/fahrenheit'
import WindStatusIcon from '../../assets/images/navigation.svg'
import { changeCelsiusToFahrenheit } from '../../utils/utils'
import { colors } from '../../assets/styles/colors'
import {
  ConsolidatedWeatherInfo,
  DetailedForecast,
  Forecast,
  Header,
  MainContainer,
  TempContainer,
  TempBadgets,
  Hightlights,
  WindStatusBadge,
  WindDirection,
  CreatedBy,
  WindDirectionCompas,
  Wrapper
} from './style'

const Main: React.FC = (): JSX.Element => {
  const { forecastData }: ForecastInitialState = useSelector(
    (state: RootState) => state.forecastData
  )
  const { consolidated_weather }: ForecastData = forecastData

  const {
    wind_speed,
    wind_direction_compass,
    wind_direction,
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
                    ? `${colors.primaryLightgrey}`
                    : `${colors.secondaryBlueGrey}`
                }
                onClick={handleClickToC}
              >
                <CelsiusIcon
                  width="42px"
                  height="42px"
                  viewBox="0 0 32 32"
                  fill={
                    selectedTemperatureUnit === temperatureUnit.CELSIUS
                      ? `${colors.tertiaryDarkBlue}`
                      : `${colors.primaryLightgrey}`
                  }
                />
              </Badge>

              <Badge
                onClick={handleClickToF}
                background={
                  selectedTemperatureUnit === temperatureUnit.CELSIUS
                    ? `${colors.secondaryBlueGrey}`
                    : `${colors.primaryLightgrey}`
                }
              >
                <FahrenheitIcon
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  fill={
                    selectedTemperatureUnit !== temperatureUnit.CELSIUS
                      ? `${colors.tertiaryDarkBlue}`
                      : `${colors.primaryLightgrey}`
                  }
                />
              </Badge>
            </TempBadgets>
          </TempContainer>
          <ConsolidatedWeatherInfo>
            {consolidated_weather
              .slice(1)
              .map((elem: ConsolidatedWeather, idx: number): JSX.Element => {
                const {
                  weather_state_abbr,
                  applicable_date,
                  id,
                  max_temp,
                  min_temp
                }: ConsolidatedWeather = elem

                const fixedMaxTemp: number = parseFloat(max_temp.toFixed(1))
                const fixedMinTemp: number = parseFloat(min_temp.toFixed(1))

                const newDate: Array<string> = new Date(applicable_date)
                  .toString()
                  .slice(0, 10)
                  .split(' ')

                const [weekday, month, day]: Array<string> = newDate
                const formattedDay: string = day[0] === '0' ? day.slice(1) : day
                const dateString: string = `${weekday}, ${formattedDay} ${month}`

                return (
                  <ForecastSingleItem
                    width="120px"
                    height="177px"
                    key={id}
                    applicable_date={idx === 0 ? 'Tomorrow' : dateString}
                    id={id}
                    weather_state_abbr={`https://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`}
                    max_temp={
                      selectedTemperatureUnit === temperatureUnit.CELSIUS
                        ? `${fixedMaxTemp} ??C`
                        : `${changeCelsiusToFahrenheit(fixedMaxTemp)} ??F`
                    }
                    min_temp={
                      selectedTemperatureUnit === temperatureUnit.CELSIUS
                        ? `${fixedMinTemp} ??C`
                        : `${changeCelsiusToFahrenheit(fixedMinTemp)} ??F`
                    }
                  />
                )
              })}
          </ConsolidatedWeatherInfo>
        </Header>
        <Wrapper>
          <Hightlights>{`Today's Hightlights`}</Hightlights>
          <DetailedForecast>
            <ForecastInfo
              width="328px"
              height="204px"
              mb="48px"
              title="Wind Status"
              value={parseFloat(wind_speed.toFixed(1))}
              text="mph"
              additionalInfo={
                <WindDirection>
                  <WindStatusBadge
                    rotate={`${wind_direction}deg`}
                    src={WindStatusIcon}
                    alt="wind-icon"
                  />
                  <WindDirectionCompas>
                    {wind_direction_compass}
                  </WindDirectionCompas>
                </WindDirection>
              }
            />
            <ForecastInfo
              width="328px"
              height="204px"
              mb="48px"
              title="Humidity"
              value={humidity}
              text="%"
              additionalInfo={
                <Wrapper>
                  <HumidityBar width={humidity} />
                </Wrapper>
              }
            />
            <ForecastInfo
              width="328px"
              height="159px"
              title="Visibility"
              value={parseFloat(visibility.toFixed(1))}
              text="miles"
            />
            <ForecastInfo
              width="328px"
              height="159px"
              title={'Air Pressure'}
              value={air_pressure}
              text="mb"
            />
          </DetailedForecast>
        </Wrapper>
        <CreatedBy>created by ishumski - devChallenges.io</CreatedBy>
      </Forecast>
    </MainContainer>
  )
}

export default Main
