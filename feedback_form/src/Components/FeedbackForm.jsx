import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target; // Extracts name and value from target object in DOM element
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.email}
        `;

        const isConfirmed = window.confirm(`Please fonfirm your details:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Submitting Feedback', formData);
            setFormData({
                name: '',
                email: '',
                feedback: ''
            });

            alert("Thank you for the feedback");
        }   

    }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
            type="text"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}

        />
        <input
            type="email"
            name="email"
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
        />
        <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
