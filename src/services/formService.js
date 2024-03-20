const FormModel = require('../models/form.models');


const addFormService= async (req, res) => {
    const form = req.body;

    try {
        const newForm= new FormModel(form);
        await newForm.save();
        return {message: 'Consulta enviada con éxito'};

    }catch(err){
        return {message: 'Ocurrio un error'}
    }
};

const getFormByEmailService = async (req) => {
    try {
        const { email} = req.params;
        const form = await FormModel.findOne({ email: email });
        
        if (!form) {
            return { statusCode: 404, message: "Email no encontrado" };
        } 

        return { form, statusCode: 200, message: "Consulta encontrada" };

    } catch (error) {
        return { message: "Ocurrió un error", statusCode: 400 };
    }
};


const updateFormService = async(req)=>{
   
    try{
        const {email} = req.params;
        const updateForm = req.body;
        const formDatabase= await FormModel.findOne({email: email});
        if(!formDatabase){
            return {statusCode: 404, message: "Email no encontrado"};
        }
        formDatabase.name= updateForm.name;
        formDatabase.last_name= updateForm.last_name;
        formDatabase.email= updateForm.email;
        formDatabase.phone= updateForm.phone;
        formDatabase.querie= updateForm.querie;
        formDatabase.role=updateForm.role;
       
        await formDatabase.save();
        return {message: "Consulta actualizada", statusCode: 201};
    }catch(error){
        return{message:"Ocurrio un error", statusCode:400}
    }
}

const getAllFormService= async()=>{
    const allForms= await FormModel.find();
    return allForms;
};

const deleteFormService = async(req) => {
    try{
        const {id} = req.params;
        const deleteForm= await FormModel.deleteOne({_id: id})
        if(deleteForm.deletedCount ===0){
            return {statusCode: 404, message:"No encontrado"}
        }
        return {message: 'Consulta eliminada con éxito'};
    }catch(error){
        return{message:"Ocurrio un error", statusCode:400}
    }
}

module.exports= {addFormService, getFormByEmailService, updateFormService, getAllFormService, deleteFormService };