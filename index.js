function logDriverNames(drivers){
  drivers.forEach(calback);
}


const calback=function (el,i,array){
  console.log(el.name);
};