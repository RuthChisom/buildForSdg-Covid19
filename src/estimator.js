const covid19ImpactEstimator = (data) => data;
// var reportedCases;
const impact = {};
const severeImpact = {};
const timeToElapse = {};
const data = covid19ImpactEstimator['data'];

function calcDays(data) {
  if (data.periodType === 'days') timeToElapse = data.timeToElapse;
  else if (data.periodType === 'weeks') timeToElapse = data.timeToElapse * 7;
  else if (data.periodType === 'months') timeToElapse = data.timeToElapse * 30;
  const ratio = Math.floor(timeToElapse / 3);
  return ratio;
}

calcDays(data);

function calcImpact(data, ratio) {
  impact.currentlyInfected = Math.floor(data.reportedCases * 10);
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return impact;
}

function calcSevereImpact(data, ratio) {
  severeImpact.currentlyInfected = Math.floor(data.reportedCases * 10);
  severeImpact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return severeImpact;
}

severeImpact.currentlyInfected = Math.floor(reportedCases * 50);
calcImpact(data,ratio);
calcSevereImpact(data,ratio);
export default covid19ImpactEstimator;
