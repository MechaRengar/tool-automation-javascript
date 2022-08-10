let response = {
  quarter_after_next: {
    end : null,
  }
}
const d = new Date();
let lang = 'en';
  let year = d.toLocaleString(lang, {year:'numeric'})
  let  month = d.toLocaleString(lang, {month:'numeric'})
  let day = d.toLocaleString(lang, {day:'numeric'})
  console.log('ngay hom nay',`${year}/${month}/${day}`);
  // xử lý nếu ngày hôm nay vào ngày 01 của tháng bất kì
  // đã bao gồm cả tháng trước là tháng 2 có 28, 29 ngày
  if(day == 1) {
    const getYesterMonth = new Date(year, month - 1, 0);
    const lastDay = getYesterMonth.toLocaleString(lang, {day:'numeric'});
    month = month - 1;
    if(month == 0) {
      response.quarter_after_next.end = `${year-1}/12/31`
    } else {
      let currentMonth = month < 10 ? ('0' + month) : month;
      response.quarter_after_next.end =`${year}/${currentMonth}/${lastDay}`;
    }
  } else {
    const currentMonth = month < 10 ? ('0' + month) : month;
   const yesterday = day - 1 < 10 ? ('0' + `${day - 1}`) : day - 1;
   response.quarter_after_next.end =`${year}/${currentMonth}/${yesterday}`
  } 
  console.log('ngày đúng là :',response.quarter_after_next.end);
