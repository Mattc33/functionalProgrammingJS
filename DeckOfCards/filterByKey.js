const arrOfCards = [
    { "cid": 1, "rank": "A", "suit": "clubs", "color": "black" },
    { "cid": 2, "rank": "2", "suit": "clubs", "color": "black" },
    { "cid": 3, "rank": "3", "suit": "clubs", "color": "black" },
    { "cid": 4, "rank": "4", "suit": "clubs", "color": "black" },
    { "cid": 5, "rank": "5", "suit": "clubs", "color": "black" },
    { "cid": 6, "rank": "6", "suit": "clubs", "color": "black" },
    { "cid": 7, "rank": "7", "suit": "clubs", "color": "black" },
    { "cid": 8, "rank": "8", "suit": "clubs", "color": "black" },
    { "cid": 9, "rank": "9", "suit": "clubs", "color": "black" },
    { "cid": 10, "rank": "10", "suit": "clubs", "color": "black" },
    { "cid": 11, "rank": "jack", "suit": "clubs", "color": "black" },
    { "cid": 12, "rank": "queen", "suit": "clubs", "color": "black" },
    { "cid": 13, "rank": "king", "suit": "clubs", "color": "black" },
    { "cid": 1, "rank": "A", "suit": "diamonds", "color": "red" },
    { "cid": 2, "rank": "2", "suit": "diamonds", "color": "red" },
    { "cid": 3, "rank": "3", "suit": "diamonds", "color": "red" },
    { "cid": 4, "rank": "4", "suit": "diamonds", "color": "red" },
    { "cid": 5, "rank": "5", "suit": "diamonds", "color": "red" },
    { "cid": 6, "rank": "6", "suit": "diamonds", "color": "red" },
    { "cid": 7, "rank": "7", "suit": "diamonds", "color": "red" },
    { "cid": 8, "rank": "8", "suit": "diamonds", "color": "red" },
    { "cid": 9, "rank": "9", "suit": "diamonds", "color": "red" },
    { "cid": 10, "rank": "10", "suit": "diamonds", "color": "red" },
    { "cid": 11, "rank": "jack", "suit": "diamonds", "color": "red" },
    { "cid": 12, "rank": "queen", "suit": "diamonds", "color": "red" },
    { "cid": 13, "rank": "king", "suit": "diamonds", "color": "red" },
    { "cid": 1, "rank": "A", "suit": "hearts", "color": "red" },
    { "cid": 2, "rank": "2", "suit": "hearts", "color": "red" },
    { "cid": 3, "rank": "3", "suit": "hearts", "color": "red" },
    { "cid": 4, "rank": "4", "suit": "hearts", "color": "red" },
    { "cid": 5, "rank": "5", "suit": "hearts", "color": "red" },
    { "cid": 6, "rank": "6", "suit": "hearts", "color": "red" },
    { "cid": 7, "rank": "7", "suit": "hearts", "color": "red" },
    { "cid": 8, "rank": "8", "suit": "hearts", "color": "red" },
    { "cid": 9, "rank": "9", "suit": "hearts", "color": "red" },
    { "cid": 10, "rank": "10", "suit": "hearts", "color": "red" },
    { "cid": 11, "rank": "jack", "suit": "hearts", "color": "red" },
    { "cid": 12, "rank": "queen", "suit": "hearts", "color": "red" },
    { "cid": 13, "rank": "king", "suit": "hearts", "color": "red" },
    { "cid": 1, "rank": "A", "suit": "spades", "color": "black" },
    { "cid": 2, "rank": "2", "suit": "spades", "color": "black" },
    { "cid": 3, "rank": "3", "suit": "spades", "color": "black" },
    { "cid": 4, "rank": "4", "suit": "spades", "color": "black" },
    { "cid": 5, "rank": "5", "suit": "spades", "color": "black" },
    { "cid": 6, "rank": "6", "suit": "spades", "color": "black" },
    { "cid": 7, "rank": "7", "suit": "spades", "color": "black" },
    { "cid": 8, "rank": "8", "suit": "spades", "color": "black" },
    { "cid": 9, "rank": "9", "suit": "spades", "color": "black" },
    { "cid": 10, "rank": "10", "suit": "spades", "color": "black" },
    { "cid": 11, "rank": "jack", "suit": "spades", "color": "black" },
    { "cid": 12, "rank": "queen", "suit": "spades", "color": "black" },
    { "cid": 13, "rank": "king", "suit": "spades", "color": "black" }
];

const filterByKeyValue = (arr, key, value) => arr.filter( card => card[key] === value );

const getXSuits = (arr, key, value) => {
    if ( typeof(arr) !== 'object' ) {
        return 'pass in an array';
    }
    if (key !== 'suit') {
        return 'pass in the valid key: suit'
    }
    if (value === 'clubs' || value === 'diamonds' || value === 'hearts' || value === 'spades') {
        return filterByKeyValue(arr, key, value);
    }
    else {
        return 'error'
    }
}

console.log(getXSuits(arrOfCards, 'suit', 'clubs'));
