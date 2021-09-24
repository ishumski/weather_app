import styled from "styled-components";

export const MainContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  background: #100e1d;
  z-index: 1;
`

export const Forecast = styled.div`
  max-width: 704px;
  width: 100%;
  min-width: 670px;
  padding: 42px 123px 25px 154px;
`

export const TemperatureBadgets = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 66px;
`

export const CelsiusBadget: any = styled.button`
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

export const FahrenheitBadget: any = styled.button`
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

export const WeatherNameTitle = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #e7e7eb;
`