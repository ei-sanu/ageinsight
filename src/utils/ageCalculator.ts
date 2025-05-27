export function calculateAge(birthDate: Date): { years: number; months: number; days: number } {
  const today = new Date();
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  
  // If the current day is less than birth day, adjust days and months
  if (days < 0) {
    // Get the last day of the previous month
    const lastDayOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    
    days += lastDayOfLastMonth;
    months--;
  }
  
  // If the current month is less than birth month or 
  // if current month is the same but current day is less than birth day,
  // adjust years
  if (months < 0) {
    months += 12;
    years--;
  }
  
  return { years, months, days };
}