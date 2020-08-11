const {Pool} = require('pg');
const myURI = 'postgres://dmovejsl:cPhOfsgPHYeRQURlJgbhtXwXCjywdnDU@ruby.db.elephantsql.com:5432/dmovejsl';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({connectionString:myURI});



module.exports = {
    query:(command)=>{
        return pool.query(command)
    }
};