import './joblist.module.css'


function Job({job}) { 
    return (
        <li>
            <img alt={job.company} src={job.logo}></img>
            {job.company}          
            {job.new && <span>new</span>}  
            {job.featured && <span>featured</span>}  
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