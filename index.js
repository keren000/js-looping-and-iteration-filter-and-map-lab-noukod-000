// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver)
  {
		if (driver.revenue > revenue)
    {
      data = ({name:driver.name, revenue:driver.revenue})
      return data;
		}
	})
};

function driverNamesWithRevenueOver(driver, revenue)
{
  result = driversWithRevenueOver(driver, revenue);
  return result.map(driver => driver.name);
}

function exactMatch(driver, object)
{
  if (object.hasOwnProperty("name")){
    return driver.filter((drivers) => {
      return drivers.name === object["name"];
    });
  }

  else {
    return driver.filter((drivers) => {
      return drivers.revenue === object["revenue"];
    });
  }
}

function exactMatchToList(driver, object)
{
  result = exactMatch(driver, object);
  return result.map(driver => driver.name);
}
