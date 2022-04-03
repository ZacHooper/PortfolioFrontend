import { getStrapiURL } from "../lib/api.js";

const CVButton = ({ children }) => {

    return (
        <div className="submit-btn">
            <a href={getStrapiURL("/uploads/Zac_Hooper_Resume_9b067f5214.pdf?updated_at=2022-03-31T21:21:09.939Z")} className="main-btn" target="_blank" rel="noreferrer">
                <span className="btn-icon"><i className="fas fa-download"></i></span>
                <span className="btn-text">Download CV</span>
            </a>
        </div>
    )
};

export default CVButton;