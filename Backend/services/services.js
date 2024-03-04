const model_object = require('../model/model')

class Service{
    async createEntry() {
        try {
            return await model_object.createEntry();
        } catch (error) {
            return error;
        }
    };
    async getData() {
        try {
            return await model_object.getData();
        } catch (error) {
            return error;
        }
    };
    async editData() {
        try {
            return await model_object.editData();
        } catch (error) {
            return error;
        }
    };
    
}

module.exports = new Service();