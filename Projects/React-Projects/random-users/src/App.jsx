import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return <User />;
}

function User() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=1`,
        );

        const data = await res.json();

        setUser(data.data.data[0]);
      } catch (error) {
        console.log('Failed to fetch users:', error);
      }
    }

    getUser();
  }, [page]);

  return (
    <div className="container">
      <div className="card">
        {user && (
          <>
            <img src={user.picture.large} alt="user" className="profile-img" />

            <h2 className="name">
              {user.name.title}. {user.name.first} {user.name.last}
            </h2>

            <div className="info">
              <p>
                <span>Gender:</span>{' '}
                {user.gender[0].toUpperCase() + user.gender.slice(1)}
              </p>

              <p>
                <span>State:</span> {user.location.state}
              </p>

              <p>
                <span>Email:</span> {user.email}
              </p>

              <p>
                <span>Age:</span> {user.dob.age}
              </p>
            </div>
          </>
        )}
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => setPage((c) => Math.max(c - 1, 1))}
          >
            Previous
          </button>

          <button className="btn" onClick={() => setPage((c) => c + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
