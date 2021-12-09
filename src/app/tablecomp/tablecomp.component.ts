import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faFeatherAlt,faTrashAlt,faPlusCircle,faSave } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tablecomp',
  templateUrl: './tablecomp.component.html',
  styleUrls: ['./tablecomp.component.less']
})
export class TablecompComponent implements OnInit {
    constructor() {}

ngOnInit(): void {
   if(this.DATA.length)
   this.Columns = Object.keys(this.DATA[0]);
   
   this.Columns.forEach(element => {
       this.ColumnsShow.push(true);
   });
   for (var key in this.DATA) {
       this.isUpdate.push(true);
   }
}

    //data model for new records
    dataModel: any = {};

    //font awesome icons
    faFeatherAlt = faFeatherAlt;
    faTrashAlt=faTrashAlt;
    faPlusCircle=faPlusCircle;
    faSave=faSave;


//make showALL checkbox readonly
isChecked:boolean = true;
//Headers in data
Columns: string[] = [];
//keep track of which header to display or update 
ColumnsShow:boolean[] = [];
isUpdate:boolean[] = [];
//show add new record input box
addNew:boolean = false;

//parent child communication
@Input() DATA: any;
@Output() deletedRow = new EventEmitter<string>();
@Output() AddedRow = new EventEmitter<string>();
@Output() updatedRow = new EventEmitter<string>();

 
onCheckboxChange(event: any,index:number) {
    //console.log(event);
    this.ColumnsShow[index] = !this.ColumnsShow[index];
    this.isChecked=false;
    //console.log(this.ColumnsShow[index]);
 } 
 ShowAll(event:any){
    this.isChecked=true;
   // console.log(this.ColumnsShow);
   for (let index = 0; index < this.ColumnsShow.length; index++) 
    {
        this.ColumnsShow[index]=true;
    }   
 }
 deleteRecord(event:any,row:any){
    this.deletedRow.emit(row);
   
 }
 updateFields(index:number,row:any){
    this.updatedRow.emit(row);
    this.isUpdate[index] = !this.isUpdate[index];
 }
 saveRecord(index:number,row:any){
    this.updatedRow.emit(row);
    this.isUpdate[index] = !this.isUpdate[index];
 }
 addNewRecord(){
    if(Object.keys(this.dataModel).length)
    {
        this.AddedRow.emit(this.dataModel);
        this.dataModel= {};
    }
    this.addNew = !this.addNew;
 }
}