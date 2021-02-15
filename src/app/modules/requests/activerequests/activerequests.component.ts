import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activerequests',
  templateUrl: './activerequests.component.html',
  styleUrls: ['./activerequests.component.css']
})
export class ActiverequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  requests=[
    {
      name:"Ruban",
      role:"Branch Head",
      date_time:"1/02/2020:12:00",
      rms:[
        {
          req_type:"RM Location Change",
          date_time:"1/02/2020:12:00",
          fields:["RM Code","RM Name","Current Location","Requested Location","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            }
          ]
        },
        {
          req_type:"RM Channel Change",
          date_time:"1/02/2020:12:00",
          fields:["RM Code","RM Name","Current Channel","Requested Channel","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
          ]
        }
      ],
      imds:[
        {
          req_type:"IMD Location Change",
          date_time:"1/02/2020:12:00",
          fields:["IMD Code","IMD Name","Current Location","Requested Location","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            }
          ]
        },
        {
          req_type:"IMD Channel Change",
          date_time:"1/02/2020:12:00",
          fields:["IMD Code","IMD Name","Current Channel","Requested Channel","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
          ]
        }
      ]
    },
    {
      name:"Ruban",
      role:"Branch Head",
      date_time:"1/02/2020:12:00",
      rms:[
        {
          req_type:"RM Location Change",
          date_time:"1/02/2020:12:00",
          fields:["RM Code","RM Name","Current Location","Requested Location","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            }
          ]
        },
        {
          req_type:"RM Channel Change",
          date_time:"1/02/2020:12:00",
          fields:["RM Code","RM Name","Current Channel","Requested Channel","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
          ]
        }
      ],
      imds:[
        {
          req_type:"IMD Location Change",
          date_time:"1/02/2020:12:00",
          fields:["IMD Code","IMD Name","Current Location","Requested Location","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Bangalore",
              field4:"Mumbai",
              field5:"Nativity Change"
            }
          ]
        },
        {
          req_type:"IMD Channel Change",
          date_time:"1/02/2020:12:00",
          fields:["IMD Code","IMD Name","Current Channel","Requested Channel","Reason"],
          data:[
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
            {
              field1:"100010",
              field2:"Digit Direct",
              field3:"Retail",
              field4:"Automobile",
              field5:"Department Change"
            },
          ]
        }
      ]
    },
  ]
}
