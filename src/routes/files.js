const angularRoutePaths = [
    '/',
    '/items',
    '/my-items',
    '/new-item',
    '/items/{id}',
    '/edit-item/{id}',
    '/contact/{id}',
    '/{category}/items',
    '/en',
    '/en/items',
    '/en/my-items',
    '/en/new-item',
    '/en/items/{id}',
    '/en/edit-item/{id}',
    '/en/contact/{id}',
    '/en/{category}/items'
];

export const filesRoutes = angularRoutePaths.map(path => ({
    method: 'GET',
    path,
    handler: (req, h) => {
        return h.file('dist/learn/index.html');
    }
}))

export const staticFilesRoute = {
    method: 'GET',
    path: '/{params*}',
    handler: {
        directory: {
            path: 'dist/learn'
        }
    }
}