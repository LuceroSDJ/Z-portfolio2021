import React from 'react';

function ContactForm() {
    return(
        <div id='contact'>
            <h3 className='messageForm'>KEEP IN TOUCH!</h3>

            <div class='container'>
                <form >
                    <label htmfor='fname'>First Name</label>
                    <input type='text' id='fname' name='firstname' placeholder='Your name..' />

                    <label htmlfor='lname'>Last Name</label>
                    <input type='text' id='lname' name='lastname' placeholder='Your last name..' />

                

                    <label htmlfor='subject'>Subject</label>
                    <textarea id='subject' name='subject' placeholder='Write something..' style={{height:200+ 'px'}}></textarea>

                    <input type='submit' value='Submit'/>
                </form>
            </div>
</div>


    )
}

export default ContactForm;