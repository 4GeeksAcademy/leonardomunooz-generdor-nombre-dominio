// let pronoun = ["the", "our", "they", "he", "she", "it"];
// let adj = ["great", "big", "small", "clean", "dirty", "ugly", "funny"];
// let noun = ["jogger", "racoon", "book", "store", "movie"];

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extentions = [".com", ".net", ".us", ".io", ".ve"];
let domainGeneratorArray = [];

function domainGeneratorList(pronoun1, adj1, noun1) {
  for (let index = 0; index < pronoun1.length; index++) {
    for (let adjItem = 0; adjItem < adj1.length; adjItem++) {
      for (let nounItem = 0; nounItem < noun1.length; nounItem++) {
        //    console.log(`${pronoun[index]}${adj[adjItem]}${noun[nounItem]}.com`);
        for(let ext of extentions){
           let domianItemGenerated =
          pronoun1[index] + adj1[adjItem] + noun1[nounItem]  + ext;
          domainGeneratorArray.push(domianItemGenerated);
        }
      }
    }
  }
  return domainGeneratorArray;
}


function showArrayList(arrayList) {
  arrayList.forEach((element) => {
    console.log(element);
  });
}
let domainGeneratedList = domainGeneratorList(pronoun, adj, noun);
showArrayList(domainGeneratedList);git sta
