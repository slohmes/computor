const booleans = {
  '0': false,
  '1': true
};

const logicGates = {
  '00': (a, b) => false, // do nothing
  '01': (a, b) => a && b, // AND
  '10': (a, b) => a || b, // OR
  '11': (a, b) => !a // NOT
};

document.getElementById('compute').onclick = () => {
  let input = document.getElementById('input').value.split('');

  const opCode = input[0] + input[1];
  const output = logicGates[opCode](booleans[input[2]], booleans[input[3]]);

  document.getElementById('output').innerHTML = output ? '1' : '0';
};
