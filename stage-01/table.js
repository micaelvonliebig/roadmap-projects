const number = 1;

for (let i = 1; i <= 10; i++) {
  const result = number * i;

  console.log(`${i} x ${number} = ${result}`);

  if (result % 10 === 0) {
    console.log(`${i} x ${number}... result is a multiple of 10!`);
  }

  switch (result) {
    case 1:
      console.log(`result = 1!`);
      break;
    case 5:
      console.log(`result = 5!`);
      break;
    case 10:
      console.log(`result = 10!`);
      break;
    default:
  }
}
