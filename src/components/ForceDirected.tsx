import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

interface Props {
  deathRate: number;
  position: number;
}

export default function ForceDirected({ deathRate, position }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = d3.range(100).map((n, i) => {
      const isDeathCircle = n >= deathRate;
      const fillColor = isDeathCircle ? 'none' : '#C4C4C4';
      return { id: i, num: n, fillColor };
    });
    setData(data);
  }, [deathRate]);

  useEffect(() => {
    const centerOfGravity = { x: 200 * position, y: 300 };
    const forceX = d3
      .forceX()
      .x(centerOfGravity.x)
      .strength(0.3);

    const forceY = d3
      .forceY()
      .y(centerOfGravity.y)
      .strength(0.3);
    const radius = 6;

    const collision = d3.forceCollide(radius * 3).strength(0.1);
    interface dataWithCoordinates {
      x: number;
      y: number;
    }
    d3.forceSimulation(data)
      .force('collision', collision)
      .force('x', forceX)
      .force('y', forceY)
      .alpha(0.07) // small alpha to have the elements move at a slower pace
      .alphaDecay(0)
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll(`.circle-${position}`).attr(
          'transform',
          (d: dataWithCoordinates) => `translate(${d.x} ${d.y})`
        );
      });

    const svg = d3.select('#visualisations');

    svg
      .selectAll(`.circle-${position}`)
      .data(data)
      .enter()
      .append('circle')
      .attr('r', radius)
      .attr('class', `circle-${position}`)
      .attr('stroke', '#FE9839')
      .attr('stroke-width', 2)
      .attr('fill', d => d.fillColor);
  }, [data, position]);

  return <div></div>;
}
