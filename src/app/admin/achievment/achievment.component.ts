import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievment',
  templateUrl: './achievment.component.html',
  styleUrls: ['./achievment.component.css']
})
export class AchievmentComponent implements OnInit {

 products: any;
    constructor(private http: HttpClient,private router: Router) { }
	

  ngOnInit() {
	   this.http.get('/achivementdata').subscribe(data => {
    this.products = data;
  });
  }
    
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/achivementdata/'+id)
		  .subscribe(res => {
			  
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
