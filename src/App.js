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
          <div className="row">
            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  },
                  {
                    name: "my site",
                    link: 'http://sd'
                  }
                ]}
              />
            
            </div>
            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>

            <div className="col-md-4">
              <Card 
                title="Proj1"
                description="A nice project made entirely by me"
                image="img/p-2.jpg"
                links={[
                  {
                    name: "Github",
                    link: "https://github.com/hututudor/landing-page"
                  }
                ]}
              />
            
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
