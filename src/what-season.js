module.exports = function getSeason(date) {
  if(!arguments.length)
    return 'Unable to determine the time of year!';
  if(!(Object.prototype.toString.call(date) === '[object Date]'))
    throw Error("Error");
  let month= date.getMonth() + 1;
  if(month===1 || month===2 || month===12)
    return "winter";
  if(month===3 || month===4 || month===5)
    return "spring";
  if(month===6 || month===7 || month===8)
    return "summer";
  else
    return "autumn";
};
