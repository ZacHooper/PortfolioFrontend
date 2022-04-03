import Section from "./section";
import Card from "./card";
import { getStrapiURL } from "../lib/api.js";
import CVButton from "./cvButton";


const SectionContainer = ({ children, activeSection, homepage, articles, projects }) => {
    switch (activeSection) {
        case "home":
            return (
                <Section name="sec1" extraClasses="header" id="home" isActive>
                    <div class="header-content">
                        <div className="left-header">
                            <div className="h-shape"></div>
                            <div className="image">
                                <img src={getStrapiURL("/uploads/IMG_3728_069e827c48.JPG?updated_at=2022-03-31T21:32:04.064Z")} alt="" />
                            </div>
                        </div>
                        <div className="right-header">
                            <h1 className="name">
                                Hi, I'm <span>Zac Hooper.</span><br />
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
                    <div class="main-title">
                        <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
                    </div>
                    <div class="about-container">
                        <div class="left-about">
                            <h4>Information About me</h4>
                            <p>
                            I am a Data Scientist with strong analytical and statistical skills. 
                            I have proven experience wrangling, visualising, building models and developing stories about data.
                            </p>
                            <CVButton />
                        </div>
                        <div class="right-about">
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">3+</p>
                                    <p class="small-text">Years of<br /> experience</p>
                                </div>
                            </div>
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">5+</p>
                                    <p class="small-text">Programming <br /> languages</p>
                                </div>
                            </div>
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">Efficient</p>
                                    <p class="small-text">Data <br /> analysis</p>
                                </div>
                            </div>
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">Detailed</p>
                                    <p class="small-text">Dataset <br /> management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-stats">
                        <h4 class="stat-title">My Skills</h4>
                        <div class="progress-bars">
                            <div class="progress-bar">
                                <p class="prog-title">Python</p>
                                <div class="progress-con">
                                    <p class="prog-text">90%</p>
                                    <div class="progress">
                                        <span class="python"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">R</p>
                                <div class="progress-con">
                                    <p class="prog-text">75%</p>
                                    <div class="progress">
                                        <span class="r"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">javascript</p>
                                <div class="progress-con">
                                    <p class="prog-text">75%</p>
                                    <div class="progress">
                                        <span class="js"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">SQL</p>
                                <div class="progress-con">
                                    <p class="prog-text">75%</p>
                                    <div class="progress">
                                        <span class="sql"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">HTML/CSS</p>
                                <div class="progress-con">
                                    <p class="prog-text">60%</p>
                                    <div class="progress">
                                        <span class="htmlcss"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">AWS</p>
                                <div class="progress-con">
                                    <p class="prog-text">60%</p>
                                    <div class="progress">
                                        <span class="aws"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="stat-title">My Timeline</h4>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2021</p>
                            <h5>Graduate Certificate of Data Science<span> - RMIT</span></h5>
                            <p>
                                Data modelling, applied analytics, data visualising, data wrangling
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2021</p>
                            <h5>Fundamentals of the Databricks Lakehouse Platform<span> - Databricks</span></h5>
                            <p>
                                Use cases and application of the Databricks Lakehouse for data teams
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2019 - 2021</p>
                            <h5>Cloud Application Specialist<span> - Cimar</span></h5>
                            <p>
                                Data analysis, technical implementation, bespoke integrations, customer support, security management
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2018 - 2019</p>
                            <h5>Temp Analyst<span> - Morgan Spencer</span></h5>
                            <p>
                                Data wrangling, Salesforce reports, customer support
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2014 - 2017</p>
                            <h5>Bachelor of Arts (Music Industry)<span> - RMIT</span></h5>
                            <p>
                                Music production, digital marketing, industry theory
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2015 - 2016</p>
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
                    <div class="main-title">
                        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
                    </div>
                    <p class="port-text">
                        Here is some of my work that I've done in various programming languages.
                    </p>
                    <div class="blogs">
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
                    <div class="blogs-content">
                        <div class="main-title">
                            <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
                        </div>
                        <div class="blogs">
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
                    <div class="contact-container">
                        <div class="main-title">
                            <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                        </div>
                        <div class="contact-content-con">
                            <div class="left-contact">
                                <h4>Contact me here</h4>
                                <p>
                                    Look forward to hearing and working with you in the future.
                                </p>
                                <div class="contact-info">
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>Location</span>
                                        </div>
                                        <p>WFH, Australia</p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-envelope"></i>
                                            <span>Email</span>
                                        </div>
                                        <p>
                                            <span>zac.g.hooper@gmail.com</span>
                                        </p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                            <span>Education</span>
                                        </div>
                                        <p>
                                            <span>RMIT, Melbourne</span>
                                        </p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-phone"></i>
                                            <span>Mobile Number</span>
                                        </div>
                                        <p>
                                            <span>0460 356 097</span>
                                        </p>
                                    </div>
                                    <br />
                                    <CVButton />
                                </div>
                                <div class="contact-icons">
                                    <div class="contact-icon">
                                        <a href="https://www.linkedin.com/in/zac-hooper-85960411a/" target="_blank">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://twitter.com/Hoo0oper" target="_blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://github.com/ZacHooper" target="_blank">
                                            <i class="fab fa-github"></i>
                                        </a>
                                        <a href="mailto:zac.g.hooper@gmail.com" target="_blank">
                                            <i class="fas fa-envelope"></i>
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
                    <div class="header-content">
                        <div className="left-header">
                            <div className="h-shape"></div>
                            <div className="image">
                                <img src="img/hero.png" alt="" />
                            </div>
                        </div>
                        <div className="right-header">
                            <h1 class="name">
                                Hi, I'm <span>Nguyễn Văn Tài.</span>
                                A Web Developer.
                            </h1>
                            <p>
                                I'm a Web Developer, I love to create beautiful and functional websites.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
                            </p>
                            <div class="btn-con">
                                <a href="" class="main-btn">
                                    <span class="btn-text">Download CV</span>
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Section>
            )
    }
};

export default SectionContainer;