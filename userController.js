import { getUsersById, getAllUsers } from './userService.js';
import { wrapFunctions } from './utils.js';

const userController = {
     getUser: async (id) => {
        return getUsersById(id);
    },
     getAll : async () => {
        return getAllUsers();
    }
}

export const { getUser, getAll } = wrapFunctions(userController, 'userController')

