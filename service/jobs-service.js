const getAllJobs = () => {
    try {
        const resp = await fetch('api/jobs')
        const jobs = await resp.json()
        return jobs 
    } catch (error) {
        throw Error('Error')
        
    }
};

const getJobs = async(id) => {
    try {
        const resp = await fetch(`api/jobs/${id}`)
        const jobs = await resp.json() 
        return jobs 
    } catch (error) {
        throw Error('Error')
    }
  return {};
};

const createJob = (job) => {
  return job;
};

export { getAllJobs, getJobs, createJob };
