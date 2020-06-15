import { Entry } from './entry.module';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

    constructor(private http: Http){

    }

    getEnteries(): Promise<Entry[]>{
        return this.http.get('/app/enteries')
            .toPromise()
            .then(response => response.json().data as Entry[]);
    }
}