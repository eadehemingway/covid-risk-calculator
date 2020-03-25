import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

export default function Slider({ id }) {
  useEffect(() => {
    const yVal = 40;

    const svg = d3.select(`#${id}`);
    svg
      .append('line')
      .attr('x1', 0)
      .attr('x2', 200)
      .attr('y1', yVal)
      .attr('y2', yVal)
      .attr('stroke', '#FE9839')
      .attr('stroke-width', 4);

    const drag = d3.drag().on('drag', d => {
      const handle = d3.selectAll(`#${id} circle`);
      handle.attr('cx', d3.event.x);
    });

    svg
      .append('circle')
      .attr('r', 8)
      .attr('cy', yVal)
      .attr('cx', 100)
      .attr('fill', 'white')
      .attr('stroke', '#FE9839')
      .attr('stroke-width', 2)
      .attr('cursor', 'pointer')
      .call(s => drag(s));
  }, [id]);

  return null;
}
