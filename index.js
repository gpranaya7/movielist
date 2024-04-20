import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const films=[];
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
  res.render("index.ejs",{films})

});
app.post("/submit",(req,res)=>{
const {firstfilm}=req.body;
films.push(firstfilm);
  res.redirect("/");
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  