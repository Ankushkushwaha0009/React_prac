
import "./App.css";
import { useState } from "react";

function App() {
  const [applications, setApplications] = useState([]);
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "",
  });

  const totalApplications = applications.length;

  const handleJobChange = (e) => {
    const { name, value } = e.target;

    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setApplications((prev) => [
      ...prev,
      {
        ...job,
        id: Date.now(),
      },
    ]);

    setJob({
      company: "",
      role: "",
      status: "",
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h2>JobTracker</h2>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Applications</a>
          <a href="#">Settings</a>
        </nav>
      </header>

      <main className="dashboard">
        <h1>Dashboard</h1>
        <p>Track your job applications in one place.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={job.company}
            placeholder="Enter company name"
            onChange={handleJobChange}
            required
          />

          <input
            type="text"
            name="role"
            value={job.role}
            placeholder="Enter job role"
            onChange={handleJobChange}
            required
          />

          <input
            type="text"
            name="status"
            value={job.status}
            placeholder="Enter status"
            onChange={handleJobChange}
            required
          />

          <button type="submit">Add Application</button>
        </form>

        <div className="stats">
          <div className="stat-card">
            <h3>Total Applications</h3>
            <h2>{totalApplications}</h2>
          </div>

          <div className="stat-card">
            <h3>Interviews</h3>
            <h2>0</h2>
          </div>

          <div className="stat-card">
            <h3>Offers</h3>
            <h2>0</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
