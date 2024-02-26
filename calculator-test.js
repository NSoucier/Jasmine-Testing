
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment([400000,15,3])).toEqual('2762.33');
  expect(calculateMonthlyPayment([50000,5,25.3])).toEqual('1476.37');
});


it("should return a result with 2 decimal placess", function() {
  expect(calculateMonthlyPayment([10000,10,3.25])).toEqual('97.72');
  expect(calculateMonthlyPayment([3518,3.5,7.58])).toEqual('95.63');
});
