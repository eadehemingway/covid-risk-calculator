import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { colors } from '../colors';

export default function Slider({ id }) {
  useEffect(() => {
    const yVal = 40;
    const sliderWidth = 180;
    const xScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, sliderWidth])
      .clamp(true);
    const svg = d3.select(`#${id}`);
    svg
      .append('line')
      .attr('x1', 0)
      .attr('x2', sliderWidth)
      .attr('y1', yVal)
      .attr('y2', yVal)
      .attr('stroke', colors.orange)
      .attr('stroke-width', 4);

    const drag = d3.drag().on('drag', d => {
      const handle = d3.selectAll(`#${id} circle`);
      if (d3.event.x > 0 && d3.event.x < sliderWidth) {
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
  }, [id]);

  return null;
}
