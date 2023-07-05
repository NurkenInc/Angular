import { Component } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemsService]
})

export class HomeComponent {
  getValue() {
    this.value = Math.floor(Math.random() * 2);
    this.progress = this.selectedValue === this.value ? 'win' : 'lose';
    this.formatValue(this.value);
  }

  formatValue(value: number) {
    this.formattedValue = value ? 'Fairy tails' : 'Heads';
  }

  onSelect(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value === 'fairy tails' ? 0 : 1;
    this.progress = 'play';
  }

  value: number = 0;
  formattedValue: string = "";
  selectedValue!: number;
  progress?: 'win' | 'lose' | 'play';
}
