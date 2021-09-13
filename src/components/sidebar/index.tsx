import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrentLocationForecast } from '../../store/action'
import { RootState } from '../../store/root-reducer'

import s from './index.module.css'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { forecastData } = useSelector((state: RootState) => state.forecastData)

  const { title, consolidated_weather } = forecastData
  const { weather_state_name, applicable_date, the_temp } =
    consolidated_weather[0]

  useEffect(() => {
    console.log('testFirstRender')
    currentLocationForecast()
  }, [])

  const currentLocationForecast = () => dispatch(getCurrentLocationForecast())
  return (
    <div className={s.sidebar}>
      <div className={s.header}>
        <button className={s.searchButton}>Search for place</button>
        <button className={s.geolocationButton}>O</button>
      </div>
      <div className={s.body}>
        <img
          className={s.weatherIcon}
          src="https://s3-alpha-sig.figma.com/img/f823/173c/6d67db3d534c1d812e09aed0501cdb6e?Expires=1632700800&Signature=N-5-EDzGVNnweLD9F1swh0n2ZBNLF7ZvDMCyX3BTCNp~uZ4MD4l7v8RallOA0tiWjoPdAmBvJRdMBcnylybAFCEkDnp9IlHPX38DHYD0VuoHmjwh98q4~FMPhfxHw1Z5GNUZXtMIq6fg3NalgOWNVSL8wKcLlGxtjJS637rWiKIvXbYgP-FotVg4aT~3JW0Z5WvouPwDV4WBX2vG1Jw1hLyRkNMrokcNGiVxVg6kM12dTaG8YwEvvKDd0xs5Vofpdp2fSNR~KoZ8-brdDEv26fKCrc~Ro8UEFhRLPLSAfpYEbjgXTVqtfyTMV7b7oPEOaKeWR93q40Ye64n7PNJOHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="weather-icon"
        />
        <h2 className={s.temperature}>{the_temp}С</h2>
        <h3 className={s.weather}>{weather_state_name}</h3>
      </div>
      <div className={s.footer}>
        <div className={s.currentDate}>
          <p>Today</p>
          <span>.</span>
          <p>{applicable_date}</p>
        </div>
        <div className={s.location}>
          <img className={s.vectorIcon} src="" alt="" />
          <p className={s.currentLocation}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
