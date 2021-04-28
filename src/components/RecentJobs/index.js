/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import jobs from "./../../assets/data/jobs.json";
import { getAllJobs } from "../../services/jobs.service";

const classNameType = (name) => {
  let className = "";
  switch (name) {
    case "Full time":
      className = "label-success";
      break;
    case "Part time":
      className = "label-warning";
      break;
    case "Freelance":
      className = "label-info";
      break;
    case "Internship":
      className = "label-danger";
      break;
    default:
      className = "label-success";
      break;
  }

  return className;
};

const RecentJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row item-blocks-connected">
          {jobs.map((job) => (
            <div key={job.id} className="col-xs-12">
              <Link className="item-block" href="/">
                <header>
                  <img src={job.image} alt={job.title} />
                  <div className="hgroup">
                    <h4>{job.title} </h4>
                    <h5>{job.company} </h5>
                  </div>
                  <div className="header-meta">
                    <span className="location">{job.location}</span>
                    <span className={`label ${classNameType(job.type)}`}>
                      {job.type}
                    </span>
                  </div>
                </header>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentJobs;
