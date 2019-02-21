// Code your solution here:
function driversWithRevenueOver(driver, revenue)
{
  return driver.filter(function (drivers) {
    return drivers.revenue > revenue;});
}

function driverNamesWithRevenueOver(driver, revenue)
{
  result = driversWithRevenueOver(driver, revenue);
  return result.map(driver => driver.name);
}

function exactMatch(driver, object) {
  if (object.hasOwnProperty('name')) {
    return driver.filter(function (drivers) {
      return drivers.name === object['name'];
    });
  } else {
    return driver.filter(function (drivers) {
      return drivers.revenue === object['revenue'];
    });
  }
}

function exactMatchToList(driversname, object) {
  let result = exactMatch(driversname, object);
  return result.map (function (driver) {
    return driver.name;
  });
}
