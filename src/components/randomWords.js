const drinks = ['hops',
    'wheat',
    'grapefruit',
    'budweiser',
    'michelob',
    'guinness',
    'heineken',
    'pabst',
    'modelo',
    'yeast',
    "banana"]

function randomWord() {

    return drinks[Math.floor(Math.random() * drinks.length)];
}

export { randomWord }
