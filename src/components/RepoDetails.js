import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchRepoDetails,
  setSelectedRepo,
} from "../features/repos/reposSlice";
import "./RepoDetail.css";

const RepoDetails = () => {
  const { repoId } = useParams();
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repos.selectedRepo);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRepoDetails(repoId));
  }, [dispatch, repoId]);

  const handleNavigate = () => {
    dispatch(setSelectedRepo(null));
    navigate("/repos");
  };

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="repolist">
      <h3>Repo Details</h3>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{repo.name}</td>
            <td>{repo.language}</td>
            <td>{repo.stargazers_count}</td>
            <td>{repo.forks_count}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleNavigate}
        className="btn btn-primary"
      >
        Back to list
      </button>
    </div>
  );
};

export default RepoDetails;
