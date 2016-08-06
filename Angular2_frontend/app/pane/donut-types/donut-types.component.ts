import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChange} from '@angular/core'
import {nvD3} from 'ng2-nvd3'
declare let d3: any

@Component({
  selector: `donut-types`,
  directives: [nvD3],
  template: `
    <div>
      <nvd3 #nvD3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})

export class DonutTypesComponent implements OnInit, OnChanges{
  @Input() pokemon: any;
  @ViewChild(nvD3) nvD3: nvD3;
  options: any;
  data: any;
  ngOnInit(){
    this.options = {
      chart: {
        type: 'pieChart',
        height: 250,
        donut: true,
        x: function(d){return d.name;},
        y: function(d){return d.poke_type_id;},
        showLabels: false,
        pie: {
          startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
          endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
        },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 0,
            bottom: 5,
            left: 0
          }
        }
      }

    }
    this.data = [
      {
        key: "Types",
        values: []
      }
    ];
  }
  ngOnChanges(changes: any){
    if(this.nvD3.chart){
      this.nvD3.updateWithData(changes.pokemon.currentValue.types)
    }
  }
}
