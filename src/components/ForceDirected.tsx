import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { colors } from '../colors';

interface Props {
  deathRate: number;
  position: number;
  id: string;
}

export default function ForceDirected({ deathRate, position, id }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = d3.range(100).map((n, i) => {
      if (n >= Math.ceil(deathRate)) return { id: i, fillColor: 'none' };
      if (n < Math.floor(deathRate))
        return { id: i, fillColor: colors.darkGrey };
      return { id: i, fillColor: colors.paleGrey };
    });
    setData(data);
  }, [deathRate]);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const widthOfRightSide = (windowWidth / 100) * 70;
    const widthOfSpaceForForce = widthOfRightSide / 3;
    const midPointOfWidth = widthOfSpaceForForce / 2;
    const x = widthOfSpaceForForce * position + midPointOfWidth;

    const centerOfGravity = { x, y: 300 };
    const forceX = d3
      .forceX()
      .x(centerOfGravity.x)
      .strength(0.2);

    const forceY = d3
      .forceY()
      .y(centerOfGravity.y)
      .strength(0.2);
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

    const svg = d3.select(`#${id}`);

    const circles = svg.selectAll(`.circle-${position}`).data(data);
    circles
      .enter()
      .append('rect')
      .attr('width', radius * 2)
      .attr('height', radius * 2)
      .attr('rx', 100)
      .attr('ry', 100)
      .attr('class', `circle-${position}`)
      .attr('stroke', colors.orange)
      .attr('stroke-width', 2)
      .attr('fill', d => d.fillColor);

    circles.attr('fill', d => d.fillColor);
  }, [data, deathRate, id, position]);

  return null;
}
