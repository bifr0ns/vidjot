if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURL: 'mongodb://alexis:alexis@ds261678.mlab.com:61678/vidjot-prod'}
} else{
    module.exports = {mongoURL: 'mongodb://localhost/vidjot-dev'}
}