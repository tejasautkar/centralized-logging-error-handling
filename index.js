import { getAll, getUser } from "./userController.js";


getAll().then(()=>{
    getUser(1).then(()=> {
        getUser(3)
    })
})

