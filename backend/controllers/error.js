exports.get404 = ( req, res, next ) => {
    const error = new Error( 'Not Found' );
    error.statusCode = 404;
    next(error);
};
