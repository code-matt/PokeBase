import { Injectable } from '@angular/core'

@Injectable()
export class GlobalsComponent {
  constructor(private window: Window) {
  }
  getHost(){
    return window.location.host
  }
}
