import React, { useState, useEffect } from 'react';

const DataEntryForm = () => {
    const [subjects] = useState(["Physics", "Chemistry", "Math"]);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [chaptersStudied, setChaptersStudied] = useState("");
    const [mockData, setMockData] = useState([
        { subject: "Physics", chaptersStudied: 5 },
        { subject: "Chemistry", chaptersStudied: 3 },
        { subject: "Math", chaptersStudied: 7 },
    ]);

    // Simulate fetching data (useEffect simulates componentDidMount)
    useEffect(() => {
        console.log("Fetched mock data: ", mockData);

        if (mockData.length > 0) {
            setSelectedSubject(mockData[0].subject);
            setChaptersStudied(mockData[0].chaptersStudied);
        }
    }, [mockData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            subject: selectedSubject,
            chaptersStudied: chaptersStudied,
        };
        console.log("Submitted Data: ", data);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Chapters Data Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <select
                        value={selectedSubject}
                        onChange={(e) => {
                            const subject = e.target.value;
                            setSelectedSubject(subject);
                            const subjectData = mockData.find(item => item.subject === subject);
                            setChaptersStudied(subjectData ? subjectData.chaptersStudied : "");
                        }}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select Subject</option>
                        {subjects.map(subject => (
                            <option key={subject} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Chapters Studied</label>
                    <input
                        type="number"
                        value={chaptersStudied}
                        onChange={(e) => setChaptersStudied(e.target.value)}
                        min="1"
                        required
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DataEntryForm;
