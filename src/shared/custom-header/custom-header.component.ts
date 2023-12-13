import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {
  showOptions = false;
  constructor() { }

  ngOnInit(): void {
  }
  

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  handleOptionClick(option: number) {
   
    console.log('Option ' + option + ' clicked');
    // Add your logic here
  }

}
