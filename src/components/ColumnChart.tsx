import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Props {
  id: string;
}

export default function ColumnChart({ id }: Props) {
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
    const bottomOfGraph = 400;
    const xOffset = 150;
    const stringArr = data.map(d => d.id);

    const y_scale = d3
      .scaleLinear()
      .domain([bottomOfGraph, 0])
      .rangeRound([0, 600]);

    const x_scale = d3
      .scaleBand()
      .domain(stringArr)
      .range([500, 0])
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
      .attr('height', d => d.num)
      .attr('fill', 'orange')
      .attr('x', (d, i) => {
        return x_scale(d.id) + xOffset;
      })
      .attr('y', d => bottomOfGraph - d.num);
  }, [data]);

  return <div></div>;
}
