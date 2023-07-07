const { v4: uuidv4 } = require("uuid")

module.exports = [
    {
        id: uuidv4(),
        item_name: "whopper",
        amount: -12,
        date: "6-4-23",
        from: "Burger King",
        category: "food"
    },
    {
        id: uuidv4(),
        item_name: "toothbrush",
        amount: -20,
        date: "6-8-23",
        from: "Walgreens",
        category: "hygeine"
    },
    {
        id: uuidv4(),
        item_name: "laptop",
        amount: -500,
        date: "6-12-23",
        from: "Circuit City",
        category: "technology"
    },
    {
        id: uuidv4(),
        item_name: "direct deposit",
        amount: 1124,
        date: "6-16-23",
        from: "Office",
        category: "income"
    },
    {
        id: uuidv4(),
        item_name: "Diablo 4",
        amount: 70,
        date: "6-20-23",
        from: "Blizzard",
        category: "entertainment"
    }
]