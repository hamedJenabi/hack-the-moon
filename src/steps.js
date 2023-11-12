export async function getData() {
  // TODO: check why
  const res = await fetch('https://moon.neon.zone/api/interests?token=nJDknmuPRbUEXZ5B', { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch data')

  const { data: interests } = await res.json();

  const steps = {
    'address': {
      question: "Where would you like to go?",
    },
    'datePicker': {
      question: "When?",
    },
    'interests': {
      question: "What's your interest?",
      values: interests,
    },
  }
  return steps;
}