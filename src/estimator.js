const covid19ImpactEstimator = (data) => data;
// var reportedCases;
var impact = {};
var severeImpact = {};

function calcDays(){
    if(data.periodType=="days") timeToElapse = data.timeToElapse;
    else if(data.periodType=="weeks") timeToElapse = data.timeToElapse * 7;
    else if(data.periodType=="months") timeToElapse = data.timeToElapse * 30;
    var ratio = math.floor(timeToElapse/3);
    return ratio;
}

calcDays();

function calcImpact() {
    impact.currentlyInfected = Math.floor(data.reportedCases * 10);
    impact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2,ratio);
    return impact;
}

function calcSevereImpact(){
    severeImpact.currentlyInfected = Math.floor(data.reportedCases * 10);
    severeImpact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2,ratio);
    return severeImpact;
}

severeImpact. currentlyInfected = Math.floor(reportedCases * 50);
calcImpact();
calcSevereImpact();
export default covid19ImpactEstimator;
