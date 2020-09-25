export default function dateFilter(value, format = 'date') {
  const options = {}
  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'short'
    options.year = 'numeric'
  }
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(value))
};
