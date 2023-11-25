import http from "./httpServices"
export function getOTP(data) {
    return http.post("/user/get-otp",data)
}
export function checkOTP(data) {
  return http.post("/user/check-otp", data);
}