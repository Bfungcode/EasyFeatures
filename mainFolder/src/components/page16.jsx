import React, { useEffect } from "react";
import "../styles/d16.css";

const TestiCard = () => {
  const testimonials = [
    {
      name: "Miyah Myles",
      position: "Marketing",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
      name: "June Cha",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    },
    {
      name: "Iida Niskanen",
      position: "Data Entry",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: "Renee Sims",
      position: "Receptionist",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: "Jonathan Nunfiez",
      position: "Graphic Designer",
      photo: "https://randomuser.me/api/portraits/men/43.jpg",
      text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
    {
      name: "Sasha Ho",
      position: "Accountant",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    },
    {
      name: "Veeti Seppanen",
      position: "Director",
      photo: "https://randomuser.me/api/portraits/men/97.jpg",
      text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
  ];
  useEffect(() => {
    let idx = 1;
    setInterval(() => {
      const testimonial = document.querySelector(".testimonial");
      const userImage = document.querySelector(".user-image");
      const username = document.querySelector(".username");
      const role = document.querySelector(".role");
      const { name, position, photo, text } = testimonials[idx];

      testimonial.innerHTML = text;
      userImage.src = photo;
      username.innerHTML = name;
      role.innerHTML = position;

      idx++;

      if (idx > testimonials.length - 1) {
        idx = 0;
      }
    }, 10000);
  });
  return (
    <div className="d16Wrapper">
      <div class="testimonial-container">
        <div class="progress-barTesti"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">
          I've worked with literally hundreds of HTML/CSS developers and I have
          to say the top spot goes to this guy. This guy is an amazing
          developer. He stresses on good, clean code and pays heed to the
          details. I love developers who respect each and every aspect of a
          throughly thought out design and do their best to put it in code. He
          goes over and beyond and transforms ART into PIXELS - without a
          glitch, every time.
        </p>
        <div class="user">
          <img
            src="https://randomuser.me/api/portraits/women/46.jpg"
            alt="user"
            class="user-image"
          />
          <div class="user-details">
            <h4 class="username">Miyah Myles</h4>
            <p class="role">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
