export const validationPhone = (phoneNum) => {
  if (/^[0]?[9][0-9]{9}$/.test(phoneNum) && phoneNum.length === 11) {
    return true;
  } else return false;
};
export const TypeNumber = (e) => {
  if (!e) {
    e = window.event;
  }

  var code = e.keyCode || e.which;

  if (!e.ctrlKey) {
    if (code > 31 && (code < 48 || code > 57) && (code < 96 || code > 105)) {
      e.preventDefault();
      return false;
    }
  }
  return true;
};
export const TypepersianNumber = (e) => {
  var persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g
    ],
    fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };
  return fixNumbers(e);
};

export const convertDate = (oldDate) => {
  let date = oldDate;
  let mydate = date.split("T")[0];
  let timestamp = new Date(mydate).getTime();
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let newDate = new Date(timestamp).toLocaleDateString("fa-IR", options);

  return newDate;
};
export const convertISOS = (e) => {
  var date = new Date(e * 1000);
  return date.toISOString();
};

export function toPersianNum(num, dontTrim) {
  var i = 0,
    dontTrim = dontTrim || false,
    num = dontTrim ? num.toString() : num.toString().trim(),
    len = num.length,
    res = "",
    pos,
    persianNumbers =
      typeof persianNumber == "undefined"
        ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
        : persianNumbers;

  for (; i < len; i++)
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);

  return res;
}
export const validationName = (str) => {
  const newStr = str.trim();
  return newStr === "" ? true : false;
};
