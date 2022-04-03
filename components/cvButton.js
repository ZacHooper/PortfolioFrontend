import { getStrapiURL } from "../lib/api.js";

const CVButton = ({ children }) => {

    return (
        <div class="submit-btn">
            <a href={getStrapiURL("/uploads/Zac_Hooper_Resume_9b067f5214.pdf?updated_at=2022-03-31T21:21:09.939Z")} class="main-btn" target="_blank">
                <span class="btn-icon"><i class="fas fa-download"></i></span>
                <span class="btn-text">Download CV</span>
            </a>
        </div>
    )
};

export default CVButton;