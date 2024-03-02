
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})

import connectDB from './db/index.js'
import {app} from "./app.js"


await connectDB();
 try {

    app.on("error", (error) => {
        console.log("Network Problem" , error)
    })

    app.listen(process.env.PORT, () => {
     console.log(`App is listening on port ${process.env.PORT}`);
    })    
 } catch (error) {
    console.log(error);
 }
 
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}`)
//         console.log("DB is connected")

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw new err
//     }
// })();
