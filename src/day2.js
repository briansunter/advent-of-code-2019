// https://adventofcode.com/2019/day/2

function runOpCode(chunk, program) {
  const [opCode, num1Pos, num2Pos, resultPos] = chunk;
  const num1 = program[num1Pos];
  const num2 = program[num2Pos];

  if (opCode === 1) {
    program[resultPos] = (num1 + num2);
  } else if (opCode === 2) {
    program[resultPos] = (num1 * num2);
  }
}

function runProgram(program) {
  const myProgram = program;
  for (let i = 0; i < myProgram.length && myProgram[i] !== 99; i = i + 4) {
    runOpCode(myProgram.slice(i, i+4), myProgram);
  }
}

function restoreGravityAssist(program) {
  setNounVerb(program, 12, 2);
}

function setNounVerb(program, noun, verb) {
  program[1] = noun;
  program[2] = verb;
}

function findNounVerb(program) {
  for (let i = 0; i< 99; i++){
    for (let j = 0; j< 99; j++){
      const newProgram = [...program];
      setNounVerb(newProgram, i, j);

      runProgram(newProgram);
      const result = newProgram[0];
      if (result === 19690720) {
        return 100 * i + j;
      }
    }
  }
  throw `result not found`;
}

module.exports = {part1: runProgram,
                  part2: findNounVerb,
                  restoreGravityAssist };
