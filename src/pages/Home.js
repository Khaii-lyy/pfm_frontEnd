import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


const Home = () => {
  return (
    <Container className="home-container">
      
      <div className="quote-section">
        <blockquote className="quote">
          "Education is the most powerful weapon which you can use to change the world."
        </blockquote>
        <cite className="author">— Nelson Mandela</cite>
      </div>

     
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to ISTA Lazaret</h1>
        <p className="welcome-text">
          We are delighted to have you here! ISTA Lazaret is committed to nurturing talent and fostering 
          knowledge through a blend of academic excellence and real-world applications.
        </p>
      </div>

      
      <div className="slider-section">
        <Carousel>{/*create a slideshow of images that users can navigate through.*/} 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.6cc759127e6d1a876fda420ded4fda6a?rik=wNMsSWWxMzo7YQ&pid=ImgRaw&r=0"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Excellence in Education</h3>
              <p>Providing world-class education to future leaders.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.ofppt.ma/sites/default/files/styles/thumbnail_page_detail/public/photos_actualites/SES.png?itok=vIrfOHYj"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>State-of-the-Art Campus</h3>
              <p>A conducive environment for learning and growth.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP._Yvoq8qwHr9eFU8lPJhU9wHaEj?pid=ImgDet&w=206&h=126&c=7&dpr=1.6"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Innovative Learning</h3>
              <p>Empowering students through creativity and innovation.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default Home;
