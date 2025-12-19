import moongoose from 'mongoose';

const userSchema = new moongoose.Schema({  
    name: {
        type: String,
        required: true,
        trim : true
    },
    email: {
        type: String,
        required: true,
        trim : true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default moongoose.models.User || moongoose.model('User', userSchema);

