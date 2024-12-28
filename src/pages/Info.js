import React from 'react';

const InfoPage = () => {
  return (
    <div className="info-container">
      <h2>About ISTA Lazaret Oujda</h2>
      <section className="about-school">
        <h3>Our School</h3>
        <p>
          ISTA Lazaret is a prestigious educational institution located in the heart of Oujda, Morocco. 
          We are committed to providing quality education and training in various fields, preparing our students for the challenges of the modern world.
        </p>
        <p>
          At ISTA Lazaret, we offer a range of programs focused on technical skills, innovation, and leadership. 
          Our aim is to equip students with the knowledge and tools they need to succeed in their careers.
        </p>
      </section>

      <section className="about-teachers">
        <h3>Our Teachers</h3>
        <p>
          Our teachers are highly qualified professionals with a passion for education and a commitment to student success.
          They are experts in their respective fields, dedicated to fostering an environment of learning and growth.
        </p>
        <ul>
          <li><strong>Dr. Mohamed Boulahdour</strong> - Expert in Computer Science</li>
          <li><strong>Prof. Fatima El Amrani</strong> - Mathematics and Statistics Specialist</li>
          <li><strong>Dr. Ahmed Ouahed</strong> - Web Development Instructor</li>
          <li><strong>Prof. Nadia Benali</strong> - Software Engineering Expert</li>
        </ul>
      </section>

      <section className="about-direction">
        <h3>Our Direction</h3>
        <p>
          The direction team at ISTA Lazaret is composed of highly experienced leaders who guide the institution towards excellence. 
          They ensure that the school is always evolving, staying ahead of educational trends, and maintaining the highest standards of academic achievement.
        </p>
        <p>
          <strong>Dr. Youssef Ouazzani</strong> - Director of ISTA Lazaret
        </p>
        <p>
          Dr. Ouazzani is responsible for overseeing the overall operations of the school, ensuring that the programs are aligned with the industry demands, and managing the administrative functions. He works closely with both the teaching staff and the students to maintain an atmosphere of collaboration and growth.
        </p>
      </section>
      
      <section className="contact-info">
        <h3>Contact Information</h3>
        <p>
          If you have any questions or need more information, feel free to reach out to us:
        </p>
        <ul>
          <li><strong>Email:</strong> info@istalazaret.com</li>
          <li><strong>Phone:</strong> +212 555 555 555</li>
          <li><strong>Address:</strong> Oujda, Morocco</li>
        </ul>
      </section>
    </div>
  );
};

export default InfoPage;
