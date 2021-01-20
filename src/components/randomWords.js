const drinks = ['vodka',
    'cocktail',
    'olive',
    'soda',
    'ginger',
    'mojito',
    'cranberry',
    'orange',
    'pineapple',
    'orange']

function randomWord() {

    return drinks[Math.floor(Math.random() * drinks.length)];
}
export { randomWord }
