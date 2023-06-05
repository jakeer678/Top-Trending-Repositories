import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./RepoList.css";
import {
  fetchTrendingRepos,
  selectedRepoList,
} from "../features/repos/reposSlice";
import { useNavigate } from "react-router-dom";

const RepoList = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.repos);
  const navigate = useNavigate();
  console.log(repos, "jjjjja");
  useEffect(() => {
    dispatch(fetchTrendingRepos("weekly", "javascript"));
  }, [dispatch]);
  const selecteItems = (item) => {
    dispatch(selectedRepoList(item));
    navigate(`/repos/${item.id}`);
  };

  const filteredData =
    selectedLanguage === "All"
      ? repos
      : repos.filter((item) => item.language === selectedLanguage);

  const handleSelectChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="repolistItems">
      <h3>Trending Repos</h3>
      <div>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          value={selectedLanguage}
          onChange={handleSelectChange}
        >
          <option className="custom-select" value="All">
            All
          </option>
          <option className="custom-select" value="TypeScript">
            TypeScript
          </option>
          <option className="custom-select" value="Python">
            Python
          </option>
          <option className="custom-select" value="Java">
            Java
          </option>
        </select>

        <ul className="list-group">
          {filteredData.map((item) => (
            <div key={item.id}>
              <li
                onClick={() => selecteItems(item)}
                className="list-group-item"
              >
                Trending Repo Name: {item.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepoList;
