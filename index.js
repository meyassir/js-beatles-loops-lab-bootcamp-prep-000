function theBeatlesPlay(musician, instruments)
{
  let beatles = new Array();
  for(let i = 0; i<musician.length; i++) {
    beatles[i] = `${musician[i]} plays ${instruments[i]}`;
  }
  return beatles;
}

function johnLennonFacts( facts)
{
  for(let i = 0; i<facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
}