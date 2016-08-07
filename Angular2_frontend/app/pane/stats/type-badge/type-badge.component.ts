import { Component, Input } from '@angular/core'
@Component({
  selector: `type-badge`,
  styleUrls: ["app/pane/stats/type-badge/type-badge.component.css"],
  template: `
      <div class="col-md-2 type-badge">
        <p>{{type}}</p>
      </div>
  `
})
export class TypeBadgeComponent {
  @Input() type = "";
}
