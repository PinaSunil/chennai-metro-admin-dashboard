import { Component } from '@angular/core';

// material components
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';

// ngx charts
import { NgxChartsModule,Color,ScaleType } from '@swimlane/ngx-charts';
import { single } from '../../../../data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    NgxChartsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  panelOpenState = false;

  // ====== badge icons =======
  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  single: any[] | undefined;
  multi: any[] | undefined;

  view:  [number,number] = [120, 200];

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  showGridLines = false
  yAxisLabel = 'Population';

  colorScheme : Color = {
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
