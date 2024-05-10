import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AhmedKhnissiServiceService } from '../service/ahmed-khnissi-service.service';
import { Showroom } from '../models/AhmedKhnissi';

@Component({
  selector: 'app-ahmed-khnissi-show-showrroom',
  templateUrl: './ahmed-khnissi-show-showrroom.component.html',
  styleUrls: ['./ahmed-khnissi-show-showrroom.component.css']
})
export class AhmedKhnissiShowShowrroomComponent {
  id!:number
  constructor(
    private act : ActivatedRoute,
    private appartService : AhmedKhnissiServiceService,
    private route:Router
  ){
  }
  listshowrrom:Showroom[]=[]

  ngOnInit(): void {
this.id=this.act.snapshot.params['id']
    this.appartService.getbyidshowroom(this.id).subscribe((data:Showroom[])=>{
      this.listshowrrom.push(data as any)
      console.log('++++++++++++'+JSON.stringify(this.listshowrrom))
      
          })
      
  }
}
