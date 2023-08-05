const Hapi = require('@hapi/hapi');
const users = require('./services/index');
const router = new users;
// console.log(router)

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/create',
        handler: router.insertData
    }); 

    server.route({
        method: 'GET',
        path: '/api/data/{id}',
        handler: router.get_by_id
    }); 

    server.route({
        method: 'DELETE',
        path: '/api/database/{id}',
        handler: router.delete_by_id
    }); 

    server.route({
        method: 'GET',
        path: '/api/data',
        handler: router.get_all_data
    }); 

    server.route({
        method: 'GET',
        path: '/get_api/data',
        handler: router.get_all_data
    }); 

  

   


    await server.start();
    console.log('Server running on %s', server.info.uri);
};




init();

console.log("asdgkkasdfghjksdfghj")