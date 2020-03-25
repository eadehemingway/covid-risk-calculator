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
        num: n * n,
        fillColor: 'none',
      };
    });
    setData(data);
  }, []);

  useEffect(() => {
    const yOffset = 150;
    const xOffset = 150;
    const stringArr = data.map(d => d.id);

    const x_scale = d3
      .scaleLinear()
      .domain([500, 0])
      .rangeRound([400, 0]);

    const y_scale = d3
      .scaleBand()
      .domain(stringArr)
      .range([400, 0])
      .paddingInner(0.5);

    const svg = d3.select('svg');
    const y_axis = d3.axisLeft(y_scale).tickSize(0);
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${xOffset}, ${yOffset})`)
      .call(y_axis);
    const axisThickness = 3;
    d3.select('.axis path')
      .attr('stroke-width', axisThickness)
      .attr('stroke', '#6A4019')
      .attr('z-index', 1);

    const rects = svg
      .selectAll(`rect`)
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 0)
      .attr('height', y_scale.bandwidth())
      .attr('fill', '#C4C4C4')
      .attr('x', xOffset + axisThickness / 2)
      .attr('y', d => y_scale(d.id) + yOffset);

    rects
      .transition()
      .duration(500)
      .attr('width', d => x_scale(d.num));
  }, [data]);

  return <div></div>;
}
