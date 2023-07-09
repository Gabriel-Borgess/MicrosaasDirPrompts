import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email já cadastrado!"],
        required: [true, "Email é necessário" ],
    },
    username: {
        type: String,
        required: [true, "Nome de usuário é necessário"],
        match: [/^[a-zA-Z0-9_]+$/, "O nome de usuário deve conter apenas letras, números e underscores."],

    },

    image: {
        type: String,
    }

})

const User = models.User || model("User", UserSchema);

export default User;