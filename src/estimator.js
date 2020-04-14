const covid19ImpactEstimator = (data) => data;
// var reportedCases;
let impact = {};
let severeImpact = {};
let timeToElapse;

function calcDays (data){
    if (data.periodType === 'days') timeToElapse = data.timeToElapse;
    else if (data.periodType === 'weeks') timeToElapse = data.timeToElapse * 7;
    else if (data.periodType === 'months') timeToElapse = data.timeToElapse * 30;
    let ratio = math.floor(timeToElapse/3);
    return ratio;
}

calcDays(data);

function calcImpact(data,ratio) {
    impact.currentlyInfected = Math.floor(data.reportedCases * 10);
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
    return impact;
}

function calcSevereImpact(data,ratio){
    severeImpact.currentlyInfected = Math.floor(data.reportedCases * 10);
    severeImpact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** ratio);
    return severeImpact;
}

severeImpact. currentlyInfected = Math.floor(reportedCases * 50);
calcImpact(data,ratio);
calcSevereImpact(data,ratio);
export default covid19ImpactEstimator;
