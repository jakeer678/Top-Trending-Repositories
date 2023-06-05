import React from "react";
import { useSelector } from "react-redux";
import "./RepoDetail.css";
import { useNavigate } from "react-router-dom";

const RepoDetails = () => {
  const repos = useSelector((state) => state.repos.selecteRepo);
  const navigate = useNavigate();
  console.log(repos, "jakeeeeeeer");
  const handleNavgate = () => {
    navigate("/repos");
  };

  return (
    <>
      <div className="repolist">
        <h3>Repo Details</h3>
        <table class="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Languages</th>
              <th scope="col">Stars</th>
              <th scope="col">Forks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{repos?.name}</td>
              <td>{repos?.language}</td>
              <td>{repos?.stargazers_count}</td>
              <td> {repos?.forks_count}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={handleNavgate}
          className="btn btn-primary"
        >
          Back to list
        </button>
      </div>
    </>
  );
};

export default RepoDetails;
