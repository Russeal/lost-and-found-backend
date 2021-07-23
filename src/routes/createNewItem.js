import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';
import { db } from '../database';

export const createNewItemRoute = {
    method: 'POST',
    path: '/api/items',
    handler: async (req, h) => {
        const token = req.headers.authorization;
        const user  = await admin.auth().verifyIdToken(token);
        const profile_id = user.user_id;
        const id = uuid();
        const { name = '', category = '', status = '', date = '', time = '', location = '', details = '' } = req.payload;

        await db.query(
            `INSERT INTO items (id, name, category, status, date, time, location, details, profile_id)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [id, name, category, status, date, time, location, details, profile_id]
        );

        return { id, name, category, status, date, time, location, details, profile_id }
    }
}