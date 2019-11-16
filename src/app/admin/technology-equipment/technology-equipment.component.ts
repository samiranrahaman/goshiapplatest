import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technology-equipment',
  templateUrl: './technology-equipment.component.html',
  styleUrls: ['./technology-equipment.component.css']
})
export class TechnologyEquipmentComponent implements OnInit {

    products: any;
    constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	    this.http.get('/equipmentdata').subscribe(data => {
    this.products = data;
  });
  }
  
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/equipmentdata/'+id)
		  .subscribe(res => {
			  
			  //this.router.navigate(['admin/technology']);
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
