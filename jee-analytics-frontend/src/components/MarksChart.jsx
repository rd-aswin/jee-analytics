import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


const MarksChart = () => {
  return(
      <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] }]}
          series={[
              {
                  data: [85, 90, 78, 88, 92, 80],
              },
          ]}
          width={500}
          height={300}
      />
  )
}

export default MarksChart;