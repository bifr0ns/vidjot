if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: '<<link from mlab>>'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }
