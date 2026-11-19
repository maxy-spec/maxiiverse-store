import { Link } from 'react-router-dom';

function HomePage() {
  return (
    &lt;&gt;
      &lt;section className="hero"&gt;
        &lt;div className="hero-badge"&gt;🚀 Demo AI Talent Marketplace&lt;/div&gt;
        &lt;h1&gt;Find Exceptional Talent.&lt;br /&gt;Land Your Dream Role.&lt;/h1&gt;
        &lt;p&gt;Rovely matches elite professionals with world-class opportunities using AI-powered candidate-job matching.&lt;/p&gt;
        &lt;div className="hero-actions"&gt;
          &lt;Link to="/candidates" className="btn btn-primary btn-lg"&gt;
            I'm a Candidate
          &lt;/Link&gt;
          &lt;Link to="/employers" className="btn btn-outline btn-lg"&gt;
            I'm an Employer
          &lt;/Link&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section className="entry-cards"&gt;
        &lt;Link to="/candidates" className="entry-card"&gt;
          &lt;div className="entry-card-icon"&gt;👤&lt;/div&gt;
          &lt;h3&gt;For Candidates&lt;/h3&gt;
          &lt;p&gt;Build your profile, showcase your skills, and get matched with top employers.&lt;/p&gt;
        &lt;/Link&gt;

        &lt;Link to="/employers" className="entry-card"&gt;
          &lt;div className="entry-card-icon"&gt;🏢&lt;/div&gt;
          &lt;h3&gt;For Employers&lt;/h3&gt;
          &lt;p&gt;Post jobs, discover talent, and streamline your hiring workflow.&lt;/p&gt;
        &lt;/Link&gt;

        &lt;Link to="/matching" className="entry-card"&gt;
          &lt;div className="entry-card-icon"&gt;🤖&lt;/div&gt;
          &lt;h3&gt;AI Matching&lt;/h3&gt;
          &lt;p&gt;Explore our demo AI matching engine that pairs candidates with jobs.&lt;/p&gt;
        &lt;/Link&gt;
      &lt;/section&gt;

      &lt;section className="section"&gt;
        &lt;div className="section-header"&gt;
          &lt;h2&gt;Featured Jobs&lt;/h2&gt;
          &lt;p&gt;Browse opportunities across engineering, design, and more.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="grid-3"&gt;
          &lt;div className="card"&gt;
            &lt;div className="card-header"&gt;
              &lt;div&gt;
                &lt;div className="card-title"&gt;Senior Frontend Engineer&lt;/div&gt;
                &lt;div className="card-subtitle"&gt;TechCorp &bull; Remote&lt;/div&gt;
              &lt;/div&gt;
              &lt;span className="tag"&gt;Engineering&lt;/span&gt;
            &lt;/div&gt;
            &lt;p className="mb-1"&gt;Build next-gen UI components with React and TypeScript.&lt;/p&gt;
            &lt;Link to="/apply/1" className="btn btn-primary" style={{width: '100%'}}&gt;Apply Now&lt;/Link&gt;
          &lt;/div&gt;

          &lt;div className="card"&gt;
            &lt;div className="card-header"&gt;
              &lt;div&gt;
                &lt;div className="card-title"&gt;Product Designer&lt;/div&gt;
                &lt;div className="card-subtitle"&gt;DesignLab &bull; SF, CA&lt;/div&gt;
              &lt;/div&gt;
              &lt;span className="tag"&gt;Design&lt;/span&gt;
            &lt;/div&gt;
            &lt;p className="mb-1"&gt;Shape the visual identity of a fast-growing startup.&lt;/p&gt;
            &lt;Link to="/apply/2" className="btn btn-primary" style={{width: '100%'}}&gt;Apply Now&lt;/Link&gt;
          &lt;/div&gt;

          &lt;div className="card"&gt;
            &lt;div className="card-header"&gt;
              &lt;div&gt;
                &lt;div className="card-title"&gt;Data Scientist&lt;/div&gt;
                &lt;div className="card-subtitle"&gt;AI First &bull; Remote&lt;/div&gt;
              &lt;/div&gt;
              &lt;span className="tag"&gt;Data Science&lt;/span&gt;
            &lt;/div&gt;
            &lt;p className="mb-1"&gt;Build ML models for our recommendation engine.&lt;/p&gt;
            &lt;Link to="/apply/3" className="btn btn-primary" style={{width: '100%'}}&gt;Apply Now&lt;/Link&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section className="section"&gt;
        &lt;div className="section-header"&gt;
          &lt;h2&gt;How Rovely Works&lt;/h2&gt;
          &lt;p&gt;From profile creation to job matching — all in one place.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="grid-2"&gt;
          &lt;div className="card"&gt;
            &lt;div className="card-title"&gt;1. Create Your Profile&lt;/div&gt;
            &lt;p className="mt-1"&gt;Candidates showcase skills, experience, and portfolio. Employers define their company and needs.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="card"&gt;
            &lt;div className="card-title"&gt;2. AI-Powered Matching&lt;/div&gt;
            &lt;p className="mt-1"&gt;Our demo matching engine suggests the best candidate-job pairs based on skills and preferences.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="card"&gt;
            &lt;div className="card-title"&gt;3. Apply &amp; Connect&lt;/div&gt;
            &lt;p className="mt-1"&gt;Submit applications, track status, and connect with decision-makers directly.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="card"&gt;
            &lt;div className="card-title"&gt;4. Discover Talent&lt;/div&gt;
            &lt;p className="mt-1"&gt;Employers browse the talent pool, filter by skills, and review detailed profiles.&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/&gt;
  );
}

export default HomePage;
