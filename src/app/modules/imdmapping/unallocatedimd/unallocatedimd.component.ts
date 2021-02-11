import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkuploadComponent } from '../../employee/partials/bulkupload/bulkupload.component';
import { EditemployeeformComponent } from '../../employee/partials/editemployeeform/editemployeeform.component';
import { VersionhistoryComponent } from '../../employee/partials/versionhistory/versionhistory.component';
import { EditimdmappingComponent } from '../partials/editimdmapping/editimdmapping.component';

@Component({
  selector: 'app-unallocatedimd',
  templateUrl: './unallocatedimd.component.html',
  styleUrls: ['./unallocatedimd.component.css']
})
export class UnallocatedimdComponent implements OnInit {

  mapdatas=[
    {
      imdcode:100011,
      imdname:"Malav Patel",
      amcode:13425,
      amname:"john doe",
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
  constructor(public dialog: MatDialog) { }

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
}
