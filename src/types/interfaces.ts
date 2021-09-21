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
    weather_state_abbr: string,
    applicable_date: string,
    the_temp: number
}

export interface SetForecastAction extends ReduxAction { type: typeof forecastDataConstance.SET_CURRENT_LOCATION_FORECAST, payload: ForecastData; }

export interface CurrentLocationData {
    distance: number,
    latt_long: string,
    location_type: string,
    title: string,
    woeid: number,
}