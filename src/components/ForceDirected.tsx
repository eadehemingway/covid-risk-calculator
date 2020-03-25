import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

interface Props {
  deathRate: number;
  id: string;
}

export default function ForceDirected({ deathRate, id }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = d3.range(100).map((n, i) => {
      const isDeathCircle = n >= deathRate;
      const color = isDeathCircle ? 'orange' : 'brown';
      return { id: i, num: n, color };
    });
    d3.select(`#${id}`)
      .attr('width', 200)
      .attr('height', 600);
    setData(data);
  }, [deathRate, id]);

  useEffect(() => {
    const centerOfGravity = { x: 100, y: 300 };
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
        d3.selectAll(`.circle-${id}`).attr(
          'transform',
          (d: dataWithCoordinates) => `translate(${d.x} ${d.y})`
        );
      });

    const svg = d3.select(`#${id}`);

    svg
      .selectAll(`.circle-${id}`)
      .data(data)
      .enter()
      .append('circle')
      .attr('r', radius)
      .attr('class', `circle-${id}`)
      .attr('stroke', d => d.color)
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  }, [data, id]);

  return (
    <Container>
      <svg id={id} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2;
`;
