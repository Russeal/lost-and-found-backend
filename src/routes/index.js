import { createNewItemRoute } from "./createNewItem";
import { deleteItemRoute } from "./deleteItem";
import { getAllItemsRoute } from "./getAllItems";
import { getItemRoute } from "./getItem";
import { getProfileItemsRoute } from "./getProfileItems";
import { updateItemRoute } from "./updateItem";

export default[
    getAllItemsRoute,
    getItemRoute,
    getProfileItemsRoute,
    createNewItemRoute,
    updateItemRoute,
    deleteItemRoute
];
