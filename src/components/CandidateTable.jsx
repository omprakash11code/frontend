import React from "react";

function CandidateTable({ candidates, onSort, sortOrder }) {
    return (
        <>
            {candidates.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skills</th>
                            <th>
                                Years of Experience
                                <button className="sort-button" onClick={onSort}>
                                    {sortOrder === "asc" ? "↑" : "↓"}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.skills.join(", ")}</td>
                                <td>{candidate.experience}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-results">No candidates found.</p>
            )}
        </>
    );
}

export default CandidateTable;
