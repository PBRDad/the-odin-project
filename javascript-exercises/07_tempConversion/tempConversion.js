const ctof = function(temp) {
  let fTemp = temp * (9/5) + 32;
  let rfTemp = Math.round(fTemp * 10) / 10;
  return rfTemp;
};

const ftoc = function(temp) {
  let cTemp = (temp - 32) * (5/9);
  let rcTemp = Math.round(cTemp * 10) / 10;
  return rcTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
