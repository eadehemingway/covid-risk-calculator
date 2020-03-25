import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

interface Props {
  id: string;
}

export default function BarChart({ id }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = d3.range(30).map((n, i) => {
      return {
        id: `condition-${i}`,
        num: n * 10,
        fillColor: 'none',
      };
    });
    setData(data);
  }, []);

  useEffect(() => {
    const yOffset = 50;
    const xOffset = 150;
    const stringArr = data.map(d => d.id);

    const x_scale = d3
      .scaleLinear()
      .domain([500, 0])
      .rangeRound([0, 600]);

    const y_scale = d3
      .scaleBand()
      .domain(stringArr)
      .range([400, 0])
      .paddingInner(0.01);

    const svg = d3.select('svg');
    const y_axis = d3.axisLeft(y_scale);
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${xOffset}, ${yOffset})`)
      .call(y_axis);

    const rects = svg
      .selectAll(`rect`)
      .data(data)
      .enter()
      .append('rect')
      .attr('width', d => d.num)
      .attr('height', 5)
      .attr('fill', 'orange')
      .attr('x', (d, i) => {
        return xOffset;
      })
      .attr('y', d => y_scale(d.id) + yOffset);
  }, [data]);

  return <div></div>;
}
