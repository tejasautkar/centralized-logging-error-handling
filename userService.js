import { sleep, wrapFunctions } from './utils.js'

const userService = {
    getAllUsers: async () => {
        await sleep(3);
        return [{ id: 1, name: 'Jack' }, { id: 2, name: 'John' }]
    },
    
    getUsersById: async (id) => {
        await sleep(4);
        const user = [{ id: 1, name: 'Jack' }, { id: 2, name: 'John' }].find(el => el.id === id);
        if (user) {
            return user
        }
        throw new Error('User Not Found')
    },
}

export const { getAllUsers, getUsersById } = wrapFunctions(userService, 'userService')