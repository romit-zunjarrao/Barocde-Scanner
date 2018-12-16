import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  data: any[];
  laptopData: any[];

  constructor(private http:HttpClient) { 
    this.laptopData = [
      {
        "name":"Lenovo",
        "img":"https://st1.bgr.in/wp-content/uploads/2018/02/ThinkPad-X1-Carbon-5th-gen-feat.jpg",
        "model":"Thinkpad X1",
        "ram":"16GB | 8GB",
        "processor":"i7 | i5",
        "graphic":" 4GB NVIDIA",
     },
    {
      "name":"HP",
      "img":"https://cdn.images.express.co.uk/img/dynamic/59/590x/HP-spectre-main-689927.jpg",
      "model":"Spectre X360",
      "ram":"16GB | 8GB",
      "processor":"i7 | i5",
      "graphic":"4GB INTELL UHD",
      },
    {
      "name":"MSI",
    "img":"https://images-na.ssl-images-amazon.com/images/I/614yln1mZ3L._SX425_.jpg",
    "model":"GS63VR",
    "ram":"16GB | 8GB",
    "processor":"i7 | i5",
    "graphic": " 4GB NVIDIA",
    },
    {
    "name":"Razer Blade",
    "img":"http://ksassets.timeincuk.net/wp/uploads/sites/54/2016/10/razer-blade-stealth-11-1.jpg",
    "model":"Stealth Pro",
    "ram":"16GB | 8GB",
    "processor":"i7 | i5",
    "graphic":" 4GB NVIDIA",
    },
    {
    "name":"Dell",
    "img":"https://icdn8.digitaltrends.com/image/dell-xps-15-9570-prod-720x720.jpg",
    "model":"XPS 15",
    "ram":"16GB | 8GB",
    "processor":"i7 | i5",
    "graphic":" 4GB NVIDIA",
    },
    ];
  }

  fetchData(barcodeData:any)
  {
    //this.http.get('assets/data.json').subscribe(data => {this.data = data;});
   this.data = this.laptopData.filter(function(data){return data.name === barcodeData;});
   console.log(this.data[0]);
  }
}
