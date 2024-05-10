import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AhmedKhnissiServiceService } from '../service/ahmed-khnissi-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahmed-khnissi-add-showrrom',
  templateUrl: './ahmed-khnissi-add-showrrom.component.html',
  styleUrls: ['./ahmed-khnissi-add-showrrom.component.css']
})
export class AhmedKhnissiAddShowrromComponent implements OnInit{
  formreshowrrom!:FormGroup
  constructor(
    private showroomservice : AhmedKhnissiServiceService,
    private route:Router
    ){
    }
  ngOnInit(): void {
    this.formreshowrrom = new FormGroup({

      matricule:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]*$')]),
      nom:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]*$'),Validators.minLength(10)]),
  
      
    })
  }

  add(){
    console.log('added'+JSON.stringify(this.formreshowrrom.value))
    this.showroomservice.addshowroom(this.formreshowrrom.value).subscribe(()=>{
    
      this.route.navigate(['/listshowroom'])
    })

  }

}
