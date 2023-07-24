import mongoose from 'mongoose';

const mongooseUrl: string = process.env.NEXT_PUBLIC_MONGODBURL ?? "mongodb+srv://techyatra2023:woKatMNIgxASvQtS@testing-cluster.mcktcty.mongodb.net/fakestore";

export default async function connectDb() {
    try {
        await mongoose.connect(mongooseUrl);
        console.log("Mongodb Connection Successfull")
    } catch (error) {
        console.log("Mongodb Connection Failed", error)
    }
}