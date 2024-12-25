import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { db } from "../Firebase/config"; // Your Firestore config
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"; // Firestore methods

const MarksChart = ({ Subject }) => {
    const [marksData, setMarksData] = useState([]);
    const [totalTests, setTotalTests] = useState(0);

    // Fetch the data from Firestore
    useEffect(() => {
        const fetchMarksData = async () => {
            try {
                // Reference to the tests collection in Firestore
                const testsCollection = collection(db, "testData"); // Replace "testData" with your actual collection name
                const q = query(
                    testsCollection,
                    where("testType", "==", Subject)
                    // Note: You can add orderBy('timestamp', 'asc') here if not already handled in Firestore
                );
                const querySnapshot = await getDocs(q);

                // Process documents
                const fetchedMarksData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,  // Add document id if needed
                }));

                // Sort the fetched data by timestamp if not already sorted
                const sortedMarksData = fetchedMarksData.sort((a, b) => {
                    const timestampA = a.timestamp?.toDate().getTime(); // Ensure timestamp is a Firestore Timestamp object
                    const timestampB = b.timestamp?.toDate().getTime();
                    return timestampA - timestampB; // Ascending order
                });

                // Extract the marksSecured data
                const marks = sortedMarksData.map((doc) => doc.marksSecured);

                setMarksData(marks);
                setTotalTests(marks.length); // Set total tests based on the number of documents
            } catch (error) {
                console.error("Error fetching marks data: ", error);
            }
        };

        fetchMarksData();
    }, [Subject]); // Dependency array ensures it fetches new data when Subject changes

    // Generate x-axis data based on TotalTests
    const xAxisData = Array.from({ length: totalTests }, (_, index) => index + 1);

    return (
        <>
            <h2 className="font-bold text-cyan-700">{Subject}</h2>
            <LineChart
                xAxis={[{ data: xAxisData }]}  // Test numbers as x-axis
                series={[{
                    data: marksData,  // Marks data for plotting
                }]}
                width={500}
                height={300}
            />
        </>
    );
};

export default MarksChart;
