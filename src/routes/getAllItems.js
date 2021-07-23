import { db } from "../database";

export const getAllItemsRoute = {
    method: 'GET',
    path: '/api/items',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * from items'
        );

        return results;
    }
}