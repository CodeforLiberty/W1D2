function mergeDataStreams(stream1, stream2) {
	var merged = [];
	var temp; 
	var i = 0; 
	
	while (i<stream1.length) {
	temp = Object.assign(stream1[i], stream2[i]);
	merged.push(temp);
		i++; 
	}
	
	return merged; 
}


var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];

mergeDataStreams(dataSource1, dataSource2);

// var obj = { 100: 'a', 2: 'b', 7: 'c' };


// Object.keys(obj);

// var obj = { a: 1 };
// var obj2 = {b: 2};
// var copy = Object.assign(obj2, obj);
// console.log(copy); // { a: 1 }
