import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Card from './Card';
import Skill from './Skill';
import Contact from './Contact';
import data from './data.json'

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
              eraseDelay={3000}
              speed={100}
            />
          </div>
        </header>
        <section className="section-about">
            <div className="col-md-4 col-md-offset-4 col-sm-12 about">
              <h2 className="heading-primary">About my work</h2>
              <div className="about__text-box">
                <p className="about__text">
                  I have done a series of projects, varying from web apps to games and even designed some websites. This is what I do and I like it. My speciality is web development. I love it!
                </p>
              </div>
            </div>
        </section>
        <section className="projects">
          <h1 className="projects__title">Some of my projects</h1>
          <div className="row">
              {
                data.projects.map((project, index) => (
                  <div className="col-md-4">
                    <Card 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      links={project.links}
                    />  
                  </div>
                ))
              }          
          </div>
        </section>
        <section className="section-skills">
          <h1 className="skill__text">Technologies I know</h1>
            <div className="row">
                {
                  data.skills.map((skill, index) => (
                    <div className="col-md-3 col-xs-12" key={index}>
                      <Skill 
                        title={skill.title}
                        icon={skill.icon}
                      />
                    </div>
                  ))
                }
            </div>
        </section>
        <section className="section-contact">
          <h1 className="contact__text">Contact me</h1>
          <div className="row">
              {
                data.contacts.map((contact, index) => (
                  <div className="col-md-4 col-xs-12" key={index}>
                    <Contact 
                      icon={contact.icon}
                      title={contact.title}
                      content={contact.content}
                    />
                  </div>
                ))
              }
          </div>
        </section>
        <footer className="footer">
            <p className="footer__text">
              Copyright &copy; {data.copyright_year} <a href="tudorhutu.ro" className="footer__link"> Hutu Tudor</a>.
            </p>
        </footer>
      </div>
    );
  }
}

export default App;
