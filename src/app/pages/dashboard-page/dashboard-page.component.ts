import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BarchartComponent } from '../../components/barchart/barchart.component';
// material components

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

// ngx charts
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { PiechartComponent } from '../../components/piechart/piechart.component';
import { single } from '../../../../data';

@Component({
  selector: 'app-dashboard',
  standalone: true,  
  imports: [MatCardModule, MatExpansionModule, NgxChartsModule,NavbarComponent,PiechartComponent,SidebarComponent,BarchartComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardComponent {
  panelOpenState = false;

  // ====== badge icons =======

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
