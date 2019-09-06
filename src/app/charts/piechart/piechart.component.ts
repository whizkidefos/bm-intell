import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350, 450, 660];
  pieChartLabels: string[] = ['Abo Terro', 'Ernio Tardini', 'MPX S.r.l'];
  colors: any[] = [
    {
      backgroundColor: ['#26547C', '#FF6B6B', '#FFD166'],
      borderColor: '#111'
    }
  ];
  pieChartType = 'doughnut';

  ngOnInit() {
  }

}
