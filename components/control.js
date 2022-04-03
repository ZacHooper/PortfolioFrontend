const Control = ({ children, name, dataId, icon, isActive, setActiveSection }) => {

    const handleClick = () => {
        setActiveSection(dataId);
    }

    return (
        <div className={`control ${name} ${isActive ? "active active-btn" : ""}`} data-id={dataId} onClick={handleClick}>
            <i className={icon}></i>
        </div>
    )
};

export default Control;