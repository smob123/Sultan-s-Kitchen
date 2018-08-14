let appetizers = {
    class: 'appetizers',
    meals: [
        'Soup',
         2.99,
         'Salad',
         4.25,
         'Spring roll',
         6.15
    ]
};

let main = {
    class: 'main',
    meals: [
        'steak',
        20.99,
        'Chicken and rice',
        18.25,
        'Spaghetti',
        16.99
    ]
};

let desserts = {
    class: 'desserts',
    meals: [
        'Cheesecake',
        12.25,
        'Chocolate cake',
        14.99,
        'Ice cream',
        8.15
    ]
};

let menu = [appetizers, main, desserts];

class Meals {
    getMealArray() {
        return menu;
    }
}
