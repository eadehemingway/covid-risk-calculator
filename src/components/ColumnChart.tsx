import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Props {
  id: string;
}

export default function ColumnChart({ id }: Props) {
  const [data, setData] = useState([]);
  const age = 12;
  useEffect(() => {
    const data = d3.range(30).map((n, i) => {
      const num = n < 15 ? n : 30 - n;
      const cappedNum = num > 13 ? 13 : num;
      const bottomCappedNum = cappedNum < 4 ? 0 : cappedNum;

      const color = i === age ? 'orange' : '#C4C4C4';

      return {
        id: `condition-${i}`,
        num: bottomCappedNum * 10,
        fillColor: color,
      };
    });
    setData(data);
  }, []);

  useEffect(() => {
    const bottomOfGraph = 400;
    const xOffset = 150;
    const stringArr = data.map(d => d.id);

    const y_scale = d3
      .scaleLinear()
      .domain([0, bottomOfGraph])
      .rangeRound([0, 300]);

    const x_scale = d3
      .scaleBand()
      .domain(stringArr)
      .range([550, -50])
      .paddingInner(0.01);

    const svg = d3.select('svg');
    const x_axis = d3
      .axisBottom(x_scale)
      .tickSize(0)
      .tickValues([]);

    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${xOffset}, ${bottomOfGraph})`)
      .call(x_axis);

    d3.select('.axis path')
      .attr('stroke-width', 5)
      .attr('stroke', 'brown');
    const rects = svg
      .selectAll(`rect`)
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 5)
      .attr('height', 0)
      .attr('fill', d => d.fillColor)
      .attr('x', (d, i) => {
        return x_scale(d.id) + xOffset;
      })
      .attr('y', d => bottomOfGraph);

    rects
      .transition()
      .duration(500)
      .attr('height', d => y_scale(d.num))
      .attr('y', d => bottomOfGraph - y_scale(d.num));
  }, [data]);

  return <div></div>;
}
