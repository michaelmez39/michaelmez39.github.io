import "./Resume.css"
export default function Resume() {
    //const resume_file = require("/michaelmezzinaresume2022objective.pdf");
    return <div className="resume">
        <h2>Resume</h2>
        <small><a href="/michaelmezzinaresume2022objective.pdf" download>Download</a></small>
        <h2>Objective</h2>
        <p>
        Learning about new ideas and technology has been one of the joys in my life, and I hope
        to take this passion for learning into any job I start. In my career, I want to help improve
        the lives of others and make society work better as a whole.
        </p>
        <h2>Experience</h2>
        <h3>American Express </h3>
        <ul className="fancy-list">
            <li>Work with Global Acquisitions and Onboarding department of American Express. Our main role was maintaining the system used to onboard new credit card users.</li>
            <li>
            Add features to software that configured the on boarding system and polish existing features in the system
            </li>
        </ul>

    </div>
}