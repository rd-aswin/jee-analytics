import React, { useEffect, useState } from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { db } from "../Firebase/config";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function AIETMarksChart() {
    const [testScores, setTestScores] = useState([]);
    const [months, setMonths] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const fetchTestScores = async () => {
            try {
                // Fetch test data from Firestore, ordered by timestamp (ascending)
                const q = query(collection(db, "testData"), orderBy("timestamp"));
                const querySnapshot = await getDocs(q);
                const scores = [];
                const monthsSet = new Set();

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.testType === 'AIET') {
                        scores.push(Number(data.marksSecured));

                        // Extract month from timestamp
                        const timestamp = data.timestamp.toDate();
                        const month = timestamp.toLocaleString('default', { month: 'short' });

                        // Add month to set
                        monthsSet.add(month);
                    }
                });

                // Convert set to array and sort it
                const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                setMonths([...monthsSet].sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)));

                setTestScores(scores);
            } catch (error) {
                console.error("Error fetching data from Firestore:", error);
            } finally {
                setIsLoading(false); // Data fetching is complete
            }
        };

        fetchTestScores();
    }, []);

    // Render a loading spinner or message while data is being fetched
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <LineChart
            width={600}
            height={400}
            series={[
                {
                    data: testScores.length > 0 ? testScores : [150, 180, 200, 220, 250, 230, 260, 270, 290, 280, 300], // Fallback data
                    label: 'Scores',
                    area: true,
                    showMark: false,
                    color: '#42a5f5',
                    opacity: 0.3,
                },
            ]}
            xAxis={[{ scaleType: 'point', data: months, label: 'Months' }]}
            yAxis={[{ label: 'Scores', min: 0, max: 300 }]}
            title="JEE Mains Monthly Mock Test Scores"
            sx={{
                [`& .${lineElementClasses.root}`]: {
                    display: 'none',
                },
            }}
        />
    );
}
