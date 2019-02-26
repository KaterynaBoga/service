import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SomeModel } from './some-first/some.model';

@Injectable({
  providedIn: 'root'
  }
)

export class SomeService {

  private name = 'Katya';

  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  public getName(): string {
      return this.name;
  }

  public getSomes(): Observable<SomeModel[]> {
    return this.httpClient.get(this.url)
    .pipe(
      switchMap((somes: SomeModel[]) => {
        const newSomes: SomeModel[] = [];
        somes.forEach((some: SomeModel) => {
          newSomes.push(
            new SomeModel(some.userId, some.id, some.title, some.completed)
          );
        });
        console.log(newSomes);
        return of(somes);
      }
    ));
  }
}
