import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some-service.service';

@Component({
  selector: 'app-some-two',
  templateUrl: './some-two.component.html',
  styleUrls: ['./some-two.component.css']
})
export class SomeTwoComponent implements OnInit {

  public name: string;

  constructor(
    private someService: SomeService
  ) { }

  ngOnInit() {
    
    this.name = this.someService.getName();
  }

}
