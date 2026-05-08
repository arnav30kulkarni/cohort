import pg = require("pg");

const client = new pg.Client({
    host: "localhost",
    port:5432,
    database: "db_name",
    user:"username",
    password:"db_pass"
})

client.connect();

const getUser = async(email:string)=>{
    const client = new pg.Client({
    host: "localhost",
    port:5432,
    database: "YourDbName",
    user:"postgres",
    password:"Pass"
    });

    await client.connect();
    const query = "select * from users where email=$1";
    const result = await client.query(query,[email]);

    if(result.rows.length>0){
        console.log(result.rows[0]);
        return result.rows[0];
    }else{
        console.log("user not found");
        return null;
    }
};

try{
    getUser("arnav30k@gmail.com");
}catch (error) {
    console.error("Error fetching user:",error);
}finally{
    client.end();
};