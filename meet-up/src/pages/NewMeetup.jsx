import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage(){
    const history = useHistory();
    function addMeetUpHandler(meetupData){
        console.log(meetupData);

        fetch('http://localhost:5000/api/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(meetupData)                       
        })
        .then(success => history.replace('/'))
        .catch(err => console.log(err));
    }
    return(
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup = {addMeetUpHandler}/>
    </section>
    )
}

export default NewMeetUpPage;