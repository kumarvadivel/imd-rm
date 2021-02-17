import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesspermission',
  templateUrl: './accesspermission.component.html',
  styleUrls: ['./accesspermission.component.css']
})
export class AccesspermissionComponent implements OnInit {
  accesses=[
    {
      access_type:"Super Admin",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
    {
      access_type:"ZM/Vertical head",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
    {
      access_type:"Regional Head",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
    {
      access_type:"Branch Head",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
    {
      access_type:"Branch Vertical head",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
    {
      access_type:"RM Team Lead",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
    {
      access_type:"RM",
      emp_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit"]
      },
      nemp_data:{
        val:"view & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdm_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      imdmap_data:{
        val:"view,Edit & Update",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      unallocimd_data:{
        val:"view & Allocate to RM",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      request_data:{
        val:"view",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update"]
      },
      scorecard_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settarget_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
      settings_data:{
        val:"view & Edit",
        opt:["view","Edit","view & Edit","Update","view & Update","view,Edit & Update","view & Allocate to RM"]
      },
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
