import './joblist.module.css'


function Job({job}) { 
    return (
        <li>
            <picture>
                <img  alt={job.company} src={job.logo}></img>
            </picture>
            <div>
                <span>{job.company}</span>
                {job.new && <span className='new'>new</span>}  
                {job.featured && <span className='featured'>featured</span>}  
            </div>
            <h1>{job.position}</h1>
            <div>
                <span>{job.postedat}</span>
                <span>{job.contract}</span>
                <span>{job.location}</span>
            </div>
            <div>
                <span>{job.role}</span>
                <span>{job.level}</span>
                {job.languages.map((lang) => <span>{lang}</span>)}
                {job.tools.map((tool) => <span>{tool}</span>)}
            </div>
        </li>
    )

}



function Joblist({jobs}) { 
    return(
        <ul>
            {jobs.map((job) => <Job key={job.id} job={job} />)}
        </ul>
    )
}


export default Joblist;