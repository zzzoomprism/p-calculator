import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @ViewChild('bar', {static: true}) private chartContainer: ElementRef;

  private data = [
    {"name": "Erwebseinkommen", "value": "8333", "color": "#303652"},
    {"name": "AHV-Rente ab dem Jahr 2055", "value": "2313", "color": "#E84072"},
    {"name": "Vorsorge-Potential ", "value": "10500", "color": "#3EC8BF"},
  ];
  private svg;
  private width = 700;
  private height = 156;
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }
  private createSvg(): void {
    this.svg = d3.select(this.chartContainer.nativeElement)
      .append("svg:svg")
      .attr("width", 500)
      .attr("height", 364)
      .append("svg:g")
      .attr('transform', `translate(50, ${100})`);

  }
  private wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = -30,
        y = 20,
        dy = 0, //parseFloat(text.attr("dy")),
        tspan = text.text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em")
          .style("text-align", "center");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
            .attr("x", -60)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.name))
      .padding(1);
    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(-50," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr('class', 'graph-bar-text')
      .call(this.wrap, 150)

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 10500])
      .range([this.height, 0]);

    this.svg.append("g")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => `${d.value} CHF`)
      .attr("x", (d, i) =>  i * 154-30 )
      .attr("y", (d) => y(d.value) - 6 )
      .attr("class", "text-value")

    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i === 0 ? 0 : i * 164 )
      .attr("y", d => y(d.value))
      .attr("width", 32)
      .attr("height", (d) => this.height - y(d.value))
      .attr('rx', 8)
      .attr("fill", d => d.color)

      .attr("class", "graph-bar");

    this.svg.select('path')
      .style('display', 'none');

    this.svg.selectAll('line')
      .style('display', 'none');

    this.svg.selectAll('rect')
      .attr("class", "graph")
  }
}
