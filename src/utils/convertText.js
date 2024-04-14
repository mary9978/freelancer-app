export default function convertText(string,length) {
    if(string < length) return string;
    else {
        return string.slice(0,length)+ "...";
    }
}