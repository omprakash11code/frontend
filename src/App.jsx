import React, { useState, useEffect } from "react";
import CandidateTable from "./components/CandidateTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
    const [candidates, setCandidates] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch("http://localhost:5000/api/candidates")
            .then((response) => response.json())
            .then((data) => {
                setCandidates(data);
                setFilteredCandidates(data);
            });
    }, []);

    const handleSearch = (query) => {
        const lowerQuery = query.toLowerCase();
        const filtered = candidates.filter(
            (candidate) =>
                candidate.name.toLowerCase().includes(lowerQuery) ||
                candidate.skills.some((skill) =>
                    skill.toLowerCase().includes(lowerQuery)
                )
        );
        setFilteredCandidates(filtered);
    };

    const handleSort = () => {
        const sorted = [...filteredCandidates].sort((a, b) => {
            return sortOrder === "asc"
                ? a.experience - b.experience
                : b.experience - a.experience;
        });
        setFilteredCandidates(sorted);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div className="container">
            <h1>Candidate List</h1>
            <SearchBar onSearch={handleSearch} />
            <CandidateTable
                candidates={filteredCandidates}
                onSort={handleSort}
                sortOrder={sortOrder}
            />
        </div>
    );
}

export default App;
