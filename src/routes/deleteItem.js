import { Boom } from "@hapi/boom";
import { db } from "../database";
import * as admin from 'firebase-admin';

export const deleteItemRoute = {
    method: 'DELETE',
    path: '/api/items/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const token = req.headers.authorization;
        const user  = await admin.auth().verifyIdToken(token);
        const profile_id = user.user_id;

        await db.query(
            'DELETE FROM items WHERE id=? AND profile_id=?',
            [id, profile_id],
        );

        return { message: 'Success!' };
    }
}