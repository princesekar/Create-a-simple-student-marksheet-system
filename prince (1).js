var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "12345",  
database: "javatpoint"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE students ('Student Name' VARCHAR(255), ID INT(3), 'Subject 1' INT(3), 'Subject 2' INT(3), 'Subject 3' INT(3), 'Subject 4' INT(3), 'Subject 5' INT(3))";
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  