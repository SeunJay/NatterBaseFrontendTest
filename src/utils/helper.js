export const sentence = (string) =>{
  let arr = string.split("/");
  let day = arr[0];
  let month = getMonthName(arr[1]);

  let year = arr[2];

  return `${day} ${month} ${year}`;
}

function getMonthName(monthNumber) {
  let str = `${monthNumber}`;
  let monthObject = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  };
  return monthObject[str];
}

