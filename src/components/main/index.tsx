import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../../store/root-reducer'
import ForecastSingleItem from '../forecast-single-item'
import DetailedForecastInfo from '../../common/detailed-forecast-info'

import CelsiusIcon from '../../assets/images/celsius.svg'
import FahrenheitIcon from '../../assets/images/Fahrenheit.svg'
import ForecastInfo from '../../common/forecast-info'

const MainContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  background: #100e1d;
  z-index: 1;
`

const Forecast = styled.div`
  max-width: 704px;
  width: 100%;
  padding: 42px 123px 25px 154px;
`

const TemperatureBadgets = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 66px;
`
const CelsiusBadget: any = styled.img`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #e7e7eb;
  background: #6e707a;
`

const FahrenheitBadget: any = styled.img`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #e7e7eb;
  background: #6e707a;
`

const ConsolidatedWeather = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = styled.div`
  dispalay: flex;
  flex-direction: column;
  height: 283px;
  margin-bottom: 72px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailedForecast = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const WeatherNameTitle = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #e7e7eb;
`

const Main: React.FC = (): JSX.Element => {
  const { forecastData } = useSelector((state: RootState) => state.forecastData)
  console.log('forecastData', forecastData)
  const { consolidated_weather } = forecastData
  const {
    wind_speed,
    wind_direction_compass,
    weather_state_name,
    humidity,
    visibility,
    air_pressure,
    applicable_date
  } = forecastData.consolidated_weather[0]
  console.log('LLLL', forecastData.consolidated_weather[0])
  return (
    <MainContainer>
      <Forecast>
        <Header>
          <TemperatureBadgets>
            <CelsiusBadget src={CelsiusIcon} alt={'celsius-icon'} />
            <FahrenheitBadget src={FahrenheitIcon} alt={'fahrenheit-icon'} />
          </TemperatureBadgets>
          <ConsolidatedWeather>
            {consolidated_weather.slice(1).map((elem: any) => {
              const {
                max_temp,
                min_temp,
                weather_state_abbr,
                applicable_date
              } = elem
              const fixedMaxTemp: number = parseFloat(max_temp.toFixed(1))
              const fixedMinTemp: number = parseFloat(min_temp.toFixed(1))
              return (
                <ForecastSingleItem
                  key={elem.id}
                  applicable_date={applicable_date}
                  max_temp={fixedMaxTemp}
                  min_temp={fixedMinTemp}
                  id={elem.id}
                  weather_state_abbr={`https://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`}
                />
              )
            })}
          </ConsolidatedWeather>
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
