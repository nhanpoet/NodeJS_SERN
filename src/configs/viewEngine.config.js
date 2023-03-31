import express from 'express';


export const configViewEngine = (app) =>{
    //config static file
    app.use(express.static("./src/public"))

    //config view engine
    app.set('views engine', "ejs")
    app.set('views', "./src/views")

}