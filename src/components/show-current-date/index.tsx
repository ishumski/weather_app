const ShowCurrentDate: React.FC = (): JSX.Element => {
  const newDate = new Date()

  let formatter = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  })
  return <p>{formatter.format(newDate)}</p>
}

export default ShowCurrentDate
