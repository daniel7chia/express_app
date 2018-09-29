module.exports.controller = (app) => {
  //get hpmepage
  app.get('/', (req, res) => {
    res.render('index', {title: 'Express' });
   })
}
