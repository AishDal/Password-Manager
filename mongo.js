const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')

const authRoutes=require('./routes/auth-routes');



const app=express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/auth',authRoutes);

//mongoose.connect("mongodb+srv://aishikim06:<password>@cluster0.q08tzu8.mongodb.net/?retryWrites=true&w=majority")

mongoose.connect("mongodb+srv://Aishikim:1234@cluster0.q08tzu8.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    }) ;
}).catch((error)=>{
    console.log(error);
}
);
