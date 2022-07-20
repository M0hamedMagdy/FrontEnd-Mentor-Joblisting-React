import { useEffect, useState } from "react";
import jobService from "./services/jobs";

import Header from "./components/Header/Header";
import bgImageDesktop from ".//assets/images/bg-header-desktop.svg";
import Joblist from "./components/JobList/Joblist";
import Filter from "./components/Filter/Filter";

function App() {
  const [jobs, setJobs] = useState([]);

  const [filterTags, setFilterTags] = useState([]);
  function getJobs() {
    jobService.getAll().then((allJobs) => {
      setJobs(allJobs);
    });
  }

  useEffect(getJobs, []);

  function handleTags(e) {
    let jobTags = [...filterTags];
    if (!jobTags.includes(e.target.innerText)) {
      jobTags = [...filterTags, e.target.innerText];
    }
    setFilterTags(jobTags);
  }

  function clearTags(e) {
    setFilterTags([]);
  }
  function removeTag(e) {
    const jobTags = filterTags.filter((tag) => tag !== e.target.value);
    setFilterTags(jobTags);
  }

  return (
    <>
      <Header src={bgImageDesktop} alt="backgroud image" />
      {filterTags.length > 0 && (
        <Filter
          filterTags={filterTags}
          removeTag={removeTag}
          clearTags={clearTags}
        />
      )}
      {}
      <Joblist jobs={jobs} handleTags={handleTags} filterTags={filterTags} />
    </>
  );
}

export default App;
