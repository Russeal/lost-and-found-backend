import { db } from '../database';

export const searchItemsRoute = {
    method: 'POST',
    path: '/api/search',
    handler: async (req, h) => {
        const { str = '', location = '' } = req.payload;

        const text1 = "%" + str + "%";
        const text2 = "%" + location + "%";

        const { results } = await db.query(`
            SELECT * FROM items
                WHERE LOWER(CONCAT(name, '', details, '')) LIKE LOWER(?)
                and LOWER(CONCAT(location, '')) LIKE LOWER(?)
            `,
            [text1, text2]
        );

        return results;
    }
}