const sqlite3 = require('sqlite3');

export class AppDB{
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
        this.db.run(sqlCommand,params,(err) => {
            if(err){
                console.log("ERROR!",err);
            }
        });
    }

    createTheTable(tableCommand){
        this.db.run(tableCommand,(err) => {
            if(err){
                console.log("ERROR!",err);
            }
        });
    }

    getData(sqlcommand,params=[]){
        return new Promise((resolve,reject) => {
            this.db.get(sqlcommand, params, (err, result) => {
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
