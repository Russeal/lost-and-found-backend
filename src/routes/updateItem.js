import { db } from '../database';
import * as admin from 'firebase-admin';

export const updateItemRoute = {
    method: 'POST',
    path: '/api/items/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const { name = '', category = '', status = '', date = '', time = '', location = '', details = '' } = req.payload;
        const token = req.headers.authorization;
        const user  = await admin.auth().verifyIdToken(token);
        const profile_id = user.user_id;

        await db.query(
            `UPDATE items
                SET  name=?, category=?, status=?, date=?, time=?, location=?, details=?
                WHERE id=? AND profile_id=?
            `,
            [name, category, status, date, time, location, details, id, profile_id]
        );

        const { results } = await db.query(`
            SELECT * FROM items WHERE id=? and profile_id=?
            `,
            [id, profile_id]
        );

        return results[0];
    }
}