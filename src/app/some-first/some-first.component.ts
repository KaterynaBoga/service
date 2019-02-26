import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some-service.service';
import { Observable } from 'rxjs';
import { SomeModel } from './some.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-some-first',
  templateUrl: './some-first.component.html',
  styleUrls: ['./some-first.component.css']
})
export class SomeFirstComponent implements OnInit {

  public name: string;
  // public somes: Observable<any>;
  public somes: Observable<SomeModel[]>

  constructor( private someService: SomeService) { }

  ngOnInit() {
    this.name = this.someService.getName();

    this.somes = this.someService.getSomes();

    this.somes = this.someService.getSomes().pipe(
      map(data => {
        console.log(data[0]);
        return data;
      })
    )

    // this.someService.getSomes().subscribe((somes: any[]) => {
    //  this.somes = somes;
    // });
  }

}
