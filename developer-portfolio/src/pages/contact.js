// import React from 'react';
// import './contact.css'; // Import your CSS file for contact page styling

// function Contact() {
//   return (
//     <div className="contact-page">
//       <h1>Contact Us</h1>
//       <p>If you have any questions or feedback, please feel free to get in touch with us.</p>

//       <div className="contact-form">
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" rows="4" required></textarea>
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// import React, { useState } from 'react';
// import './contact.css';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:4200/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Handle success (e.g., show a success message)
//         console.log('Form submitted successfully');
//       } else {
//         // Handle error (e.g., show an error message)
//         console.error('Form submission failed');
//       }
//     } catch (error) {
//       console.error('An error occurred', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="contact-page">
//       <h1>Contact Us</h1>
//       <p>If you have any questions or feedback, please feel free to get in touch with us.</p>

//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me. You can send me an email at{' '}
        <a href="mailto:your.email@example.com">your.email@example.com</a>.
      </p>
    </section>
  );
}

export default Contact;
