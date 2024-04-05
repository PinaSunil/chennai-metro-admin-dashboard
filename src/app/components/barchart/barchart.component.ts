import { Component } from '@angular/core';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { single } from '../../../../data';


@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgxChartsModule,],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss'
})
export class BarchartComponent {
  single: any[] | undefined;
  multi: any[] | undefined;

  view: [number, number] = [120, 200];

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  showGridLines = false;
  yAxisLabel = 'Population';

  colorScheme: Color = {
    domain: ['#29cc39'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'country population',
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }
}
