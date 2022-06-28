/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

function getUniqueProductCount(arr){
	let d={}
  for(let i=0;i<arr.length;i++){
		if(d[arr[i].productName]==undefined){
			d[arr[i].productName]=1
    }else{
				let prev=d[arr[i].productName]
        d[arr[i].productName]=prev+1
		}
  }
  return d
}





function update(arr,obj){
	let newarr=[...new Map(arr.map((item)=>[item["productName"],item])).values(),]
  for(let i=0;i<newarr.length;i++){
		if(newarr[i].productName==obj.productName){
    	newarr[i].quantity+=obj.quantity
    }
	}
 return newarr
  
	
}

function getUniquePrducts(arr){
var data
	for(let i=0;i<arr.length;i++){
  	data=update(arr,arr[i])
  }
  return data
}




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];




console.log(getUniqueProductCount(listOfProducts))

console.log(getUniquePrducts(listOfProducts))

