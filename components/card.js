import React from "react";
import Link from "next/link";
import NextImage from "./image";
import travolta from "../assets/images/travolta-confundido-meme-gif.jpeg"

const Card = ({ article, type }) => {

  return (                              
    // <Link href={`/article/${article.attributes.slug}`}>
    //   <a className="uk-link-reset">
    //     <div className="uk-card uk-card-muted">
    //       <div className="uk-card-media-top">
    //         <NextImage image={article.attributes.image} />
    //       </div>
    //       <div className="uk-card-body">
    //         <p id="category" className="uk-text-uppercase">
    //           {article.attributes.category.data.attributes.name}
    //         </p>
    //         <p id="title" className="uk-text-large">
    //           {article.attributes.title}
    //         </p>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
    <Link href={`/${type}/${article.attributes.slug}`}>
      <a className="blog">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="blog-text">
            {/* <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p> */}
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;