import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.css']
})
export class EditorContentComponent implements OnInit {

  products: any;
    constructor(private http: HttpClient,private router: Router) { }
	

  ngOnInit() {
	   this.http.get('/editorcontentdata').subscribe(data => {
    this.products = data;
  });
  }
    
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/editorcontentdata/'+id)
		  .subscribe(res => {
			  
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
