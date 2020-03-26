import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { colors } from '../colors';

interface Props {
  id: string;
}

export default function BarChart({ id }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = d3.range(30).map((n, i) => {
      const someNum = i + Math.random() * 10;
      const color = someNum / 1.2 > i ? colors.paleGrey : colors.palePink;
      return {
        id: `condition-${i}`,
        num: n * n,
        fillColor: color,
      };
    });
    setData(data);
  }, []);

  useEffect(() => {
    const yOffset = 150;
    const xOffset = 180;
    const stringArr = data.map(d => d.id);

    const x_scale = d3
      .scaleLinear()
      .domain([841, 0])
      .rangeRound([500, 0]);

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
      .attr('stroke', colors.brown);

    d3.selectAll('.axis text')
      .attr('font-family', 'abril-Fatface')
      .attr('fill', colors.brown);

    const rects = svg
      .selectAll(`rect`)
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 0)
      .attr('height', y_scale.bandwidth())
      .attr('fill', d => d.fillColor)
      .attr('x', xOffset + axisThickness / 2)
      .attr('y', d => y_scale(d.id) + yOffset);

    rects
      .transition()
      .duration(500)
      .attr('width', d => x_scale(d.num));

    const tooltipPadding = 10;
    rects
      .on('mouseover', function(d) {
        d3.select(this).attr('fill', 'grey');
        tooltipGroup.style('visibility', 'visible');
        tooltipCountryText.text(d.fillColor);
      })
      .on('mousemove', d => {
        tooltipGroup.attr(
          'transform',
          `translate(${d3.event.offsetX + tooltipPadding},${d3.event.offsetY})`
        );
        tooltipCountryText.text(d.fillColor);
      })
      .on('mouseout', function(d) {
        d3.select(this).attr('fill', () => d.fillColor);
        tooltipGroup.style('visibility', 'hidden');
      });

    const tooltipGroup = svg
      .append('g')
      .attr('class', 'tooltip')
      .style('visibility', 'hidden');
    const tooltipRect = tooltipGroup
      .append('rect')
      .attr('width', 200)
      .attr('height', 60)
      .attr('fill', 'white')
      .attr('stroke', colors.orange);
    const tooltipCountryText = tooltipGroup
      .append('text')
      .attr('class', 'tooltip')
      .style('font-family', 'Lexend')
      .style('fill', colors.brown)
      .style('z-index', '100')
      .style('font-size', '10px')
      .attr('dx', '5')
      .attr('dy', '13');
  }, [data]);

  return null;
}
