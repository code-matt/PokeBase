import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChange} from '@angular/core'
import {nvD3} from 'ng2-nvd3'
declare let d3: any

@Component({
  selector: `donut-types`,
  styleUrls: ['app/pane/donut-types/donut-types.component.css'],
  directives: [nvD3],
  template: `
    <div class="donut">
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
        width: 300,
        height: 300,
        donut: true,
        cornerRadius: true,
        padAngle: 0.05,
        title: "Types",
        margin: {
          top: 0,
          right: 0,
          bottom:160,
          left: 100
        },
        x: function(d){return d.name;},
        y: function(d){return d.pie;},
        showLabels: false,
        pie: {
          startAngle: function(d) { return d.startAngle -Math.PI/2 },
          endAngle: function(d) { return d.endAngle -Math.PI/2 }
        },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 30,
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
    var arr: any[] = [];
    if(this.nvD3.chart){
      var types = changes.pokemon.currentValue.types

      types.map(function(obj){
        obj.pie = changes.pokemon.currentValue.types.length
        arr.push(obj)
      })

      this.nvD3.updateWithData(arr);
    }
  }
}
