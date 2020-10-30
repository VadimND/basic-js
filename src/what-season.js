const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dateString) {

  if (dateString === undefined){
    return "Unable to determine the time of year!";
  }
   
  if (Object.prototype.toString.call(dateString) != '[object Date]') {
    throw new Error('Unable to determine the time of year!');
  }
  let season;
  dateString = dateString.getMonth();      
  if (dateString == 0 || dateString == 11 || dateString == 1) {
    season = "winter";
  } else if (dateString >= 2 && dateString < 5) {
    season = "spring";
  } else if (dateString >= 5 && dateString < 8) {
    season = "summer";
  } else if (dateString >= 8 && dateString < 11) {
    season = "autumn";
  }

  return season;
};