import {useRef} from 'react';

import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

// useref is used for reading data from input. Create an object of ref pass that to input through
// attribute ref which is provided by react 
export default function NewMeetupForm(props){
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function SubmitHandler(event){
        event.preventDefault();
        const meetUpData= {
            title: titleInputRef.current.value,
            address: addressInputRef.current.value,
            image: imageInputRef.current.value,
            description: descriptionInputRef.current.value
        };
        console.log(meetUpData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref = {titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea row="5" required id="description" ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}