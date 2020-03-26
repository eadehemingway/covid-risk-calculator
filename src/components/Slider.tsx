import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import colors from '../style/colors';

export default function Slider({ id, setVal, columnWidth }) {
  useEffect(() => {
    const yVal = 40;
    const padding = 20;
    const maxVal = 20;

    const xScale = d3
      .scaleLinear()
      .domain([10, maxVal])
      .range([0, columnWidth])
      .clamp(true);
    const svg = d3.select(`#${id}`);
    svg
      .append('line')
      .attr('x1', 0)
      .attr('x2', xScale(maxVal))
      .attr('y1', yVal)
      .attr('y2', yVal)
      .attr('stroke', colors.brown)
      .attr('stroke-width', 2);

    const drag = d3.drag().on('drag', d => {
      const handle = d3.selectAll(`#${id} circle`);
      if (d3.event.x > xScale(0) && d3.event.x < xScale(maxVal)) {
        const xVal = d3.event.x;
        const sliderVal = xScale.invert(xVal);

        setVal(sliderVal);
        handle.attr('cx', d3.event.x);
      }
    });

    svg
      .append('circle')
      .attr('r', 8)
      .attr('cy', yVal)
      .attr('cx', 100)
      .attr('fill', 'white')
      .attr('stroke', colors.orange)
      .attr('stroke-width', 2)
      .attr('cursor', 'pointer')
      .call(s => drag(s));
  }, [columnWidth, id, setVal]);

  return null;
}
