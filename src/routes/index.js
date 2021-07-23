import { createNewItemRoute } from "./createNewItem";
import { deleteItemRoute } from "./deleteItem";
import { filesRoutes, staticFilesRoute } from "./files";
import { getAllItemsRoute } from "./getAllItems";
import { getItemRoute } from "./getItem";
import { getItemsByCategoryRoute } from "./getItemsByCategory";
import { getProfileItemsRoute } from "./getProfileItems";
import { updateItemRoute } from "./updateItem";

export default[
    getAllItemsRoute,
    getItemRoute,
    getProfileItemsRoute,
    createNewItemRoute,
    updateItemRoute,
    deleteItemRoute,
    staticFilesRoute,
    getItemsByCategoryRoute,
    ...filesRoutes
];
