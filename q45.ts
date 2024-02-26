interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
 // function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
   // const car: Car = { manufacturer, model };
   // options.forEach(([key, value]) => {
     // car[key] = value;
    //});
   // return car;
  //}
  
  // Example usage
  //const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
  console.log(myCar);
  