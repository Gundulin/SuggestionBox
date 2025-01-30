import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'suggestion-form',
  imports: [FormsModule],
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css',
})
export class SuggestionFormComponent {
  public steamId: string = '';

  constructor() {}

  public onSubmit(): void {
    console.log(`you submitted the following steamId: ${this.steamId}`)
  }
}
