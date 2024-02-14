const model = require('../model/model');

const controller = {
   
    //create new entry
    createEntry: async(req,res) => {
        console.log(req);
        
        try {
            const info = req.body;
            console.log("info is"+""+info)
            const newEntry = await model.createEntry(info);
            res.status(201).json(newEntry);
            console.log('work');
            console.log('New entry created:', newEntry);
        } catch (error) {
            console.error('Error creating entry:',error);
            res.status(500).json({error: 'Server error'});
        }
    },

    getData: async(req,res) => {
        try {
            const db_data = await model.getData();
            res.json(db_data);
        } catch (error) {
            res.status(500).json({error: 'Server error'});
        }
    },
    editData: async(req,res) => {
        const SensorName = req.params.sensor_name;
         console.log(SensorName)
        const editDbInfo = req.body;
        try {
           const editedData = await model.editData(SensorName, editDbInfo);
           if(editedData){
            res.json(editedData);
            console.log('Data Updated successfully!')
           } 
           else {
            res.status(404).json({error: ' data not found'});
           }
        } catch (error) {
            res.status(500).json({error: 'Server error'});
        }
    },

    deleteData: async(req,res) => {
        const SensorName = req.params.sensor_name;
        try {
            const deleteData = await model.deleteData(SensorName);
            if(deleteData){
                res.json(deleteData);
                console.log('Data deleted successfully');
            }
            else {
                res.status(404).json({error: 'data record not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Server error'});
        }
    }

}

module.exports = controller;