// string
// return an int
// ex: ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t => 2

// loop string, remove all chars that are not a n or t
// split string by ant
// concat the remaining chars, divide by 2 and floor to get num of dead ants

function deadAntCount(ants) {
  if (!ants) return 0;

  let bodyParts = ants.split('ant').join('');

  function count(char) {
    return bodyParts.split(char).length - 1;
  }

  return Math.max(count('a'), count('n'), count('t'));
}
