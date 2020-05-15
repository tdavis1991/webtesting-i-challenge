module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function succeed(item, value = item.enhancement) {
  item.enhancement = value
  if(item.enhancement > 20) {
    throw new TypeError("Enhancement cannot be greater than 20")
  }
  if(item.enhancement === 20) {
    return item.enhancement
  }

  return item.enhancement + 1
}

function fail(item, value) {
  item.enhancement = value
  if(item.enhancement > 16) {
    return item.enhancement - 1
  }
  if(item.enhancement >= 15) {
    return item.durability - 10
  }
  if(item.enhancement < 15) {
    return item.durability - 5
  }
}

function repair(item) {
  return item.durability = 100
}

function get(item) {
  return { ...item };
}
