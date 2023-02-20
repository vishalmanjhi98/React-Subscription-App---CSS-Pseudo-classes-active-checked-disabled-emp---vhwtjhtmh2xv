import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header">Join our community</h2>
          <p>30-day, hassle-free monkey back gurarantee</p>
          <p>Gain access to our full library of tutorials along with experts code reviews. Perfect for any developers
            who are serious about honing their skills.
          </p>
        </div>
        <div class="card-details">
          <div class="card">
            <p class="card-header">Monthly Subscription</p>
            <p>
              <span>$29</span>
              Per Month
            </p>
            <p>Full access for less than $1 a day.</p>
            <button>Sign Up</button>
          </div>
          <div class="why-us">
            <h4 class="why-us-header">Why Us</h4>
            <ul className="why-us-items">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access yo our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;