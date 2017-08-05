import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Array from 'd3-array';
import * as d3Shape from 'd3-shape';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LineChartComponent implements OnInit, OnChanges {
  @Input() private data: Array<number>;
  @Input() private name: string;

  private margin: any = { top: 20, bottom: 30, left: 20, right: 20};
  private svg: any;
  private width: number;
  private height: number;
  private xAxis: any;
  private yAxis: any;
  private line: d3Shape.Line<[number, number]>;

  constructor() {
    this.width = 500 - this.margin.left - this.margin.right ;
    this.height = 400 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initChart();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.svg) {
      this.updateChart();
    }
  }

  private initChart() {
    this.svg = d3.select("#" + this.name + "area")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .attr("transform", "translate(" + this.margin.left + "," + (-this.height - this.margin.top - this.margin.bottom) + ")")
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  updateChart() {
    this.initAxes();
    this.drawAxes();
    this.drawLine();
  }

  private initAxes() {
    this.xAxis = d3Scale.scaleLinear().range([0,this.width]);
    this.xAxis.domain(d3Array.extent(this.data, d => d[0]));
    this.yAxis = d3Scale.scaleLinear().range([this.height,0]);
    console.log(this.data[0][1]);
    this.yAxis.domain(d3Array.extent(this.data, d => d[1]));
  }

  private drawAxes() {
    this.drawXAxis();
    this.drawYAxis();
  }

  private drawXAxis() {
   this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.xAxis));
  }

  private drawYAxis() {
    this.svg.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.yAxis))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "translate(140, -25)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("font-size", "15px")
      //.style("fill", "black")
      //.attr("stroke", "black")
      .style("text-anchor", "end")
      .text("");
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x((d: any) => this.xAxis(d[0]))
      .y((d: any) => this.yAxis(d[1]));

    this.svg.append("path")
      .datum(this.data)
      .attr("fill", "none")
      .attr("class", "line")
      .attr("stroke", "black")
      .attr("d", this.line);
  }
}
