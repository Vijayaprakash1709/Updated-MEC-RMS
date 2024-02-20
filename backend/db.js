const mysql = require("mysql2")

const db = mysql.createConnection({


    "host":"localhost",
    "port":3306,
    "user":"root",
    "password":"",
    "database":"mec_report_management",
    "connectTimeout":3000000

    // "host":"localhost",
    // "port":3306,
    // "user":"testuser",
    // "password":"testuser",
    // "database":"mec_report_management",
    // "connectTimeout":3000000


})

db.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    else{
    console.log("Database connected")
    }
})

module.exports = db