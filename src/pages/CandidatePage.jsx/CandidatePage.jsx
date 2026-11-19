import { Link } from 'react-router-dom';

const mockCandidates = [
  { id: 1, name: 'Alice Chen', role: 'Senior Frontend Engineer', skills: ['React', 'TypeScript', 'CSS'], match: 92 },
  { id: 2, name: 'Bob Martinez', role: 'Product Designer', skills: ['Figma', 'UI/UX', 'Prototyping'], match: 85 },
  { id: 3, name: 'Carol Wu', role: 'Data Scientist', skills: ['Python', 'ML', 'SQL'], match: 78 },
  { id: 4, name: 'David Kim', role: 'Backend Engineer', skills: ['Node.js', 'PostgreSQL', 'Docker'], match: 88 },
];

function CandidatePage() {
  return (
    &lt;div className="main-content"&gt;
      &lt;div className="section-header"&gt;
        &lt;h2&gt;Candidate Dashboard&lt;/h2&gt;
        &lt;p&gt;Manage your profile, track applications, and get matched with opportunities.&lt;/p&gt;
      &lt;/div&gt;

      &lt;div className="profile-header"&gt;
        &lt;div className="profile-avatar"&gt;👤&lt;/div&gt;
        &lt;div className="profile-info"&gt;
          &lt;h2&gt;Demo Candidate&lt;/h2&gt;
          &lt;div className="profile-role"&gt;Senior Software Engineer&lt;/div&gt;
          &lt;div className="profile-location"&gt;🌍 Remote • San Francisco, CA&lt;/div&gt;
          &lt;div className="mt-2"&gt;
            &lt;span className="tag" style={{marginRight: '0.5rem'}}&gt;React&lt;/span&gt;
            &lt;span className="tag" style={{marginRight: '0.5rem'}}&gt;TypeScript&lt;/span&gt;
            &lt;span className="tag" style={{marginRight: '0.5rem'}}&gt;Node.js&lt;/span&gt;
            &lt;span className="tag"&gt;GraphQL&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;h3 className="mb-2"&gt;Recommended Jobs&lt;/h3&gt;
      &lt;div className="grid-2"&gt;
        {mockCandidates.map((c) =&gt; (
          &lt;div key={c.id} className="card"&gt;
            &lt;div className="card-header"&gt;
              &lt;div&gt;
                &lt;div className="card-title"&gt;{c.role}&lt;/div&gt;
                &lt;div className="card-subtitle"&gt;{c.name}&lt;/div&gt;
              &lt;/div&gt;
              &lt;span className="tag tag-match"&gt;{c.match}% match&lt;/span&gt;
            &lt;/div&gt;
            &lt;p className="mb-1"&gt;{c.skills.join(', ')}&lt;/p&gt;
            &lt;div className="match-score"&gt;
              &lt;div className="match-score-bar"&gt;
                &lt;div className="match-score-fill" style={{width: c.match + '%'}} /&gt;
              &lt;/div&gt;
              &lt;span className="match-score-label"&gt;{c.match}%&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="mt-1 demo-badge"&gt;⚠️ Demo AI matching — local logic only&lt;/div&gt;
            &lt;Link to="/apply/1" className="btn btn-primary mt-2" style={{width: '100%'}}&gt;Apply Now&lt;/Link&gt;
          &lt;/div&gt;
        ))}
      &lt;/div&gt;

      &lt;div className="section mt-3"&&gt;
        &lt;h3 className="mb-2"&gt;Application Tracker&lt;/h3&gt;
        &lt;div className="card"&gt;
          &lt;div className="flex-between mb-1"&gt;
            &lt;div&gt;
              &lt;div className="card-title"&gt;Frontend Engineer @ TechCorp&lt;/div&gt;
              &lt;div className="card-subtitle"&gt;Applied Nov 15, 2025&lt;/div&gt;
            &lt;/div&gt;
            &lt;span className="tag"&gt;Under Review&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="card mt-2"&gt;
          &lt;div className="flex-between mb-1"&gt;
            &lt;div&gt;
              &lt;div className="card-title"&gt;Product Designer @ DesignLab&lt;/div&gt;
              &lt;div className="card-subtitle"&gt;Applied Nov 10, 2025&lt;/div&gt;
            &lt;/div&gt;
            &lt;span className="tag" style={{background: 'var(--rovely-success)', color: 'var(--rovely-bg)', borderColor: 'var(--rovely-success)'}}&gt;Interview Scheduled&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default CandidatePage;
