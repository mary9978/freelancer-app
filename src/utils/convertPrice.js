export default function convertToPersianNumber(price) {
    let numberWithComma = numberWithCommas(price);
    return persianNumber(numberWithComma);
}
function persianNumber(number) {
    const farsiDigit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   return number.toString().replace(/\d/g, x => farsiDigit[x]);
}
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}