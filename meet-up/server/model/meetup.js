class Meetup{

    constructor(title,address,image,description,id = 0){
        this.id = id;
        this.Title = title; 
        this.Address = address; 
        this.Image = image; 
        this.Description = description; 
    }

    saveMeetup(){
        console.log(Object.values(this).filter(val => val !== 0));
        return Meetup.dbConnection.runCommand("Insert into meetup (title,address,image,description) values (?,?,?,?)",Object.values(this).filter(val => val !== 0));
    }

    static getMeetupById(id){
        return Meetup.dbConnection.getData("Select * from meetup where id = ? ",[id]);
    }


    static getMeetUps(){
        return Meetup.dbConnection.getData("Select * from meetup ",[]);
    }

    static deleteMeetupId(id){
        Meetup.dbConnection.runCommand("Delete from meetup where id = ?",[id]);
    }
}
Meetup.dbConnection = null;
module.exports = Meetup;