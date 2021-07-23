import { Boom } from "@hapi/boom";
import { db } from "../database";

export const getItemRoute = {
    method: 'GET',
    path: '/api/items/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * from items WHERE id=?',
            [id],
        );

        // if (!results[0]) throw Boom.notFound(`Item does not exist with id ${id}`);
        if (!results[0]) return "There is no such fucking item";

        const item = results[0];
        return item;
    }
}