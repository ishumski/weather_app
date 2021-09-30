import styled from 'styled-components'
import {
  background,
  fontSize,
  fontWeight,
  primary
} from '../../assets/styles/styles'

export const MainContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  background: ${background.color_1};
  z-index: 1;
`

export const Forecast = styled.div`
  max-width: 704px;
  width: 100%;
  min-width: 670px;
  padding: 42px 123px 25px 154px;
`

export const TempContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 63px;
`

export const TempBadgets = styled.div`
  max-width: 92px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const WindDirection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WindStatusBadge = styled.img`
  width: 18px;
  height: 18px;
  padding: 5px;
  margin: 5.71px;
  border-radius: 50px;
  background: ${background.color_3};
  transform: rotate(-150deg);
`

export const ConsolidatedWeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header = styled.div`
  dispalay: flex;
  flex-direction: column;
  height: 283px;
  margin-bottom: 72px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailedForecast = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const AditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const WeatherNameTitle = styled.h1`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.size_4};
  color: ${primary.color_1};
`
