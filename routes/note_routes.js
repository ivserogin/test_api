module.export = function (app, db){
app.post('./notes',(req, res)=>{
  const note = {tetx: req.body.body, title: req.body.title};
  db.collection('notes').insert(note, (err, result)=>{
    if (err) {
      res.send ({'error':'An error has occurred'});
    }else {
      res.send(result.ops[0]);
    }
  });
});
};
/*module.export = function (app, db){
  app.post('./notes', (req, res)=>{
    console.log(req.body);
    res.send('Hello');
  });
};*/
