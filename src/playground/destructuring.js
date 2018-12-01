// Object destructuring

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    bigCity: 'LA',
    temp: 92
  }
}

const {name = 'Anonymous', age} = person
console.log(`${name} is ${age}.`)

const {bigCity, temp: temperature} = person.location
if (bigCity && temperature) {
  console.log(`It's ${temperature} degrees in ${bigCity}.`)
}

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-published' } = book.publisher

console.log(publisherName)

// Array destructuring

const address = ['1299 S Juniper Streeet', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '10kr', '15kr', '20kr']
const [hotCoffee, small, medium, large] = item
console.log(`A medium ${hotCoffee} costs ${medium}.`)
