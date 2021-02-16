import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BulkuploadComponent } from '../partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../partials/versionhistory/versionhistory.component';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements AfterViewInit {  
  employeecount:number=0;
  employees=[
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    {
      name:"john doe",
      ecode:"12345",
      designation:"Team Lead",
      from:"12-12-21",
      to:"-",
      rm:"ruban",
      rmcode:"13445",
      lob:"Retail",
      zone:"North 1",
      mainloc:"Delhi",
      baseloc:"Gurgaon",
      profile:"Team Lead",
      channels:["Agency","Broker","Multiline"],
      vertical:"Motor Dealer",
      subvertical:"All",
      typeofemp:"Dedicated",
      empstatus:"Active",
      emailid:"john@godigit.com",
      phone:"9867575740",
      costshare:"N/A",
      percentageallocation:"N/A",
      costcenter:"N/A",
      versionhistory:[
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
        {
          details:"Employee channel changed from Broker to Agency",
          datetime:"31st Dec 2020 at 5:15pm",
          modifiedby:"john doe"
        },
      ]
    },
    
  ]
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent,{
      data:{
        title:"Bulk Upload Employee Data"
      }
    });
  }
  openeditemp(){
    const dialogRef = this.dialog.open(EditemployeeformComponent);
  }
  openversionhistory(data){
    const dialogRef = this.dialog.open(VersionhistoryComponent,{
      data:data
    })
  }
}



