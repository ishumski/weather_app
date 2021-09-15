import { forecastDataConstance } from "../store/forecast-data/types";

export interface IForecastInitialState {
    forecastData: IForecastData
}

export interface IForecastData {
    title: string,
    consolidated_weather: IConsolidatedWeather[]
}

export interface IConsolidatedWeather {
    weather_state_name: string,
    applicable_date: string,
    the_temp: number
}

export interface IGetForecast {
    type: typeof forecastDataConstance.GET_CURRENT_LOCATION_FORECAST
    payload: IForecastData

}