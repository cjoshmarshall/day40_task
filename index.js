const express=require("express");

const app=express();
const port=3001;

const postsRoutes=require("./routes/postRoute")

const middleware=require("./middleware")


app.use(express.json())
app.use(middleware.logging)

app.use("/posts",postsRoutes)

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});