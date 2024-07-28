import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = 'http://demo5311265.mockable.io/';
    return this.http.get(url)
  }

  editData(data: any) {
    console.log('edit get', data)
  }
  delData(data: any) {
    console.log('delete data', data)
  }
  submitData(data: any) {
    console.log('save data', data)
  }

}
