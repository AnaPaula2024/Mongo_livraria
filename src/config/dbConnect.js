import mongoose from "mongoose";


async function connectNaDatabase(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.h9kc1ep.mongodb.net/livaria?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}

export default connectNaDatabase
