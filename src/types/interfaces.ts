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
    air_pressure: number,
    applicable_date: string,
    created: string,
    humidity: number,
    id: number,
    max_temp: number,
    min_temp: number,
    predictability: number,
    the_temp: number,
    visibility: number,
    weather_state_abbr: "hr",
    weather_state_name: "",
    wind_direction: number,
    wind_direction_compass: "",
    wind_speed: number
}

export interface SetForecastAction extends ReduxAction { type: typeof forecastDataConstance.SET_CURRENT_LOCATION_FORECAST, payload: ForecastData; }

export interface CurrentLocationData {
    distance: number,
    latt_long: string,
    location_type: string,
    title: string,
    woeid: number,
}

export interface TempValue {
    maxTemp: number,
    minTemp: number
}