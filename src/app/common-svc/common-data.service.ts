import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  constructor(private http: HttpClient) {}

  post(baseUrl: string, controller: string, model: any): Observable<any> {
    let url = `${baseUrl}/${controller}`;
    return this.http.post<any>(url, model);
    // .pipe(
    //   catchError((error) => {
    //     console.error('Error occurred:', error);
    //     return throwError(() => new Error(error.message)); // Propagate the error
    //   })
    // );
  }

  update(baseUrl: string, controller: string, param: any): Observable<any> {
    let url = `${baseUrl}/${controller}`;
    let putModel=this.JsonStringify(param);
    return this.http.put<any>(url, putModel).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => new Error(error.message)); // Propagate the error
      })
    );
  }
  
  delete(baseUrl: string, controller: string, param: any): any {
    try {
      let apiUrl = `${baseUrl}/${controller}/${param}`;
      return this.http.delete<any>(apiUrl).pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return throwError(() => new Error(error.message)); // Propagate the error
        })
      );
    } catch (error) {
      return error;
    }
  }

  getByID(baseUrl: string, controller: string, param: any){
    let apiUrl = `${baseUrl}/${controller}?id=${param}`;
    return this.http.get<any>(apiUrl).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => new Error(error.message)); // Propagate the error
      })
    );
  }

  getList(baseUrl: string, controller: string, param: any){
    let qString = this.JsonStringify(param);
    let apiUrl = `${baseUrl}/${controller}?param=${qString}`;
    return this.http.get<any>(apiUrl).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => new Error(error.message)); // Propagate the error
      })
    );
  }

  JsonStringify(models: any): string {
    var smodel = '';
    if (models.length !== undefined) {
        if (models.length > 1) {
            for (var i = 0; i < models.length; i++) {
                if (i == 0) {
                    smodel += "[" + JSON.stringify(models[i]) + ",";
                }
                else if (i == (models.length - 1)) {
                    smodel += JSON.stringify(models[i]) + "]";
                }
                else {
                    smodel += JSON.stringify(models[i]) + ",";
                }
            }
        }
        else {
            smodel = "[" + JSON.stringify(models[0]) + "]";
        }
    }
    else {
        smodel = "[" + JSON.stringify(models) + "]";
    }
    return smodel;
}
}
