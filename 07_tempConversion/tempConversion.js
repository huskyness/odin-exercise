const ftoc = function(temperature) {
  var multiplier = Math.pow(10,1||0);
  return Math.round(((temperature-32)*.5556)*multiplier)/multiplier;
};

const ctof = function(temperature) {
  var multiplier = Math.pow(10,1||0);
  return Math.round(((temperature*1.8)+32)*multiplier)/multiplier;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
