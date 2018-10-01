let appetizers = {
    class: 'appetizers',
    meals: [
        [
            'images/soup.jpg',
            'Soup',
            2.99
        ],
        [
            'images/salad.jpg',
            'Salad',
            4.25
        ],
        [
            'images/spring roll.jpg',
            'Spring roll',
            6.15
        ]
    ]
};

let main = {
    class: 'main',
    meals: [
        [
        'images/steak_menu.jpg',
        'steak',
        20.99
        ],
        [
        'images/chicken & rice.jpg',
        'Chicken and rice',
        18.25
        ],
        [
        'images/spaghetti.jpg',
        'Spaghetti',
        16.99
        ]
    ]
};

let desserts = {
    class: 'desserts',
    meals: [
        [
        'images/cheesecake.jpg',
        'Cheesecake',
        12.25
        ],
        [
        'images/chocolate cake.jpg',
        'Chocolate cake',
        14.99
        ],
        [
        'images/icecream.jpg',
        'Ice cream',
        8.15
        ]
    ]
};

let menu = [appetizers, main, desserts];

class Meals {
    getMealArray() {
        return menu;
    }
}
