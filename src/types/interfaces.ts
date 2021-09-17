import { forecastDataConstance } from "../store/forecast-data/types";
import { Action as ReduxAction } from "redux";

export interface ForecastInitialState {
    forecastData: ForecastData
}

export interface ForecastData {
    title: string,
    consolidated_weather: ConsolidatedWeather[]
}

export interface ConsolidatedWeather {
    weather_state_name: string,
    applicable_date: string,
    the_temp: number
}

export interface SetForecast extends ReduxAction { type: typeof forecastDataConstance.SET_CURRENT_LOCATION_FORECAST, payload: ForecastData; }