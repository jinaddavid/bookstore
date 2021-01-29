import {isArray} from '../Validations';
import {CONSTANTS} from '../../constants';

export const TrimArray = (bigarray, size) => {
  if (!isArray(bigarray)) return;
  let arrayOfArrays = [];
  for (let i = 0; i < bigarray.length; i += size) {
    arrayOfArrays.push(bigarray.slice(i, i + size));
  }
  return arrayOfArrays;
};

export const FormatNumber = (num) => {
  if (!num) return;
  //ensure all commas are striped off
  num = String(num).replace(/,/g, '');
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const FormatPhoneNumber = (num) => {
  if (!num) return;
  let end = String(num).length;
  let start = end - 10;
  num = String(num).substring(start, end);
  return `0${num}`;
};
