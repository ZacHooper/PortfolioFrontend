import Section from "./section";
import Card from "./card";
import CVButton from "./cvButton";
import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";


const SectionContainer = ({ children, activeSection, homepage, articles, projects }) => {
    switch (activeSection) {
        case "home":
            const { alternativeText, width, height } = homepage.attributes.profilePicture.data.attributes;
            return (
                <Section name="sec1" extraClasses="header" id="home" isActive>
                    <div className="header-content">
                        <div className="left-header">
                            <div className="h-shape"></div>
                            <div className="image">
                                <NextImage src={getStrapiMedia(homepage.attributes.profilePicture)}
                                           layout="responsive"
                                           width={width}
                                           height={height}
                                           objectFit="contain" />
                            </div>
                        </div>
                        <div className="right-header">
                            <h1 className="name">
                                Hi, I&apos;m <span>Zac Hooper.</span><br />
                                A Data Scientist.
                            </h1>
                            <p>{homepage.attributes.description}</p>
                            <CVButton />
                        </div>
                    </div>
                </Section>
            )
        
        case "about":
            return (
                <Section name="sec2" extraClasses="about" id="about" isActive>
                    <div className="main-title">
                        <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
                    </div>
                    <div className="about-container">
                        <div className="left-about">
                            <h4>Information About me</h4>
                            <p>
                            I am a Data Scientist with strong analytical and statistical skills. 
                            I have proven experience wrangling, visualising, building models and developing stories about data.
                            </p>
                            <CVButton />
                        </div>
                        <div className="right-about">
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">3+</p>
                                    <p className="small-text">Years of<br /> experience</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">5+</p>
                                    <p className="small-text">Programming <br /> languages</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">Efficient</p>
                                    <p className="small-text">Data <br /> analysis</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">Detailed</p>
                                    <p className="small-text">Dataset <br /> management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <h4 className="stat-title">My Skills</h4>
                        <div className="progress-bars">
                            <div className="progress-bar">
                                <p className="prog-title">Python</p>
                                <div className="progress-con">
                                    <p className="prog-text">90%</p>
                                    <div className="progress">
                                        <span className="python"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">R</p>
                                <div className="progress-con">
                                    <p className="prog-text">75%</p>
                                    <div className="progress">
                                        <span className="r"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">javascript</p>
                                <div className="progress-con">
                                    <p className="prog-text">75%</p>
                                    <div className="progress">
                                        <span className="js"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">SQL</p>
                                <div className="progress-con">
                                    <p className="prog-text">75%</p>
                                    <div className="progress">
                                        <span className="sql"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">HTML/CSS</p>
                                <div className="progress-con">
                                    <p className="prog-text">60%</p>
                                    <div className="progress">
                                        <span className="htmlcss"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">AWS</p>
                                <div className="progress-con">
                                    <p className="prog-text">60%</p>
                                    <div className="progress">
                                        <span className="aws"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="stat-title">My Timeline</h4>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2021</p>
                            <h5>Graduate Certificate of Data Science<span> - RMIT</span></h5>
                            <p>
                                Data modelling, applied analytics, data visualising, data wrangling
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2021</p>
                            <h5>Fundamentals of the Databricks Lakehouse Platform<span> - Databricks</span></h5>
                            <p>
                                Use cases and application of the Databricks Lakehouse for data teams
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2019 - 2021</p>
                            <h5>Cloud Application Specialist<span> - Cimar</span></h5>
                            <p>
                                Data analysis, technical implementation, bespoke integrations, customer support, security management
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2018 - 2019</p>
                            <h5>Temp Analyst<span> - Morgan Spencer</span></h5>
                            <p>
                                Data wrangling, Salesforce reports, customer support
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2014 - 2017</p>
                            <h5>Bachelor of Arts (Music Industry)<span> - RMIT</span></h5>
                            <p>
                                Music production, digital marketing, industry theory
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <p className="tl-duration">2015 - 2016</p>
                            <h5>Diploma of Information Technology<span> - RMIT</span></h5>
                            <p>
                            Database management, networking, cloud applications, app development, web development
                            </p>
                        </div>
                    </div>
                </Section>
            )
        
        case "portfolio":
            return (
                <Section name="sec3" id="portfolio" isActive>
                    <div className="main-title">
                        <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
                    </div>
                    <p className="port-text">
                        Here is some of my work that I&apos;ve done in various programming languages.
                    </p>
                    <div className="blogs">
                        {projects.map(article => {
                            return (<Card
                                article={article}
                                key={`article__left__${article.attributes.slug}`}
                                type="project"
                            />);
                        })}
                    </div>
                </Section>
            )

        case "blogs":
            return (
                <Section name="sec4" id="blogs" isActive>
                    <div className="blogs-content">
                        <div className="main-title">
                            <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
                        </div>
                        <div className="blogs">
                            {articles.map(article => {
                                return (<Card
                                    article={article}
                                    key={`article__left__${article.attributes.slug}`}
                                    type="article"
                                />);
                            })}
                        </div>
                    </div>
                </Section>
            )
        
        case "contact":
            return (
                <Section name="sec5" extraClasses="contact" id="contact" isActive>
                    <div className="contact-container">
                        <div className="main-title">
                            <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                        </div>
                        <div className="contact-content-con">
                            <div className="left-contact">
                                <h4>Contact me here</h4>
                                <p>
                                    Look forward to hearing and working with you in the future.
                                </p>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>Location</span>
                                        </div>
                                        <p>WFH, Australia</p>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                            <span>Email</span>
                                        </div>
                                        <p>
                                            <span>zac.g.hooper@gmail.com</span>
                                        </p>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fas fa-user-graduate"></i>
                                            <span>Education</span>
                                        </div>
                                        <p>
                                            <span>RMIT, Melbourne</span>
                                        </p>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                            <span>Mobile Number</span>
                                        </div>
                                        <p>
                                            <span>0460 356 097</span>
                                        </p>
                                    </div>
                                    <br />
                                    <CVButton />
                                </div>
                                <div className="contact-icons">
                                    <div className="contact-icon">
                                        <a href="https://www.linkedin.com/in/zac-hooper-85960411a/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://twitter.com/Hoo0oper" target="_blank" rel="noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://github.com/ZacHooper" target="_blank" rel="noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="mailto:zac.g.hooper@gmail.com" target="_blank" rel="noreferrer">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )
    
        default:
            return (
                <Section name="sec1" extraClasses="header" id="home" isActive>
                    <div className="header-content">
                        <div className="left-header">
                            <div className="h-shape"></div>
                            <div className="image">
                                <img src="img/hero.png" alt="" />
                            </div>
                        </div>
                        <div className="right-header">
                            <h1 className="name">
                                Hi, I&apos;m <span>Nguyễn Văn Tài.</span>
                                A Web Developer.
                            </h1>
                            <p>
                                I&apos;m a Web Developer, I love to create beautiful and functional websites.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
                            </p>
                            <div className="btn-con">
                                <a href="" className="main-btn">
                                    <span className="btn-text">Download CV</span>
                                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Section>
            )
    }
};

export default SectionContainer;