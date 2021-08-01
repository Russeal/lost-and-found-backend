import dotenv from 'dotenv';
dotenv.config();
import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import * as admin from 'firebase-admin';
import { db } from './database';
import routes from './routes';
import myCredentials from '../credentials.json';

admin.initializeApp({
    credential: admin.credential.cert(myCredentials)
});

let server

const start = async () => {
    // server = Hapi.server({
    //     port: 8080,
    //     host: '0.0.0.0'
    // });
    server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    await server.register(inert);
    
    routes.forEach(route => server.route(route));

    db.connect();

    await server.start();
    console.log(`Server is listening on ${ server.info.uri }`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({ timeout: 10000 });
    db.end();
    console.log('Server stopped.');
    process.exit(0);
});

start();
