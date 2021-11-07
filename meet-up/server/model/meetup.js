export class Meetup{

    static dbConnection = null;

    constructor(title,address,image,description,id = 0){
        this.id = id;
        this.Title = title; 
        this.Address = address; 
        this.Image = image; 
        this.Description = description; 
    }

    saveMeetup(){
        Meetup.dbConnection.runCommand("Insert into meetup values (?,?,?,?)",Object.values(this).filter(val => val != 0));
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