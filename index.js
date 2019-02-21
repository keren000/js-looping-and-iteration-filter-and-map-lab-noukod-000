// Code your solution here:
function driversWithRevenueOver(driver, revenue)
{
  return driver.filter(function (drivers) {
    return drivers.revenue > revenue;});
}

function driverNamesWithRevenueOver(driver, revenue) {
  let result = driversWithRevenueOver(driver, revenue);
  // return result.map (function (name) {
  //   return name.name;
    return  driversWithRevenueOver(driver, revenue).map(driver => driver.name);
  };
}

function exactMatch(list, object) {
  if (object.hasOwnProperty('name')) {
    return list.filter(function (index) {
      return index.name === object['name'];
    });
  } else {
    return list.filter(function (index) {
      return index.revenue === object['revenue'];
    });
  }
}

function exactMatchToList(list, object) {
  let result = exactMatch(list, object);
  return result.map (function (index) {
    return index.name;
  });
}
