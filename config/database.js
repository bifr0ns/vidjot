if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://alexis:alexis@ds261678.mlab.com:61678/vidjot-prod'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }