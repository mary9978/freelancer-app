export default function convertToPersianNumber(price) {
    let numberWithComma = numberWithCommas(price);
    return persianNumber(numberWithComma);
}
function persianNumber(number) {
    const farsiDigit = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
   return number.toString().replace(/\d/g, x => farsiDigit[x]);
}
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}