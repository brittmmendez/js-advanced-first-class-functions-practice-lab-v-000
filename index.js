function logDriverNames(drivers){
  drivers.forEach(calback);
}

const calback=function (el,i,array){
  console.log(el.name);
};

//first way I solved it 
  //const logDriverNames=function (el,i,array){
  //  console.log(el.name);
  //};
  //  drivers.forEach(logDriverNames)
//solution in github
  //  const logDriverNames = function (drivers) {
  //    drivers.forEach(function (driver) {
  //      console.log(driver.name);
  //    });
  //  };


const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown===hometown;){
    console.log(driver.name);
    }
  });
};

  