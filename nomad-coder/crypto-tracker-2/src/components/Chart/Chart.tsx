import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../stores/atoms";
import { ChartHistoricalInterface } from "../../api/interface";
import styled from "styled-components";

interface ChartProps {
  data: ChartHistoricalInterface[];
}

function Chart({ data }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ChartWrap>
      <ReactApexChart
        type="candlestick"
        series={[
          {
            data:
              data?.map((item) => ({
                x: new Date(Number(item.time_close) * 1000),
                y: [item.open, item.high, item.low, item.close],
              })) ?? [],
          },
        ]}
        options={{
          chart: {
            type: "candlestick",
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          title: {
            text: "CandleStick for 2 weeks",
            align: "left",
          },
          theme: {
            mode: isDark ? "dark" : "light",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            labels: {
              formatter: function (val) {
                const day = new Date(val);
                return `${day.getMonth() + 1}/${day.getDate()}`;
              },
              style: {
                colors: "#66656d",
              },
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#f23d3d",
                downward: "#13bf36",
              },
            },
          },
        }}
      />
    </ChartWrap>
  );
}

export default Chart;

const ChartWrap = styled.div`
  margin-top: 4rem;
`;
