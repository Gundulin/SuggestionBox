import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SteamApiService } from '../../services/steam-api.service';

@Component({
  selector: 'suggestion-form',
  imports: [FormsModule, NgIf],
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css',
})
export class SuggestionFormComponent {
  public steamId: string = '';
  public hasGameSuggestion = false;
  public suggestion: string = 'Waiting for suggestion';

  constructor(private service: SteamApiService) {}

  public onSubmit(): void {
    console.log(`you submitted the following steamId: ${this.steamId}`)
    this.service.getSuggestion(this.steamId);
  }
}
