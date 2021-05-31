export default function formatDate(date) {
  let formated;
  try {
    formated = new Date(date).toLocaleDateString('pl-PL');
  } catch (e) {
    console.log(e);
    formated = 'invalid date';
  }

  return formated;
}
