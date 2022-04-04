import { getStrapiURL } from "../lib/api.js";

const CVButton = ({ children }) => {

    return (
        <div className="submit-btn">
            <a href="https://res.cloudinary.com/zachooper/image/upload/v1649035695/Zac_Hooper_Resume_ba3fd554e9.pdf?updated_at=2022-04-04T01:28:16.197Z" className="main-btn" target="_blank" rel="noreferrer">
                <span className="btn-icon"><i className="fas fa-download"></i></span>
                <span className="btn-text">Download CV</span>
            </a>
        </div>
    )
};

export default CVButton;