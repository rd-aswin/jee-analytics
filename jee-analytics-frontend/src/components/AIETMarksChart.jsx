import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const mockTestScores = [ 150, 180, 200, 220, 250, 230, 260, 270, 290, 280, 300]; // Example scores
const months = ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024',
    'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024',
];

// const months = [
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
// ];

export default function AIETMarksChart() {
    return (
        <LineChart
            width={600}
            height={400}
            series={[
                {
                    data: mockTestScores,
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
