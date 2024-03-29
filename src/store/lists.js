import colors from '@styles/colors.json'
import userPhoto from '@images/userPhoto.jpg'

export const lists = [

    {
        name: "Name of the task",
        color: colors.azure,
        value: 35,
        comments: [1, 2, 3, 4],
        users: [userPhoto, userPhoto, userPhoto],
        status: "todo"
    }, {
        name: "Name of the task",
        color: colors.green,
        value: 55,
        comments: [1]
    }, {
        name: "Name of the task",
        color: colors.red,
        value: 15,
        comments: [1, 2],
        status: "todo"
    },

    {
        name: "Name of the task",
        color: colors.green,
        value: 75,
        comments: [1, 2]
    }, {
        name: "Name of the task",
        color: colors.green,
    }
];