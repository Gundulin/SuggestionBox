import { Component } from '@angular/core';
import { SuggestionFormComponent } from "../suggestion-form/suggestion-form.component";

@Component({
  selector: 'base',
  imports: [SuggestionFormComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
