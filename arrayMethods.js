const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];
//Array.filter() is fixed so what shows is still the same
//Array.map() changes so if you want uppercase you can.
const names = ['anne', 'barry', 'chloe'];
const bigNames = names.map((name) => name.toUpperCase());

//Array.filter(callbackFn) and Array.find(callbackFn);
const myFavoriteThings = things.filter((thing) => thing.favorite); //assign variable myFavoriteThings to return value from things.filter. This array only returns items with properties of true
const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);

//Array.find() takes a testing funciton and returns only returns first item that passes. Like matching ID.
const selectThingByID = (id) => {
return things.find((thing) => thing.id ===id);
}
const selectedThing = selectThingByID(3);

//this function usings Array.find() to find the first element in the array with "feautured" as property.
const feauturedThing = things.find((thing) => thing.feautured);


console.log(names);
console.log(bigNames);
console.log(myFavoriteThings);
console.log(things);
console.log(thingsWithOverFiftyPoints);
console.log(selectedThing);
console.log(feauturedThing);
//or console.log(things.filter((thing) => thing.feautred[0]); but more code.

