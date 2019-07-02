const nouns = ['horseradish', 'trout', 'sedan', 'biscuit', 'bucket', 'briefcase', 'tote', 'application', 'chair', 'flora', 'cabinet', 'camera', 'microphone', 'relish'];
const verbs = ['relieved', 'spliced', 'made', 'glared', 'glanced', 'checked', 'crushed', 'squashed', 'erased', 'drew', 'cheered', 'fought', 'splashed', 'contemplated'];
const relations = ['Aunty', 'Uncle', 'Brother', 'Sister', 'Mom'];
const animals = ['dog', 'cat', 'cow', 'rabbit', 'rodent'];
const names = ['Baldwin', 'Hawkins', 'Winslow', 'Tyson', 'Strudwick', 'Sinclair', 'Ridley', 'Olson'];
const adjectives = ['jolly', 'wary', 'furious', 'immense', 'sleek', 'brilliant', 'fancy', 'compact', 'tranquil'];

const randomSelection = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (var i = 1; i < 26; i++) {
    console.log(`-------- STORY ${i} --------`);

    console.log(`${randomSelection(relations)}, yesterday my long lost ${randomSelection(relations)}, who is internationally known because they had ${randomSelection(verbs)} a ${randomSelection(nouns)}, found me!`);

    console.log(`I couldn't really tell because this was the first time we've met, but they seemed way too ${randomSelection(adjectives)} and ${randomSelection(adjectives)}!`);

    console.log(`They said they saw my video where I ${randomSelection(verbs)} a ${randomSelection(nouns)} for my pet ${randomSelection(animals)}. I said that video was really ${randomSelection(adjectives)}.`);

    console.log("To be continued.");

    console.log("------------------------------");
}