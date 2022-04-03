import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Section from "../components/section";
import Controls from "../components/controls";
import SectionContainer from "../components/sectionContainer";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage, projects }) => {

    const [activeSection, setActiveSection] = React.useState("home");

    return (
    <Layout categories={categories}>
        <Seo seo={homepage.attributes.seo} />
        <SectionContainer activeSection={activeSection} 
                          homepage={homepage} 
                          articles={articles} 
                          projects={projects}/>        
        <Controls activeSection={activeSection} setActiveSection={setActiveSection}/>

      <div class="theme-btn">
          <i class="fas fa-adjust"></i>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, projectsRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/projects", { populate: ["image"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      projects: projectsRes.data
    },
    revalidate: 1,
  };
}

export default Home;