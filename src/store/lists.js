import colors from '../assets/styles/colors.json'

export const lists = [
    {
        color: colors.azure,
        text: "Planning",
        cards: [
            {
                name: "Name of the task",
                color: colors.azure,
                value: 35,
                comments: [1, 2, 3, 4]
            }, {
                name: "Name of the task",
                color: colors.green,
                value: 55,
                comments: [1]
            }, {
                name: "Name of the task",
                color: colors.red,
                value: 15,
                comments: [1, 2]
            },
        ]
    }, {
        color: colors.green,
        text: "To-do",
        cards: [
            {
                name: "Name of the task",
                color: colors.green,
                value: 75,
                comments: [1, 2]
            }, {
                name: "Name of the task",
                color: colors.green,
            }
        ]
    }
];