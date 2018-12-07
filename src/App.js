import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__main">
            <h1 className="header__title">Tudor Hutu</h1>
            <ReactTypingEffect
              className="header__text"
              staticText=">"
              text={[
                'Developer.',
                'Designer.',
                'Programmer.',
              ]}
              eraseDelay="3000"
              speed="100"
            />
          </div>
        </header>
        <section className="section-about">
            <div className="about">
              <h2 className="heading-primary">About my work</h2>
              <div className="about__text-box">
                <p className="about__text">
                  I have done a series of projects, varying from web apps to games and even designed some websites. This is what I do and I like it. :)
                </p>
              </div>
            </div>
        </section>
        <section className="section-projects">
            <div className="projects">
              
            </div>
        </section>
      </div>
    );
  }
}

export default App;
