

describe('Electrons Around the Cores', function() {
    var calculator;

    beforeEach(function() {
        calculator = new ElectronCalculator();
    });

    it('should return 6 for [1, 2, 3, 4, 5]', function() {
        expect(calculator.electronsAroundCores([1, 2, 3, 4, 5])).toEqual(6);
    });


    it('should return 4 for [2, 2, 3, 3]', function() {
    expect(calculator.electronsAroundCores([2, 2, 3, 3])).toEqual(4);
    });


});
