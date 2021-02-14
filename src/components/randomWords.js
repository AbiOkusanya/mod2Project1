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
    'banana',
    'coffee',
    'ginger',
    'miller',]

function randomWord() {

    return drinks[Math.floor(Math.random() * drinks.length)];
}

export { randomWord }
