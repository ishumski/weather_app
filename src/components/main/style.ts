import styled from "styled-components";
import Badge from "../../common/badge";

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
  margin-bottom: 63px;
`

export const CelsiusBadget: any = styled(Badge)`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: #e7e7b;
`

export const FahrenheitBadget: any = styled(Badge)`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: #585976;
`

export const WindStatusBadge = styled.img`
width: 29.50px;
height: 29.50px;
border-radius: 50px;
background: rgba(255, 255, 255, 0.3);
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

export const BarValue = styled.div`
display: flex;
width: 100%;
max-width: 230px;
justify-content: space-between;
font-weight: 600;
fonst-size: 12px;
color: #A09FB1;
`

export const HumidityBar = styled.input`
  width: 229px;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  overflow: hidden;
  border-radius: 80px;

  &::-webkit-slider-runnable-track {
    height: 8px;
    background-color:#E7E7EB;
    border-radius: 80px;
  }

  &::-webkit-slider-thumb {
    width:0.1px;
    -webkit-appearance: none;
    margin-top: -4px;
    background: #E7E7EB;
    box-shadow: -200px  0 0 200px  #FFEC65;
  }
`

export const WeatherNameTitle = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #e7e7eb;
`