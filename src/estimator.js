const covid19ImpactEstimator = (data) => data;
// var reportedCases;
let impact;
let severeImpact;
let timeToElapse;
const data1 = covid19ImpactEstimator.data;
let ratio;

function calcDays() {
  if (data1.periodType === 'days') timeToElapse = data1.timeToElapse;
  else if (data1.periodType === 'weeks') timeToElapse = data1.timeToElapse * 7;
  else if (data1.periodType === 'months') timeToElapse = data1.timeToElapse * 30;
  ratio = Math.floor(timeToElapse / 3);
  return ratio;
}

calcDays();

function calcImpact() {
  impact.currentlyInfected = Math.floor(data1.reportedCases * 10);
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return impact;
}

function calcSevereImpact() {
  severeImpact.currentlyInfected = Math.floor(data1.reportedCases * 50);
  severeImpact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
  return severeImpact;
}

calcImpact();
calcSevereImpact();
export default covid19ImpactEstimator;
