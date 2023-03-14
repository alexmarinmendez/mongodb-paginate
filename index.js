import mongoose from "mongoose"
import UserModel from "./models/user.model.js"

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: "pizzacoder"
    })
    console.log('DB connected')

    // const users = await UserModel.find({ gender: "Female" })
    const users = await UserModel.paginate({ gender: "Female"}, {limit: 3, page: 6})
    console.log(users)

    process.exit()
}

main()