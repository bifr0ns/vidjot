if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://ale:ale@ds263138.mlab.com:63138/vidjot'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }