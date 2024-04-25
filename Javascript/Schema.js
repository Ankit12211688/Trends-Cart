import mongoose from 'mongoose'

const userDetailsSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phonenumber: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

export default userDetailsSchema;