const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

export function formatPostDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}
