import styles from "./joblist.module.css";

function Job({ job }) {
  return (
    <li key={job.id} className={job.featured ? styles.featured : styles.jobCard}>
      <picture>
        <img alt={job.company} src={job.logo}></img>
      </picture>
      <div className={styles.jobInfo}>
        <div>
          <span className={styles.companyName}>{job.company}</span>
          {job.new && <span className={styles.new}>NEW!</span>}
          {job.featured && <span className={styles.featured}>Featured</span>}
        </div>
        <h1>{job.position}</h1>
        <div className={styles.dates}>
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <hr></hr>
      <div className={styles.tags}>
        <span>{job.role}</span>

        <span>{job.level}</span>

        {job.languages.map((lang) => (
          <span key={lang}>{lang}</span>
        ))}

        {job.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </li>
  );
}

function Joblist({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default Joblist;
