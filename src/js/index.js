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

  // get and transform input
  let input = [];
  document.getElementById('punchcard').childNodes.forEach((child) => {
    if (child.type === 'checkbox') {
      input += child.checked ? '1' : '0';
    }
  });
  const opCode = input[0] + input[1];
  console.log('opCode: ', opCode);
  console.log('input: ', input[2], input[3]);
  const output = logicGates[opCode](booleans[input[2]], booleans[input[3]]);
  console.log('output: ', output);

  // display output
  document.getElementById('output-0').checked = output;
};
