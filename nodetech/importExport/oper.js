const add = (a, b) =>{
    return a+b;
};

const sub = (a, b) =>{
  return a-b;
};

// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;

const name = "Prahlad";
module.exports = { add, sub, name };