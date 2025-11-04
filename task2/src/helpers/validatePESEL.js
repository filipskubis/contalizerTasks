export default function validatePesel(pesel) {
  if (!/^\d{11}$/.test(pesel)) return false;

  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

  const controlSum = weights.reduce(
    (suma, waga, i) => suma + waga * parseInt(pesel[i]),
    0
  );

  const controlNumber = (10 - (controlSum % 10)) % 10;

  if (controlNumber !== parseInt(pesel[10])) return false;

  let year = parseInt(pesel.substring(0, 2), 10);
  let month = parseInt(pesel.substring(2, 4), 10);
  let day = parseInt(pesel.substring(4, 6), 10);

  let century = 1900;
  if (month > 80 && month < 93) {
    century = 1800;
    month -= 80;
  } else if (month > 0 && month < 13) {
    century = 1900;
  } else if (month > 20 && month < 33) {
    century = 2000;
    month -= 20;
  } else if (month > 40 && month < 53) {
    century = 2100;
    month -= 40;
  } else if (month > 60 && month < 73) {
    century = 2200;
    month -= 60;
  } else return false;

  year += century;

  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() + 1 !== month ||
    date.getDate() !== day
  ) {
    return false;
  }

  return true;
}
