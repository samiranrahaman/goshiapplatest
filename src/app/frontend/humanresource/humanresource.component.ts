import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
declare var test: any;

@Component({
  selector: 'app-humanresource',
  templateUrl: './humanresource.component.html',
  styleUrls: ['./humanresource.component.css']
})
export class HumanresourceComponent implements OnInit {
   postdata = {};
  selectedFile: File;
  eventdata: any;
  home:any;
  success:any;
  Diwali: any;
  Janmastmi: any;
  Lohri: any;
  LongServiceAward: any;
  Vishakarma: any;
  Anniversary:any;
  Holi:any;
    
  filename:string;
  filetype:string;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	  this.home={};
	  
	   this.Diwali=[];
	    this.Janmastmi=[];
		 this.Lohri=[];
		  this.LongServiceAward=[];
		   this.Vishakarma=[];
		   
		    this.Holi=[];
			 this.Anniversary=[];
			 
  this.http.get('/eventdata').subscribe(data => {
    this.eventdata = data;
	
	 for (var key in data) {
		 //console.log(data[key].item_name);
		 if(data[key].event_name=='Diwali') { 
		     this.Diwali.push(data[key]);
			}
				 if(data[key].event_name=='Janmastmi') { 
		     this.Janmastmi.push(data[key]);
			}
				 if(data[key].event_name=='Lohri') { 
		     this.Lohri.push(data[key]);
			}
					 if(data[key].event_name=='Long Service Award') { 
		     this.LongServiceAward.push(data[key]);
			}
			 if(data[key].event_name=='Vishakarma') { 
		     this.Vishakarma.push(data[key]);
			}
			
			if(data[key].event_name=='10th Anniversary') { 
		     this.Anniversary.push(data[key]);
			}
			if(data[key].event_name=='Holi') { 
		     this.Holi.push(data[key]);
			}
					
	 }
	
	 var obj1 = { 'eventdata': this.eventdata};
	 this.home = Object.assign( this.home, obj1);
  });
  
   var obj3 = { 'Diwali': this.Diwali};
   this.home = Object.assign( this.home, obj3);
   
    var obj4 = { 'Janmastmi': this.Janmastmi};
   this.home = Object.assign( this.home, obj4);
   
    var obj5 = { 'Lohri': this.Lohri};
   this.home = Object.assign( this.home, obj5);
   
    var obj6 = { 'LongServiceAward': this.LongServiceAward};
   this.home = Object.assign( this.home, obj6);
   
    var obj7 = { 'Vishakarma': this.Vishakarma};
   this.home = Object.assign( this.home, obj7);
   
   
   var obj8 = { 'Holi': this.Holi};
   this.home = Object.assign( this.home, obj8);
   var obj9 = { 'Anniversary': this.Anniversary};
   this.home = Object.assign( this.home, obj9);
   
  
  
  console.log(this.home)
  this.custom();
}
 changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  
  this.filename=file.name;
   this.filetype=file.type;
	 console.log(this.filename)
 console.log(this.filetype)	 
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.selectedFile = myReader.result;
  }
  myReader.readAsDataURL(file);
}


  saveProduct() {
	  this.success={};
	console.log(this.postdata);
	/* var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}; */
			
	 /* this.http({
				method: "POST",
				headers: headers,
	      url: 'http://tubeaim.com/mailsent/sent',
				data: {"email":"my@email.com","password":"secret"}
	    }).success(function(result) {
					console.log("Auth.signin.success!")
					console.log(result);
	    }).error(function(data, status, headers, config) {
					console.log("Auth.signin.error!")
	        console.log(data);
	        console.log(status);
	        console.log(headers);
	        console.log(config);
	    }); */
		
		
		
		
		
		/* this.http.post('http://tubeaim.com/mailsent/sent',this.postdata)
		  .subscribe(res => {
			  console.log(this.postdata);
			   let status = res['status'];
			   console.log(status);
			  //this.router.navigate(['/careers']);
			}, (err) => {
			  console.log(err);
			}
		  );   */ 
		  
		  
		  
/* 		  const httpOptions = {
			  headers: new HttpHeaders({
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			  })
			};

			this.http.post(
			   "http://tubeaim.com/mailsent/sent",
			   JSON.stringify({id: 4, name: 'some'}),
			   httpOptions 
			).subscribe(); */
			
			const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Basic loremlorem')
		.set('Access-Control-Allow-Origin', '*')
		.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
			
	 var obj2 = { 'productimage': this.selectedFile};
	 this.postdata = Object.assign( this.postdata, obj2);
     var obj3 = { 'filename': this.filename};
	 this.postdata = Object.assign( this.postdata, obj3);
	 var obj4 = { 'filetype': this.filetype};
	 this.postdata = Object.assign( this.postdata, obj4);   
	 
	 var obj5 = { 'type':'careers'};
	 this.postdata = Object.assign( this.postdata, obj5);
	 
	 console.log(this.postdata);
			this.http.post('http://tubeaim.com/mailsent/sent',this.postdata, { headers: headers })
		  .subscribe(res => {
			  console.log(this.postdata);
			   let status = res['status'];
			   console.log(status);
			   if(status=='success')
			   {
				   var obj7 = { 'error': "Message Sent Successfully!"};
                   this.success = Object.assign( this.success, obj7);
			       console.log(this.success); 
			  
			   }
			   else
			   {
				    var obj7 = { 'error': "Message Not Sent!"};
                   this.success = Object.assign( this.success, obj7);
			       console.log(this.success);
			   }
			   
			  
			  //this.router.navigate(['/careers']); 
			}, (err) => {
			  console.log(err);
			}
		  ); 
	  }
	  
	custom()
{
	new test();
}
	  
	  
}
