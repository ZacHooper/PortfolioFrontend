const Section = ({ children, name, extraClasses, isActive }) => {
    return (
        <section className={`section ${name} ${extraClasses} active`}>
            {children}
        </section>
    );
};

export default Section;