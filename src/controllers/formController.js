const {addFormService, getFormByEmailService, updateFormService, getAllFormService, deleteFormService}= require('../services/formService');

const addFormController= async(req, res)=>{
    const addForm= await addFormService(req);
    res.status(201).json(addForm);
};

const getFormByEmailController = async (req,res) =>{
    const oneForm = await getFormByEmailService (req);
    res.json(oneForm);
}

const updateFormController = async(req, res)=>{
    const updateForm = await updateFormService(req);
    res.json(updateForm);
};

const getAllFormController= async(req, res)=>{
    const allForms= await getAllFormService();
    res.json(allForms);
};

const deleteFormController = async (req, res)=>{
    const deleteForm= await deleteFormService(req);
    res.json(deleteForm);
}


module.exports= {addFormController, getFormByEmailController, updateFormController, getAllFormController, deleteFormController};