

function ElectronCalculator() {}


ElectronCalculator.prototype.electronsAroundCores = function(dice) {
    return dice.reduce((a, b) => a + (b & 1 ? b - 1 : 0), 0);
};
