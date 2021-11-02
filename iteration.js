a=5;
cities = ["Tunis","Tripoli","Alger","Rabat","Noakshot","Caire"]

for(var i=0;i<cities.length;i++){
    console.log(cities[i]);
    // i=i+1;
}

console.log('*-------------------------------------*')
for(city of cities ){
    console.log(city)
}