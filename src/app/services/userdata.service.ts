
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import{Root} from "../models/user.model"

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpService: HttpClient) { }

  getUserData (user:string): Observable <Root>{
    return this.httpService.get<Root>('../../assets/FakeDB.json')
  }

}
