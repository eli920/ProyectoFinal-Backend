const {Schema, model}= require('mongoose');

const formSchema= Schema(
    {
        name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required:true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: Number,
            required: true
        },
        querie: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER"
        }
    }
);
const FormModel= model('Form', formSchema);

module.exports= FormModel;
