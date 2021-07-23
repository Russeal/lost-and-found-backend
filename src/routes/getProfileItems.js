import { Boom } from '@hapi/boom';
import * as admin from 'firebase-admin';
import { db } from "../database";

export const getProfileItemsRoute = {
    method: 'GET',
    path: '/api/profiles/{profileId}/items',
    handler: async (req, h) => {
        const token = req.headers.authorization;
        const user  = await admin.auth().verifyIdToken(token);
        const profileId = req.params.profileId;

        if (user.user_id !== profileId) throw Boom.unauthorized('User can only their own items!');

        const { results } = await db.query(
            'SELECT * from items WHERE profile_id=?',
            [profileId],
        );

        return results;
    }
}