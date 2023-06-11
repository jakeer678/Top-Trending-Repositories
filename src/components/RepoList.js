import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchTrendingRepos,
  setSelectedRepo,
} from "../features/repos/reposSlice";
import "./RepoList.css";

const RepoList = () => {
  const [selectedDate, setSelectedDate] = useState("2021");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.repos);
  const loading = useSelector((state) => state.repos.loading);
  const error = useSelector((state) => state.repos.error);
  const navigate = useNavigate();
  console.log(repos, "ooooo");
  useEffect(() => {
    dispatch(
      fetchTrendingRepos({ date: selectedDate, language: selectedLanguage })
    );
  }, [dispatch, selectedDate, selectedLanguage]);

  const selectRepo = (repo) => {
    dispatch(setSelectedRepo(repo));
    navigate(`/repos/${repo.id}`);
  };

  const handleSelectChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };
  const filteredData =
    selectedLanguage === "All"
      ? repos
      : repos.filter((item) => item.language === selectedLanguage);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="header">Trending Repos</div>
      <div className="selectedList">
        <div>
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={handleSelectChange}
            className="form-select form-select-mg mb-3"
          >
            <option value="All">All</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Python">Python</option>
            <option value="Go">Java</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <select
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="form-select form-select-mg mb-3"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      <div className="repolistItems">
        <ul>
          {filteredData?.map((repo) => (
            <li key={repo?.id} className="list-group-item">
              <Link to={`/repos/${repo.id}`} onClick={() => selectRepo(repo)}>
                Repo Name: {repo?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RepoList;
