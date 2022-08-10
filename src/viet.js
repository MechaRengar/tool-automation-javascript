const currentDateObj = new Date(currentDate);
currentDateObj.setDate(currentDateObj.getDate() - 1);
const year = currentDateObj.getFullYear();
let month = currentDateObj.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
let date = currentDateObj.getDate();
if (date < 10) {
date = "0" + date;
}