import React, { useState } from "react";
import "../styles/d9.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FaqCollapse = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  return (
    <div d9Wrapper>
      <div className="container">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          <div className={`faq ${toggle1 ? "active" : null}`}>
            <h3 className="faq-title">Why shouldn't we trust atoms?</h3>

            <p className="faq-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nemo consequuntur reiciendis, deserunt voluptate labore
              dignissimos aut culpa omnis atque?
            </p>

            <button
              className="faq-toggle 1"
              onClick={() => {
                setToggle1(!toggle1);
              }}
            >
              <i className="fas fa-chevron-down">
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
              <i className="fas fa-times">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </button>
          </div>

          <div className={`faq ${toggle2 ? "active" : null}`}>
            <h3 className="faq-title">
              What do you call someone with no body and no nose?
            </h3>
            <p className="faq-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              officiis pariatur, ad atque dolorum adipisci eum voluptatem saepe
              aspernatur eos.
            </p>
            <button
              className="faq-toggle 2"
              onClick={() => {
                setToggle2(!toggle2);
              }}
            >
              <i className="fas fa-chevron-down">
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
              <i className="fas fa-times">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </button>
          </div>

          <div className={`faq ${toggle3 ? "active" : null}`}>
            <h3 className="faq-title">
              What's the object-oriented way to become wealthy?
            </h3>
            <p className="faq-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              aliquid animi provident quos officiis praesentium ab reprehenderit
              sit accusamus vel?
            </p>
            <button
              className="faq-toggle"
              onClick={() => {
                setToggle3(!toggle3);
              }}
            >
              <i className="fas fa-chevron-down">
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
              <i className="fas fa-times">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </button>
          </div>

          <div className={`faq ${toggle4 ? "active" : null}`}>
            <h3 className="faq-title">
              How many tickles does it take to tickle an octopus?
            </h3>
            <p className="faq-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, est. Quis sapiente blanditiis, eum veniam itaque non
              quos aspernatur. Sit.
            </p>
            <button
              className="faq-toggle"
              onClick={() => {
                setToggle4(!toggle4);
              }}
            >
              <i className="fas fa-chevron-down">
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
              <i className="fas fa-times">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </button>
          </div>

          <div className={`faq ${toggle5 ? "active" : null}`}>
            <h3 className="faq-title">What is: 1 + 1?</h3>
            <p className="faq-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero
              cum repellendus commodi illum doloremque! Recusandae fugit omnis
              minus odio.
            </p>
            <button
              className="faq-toggle"
              onClick={() => {
                setToggle5(!toggle5);
              }}
            >
              <i className="fas fa-chevron-down">
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
              <i className="fas fa-times">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCollapse;
