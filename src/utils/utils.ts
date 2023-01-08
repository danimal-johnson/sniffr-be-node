// Find the elapsed number of years between two dates.
// Only full years are counted.
// Useful for converting a date from a database as an age.
export const dateToAge = (date: Date): number => {
  const today = new Date();
  const birthDate = new Date(date);
  let years = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    years--;
  }
  return years;
}

// Subtract the number of years from the current date.
// Useful for storing an age in a database as a date.
// The date is stored as if the person's birthday was today.
export const ageToDate = (years: number): Date => {
  const today = new Date();
  const birthDate = new Date(today.getFullYear() - years, today.getMonth(), today.getDate());
  return birthDate;
}
