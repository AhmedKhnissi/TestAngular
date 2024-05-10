import { Component, OnInit } from '@angular/core';
import { Showroom } from '../models/AhmedKhnissi';
import { AhmedKhnissiServiceService } from '../service/ahmed-khnissi-service.service';

@Component({
  selector: 'app-ahmed-khnissi',
  templateUrl: './ahmed-khnissi.component.html',
  styleUrls: ['./ahmed-khnissi.component.css']
})
export class AhmedKhnissiComponent implements OnInit{
  listshowroom:Showroom[]=[]
  constructor(private Ahmedservice:AhmedKhnissiServiceService){
  }
  ngOnInit(): void {
    this.Ahmedservice.getshowromm().subscribe((data:Showroom[])=>{
      this.listshowroom=data
      console.log(JSON.stringify(this.listshowroom))
          })
  }

  deleteAppart(id:number){
    this.Ahmedservice.deleteshowroom(id).subscribe(()=>{
      console.log(" deleted")
      window.location.reload()
    })
  }
}
