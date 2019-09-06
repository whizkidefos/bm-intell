import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 44, 14, 23, 69], label: 'Sentiment Analysis' },
  { data: [44, 15, 29, 10, 77], label: 'Facial Recognition' },
  { data: [30, 25, 60, 55, 36], label: 'Behavioral Patterns' }
];

const LINE_CHART_LABELS: string[] = ['April', 'May', 'June', 'July', 'August'];

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsiveness: true
  };
  lineChartType = 'line';
  lineChartLegend = true;
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
