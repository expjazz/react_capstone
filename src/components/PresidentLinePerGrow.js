import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import allSelectors from '../selectors/allSelects';

export default function PresidentLinePerGrow() {
  const { selectPresident } = allSelectors;
  const presidentData = useSelector(selectPresident);
  const dataGen = () => {
    const obj = {
      one: [],
      two: [],
      three: [],
    };
    presidentData.forEach(row => {
      obj.one.push(row[1] / 1000);
      obj.two.push(row[4]);
      obj.three.push({ x: row[4], y: row[1] });
    });
    const tempArr = obj.one.map((val, ind) => {
      if (ind === 11) {
        return 0;
      }
      return obj.one[ind + 1] - val;
    });
    return { ...obj, one: tempArr };
  };

  const { one, two, three } = dataGen();
  console.log(one.length);
  console.log(two.length);
  const data = {
    labels: ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    datasets: [
      {
        label: 'Followers',
        backgroundColor: 'red',
        data: one,
      },
      {
        label: 'Posts',
        backgroundColor: 'yellow',
        data: two,
      },

    ],

  };

  const options = {

    title: {
      display: true,
      text: 'Population growth (millions)',
    },
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        },
      }],
    },

  };
  return (
    <Bar data={data} options={options} />
  );
}
