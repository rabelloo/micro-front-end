import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  count = 0;
  version = VERSION.full;

  @Input()
  name = '';

  @Output()
  nameChange = new EventEmitter<string>();

  onInput(e: KeyboardEvent): void {
    const input = e.currentTarget as HTMLInputElement;
    this.count++;
    this.nameChange.emit(input.value);
  }
}
