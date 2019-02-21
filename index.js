// Code your solution here:
// function driversWithRevenueOver(driver, revenue)
// {
//   return driver.filter((drivers) => {
//     // return drivers.revenue > revenue;});
//     	return ({ name: driver.name, revenue: driver.revenue })
//     });
// }

function driversWithRevenueOver(drivers, revenueComp) {
	return drivers.filter((driver) => {
		if (driver.revenue > revenueComp){
			return ({ name: driver.name, revenue: driver.revenue })
		}
	})
};

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

function exactMatchToList(driver, object)
{
  result = exactMatch(driver, object);
  return result.map(driver => driver.name);
}
