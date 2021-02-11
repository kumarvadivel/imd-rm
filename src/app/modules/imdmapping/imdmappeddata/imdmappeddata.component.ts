import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeamComponent } from 'src/app/common/changeam/changeam.component';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../../employee/partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../../employee/partials/versionhistory/versionhistory.component';
import { EditimdmappingComponent } from '../partials/editimdmapping/editimdmapping.component';

@Component({
  selector: 'app-imdmappeddata',
  templateUrl: './imdmappeddata.component.html',
  styleUrls: ['./imdmappeddata.component.css']
})
export class ImdmappeddataComponent implements OnInit {

  mapdatas=[
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
      location:"delhi",
      locationcode:"1000011",
      from:"12-1-2020",
      to:"2-3-2020",
      pbd:"Smart Insurance",
      codename:"Smart Insurance",
      digitlead:"Chandra sekhar sharma",
      rmname:"ruban",
      rmsts:"Registered",
      city:"Bangalore",
      team:"Bangalore-team",
      type:"N/A",
      rmcode:16542,
      imdsts:"Active",
      imdmstrcity:"Mumbai",
      channel:["Motor","Multiline","Insurance"],
      zone:"North-1",
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
        }
      ]
    },
    
  ]
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openbulkupload(){
    const dialogRef = this.dialog.open(BulkuploadComponent);
  }
  openeditemp(){
    const dialogRef = this.dialog.open(EditimdmappingComponent);
  }
  openversionhistory(data){
    const dialogRef = this.dialog.open(VersionhistoryComponent,{
      data:data
    })
  }
  openchangeam(){
    const dialogRef = this.dialog.open(ChangeamComponent)
  }
}
