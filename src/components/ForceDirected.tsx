import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { colors } from '../style/colors';

interface Props {
  deathRate: number;
  position: number;
  id: string;
  x: number;
}

export default function ForceDirected({ deathRate, position, id, x }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = d3.range(100).map((n, i) => {
      let fillColor = colors.paleGrey;
      if (n >= Math.ceil(deathRate)) fillColor = 'none';
      if (n < Math.floor(deathRate)) fillColor = colors.darkGrey;

      return { id: i, fillColor, position };
    });
    setData(data);
  }, [deathRate, position]);

  useEffect(() => {
    // const windowWidth = window.innerWidth;
    // const widthOfRightSide = (windowWidth / 100) * 70;
    // const widthOfSpaceForForce = widthOfRightSide / 3;
    // console.log('widthOfSpaceForForce:', widthOfSpaceForForce);
    // const midPointOfWidth = widthOfSpaceForForce / 2;
    // const x = widthOfSpaceForForce * position + midPointOfWidth;
    // console.log('x:', x);
    // console.log('position:', position);

    const radius = 6;

    const collision = d3.forceCollide(radius * 2).strength(0.8);
    interface dataWithCoordinates {
      x: number;
      y: number;
    }
    const centers = [200, 500, 800];
    d3.forceSimulation(data)
      .force('collision', collision)
      .force('center', d3.forceCenter(centers[position], 700 / 2))
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll(`.circle-${position}`)
          .attr('cy', (d: { y: number }) => d.y)
          .attr('cx', (d: { x: number }) => d.x);
      });

    const svg = d3.select(`#${id}`);

    const circles = svg.selectAll(`.circle-${position}`).data(data);
    circles
      .enter()
      .append('circle')
      .attr('r', radius)
      .attr('class', `circle-${position}`)
      .attr('stroke', colors.orange)
      .attr('stroke-width', 2)
      .attr('fill', d => d.fillColor);

    circles.attr('fill', d => d.fillColor);
  }, [data, deathRate, id, position, x]);

  return null;
}
