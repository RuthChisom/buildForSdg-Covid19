const covid19ImpactEstimator = (data) => data;
// var reportedCases;
const impact = {};
const severeImpact = {};
const timeToElapse = {};
const data1 = covid19ImpactEstimator.data;
const ratio = '';

function calcDays(data1) {
  if (data1.periodType === 'days') timeToElapse = data1.timeToElapse;
  else if (data1.periodType === 'weeks') timeToElapse = data1.timeToElapse * 7;
  else if (data1.periodType === 'months') timeToElapse = data1.timeToElapse * 30;
  ratio = Math.floor(timeToElapse / 3);
  return ratio;
}

calcDays(data1);

function calcImpact(data1, ratio) {
  impact.currentlyInfected = Math.floor(data1.reportedCases * 10);
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return impact;
}

function calcSevereImpact(data1, ratio) {
  severeImpact.currentlyInfected = Math.floor(data1.reportedCases * 50);
  severeImpact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return severeImpact;
}

calcImpact(data1, ratio);
calcSevereImpact(data1, ratio);
export default covid19ImpactEstimator;
