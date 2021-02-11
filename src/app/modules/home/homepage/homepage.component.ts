import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  channels=["Retail","Vehicle","Insurance"];
  locations=["bangalore","Delhi","Mumbai"];
  zones=["North","East","South","West"];

  nodes: any = [
    {
      cssClass: 'ngx-org-ceo',
      image: '',
      title: 'CDO/CFO/CEO',
      childs: [
        {
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'Zonal Head 1',
          childs: [
            {
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Regional Head 1',
              childs: [
                {
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Office Head 1',
                  childs: [
                    {
                      cssClass: 'ngx-org-head',
                      image: 'assets/node.svg',
                      title: 'Vertical Head 1',
                      childs: [
                        {
                          cssClass: 'ngx-org-head',
                          image: 'assets/node.svg',
                          title: 'RM Lead 1',
                          childs: [
                            {
                              cssClass: 'ngx-org-head',
                              image: 'assets/node.svg',
                              title: 'RM 1',
                            },
                            {
                              cssClass: 'ngx-org-head',
                              image: 'assets/node.svg',
                              title: 'RM 2',
                            },
                            {
                              cssClass: 'ngx-org-head',
                              image: 'assets/node.svg',
                              title: 'RM 3',
                            },
                          ]
                        },
                        {
                          cssClass: 'ngx-org-head',
                          image: 'assets/node.svg',
                          title: 'RM Lead 2',
                        },
                        {
                          cssClass: 'ngx-org-head',
                          image: 'assets/node.svg',
                          title: 'RM Lead 3',
                        },
                      ]
                    },
                    {
                      cssClass: 'ngx-org-head',
                      image: 'assets/node.svg',
                      title: 'Vertical Head 2',
                    },
                    {
                      cssClass: 'ngx-org-head',
                      image: 'assets/node.svg',
                      title: 'Vertical Head 3',
                    },
                  ]
                },
                {
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Office Head 2',
                },
                {
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Office Head 3',
                },
                {
                  cssClass: 'ngx-org-head',
                  image: 'assets/node.svg',
                  title: 'Office Head 4',
                },
              ]
            },
            {
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'Regional Head 2',
            },
            {
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'Regional Head 3',
            }
          ]
        },
        {
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'Zonal Head 2',
        },
        {
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Zonal Head 3',
        },
        {
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Zonal Head 4',
        }
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
