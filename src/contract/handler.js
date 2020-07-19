const sdk = require("dragonchain-sdk");

/**
 * One quick note on Logging from within a smart contract.
 * Never use STDOUT for logs. Always use STDERR to allow
 * dragonchain to split "output" and "logs" to diff streams.
 *
 * Remember:
 * `console.error` = log
 * `console.log` = output
 */

const log = console.error; // Remember that STDERR is the logging stream.

module.exports = async input => {
  
  const payload = input.payload;

  let output = null;

  if (input.payload.operation == "sum")
  {
    let total = 0;

    input.payload.values.forEach(element => {
      total += element;
    })

    output = {
      "response": {
        "operation": payload.operation,
        "values": payload.values,
        "result" : total
      }
    }
    
  } else if (input.payload.operation == "product")
  {
    let total = 1;

    input.payload.values.forEach(element => {
      total = total * element;
    })

    output = {
      "response": {
        "operation": payload.operation,
        "values": payload.values,
        "result" : total
      }
    }
    
  }

  return output;
};
