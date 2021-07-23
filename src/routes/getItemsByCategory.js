import { db } from "../database";

export const getItemsByCategoryRoute = {
    method: 'GET',
    path: '/api/{category}/items',
    handler: async (req, h) => {
        const category = req.params.category;
        const { results } = await db.query(
            'SELECT * from items WHERE category=?',
            [category]
        );

        return results;
    }
}