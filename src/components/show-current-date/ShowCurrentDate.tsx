const ShowCurrentDate: React.FC = (): JSX.Element => {
  const newDate: Array<string> = new Date().toString().slice(0, 10).split(' ')

  const [weekday, month, day]: Array<string> = newDate
  const formattedDay: string = day[0] === '0' ? day.slice(1) : day
  const dateString: string = `${weekday}, ${formattedDay} ${month}`

  return <p>{dateString}</p>
}

export default ShowCurrentDate
