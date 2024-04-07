import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards!: Card[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {}

  getCards(): void {
    this.http
      .get<Card[]>(this.apiUrl + '/cards')
      .subscribe((res: Card[]) => {
        this.cards = res;
      });
  }

  getUsers(): Observable<Card[]> {
    return this.http.get<Card[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addCard(card: Card): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', card);
  }

  updateCard(card: Card, cardId: number): Observable<any> {
    return this.http.put(this.apiUrl + '/cards/' + cardId, card);
  }
}
