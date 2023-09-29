import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userid: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
});

const RegisterUsers = mongoose.model('RegisterUsers', userSchema);

export default RegisterUsers;
