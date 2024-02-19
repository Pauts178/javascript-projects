// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode object", function() {

  // Write your unit tests here!
  test("should have a property called organization", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("should have a property called executiveDirector", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("should have a property called percentageCoolEmployees", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("should have a property called programsOffered", function() {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  test("should return 'Launch!' for number evenly divisible by 2", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!")
  });

  test("should return 'Code!' for number evenly divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toEqual("Code!")
  });

  test("should return 'Rocks!' for number evenly divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!")
  });

  test("should return 'LaunchCode!' for number evenly divisible by both 2 and 3", function() {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!")
  });
  
  test("should return 'Code Rocks!' for number evenly divisible by both 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!")
  });

  test("should return 'Launch Rocks!' for number evenly divisible by both 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!")
  });

  test("should return 'LaunchCode Rocks!' for number evenly divisible by 2, 3 and 5", function() {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!")
  });

  test("should return 'Rutabagas! That does not work.' for numbers NOT evenly divisible by 2, 3 or 5", function() {
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That does not work.")
  });


})

