const Usermodel = require("../models/model")

class users{
   

  

    async insertData(req, h) {
        const {name,surname,email}=req.payload
        console.log(name,surname,email)
       
        try {
            // console.log(req.payload)
            const data = await Usermodel.query().insert({name:name,surname:surname,email:email})
            return (`succesfully done ${data}`);

        } catch (err) {
            console.log(err)
            return h.response(err)
        }
    }


        async get_by_id(request,h){

            try {
                const { id } = request.params;
          
              
                const data = await Usermodel.query().where('id', id).first();
          
                if (!data) {
                  return h.response({ message: 'Data not found' }).code(404);
                }
          
                return data;
              } catch (error) {
                return h.response({ error: 'An error occurred' }).code(500);
              }

        }
        async delete_by_id(request,h){
            try {
                const { id } = request.params;
        
                const deletedRows = await Usermodel.query().where('id', id).del();
        
                if (deletedRows === 0) {
                  return h.response({ message: 'Data not found or no data deleted' }).code(404);
                }
        
                return h.response({ message: 'Data deleted successfully' }).code(200);
              } catch (error) {
                return h.response({ error: 'An error occurred' }).code(500);
              }

        }
        async get_all_data(request, h){

            try {
                const data = await Usermodel.query().select('*');
        
                return data;
              } catch (error) {
                return h.response({ error: 'An error occurred' }).code(500);
              }

        }

}

  
             

module.exports=users;



