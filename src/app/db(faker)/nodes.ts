const nodes: any = [
    {
      cssClass: 'ngx-org-ceo',
      image: '',
      title: 'CDO/CFO/CEO',
      key:"CEO",
      childstate:false,
      childs: []
    },
  ];

  const ceochild=[
    {
        cssClass: 'ngx-org-ceo',
        image: 'assets/node.svg',
        childstate:false,
        key:"ZH",
        title: 'Zonal Head 1',
        childs: []
      },
      {
        cssClass: 'ngx-org-ceo',
        image: 'assets/node.svg',
        childstate:false,
        key:"ZH",
        title: 'Zonal Head 2',
        childs: []

      },
      {
        cssClass: 'ngx-org-head',
        image: 'assets/node.svg',
        childstate:false,
        key:"ZH",
        title: 'Zonal Head 3',
        childs: []
      },
      {
        cssClass: 'ngx-org-head',
        image: 'assets/node.svg',
        childstate:false,
        key:"ZH",
        title: 'Zonal Head 4',
        childs: []
      }
  ]
const zonalheadchild=[
    {
        cssClass: 'ngx-org-head',
        image: 'assets/node.svg',
        title: 'Regional Head 1',
        key:"RH",
        childstate:false,
        childs: []
      },
      {
        cssClass: 'ngx-org-vp',
        image: 'assets/node.svg',
        title: 'Regional Head 2',
        key:"RH",
        childstate:false,
        childs: []
      },
      {
        cssClass: 'ngx-org-vp',
        image: 'assets/node.svg',
        title: 'Regional Head 3',
        key:"RH",
        childstate:false,
        childs: []
      }
]
const regionalheadchild= [
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Office Head 1',
      key:"OH",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Office Head 2',
      key:"OH",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Office Head 3',
      key:"OH",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Office Head 4',
      key:"OH",
      childstate:false,
      childs: []
    },
  ]
const officeheadchild =[
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Vertical Head 1',
      key:"VH",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Vertical Head 2',
      key:"VH",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'Vertical Head 3',
      key:"VH",
      childstate:false,
      childs: []
    },
  ]
  const verticalheadchild=[
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'RM Lead 1',
      key:"RML",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'RM Lead 2',
      key:"RML",
      childstate:false,
      childs: []
    },
    {
      cssClass: 'ngx-org-head',
      image: 'assets/node.svg',
      title: 'RM Lead 3',
      key:"RML",
      childstate:false,
      childs: []
    },
  ]
  const rmleadchild=[
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
  function addchild(parent){
      switch(parent.key){
          case "CEO":
              parent.childs=ceochild;
              break;
            case "ZH":
                parent.childs=zonalheadchild;
                break;
            case "RH":
                parent.childs=regionalheadchild;
                break;
            case "OH":
                parent.childs=officeheadchild;
                break;
            case "VH":
                parent.childs=verticalheadchild;
                break;
            case "RML":
                parent.childs=rmleadchild;
                break;
      }
    
  }
  function removechild(parent){
      parent.childs=[]
      console.log("removing child");
      
  }
  export {nodes,addchild,removechild} ;