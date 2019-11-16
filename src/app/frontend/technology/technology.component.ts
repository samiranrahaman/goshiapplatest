import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var test: any;
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
 technologydata: any;
 equipmentdata: any;
 manufacturingdata: any;
  home:any;
  
  HoneyComb: any;
  PressBending: any;
  Welding: any;
  MachiningTools: any;
  QualityassuranceEquipment: any;
  AccessoryEquipment: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.home={};
	  this.HoneyComb=[];
	   this.PressBending=[];
	   
	    this.Welding=[];
  this.MachiningTools=[];
  this.QualityassuranceEquipment=[];
  this.AccessoryEquipment=[];
  
  
  this.http.get('/technologydata').subscribe(data => {
    this.technologydata = data;
	 var obj1 = { 'technologydata': this.technologydata};
	 this.home = Object.assign( this.home, obj1);
  });
   this.http.get('/equipmentdata').subscribe(data => {
    this.equipmentdata = data;
 for (var key in data) {
		 //console.log(data[key].item_name);
		 if(data[key].item_name=='Honey Comb') { 
		     this.HoneyComb.push(data[key]);
			}
				 if(data[key].item_name=='Press / Bending') { 
		     this.PressBending.push(data[key]);
			}
				 if(data[key].item_name=='Welding') { 
		     this.Welding.push(data[key]);
			}
					 if(data[key].item_name=='Machining Tools') { 
		     this.MachiningTools.push(data[key]);
			}
					 if(data[key].item_name=='Quality assurance Equipment') { 
		     this.QualityassuranceEquipment.push(data[key]);
			}
					 if(data[key].item_name=='Accessory Equipment') { 
		     this.AccessoryEquipment.push(data[key]);
			}
	 }
	

	// var obj1 = { 'equipmentdata': this.equipmentdata};
	// this.home = Object.assign( this.home, obj1);
  });
   this.http.get('/manufacturingdata').subscribe(data => {
    this.manufacturingdata = data;
	 var obj1 = { 'manufacturingdata': this.manufacturingdata};
	 this.home = Object.assign( this.home, obj1);
  });
   var obj3 = { 'HoneyComb': this.HoneyComb};
   this.home = Object.assign( this.home, obj3);
   
   var obj4 = { 'PressBending': this.PressBending};
   this.home = Object.assign( this.home, obj4);
   
   var obj5 = { 'Welding': this.Welding};
   this.home = Object.assign( this.home, obj5);
   
   var obj6 = { 'MachiningTools': this.MachiningTools};
   this.home = Object.assign( this.home, obj6);
   
   var obj7 = { 'QualityassuranceEquipment': this.QualityassuranceEquipment};
   this.home = Object.assign( this.home, obj7);
      var obj8 = { 'AccessoryEquipment': this.AccessoryEquipment};
   this.home = Object.assign( this.home, obj8);
  console.log(this.home)
   this.custom();
   
  
}
custom()
{
	console.log("custom");
	new test();
}

}
