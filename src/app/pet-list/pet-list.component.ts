import { Component, OnInit } from '@angular/core';
import {Pet} from '../models/Pet'
import {PetService} from '../services/pet.service'

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  public pets:Pet[]=[]

  constructor(private petService:PetService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(
      result=>{
        this.pets=result['data']
      },
      error=>{
        console.error('Error Listing Pets '+error)
      }
    )
  }

}
