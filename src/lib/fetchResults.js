export async function getResults(data) {
  const res = await fetch('https://moon.neon.zone/api/schedules?token=nJDknmuPRbUEXZ5B', {
    method: 'POST',
    body: data,
  })

  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json();
}
