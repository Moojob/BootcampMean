// let rayon = 10;
// let surface = Math.PI * (rayon ** 2);

// console.log('Rayon:' ,rayon)
// console.log('Surface:' ,surface)

// digit = 3;
// switch (digit) {
// case 1:
//     console.log('one')
//     break;
// case 2:
//     console.log('two')
//     break;
// case 3:
//     console.log('tree')
//     break;
// default:
//     console.log('no values')
//     break;
// }

// for (var state=0;state<10;state++){
//     console.log('state:',state);
// }

// intArray = [0,1,3,4,5,6,7,8,9]

// for( iterator of intArray){
//     console.log(iterator)
// }

// fruit = [
//     {
//         designation:'Apple',
//         prix:5
//     },
//     {
//         designation:'Bananas',
//     },
//     {
//         designation:'Mangue',
//         color:'yellow'
//     },
//     ];
// for (fruit of fruit){
//     console.log(fruit);
// }

obj = {
    lable: 'Dell',
    price:4500 ,
    stock:15
}   
 console.log(Object.keys(obj))
 console.log(Object.values(obj))

 for(props in obj){
     console.log(props)
 }

persons = [
    { id: 1, name: 'mohamed' },
    { id: 2, name: 'karim' },
    { id: 3, name: 'ali' },
    { id: 4, name: 'salah' },
    { id: 5, name: 'leila' }
]

capitalNames = persons.map(function (data) {
    let tmp=data.name.toUpperCase();
    return {
        id:data.id,
        name:tmp
    }
})

console.table(persons);
console.table(capitalNames);

 console.log('----------------------------------------')

 anArray = [5,8,'France','Homme', true]
 for(elementIndex in anArray){
     console.log(elementIndex)
 }

console.log('------------------')
persons = [
    { id: 1, name: 'mohamed' },
    { id: 2, name: 'karim' },
    { id: 3, name: 'ali' },
    { id: 4, name: 'salah' },
    { id: 5, name: 'leila' }
];

let temp=[];

for(var i=0;i<persons.length;i){
   temp.push({
       id:persons[i].id,
       name:persons[i].name.toUpperCase()
    });
}
console.table(temp);

console.table(persons);