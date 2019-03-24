import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetService } from '../services/pet.service';
import { Router } from '@angular/router';
import { History } from '../models/History';
import { Record } from '../models/Record';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  public pet:Pet

  constructor(private petService:PetService,private router:Router) { }

  ngOnInit() {
    this.pet=new Pet('','','','',new Date,0,new Date, new History(new Array<Record>()))
  }

  onSubmit(){
    this.petService.savePet(this.pet).subscribe(
      result=>{
        this.pet=result['data']
        this.router.navigate(['/pet',this.pet._id])
      },
      error=>{
        console.log('Error saving a Pet ',error)
      }
    )
  }
}
