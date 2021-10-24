import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";
// custom comonent clas or Function name should start form capital Letter
// because when used in jsx html it will help react easily differentate between 
// default html code and user defined component code. so that it can neatly render the 
// user defined code.
// useSate is the function used to create the state and change the state in function oriented
export default function Todo(props) {
    const [showModal , setModal] = useState(false);

    function deleteHandler(){
        setModal(true);
    }
    
    function closeModal(){
        setModal(false);
    }

    return (
    <div className="card">
        <h2>{ props.text }</h2>
        <div className="actions">            
            <button className="btn" onClick={deleteHandler} >Delete</button>
        </div>
        { showModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
        { showModal && <Backdrop onCancel={closeModal}/> }    
    </div>    
    );
}