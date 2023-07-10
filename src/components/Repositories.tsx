import { useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import styles from "./Repositories.module.css";

import { BsFillStarFill } from "react-icons/bs";

interface Repo {
  name: string;
  description: string;
  language: string;
  visibility: string;
  stargazers_count: string;
  updated_at: string;
}

const Repositories = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<Repo[] | null>(null);

  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.github.com/users/${name}/repos`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((response) => console.log(response));
  }, []);

  console.log(data);

  return (
    <div className={styles.repos}>
      <button className={styles.back} onClick={() => navigate("/")}>
        Back!
      </button>
      {data &&
        data.map((repo) => (
          <div className={styles.repoContainer} key={repo.name}>
            <div className={styles.data}>
              <h2>{repo.name}</h2>
              <p>{repo.visibility}</p>
            </div>
            <p className={styles.description}>{repo.description}</p>
            <div className={styles.subData}>
              <h4>{repo.language}</h4>
              <p>{repo.updated_at}</p>
              <span className={styles.starts}>
                <BsFillStarFill />
                {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Repositories;
