import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
           {/* Page Header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/* Section for describing the purpose or overview of the app */}
            <section className="description">
                {/* Description content goes here */}
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                {/* Primar call to action button */}
                <button className="get-start-button">Get Started</button>
            </section>
            {/* Section to list or categorize different types of events */}
            <section className="events_categories">
                {/* Event categories content goes here */}
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            {/* Section to highlight app features or functionalities */}
            <section className="features">
                {/* Features content goes here */}
                <h2>Feature</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
                {/* Testimonials content goes here */}
                <h2>Testimonials</h2>
                <div className="testimonial"> 
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
            {/* Section to provide contact information or a contact form */}
            <section className="contact">
                {/* Contact content goes here */}
                <h2>Contact Us</h2>
                {/* Contact Form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>

            {/* Add footer class */}
            <Footer/> 
        </div>
    );
};

export default EventPlanner;
