const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

   app.get('/',function(req,res) {
     res.sendfile(path.join(__dirname + "/index.html"));
   });

   app.get('/review/:reviewid',function(req, res) {
     let reviewid = req.params.reviewid;
     res.send("Review identification number: " + reviewid);
   });
   
   app.get('/review/:n/:stars',function(req, res) {
      let rating = req.params.stars;
      let n = req.params.n;
      res.send(n + " got " + rating + " rating.");
   });
   
   app.get("/review/:n/:from_date/:to_date", function(req,res) {
      let n = req.params.n;
      let start = req.params.from_date;
      let end = req.params.to_date;
      res.send("Reviews for " + n + " date from " + start + " to " + end);
   });

   app.delete("review/:reviewid",function(req,res) {
      let reviewid = req.params.reviewid;
      res.send("Review number " + reviewid + "has been deleted.");
   });
   
   app.post("/review/:reviewid", function(req,res) {
      let reviewid = req.params.reviewid;
      console.log(req.body);
      res.send("Review posted as " + reviewid);
   });
   
   app.put("/review/:reviewid", function(req,res) {
      let reviewid = req.params.reviewid;
      console.log(req.body);
      res.send("Review " + reviewid + " has been updated.")
   });
   
app.listen(8080, function() {
   console.log('Server is running on port 8080');
});