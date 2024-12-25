import React from "react";

const TopicsCovered = () => {
    // Data for subjects and progress
    const subjects = [
        { name: "Physics", progress: 70 },
        { name: "Chemistry", progress: 50 },
        { name: "Mathematics", progress: 80 },
    ];

    return (
        <div className="max-w-md mx-auto p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg font-bold text-center mb-4">JEE Topics Covered</h2>

            {subjects.map((subject, index) => (
                <div key={index} className="mb-6">
                    <p className="text-sm font-medium text-gray-700">
                        {`${subject.progress}% - ${subject.name}`}
                    </p>
                    <div className="mt-2 overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${subject.progress}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopicsCovered;
