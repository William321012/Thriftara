import React from 'react'
import '../styles/FAQ.css'

function FAQ() {
    return (
        <div className='card-container'>
            <h1>Frequently Asked Questions</h1>
            <br></br>
            <div className='questions'>
                <h3>Question: When will this site be completed?</h3>
                <h4>Answer: Mid April</h4>
            </div>
            <div className='questions'>
                <h3>Question: When will this site be completed?</h3>
                <h4>Answer: Mid April</h4>
            </div>
            <div className='questions'>
                <h3>Question: Will this site be deployed?</h3>
                <h4>Answer: Probably not.</h4>
            </div>
            <div className='questions'>
                <h3>Question: This is a sample question?</h3>
                <h4>Answer: This is a sample answer.</h4>
            </div>
            <div className='questions'>
                <h3>Question: How will recommendations be implemented?</h3>
                <h4>Answer: There will be a survey and/or based on your frequently bought items.</h4>
            </div>
        </div>
    )
}

export default FAQ