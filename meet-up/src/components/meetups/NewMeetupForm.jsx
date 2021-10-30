import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

export default function NewMeetupForm(props){
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor>Meetup Title</label>
                    <input type="text" required id="title" />

                </div>
            </form>
        </Card>
    )
}