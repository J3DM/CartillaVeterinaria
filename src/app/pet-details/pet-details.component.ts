import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/Pet'
import { Router, ActivatedRoute } from '@angular/router'
import { PetService } from '../services/pet.service'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  public pet: Pet

  constructor(private petService: PetService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.pet = new Pet('', '', '', '', new Date(), 0, new Date())
    let id = this.activateRoute.snapshot.params['_id']
    this.petService.getPet(id).subscribe(
      result => {
        console.log(result)
        this.pet = result['data']
      },
      error => {
        console.error('Error looking for a pet -> ' + error)
      }
    )
  }


  onSubmit(){
    console.log(this.pet)
    this.petService.updatePet(this.pet._id,this.pet).subscribe(
      result=> {
        console.log('Pet updated')
        this.pet=result['data']
        //this.router.navigate(['/pet',this.pet._id])
      },
      error=>{
        console.error('Error updatinf the pet -> '+error)
      }
    )
  }

  deletePet(id:string){
    console.log('Deleting the pet '+id)
    this.petService.deletePet(id).subscribe(
      result=>{
        console.log("Pet deleted "+result)
      },
      error=>{
        console.error('Error deleting a Pet '+error)
      }
    )
  }
  
}
