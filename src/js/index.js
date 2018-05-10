const booleans = {
  0: false,
  1: true
};

const logicGates = {
  '00': (a, b) => ('' + a + b), // return input unchanged
  '01': (a, b) => (a && b), // AND
  '10': (a, b) => (a || b), // OR
  '11': (a, b) => ((booleans[a] ? '0' : '1') + (booleans[b] ? '0' : '1')) // NOT
};

document.getElementById('compute').onclick = () => {

  // get and transform input
  let input = [];
  document.getElementById('punchcard').childNodes.forEach((child) => {
    if (child.type === 'checkbox') {
      input += child.checked ? 1 : 0;
    }
  });
  const opCode = '' + input[0] + input[1];
  const output = logicGates[opCode](input[2], input[3]);

  // display output
  document.getElementById('output-0').checked = booleans[output[0]];
  document.getElementById('output-1').checked = booleans[output[1]];
};
