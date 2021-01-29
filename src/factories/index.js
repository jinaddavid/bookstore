export const FirstDayOfMonth = () => {
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  //add an extra zero in front of month if it's single digits
  if (month < 10) month = `0${month}`;
  return `${year}-${month}-01`;
};


export const Truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

export const numericFormat = (date, time) => {
  if (!date) return;
  let newDate = new Date(date);
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  //add an extra zero in front of day and month if it's single digits
  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;
  if (time) return new Date(`${year}-${month}-${day}T23:59:59Z`);
  return `${year}-${month}-${day}`;
};

export const alphabeticFormat = (date) => {
  if (!date) return;
  let zeroTime = false;
  try {
    let split = date.split("T");
    if (split[1] === "00:00:00") zeroTime = true;
  } catch (error) { }

  date = new Date(date);
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();

  if (day < 10) day = `0${day}`;
  if (hours < 10) hours = `0${hours}`;
  if (mins < 10) mins = `0${mins}`;
  if (secs < 10) secs = `0${secs}`;

  //CHECK IF DATE HAS TIME
  if (zeroTime)
    return `${day} ${monthNames[monthIndex]}. ${year} ${hours}:${mins}:${secs}`;
  if (hours === "00" && mins === "00" && secs === "00")
    return `${day} ${monthNames[monthIndex]}. ${year}`;
  return `${day} ${monthNames[monthIndex]}. ${year} ${hours}:${mins}:${secs}`;
};

export const FormatDropdown = (obj) => {
  let res = [];
  for (let key in obj) {
    res.push({
      id: key,
      value: obj[key],
    });
  }
  return res;
};

export const FormatReasonsDropdown = (obj) => {
  let res = [];
  for (let key in obj) {
    res.push({
      id: obj[key]["id"],
      value: obj[key]["reason"],
    });
  }
  return res;
};

export const FormatSelectDropdown = (obj) => {
  let res = [];
  for (let key in obj) {
    res.push({
      value: obj[key]["id"],
      label:
        obj[key]["name"] || `${obj[key]["firstName"]} ${obj[key]["lastName"]}`,
    });
  }
  return res;
};

export const FormatRoleSelectDropdown = (obj) => {
  let res = [];
  for (let key in obj) {
    res.push({
      value: obj[key]["roleId"],
      label: obj[key]["roleName"],
    });
  }
  return res;
};

export const GetRandomString = (length) => {
  if (!length) return "";
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `${result}$aB9`;
};
export const _GetindexOfValueInObject = (KEY, myArray, watcher) => {
  let pos = myArray.map(function (e) { return e[watcher]; }).indexOf(KEY);
  return pos;

};

export const formatForChannel = (payload) => {
  if (payload) {
    let collectDefaultvalue = String(payload).toUpperCase();
    let returnedValue = "";
    if (collectDefaultvalue.includes("ALL")) {
      returnedValue = "web and mobile";
      return returnedValue;
    }
    else if (collectDefaultvalue.includes("NONE")) {
      returnedValue = "none of web or mobile"
      return returnedValue;
    }
    else if (collectDefaultvalue.includes("WEB")) {
      returnedValue = "web";
      return returnedValue;
    }
    else if (collectDefaultvalue.includes("MOBILE")) {
      returnedValue = "mobile";
      return returnedValue;
    }
    else {
      return `-`;
    }
  }
}

