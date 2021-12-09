import { Component, Input, OnInit } from '@angular/core';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  deletedRow: any;
  updatedRow: any;
  addedRow: any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteRecordHandler($event:any,data: any){
    this.deletedRow = $event;
    if(data.indexOf(this.deletedRow)!=-1)
        data.splice(data.indexOf(this.deletedRow), 1);  
  }
  UpdateRowHandler($event:any,data:any){
    this.updatedRow = $event;
    if(data.indexOf(this.updatedRow)!=-1)
    {
      let index = data.indexOf(this.updatedRow)
      data[index] = this.updatedRow;
      
    }
      
  }
  AddRowHandler($event:any,data:any){
    this.addedRow = $event;
    console.log(this.addedRow);
    data.push(this.addedRow);
  }

  data:any = [];
  EMP_DATA: any  = [ 
    {
        "id":1,
        "name":"Tanmaya Jain",
        "email":"tanmaya.jain@snapon.com",
        "gender":"M"
    },
    {
        "id":2,
        "name":"Viki rant",
        "email":"viki.rant@snapon.com",
        "gender":"F"
    },
    {
        "id":3,
        "name":"Jalaj aggarwal",
        "email":"jalaj.aggarwal@snapon.com",
        "gender":"M"
    },
    {
        "id":4,
        "name":"Utkarsh singh",
        "email":"utkarsh.singh@snapon.com",
        "gender":"M"
    }
];
STUD_DATA: any  = [ 
  {
      "Roll no.":100,
      "Student Name":"Tanmaya Jain",
      "School Email":"tanmaya.jain@snapon.com",
      "Class":"X",
      "Passsing?":"Yes"
  },
  {
      "Roll no.":200,
      "Student Name":"SUBHASH GILL",
      "School Email":"sb@snapon.edu",
      "Class":"X",
      "Passsing?":"Yes"
  },
  {
      "Roll no.":300,
      "Student Name":"Jalaj aggarwal",
      "School Email":"jalaj.aggarwal@snapon.edu",
      "Class":"XII",
      "Passsing?":"Yes"
  },
  {
      "Roll no.":400,
      "Student Name":"Utkarsh singh",
      "School Email":"utkarsh.singh@snapon.edu",
      "Class":"XII",
      "Passsing?":"Yes"
  },
  {
    "Roll no.":500,
    "Student Name":"Shrishti Jain",
    "School Email":"shrishti.jain@snapon.edu",
    "Class":"X",
    "Passsing?":"Yes"
}
];
}
