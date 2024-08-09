import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://pasinduakalanka08:1234@cluster0.zbaapva.mongodb.net/food-del').then(() => console.log("DB Connected"));
}