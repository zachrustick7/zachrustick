import {React, useEffect, useState, useRef} from 'react';
//import ZachRustickPhoto from './ZachRustickPhoto.jpeg';
import ZachRustickPhoto from './duotone_zach.png';
import AtlSkyline from './AtlSkylineDuoTone.png';
import coursebuddyImg from './coursebuddy_screengrab.png';
import bluefletchImg from './bluefletch_screengrab.png';
import { SocialIcon } from 'react-social-icons';
import 'material-icons/iconfont/material-icons.css';
import { motion } from "framer-motion";
import {useTransition, animated} from 'react-spring';
import {Link} from 'react-scroll';

import './App.css';

//#6736dd teil
//#10c5f8 purp
function App() {

  const [wh, setWh] = useState(window.innerHeight);
  const [ww, setWw] = useState(window.innerWidth);
  const [webDevSkills, setWebDevSkills] = useState([
    {delay: 200, skillName: 'React.js', skillPercent: '90%', wait: 0.5},
    {delay: 400, skillName: 'Javascript/HTML', skillPercent: '90%', wait: .75},
    {delay: 600, skillName: 'Tailwind CSS', skillPercent: '80%', wait: 1}
  ]);
  const [backendDevSkills, setBackendDevSkills] = useState([]);
  const [designSkills, setDesignSkills] = useState([]);
  
  const skillsBarRef = useRef(null);

  const webDevTransition = useTransition(webDevSkills, {
    from: {maxHeight: 0, opacity: 0, padding: '0px 0px', boxSizing: 'border-box'},
    enter: item => (next) => (
      next({maxHeight: 500, opacity: 1, padding: '12px 40px', boxSizing: 'border-box', delay: item.delay})
    ),
    leave: {maxHeight: 1, opacity: 0, padding: '0px 0px', boxSizing: 'border-box'},
    config: { duration: 100 },
  });

  const backendDevTransition = useTransition(backendDevSkills, {
    from: {maxHeight: 0, opacity: 0, padding: '0px 0px', boxSizing: 'border-box'},
    enter: item => (next) => (
      next({maxHeight: 500, opacity: 1, padding: '12px 40px', boxSizing: 'border-box', delay: item.delay})
    ),
    leave: {maxHeight: 1, opacity: 0, padding: '0px 0px', boxSizing: 'border-box'},
    config: { duration: 100 },
  });

  const designTransition = useTransition(designSkills, {
    from: {maxHeight: 0, opacity: 0, padding: '0px 0px', boxSizing: 'border-box'},
    enter: item => (next) => (
      next({maxHeight: 500, opacity: 1, padding: '12px 40px', boxSizing: 'border-box', delay: item.delay})
    ),
    leave: {maxHeight: 1, opacity: 0, padding: '0px 0px', boxSizing: 'border-box'},
    config: { duration: 100 },
  });

  const arrowVariants = {
    expanded: {
      rotate: [0, 180],
      transition: {
        duration: .25,
      }
    },
    collapsed: {
      rotate: [180, 0],
      transition: {
        duration: .25,
      }
    },
    initial: {
      
    }
  };

  useEffect(() => {
    function handleResize() {
      // Update the state or perform any other actions when the
      // browser is resized
      setWh(window.innerHeight);
      setWw(window.innerWidth);
    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header 
        style={{
          backgroundColor: '#404040',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Nunito Sans',
          color: 'white'
        }}
        >
          {/* header */}
          <div 
            style={{
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              padding: '24px',
              boxSizing: 'border-box',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'fixed',
              backgroundColor: '#404040',
              bottom: window.innerHeight > window.innerWidth ? '0px' : '',
              zIndex: 2
            }}
          >          
              <p style={{fontWeight: '700'}}>{wh > ww ? '' : 'Zach Rustick'}</p>
              <div style={{width: wh > ww ? '100%' : '', display: 'flex', justifyContent: 'space-evenly', fontSize: 'calc(11px + .5vw)', fontWeight: '600'}}>
                <Link activeStyle={{color: '#3C7EEB'}} to="home" spy={true} smooth={true} offset={-50} duration={500}><p style={{margin: '0 8px', cursor: 'pointer'}}>Home</p></Link>
                <Link activeStyle={{color: '#3C7EEB'}} to="about" spy={true} smooth={true} offset={-50} duration={500}><p style={{margin: '0 8px', cursor: 'pointer'}}>About</p></Link>
                <Link activeStyle={{color: '#3C7EEB'}} to="skills" spy={true} smooth={true} offset={-50} duration={500}><p style={{margin: '0 8px', cursor: 'pointer'}}>Skills</p></Link>
                <Link activeStyle={{color: '#3C7EEB'}} to="projects" spy={true} smooth={true} offset={-50} duration={500}><p style={{margin: '0 8px', cursor: 'pointer'}}>Projects</p></Link>
                <Link activeStyle={{color: '#3C7EEB'}} to="contact" spy={true} smooth={true} offset={-50} duration={500}><p style={{margin: '0 8px', cursor: 'pointer'}}>{wh > ww ? 'Contact' : 'Contact Me'}</p></Link>
              </div>

          </div>

          {/* hero */}
          <div
            id="home"
            style={{
              marginTop: '80px',
              padding: '24px',
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{textAlign: 'start'}}>
              <h6>Hello, I am</h6>
              {wh > ww && <h4>Zach Rustick</h4>}
              {wh < ww && <h3>Zach Rustick</h3>}
              {/* <h3>Zach Rustick</h3> */}
              <p>Web developer/designer with a passion for creating beautiful and intuitive user experiences.</p>
              <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                <button 
                  style={{
                    color: 'white',
                    backgroundColor: '#3C7EEB',
                    borderRadius: '8px',
                    border: 'none',
                    padding: '8px 16px',
                    boxSizing: 'border-box',
                    marginTop: '24px',
                    cursor: 'pointer'
                  }}
                >
                  <p style={{fontWeight: '600'}}>See my work</p>
                </button>
              </Link>
            </div>
            {!(wh > ww) && 
              <img 
                style={{
                  objectFit: 'cover',
                  maxWidth: '260px',
                  maxHeight: '260px',
                  borderRadius: '8px',
                  marginLeft: '80px',
                  marginBottom: '16px',
                }}
                src={ZachRustickPhoto}
                alt='Mr. Zach Rustick'
              />
            }
            
            
          </div>
          

          {/* about */}
          <div
            id="about"
            style={{
              marginTop: '50px',
              padding: '24px',
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <h6>About me</h6>
            <img 
              style={{
                objectFit: 'cover',
                width: '100%',
                borderRadius: '8px',
                marginTop: '30px',
                height: '137px'
              }}
              src={AtlSkyline}
              alt='Atlanta skyline'
            />
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '30px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', maxWidth: '400px'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginRight: '16px'}}>
                  <SocialIcon network="linkedin" url='https://www.linkedin.com/in/zachary-rustick/' style={{margin: '4px'}}></SocialIcon>
                  <SocialIcon network="github" url='https://github.com/zachrustick7' bgColor='white' style={{margin: '4px'}}></SocialIcon>
                </div>
                <p style={{textAlign: 'left'}}>Software engineer, with extensive knowledge and years of experience, designing responsive websites and quality backend infrastructure.</p>
              </div>
              
              {!(wh > ww) &&
                <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
                  <div style={{textAlign: 'center', maxWidth: '70px', margin: '30px 30px'}}>
                    <h5>3+</h5>
                    <p>Years Experience</p>
                  </div>
                  <div style={{textAlign: 'center', maxWidth: '70px', margin: '30px 30px'}}>
                    <h5>2</h5>
                    <p>Companies Worked</p>
                  </div>
                  <div style={{textAlign: 'center', maxWidth: '70px', margin: '30px 30px'}}>
                    <h5>1</h5>
                    <p>Hackathons Won</p>
                  </div>
                </div>
              }
              
            </div>
          </div>

          {/* skills */}
          <div
            id="skills"
            style={{
              marginTop: '50px',
              padding: '24px',
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <h6>Skills</h6>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '30px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >

              {/* Web Development Skill */}
              <div
                style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
              >
                <div style={{display: 'flex'}}>
                  <span class='material-icons' style={{fontSize: '50px', marginRight: '24px'}}>computer</span>
                  <div style={{textAlign: 'left'}}>
                    <h6>Web Development</h6>
                    <p style={{color: '#ababab', marginTop: '-4px'}}>More than 3 years</p>
                  </div>
                </div>
                <div>
                  <motion.span
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}
                    variants={arrowVariants}
                    animate={webDevSkills.length > 0 ? 'expanded' : 'collapsed'}
                    initial='initial'
                    class='material-icons'
                    style={{fontSize: '30px', marginRight: '16px', cursor: 'pointer'}}
                    onClick={() => setWebDevSkills(skills => skills.length > 0 ? [] : [
                      {delay: 200, skillName: 'React.js', skillPercent: '90%', wait: 0.5},
                      {delay: 400, skillName: 'Javascript/HTML', skillPercent: '90%', wait: .75},
                      {delay: 600, skillName: 'Tailwind CSS', skillPercent: '80%', wait: 1}
                    ])}
                  >
                    keyboard_arrow_down
                  </motion.span>
                </div>
              </div>

              <div className='container' style={{width: '100%', height: 'auto'}}>
                {webDevTransition((style, item) =>
                  item ? 
                  <div>
                    <animated.div style={style} className='item'>
                      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <p>{item.skillName}</p>
                        <p style={{color: '#ababab'}}>{item.skillPercent}</p>
                      </div>
                      <div 
                        style={{width: '100%', height: '12px', backgroundColor: '#9CC1FF', borderRadius: '4px', display: 'flex', justifyContent: 'start', marginTop: '8px'}}
                        ref={skillsBarRef}
                      >
                        <motion.div 
                          style={{height: '100%', backgroundColor: '#3C7EEB'}}
                          initial={{ width: 0 }}
                          animate={{ width: item.skillPercent }}
                          transition={{
                            delay: item.wait,
                            duration: 1
                          }}
                        ></motion.div>
                      </div>
                    </animated.div>
                  </div>
                  : ''
                )}  
              </div>
              
              {/* Backend Development Skill */}
              <div
                style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px'}}
              >
                <div style={{display: 'flex'}}>
                  <span class='material-icons' style={{fontSize: '50px', marginRight: '24px'}}>data_object</span>
                  <div style={{textAlign: 'left'}}>
                    <h6>Backend Development</h6>
                    <p style={{color: '#ababab', marginTop: '-4px'}}>More than 1 year</p>
                  </div>
                </div>
                <div>
                  <motion.span
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}
                    variants={arrowVariants}
                    animate={backendDevSkills.length > 0 ? 'expanded' : 'collapsed'}
                    initial='initial'
                    class='material-icons'
                    style={{fontSize: '30px', marginRight: '16px', cursor: 'pointer'}}
                    onClick={() => setBackendDevSkills(skills => skills.length > 0 ? [] : [
                      {delay: 200, skillName: 'Node.js', skillPercent: '80%', wait: 0.5},
                      {delay: 400, skillName: 'Firebase', skillPercent: '70%', wait: .75},
                    ])}
                  >
                    keyboard_arrow_down
                  </motion.span>
                </div>
              </div>

              <div className='container' style={{width: '100%', height: 'auto'}}>
                {backendDevTransition((style, item) =>
                  item ? 
                  <div>
                    <animated.div style={style} className='item'>
                      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <p>{item.skillName}</p>
                        <p style={{color: '#ababab'}}>{item.skillPercent}</p>
                      </div>
                      <div 
                        style={{width: '100%', height: '12px', backgroundColor: '#9CC1FF', borderRadius: '4px', display: 'flex', justifyContent: 'start', marginTop: '8px'}}
                        ref={skillsBarRef}
                      >
                        <motion.div 
                          style={{height: '100%', backgroundColor: '#3C7EEB'}}
                          initial={{ width: 0 }}
                          animate={{ width: item.skillPercent }}
                          transition={{
                            delay: item.wait,
                            duration: 1
                          }}
                        ></motion.div>
                      </div>
                    </animated.div>
                  </div>
                  : ''
                )}  
              </div>

              {/* Design Skill */}
              <div
                style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px'}}
              >
                <div style={{display: 'flex'}}>
                  <span class='material-icons-outlined' style={{fontSize: '50px', marginRight: '24px'}}>design_services</span>
                  <div style={{textAlign: 'left'}}>
                    <h6>UI/UX Design</h6>
                    <p style={{color: '#ababab', marginTop: '-4px'}}>More than 2 year</p>
                  </div>
                </div>
                <div>
                  <motion.span
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}
                    variants={arrowVariants}
                    animate={designSkills.length > 0 ? 'expanded' : 'collapsed'}
                    initial='initial'
                    class='material-icons'
                    style={{fontSize: '30px', marginRight: '16px', cursor: 'pointer'}}
                    onClick={() => setDesignSkills(skills => skills.length > 0 ? [] : [
                      {delay: 200, skillName: 'Figma', skillPercent: '90%', wait: 0.5},
                      {delay: 400, skillName: 'Material UI', skillPercent: '85%', wait: .75},
                      {delay: 400, skillName: 'Framer Motion', skillPercent: '70%', wait: 1},
                      
                    ])}
                  >
                    keyboard_arrow_down
                  </motion.span>
                </div>
              </div>

              <div className='container' style={{width: '100%', height: 'auto'}}>
                {designTransition((style, item) =>
                  item ? 
                  <div>
                    <animated.div style={style} className='item'>
                      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <p>{item.skillName}</p>
                        <p style={{color: '#ababab'}}>{item.skillPercent}</p>
                      </div>
                      <div 
                        style={{width: '100%', height: '12px', backgroundColor: '#9CC1FF', borderRadius: '4px', display: 'flex', justifyContent: 'start', marginTop: '8px'}}
                        ref={skillsBarRef}
                      >
                        <motion.div 
                          style={{height: '100%', backgroundColor: '#3C7EEB'}}
                          initial={{ width: 0 }}
                          animate={{ width: item.skillPercent }}
                          transition={{
                            delay: item.wait,
                            duration: 1
                          }}
                        ></motion.div>
                      </div>
                    </animated.div>
                  </div>
                  : ''
                )}  
              </div>
              
            </div>
          </div>

          {/* Projects */}
          <div
            id="projects"
            style={{
              marginTop: '50px',
              padding: '24px',
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <h6>Projects</h6>
            {/* desktop */}
            {!(wh > ww) &&
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginTop: '30px',
                  flexWrap: 'wrap'
                }}
              >
                {/* coursebuddy */}
                
                <div 
                  style={{
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'start',
                    backgroundColor: '#545454',
                    height: '280px'
                  }}
                >
                  <div 
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginRight: '24px'
                    }}
                  >
                    <p>CourseBuddy, <p style={{color: '#ababab', display: 'inline'}}>Founder/ Full Stack Engineer</p></p>
                    <p style={{textAlign: 'left'}}>A college class scheduling tool that does the hard stuff for you. This project began as a hackathon submission but, after winning first place, I was encouraged to continue development on it. After taking it through UGA’s I-Corps business development program and receiving a grant from UGA’s Kickstarter fund for $1,000, it has grown to support hundreds of students each semester.</p>
                    <a style={{textDecoration: 'none'}} href='https://coursebuddy.co'><p style={{color: '#ababab'}}>coursebuddy.co</p></a>
                  </div>

                  <img 
                    style={{
                      objectFit: 'cover',
                      maxWidth: '450px',
                      borderRadius: '4px',
                      margin: '20px 0'
                    }}
                    src={coursebuddyImg}
                    alt='coursebuddy screngrab'
                  />
                </div>

                {/* bluefletch */}
                <div 
                  style={{
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'start',
                    backgroundColor: '#545454',
                    height: '280px',
                    marginTop: '40px'
                  }}
                >
                  <div 
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginRight: '24px'
                    }}
                  >
                    <p>BlueFletch, <p style={{color: '#ababab', display: 'inline'}}>React Developer</p></p>
                    <p style={{textAlign: 'left'}}>An enterprise technology company. I worked with an excellent team to help build out Bluefletch’s portal where clients can configure the software that is used by their fleet of android devices. Being my first job out of college, I learned the core fundamentals of web programming, scrum style project development, and best practices for full stack architecture.</p>
                    <a style={{textDecoration: 'none'}} href='https://bluefletch.com'><p style={{color: '#ababab'}}>bluefletch.com</p></a>
                  </div>

                  <img 
                    style={{
                      objectFit: 'cover',
                      maxWidth: '450px',
                      borderRadius: '4px',
                      margin: '20px 0'
                    }}
                    src={bluefletchImg}
                    alt='bluefletch screngrab'
                  />
                </div>
              </div>
            }
            
            {/* mobile */}
            {(wh > ww) &&
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginTop: '30px',
                  flexWrap: 'wrap'
                }}
              >
                {/* coursebuddy */}
                <div 
                  style={{
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'start',
                    backgroundColor: '#545454',
                    
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                    }}
                  >
                    <p>CourseBuddy,</p>
                    <p style={{color: '#ababab', display: 'inline'}}>Founder/ Full Stack Engineer</p>
                    <img 
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        borderRadius: '4px',
                        margin: '20px 0'
                      }}
                      src={coursebuddyImg}
                      alt='coursebuddy screngrab'
                    />
                    <a style={{textDecoration: 'none'}} href='https://coursebuddy.co'><p style={{color: '#ababab'}}>coursebuddy.co</p></a>
                    <p style={{textAlign: 'left', marginTop: '16px'}}>A college class scheduling tool that does the hard stuff for you. This project began as a hackathon submission but, after winning first place, I was encouraged to continue development on it. After taking it through UGA’s I-Corps business development program and receiving a grant from UGA’s Kickstarter fund for $1,000, it has grown to support hundreds of students each semester.</p>
                  </div>

                </div>

                {/* bluefletch */}
                <div 
                  style={{
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'start',
                    backgroundColor: '#545454',
                    marginTop: '40px'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                    }}
                  >
                    <p>BlueFletch,</p>
                    <p style={{color: '#ababab', display: 'inline'}}>Web Developer</p>
                    <img 
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        borderRadius: '4px',
                        margin: '20px 0'
                      }}
                      src={bluefletchImg}
                      alt='bluefletch screengrab'
                    />
                    <a style={{textDecoration: 'none'}} href='https://bluefletch.com'><p style={{color: '#ababab'}}>bluefletch.com</p></a>
                    <p style={{textAlign: 'left', marginTop: '16px'}}>An enterprise technology company. I worked with an excellent team to help build out Bluefletch’s portal where clients can configure the software that is used by their fleet of android devices. Being my first job out of college, I learned the core fundamentals of web programming, scrum style project development, and best practices for full stack architecture.</p>
                  </div>

                </div>
              </div>
            }

            
          </div>

          {/* contact me */}
          <div
            id="contact"
            style={{
              marginTop: '50px',
              padding: '24px',
              boxSizing: 'border-box',
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <h6>Contact me</h6>
            <div 
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingRight: '40px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{display: 'flex', marginTop: '40px',}}>
                <span class='material-icons' style={{fontSize: '50px', marginRight: '24px'}}>smartphone</span>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                  <p>Call Me</p>
                  <p style={{color: '#ababab'}}>+1 (470)-358-3419</p>
                </div>
              </div>
              <div style={{display: 'flex', marginTop: '40px',}}>
                <span class='material-icons-outlined' style={{fontSize: '50px', marginRight: '24px'}}>email</span>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                  <p>Email me</p>
                  <p style={{color: '#ababab'}}>zachrustick7@gmail.com</p>
                </div>
              </div>
              <div style={{display: 'flex', marginTop: '40px',}}>
                <span class='material-icons-outlined' style={{fontSize: '50px', marginRight: '24px'}}>location_on</span>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                  <p>Location</p>
                  <p style={{color: '#ababab'}}>Atlanta, Ga</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width: '100%', height: '80px', backgroundColor: '#3C7EEB', marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p>© Zachary Rustick. All rights reserved.</p>
          </div>
          
          {/* extra buffer for bottom nav on mobile */}
          {wh > ww &&

            <div style={{height: '60px'}}/>
          }
      </header>
    </div>
  );
}

export default App;
