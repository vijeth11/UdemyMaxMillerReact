const sqlite3 = require('sqlite3');

/**
 * Below webpage is tutorial of using sqlite3
 * https://stackabuse.com/a-sqlite-tutorial-with-node-js/
 **/
class AppDB{
    constructor(dbFilePath){
        this.db = new sqlite3.Database(dbFilePath,(err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database')
            }
        });
    }

    runCommand(sqlCommand,params){
        return new Promise((resolve,reject) => { 
            this.db.run(sqlCommand,params,(err) => {
                if(err){
                    console.log("ERROR!",err);
                    reject(err);
                }else{
                    resolve("success");
                }
            });
        });
    }

    createTheTable(tableCommand){
        return new Promise((resolve,reject) => {
            this.db.run(tableCommand,(err) => {
                if(err){
                    console.log("ERROR!",err);
                    reject(err);
                }else{
                    resolve("success");
                }
            });
        });
    }

    getData(sqlcommand,params=[]){
        return new Promise((resolve,reject) => {
            this.db.all(sqlcommand, params, (err, result) => {
                if (err) {
                console.log(err)
                reject(err);
                } else {
                // do something with result
                resolve(result);
                }
            });
        });
    }
}

module.exports = AppDB;

