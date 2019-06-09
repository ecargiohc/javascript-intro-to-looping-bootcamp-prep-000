function forLoop(array) {
  for (let i = 0; i < 25; i++)
  if (i===1) { 
  array.push('I am 1 strange loop.')
  }
  else {
  array.push(`I am ${i} strange loops.`)
  }
  return array
}
function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown) }
    return 'done'
}
function doWhileLoop(array) {
  function incrementVariable() {array.length > 0}
  do { 
    array.shift(array);
  incrementVariable() }
  while (false)
  return array
}

function forLoop (array) {
  for (let i=0; i<25; i++)
    if (i===1) {
      array.push ("I am 1 strange loop.")
    }
    else {
      array.push ('I am ${i} strange loops.')
    }
    return array;
  }

function whileLoop(number) {
  let countdown = number
while (countdown > 0) {
  console.log(--number);
  return ('done');
}  
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while
  (incrementVariable() < num );
}








