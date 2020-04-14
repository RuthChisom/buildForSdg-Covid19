let data;

const covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;
// var reportedCases;
let impact;
let severeImpact;
let timeToElapse;
// const data1 = covid19ImpactEstimator.data;
let ratio;


function calcDays(data1) {
  if (data1.periodType === 'days') timeToElapse = data1.timeToElapse;
  else if (data1.periodType === 'weeks') timeToElapse = data1.timeToElapse * 7;
  else if (data1.periodType === 'months') timeToElapse = data1.timeToElapse * 30;
  ratio = Math.floor(timeToElapse / 3);
  return ratio;
}

calcDays(data);

function calcImpact(data1) {
  impact.currentlyInfected = Math.floor(data1.reportedCases * 10);
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return impact;
}

function calcSevereImpact(data1) {
  severeImpact.currentlyInfected = Math.floor(data1.reportedCases * 50);
  severeImpact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return severeImpact;
}

calcImpact(data);
calcSevereImpact(data);
