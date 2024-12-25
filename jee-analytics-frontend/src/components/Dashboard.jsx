import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Countdown from "react-countdown";
import DailyQuote from "./Daily Quote";
import TopicsCovered from "./TopicsCovered";
import MarksChart from "./MarksChart";
import AIETMarksChart from "./AIETMarksChart";
import CountdownJEE from "./CountdownJEE";

const Dashboard = () => {
    const [upcomingTests, setUpcomingTests] = useState([]);
    const [studyProgress, setStudyProgress] = useState(0);
    const [testResults, setTestResults] = useState([]);

    // Fetch upcoming tests and results from the API
    useEffect(() => {
        // Fetch upcoming tests
        axios.get("/api/upcoming-tests")
            .then(response => setUpcomingTests(response.data))
            .catch(error => console.error("Error fetching upcoming tests:", error));

        // Fetch study progress (percentage of syllabus completed)
        axios.get("/api/study-progress")
            .then(response => setStudyProgress(response.data))
            .catch(error => console.error("Error fetching study progress:", error));

        // Fetch test results
        axios.get("/api/test-results")
            .then(response => setTestResults(response.data))
            .catch(error => console.error("Error fetching test results:", error));
    }, []);

    return (
        <>
            <DailyQuote/>

            <div className="dashboard-container p-8">
            <h1 className="text-3xl font-semibold mb-6">Welcome</h1>
                <CountdownJEE/>
                <TopicsCovered/>
            {/* Upcoming Tests */}
            {/*<div className="upcoming-tests mb-8">*/}
            {/*    <h2 className="text-2xl font-semibold mb-4">Upcoming Tests</h2>*/}
            {/*    {upcomingTests.length > 0 ? (*/}
            {/*        upcomingTests.map(test => (*/}
            {/*            <div key={test.id} className="test-card p-4 mb-4 border rounded-lg shadow-sm">*/}
            {/*                <h3 className="text-xl font-medium">{test.name}</h3>*/}
            {/*                <p className="text-gray-600">Date: {test.date}</p>*/}
            {/*                <div className="countdown">*/}
            {/*                    <Countdown date={new Date(test.date)} />*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    ) : (*/}
            {/*        <p>No upcoming tests</p>*/}
            {/*    )}*/}
            {/*</div>*/}

            {/* Study Progress */}
                <div className={`
    marks-chart-container 
    mb-8 
    grid 
    grid-cols-1  /* Ensure one chart per row */
    gap-8  /* Spacing between charts */
    p-6 
    border 
    rounded-lg 
    shadow-sm
    place-items-center
`}>
                    <MarksChart/>
                    <MarksChart/>
                    <MarksChart/>
                    <AIETMarksChart/>
                </div>


            {/*    <div className="study-progress mb-8">*/}
            {/*        <h2 className="text-2xl font-semibold mb-4">Study Progress</h2>*/}
            {/*        <div className="progress-bar bg-gray-200 w-full h-2 rounded-full">*/}
            {/*            <div*/}
            {/*                className="bg-blue-600 h-2 rounded-full"*/}
            {/*                style={{ width: `${studyProgress}%` }}*/}
            {/*        ></div>*/}
            {/*    </div>*/}
            {/*    <p className="mt-2 text-gray-700">You have completed {studyProgress}% of the syllabus.</p>*/}
            {/*</div>*/}

            {/*/!* Test Results *!/*/}
            {/*<div className="test-results mb-8">*/}
            {/*    <h2 className="text-2xl font-semibold mb-4">Your Test Results</h2>*/}
            {/*    {testResults.length > 0 ? (*/}
            {/*        <div className="results-table">*/}
            {/*            <table className="table-auto w-full">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th className="px-4 py-2 text-left">Test</th>*/}
            {/*                    <th className="px-4 py-2 text-left">Date</th>*/}
            {/*                    <th className="px-4 py-2 text-left">Score</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {testResults.map(result => (*/}
            {/*                    <tr key={result.id}>*/}
            {/*                        <td className="px-4 py-2">{result.testName}</td>*/}
            {/*                        <td className="px-4 py-2">{result.date}</td>*/}
            {/*                        <td className="px-4 py-2">{result.score}</td>*/}
            {/*                    </tr>*/}
            {/*                ))}*/}
            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <p>No test results available</p>*/}
            {/*    )}*/}
            {/*</div>*/}

            {/*/!* Profile Section (optional) *!/*/}
            {/*<div className="profile mb-8">*/}
            {/*    <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>*/}
            {/*    <p className="text-gray-700">Name: John Doe</p>*/}
            {/*    <p className="text-gray-700">Email: john.doe@example.com</p>*/}
            {/*    <Link to="/profile" className="text-blue-600 hover:underline">Edit Profile</Link>*/}
            {/*</div>*/}
        </div></>

    );
};

export default Dashboard;
