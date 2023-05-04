// code your solution here
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record){
  const winningYear = record.find( item => item.result === 'W')
  return winningYear ? winningYear.year : undefined;
}

console.log(superbowlWin(record))
