const Meetup = require("../model/meetup")

exports.getMeetupDetails = (req,res,next)=>{
    Meetup.dbConnection = req.dataBase;
    Meetup.getMeetupById(req.params.id)
    .then(result => {
        res.send(result);
    })
}

exports.getAllMeetups = (req,res,next) => {
    Meetup.dbConnection = req.dataBase;
    Meetup.getMeetUps()
    .then(result => {
        res.send(result);
    })
}

exports.addMeetupDetails = (req,res,next) => {
    Meetup.dbConnection = req.dataBase;    
    let meetup = new Meetup(req.body.title,req.body.address,req.body.image,req.body.description);
    meetup.saveMeetup()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    })
}

exports.deleteMeetupDetails = (req,res,next) => {
    Meetup.dbConnection = req.dataBase;
}