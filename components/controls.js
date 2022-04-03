import Control from "./control";

const Controls = ({ children, setActiveSection, activeSection }) => {

    const handleIsActive = (controlSection, activeSection) => {
        return controlSection === activeSection ? "isActive" : "";
    }

    return (
        <div className="controlls">
            <Control name="contol-1" 
                     dataId="home" 
                     icon="fas fa-home" 
                     setActiveSection={setActiveSection} 
                     isActive={handleIsActive("home", activeSection)} />
            <Control name="contol-2" 
                     dataId="about" 
                     icon="fas fa-user" 
                     setActiveSection={setActiveSection} 
                     isActive={handleIsActive("about", activeSection)}/>
            <Control name="contol-3" 
                     dataId="portfolio" 
                     icon="fas fa-briefcase" 
                     setActiveSection={setActiveSection} 
                     isActive={handleIsActive("portfolio", activeSection)}/>
            <Control name="contol-4" 
                     dataId="blogs" 
                     icon="far fa-newspaper" 
                     setActiveSection={setActiveSection} 
                     isActive={handleIsActive("blogs", activeSection)}/>
            <Control name="contol-5" 
                     dataId="contact" 
                     icon="fas fa-envelope-open" 
                     setActiveSection={setActiveSection} 
                     isActive={handleIsActive("contact", activeSection)}/>
      </div>
    )
};

export default Controls;