import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amound: 1
});

console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log("======================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts2 = state.order.products;
updateOrderProducts2.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amound: 1
});


console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);
console.log("======================================");

// const updateOrderProducts = state.order.products;
// updateOrderProducts.push({
//     no: 'c002-003',
//     name: '블루양말',
//     price: 2000,
//     amound: 1
// });



