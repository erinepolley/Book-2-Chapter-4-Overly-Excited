console.log("Hello world");

// const addExcitement = () => {
//     console.log("I am overly excited!");
// };

// addExcitement();

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let buildMeUp = ""

const addExcitement = (wordArray) => {
    for (let i = 0; i < wordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += wordArray[i] + "!";
            console.log(buildMeUp);
        } else {
            buildMeUp += wordArray[i] + " ";
            console.log(buildMeUp);
        }
    }
}

addExcitement(sentence);