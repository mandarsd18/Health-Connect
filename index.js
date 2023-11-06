const express=require("express")
const path=require("path")
const data=require("./data")
const app=express();

app.set("view engine",'ejs');
app.set("views",path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'public')));


app.get("/",(req,res)=>{
    res.render('Home.ejs',{data})
})
app.get("/hospital/:id",(req,res)=>{
    const hospitalId = req.params.id;
    let specData;
    for (let item of data){
        if (item.id == hospitalId) {
           specData = item;
        //    console.log(item)
        }
    }
    res.render("Hospital.ejs",{specData})
})
                                               1
app.get("/doctor/:id",(req,res)=>{
    const info = req.params;
    console.log(info)
    // let data=req.params;
    // console.log(data)
    
    let specData;
    for (let item of data){
        if (item.id == info.id) {
           specData = item;
        //    console.log(item)
        }
    }
    res.render("Doctor.ejs",{specData})
})

app.get("/allHospitals",(req,res)=>{
    res.render('AllHospital.ejs',{data})
})
app.get("/allDoctors",(req,res)=>{
    res.render('AllDoctor.ejs',{data})
})
app.get("/contactUs",(req,res)=>{
    res.render('ContactUs.ejs')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})