import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BulkuploadComponent } from '../partials/bulkupload/bulkupload.component';
import { VersionhistoryComponent } from '../partials/versionhistory/versionhistory.component';

@Component({
  selector: 'app-employeenew',
  templateUrl: './employeenew.component.html',
  styleUrls: ['./employeenew.component.css']
})
export class EmployeenewComponent implements AfterViewInit {

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
    const dialogRef = this.dialog.open(BulkuploadComponent);
  }
  openversionhistory(data){
    const dialogRef = this.dialog.open(VersionhistoryComponent,{
      data:data
    })
  }
}
