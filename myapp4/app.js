const express=require("express");
const app=express();
app.get("/", function(req,res){
    (async () => {
  try {
    const response = await fetch(
      ('https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=223840b882631745a9e18e2a758f003f')
    );

    const json = await response.json();

    console.log(json);
    // console.log(json.explanation);

  } catch (error) {
    console.log(error.response.body);
  }
})();
    res.send("Server is up and running.")
})

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})