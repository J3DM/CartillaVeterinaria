import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/Pet'
import { History } from '../models/History'
import {Record}from '../models/Record'
import {RecordId}from '../models/RecordId'
import { Router, ActivatedRoute } from '@angular/router'
import { PetService } from '../services/pet.service'
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RecordService}from '../services/record.service'

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  public pet: Pet
  public recordId:RecordId
  
  dateDOB
  dateVisit
  numeroRevisiones=0

  constructor(private petService: PetService,
    private recordService:RecordService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    let todayDate= new Date().valueOf().toString().split("T",1)[0]
    this.pet = new Pet('', '', '', '',new Date(todayDate), 0, new Date(todayDate),new History(new Array<Record>()))
    //this.record=new Record('', new Date(), 0,'')
    this.recordId= new RecordId('', new Date(todayDate), 0,'')
    let id = this.activateRoute.snapshot.params['_id']
    this.petService.getPet(id).subscribe(
      result => {
        console.log(result)
        this.pet = result['data'][0]
        
        if (this.pet.dob!=undefined) {
          
          this.dateDOB=this.pet.dob.valueOf().toString().split("T",1)[0]  
        }
        if (this.pet.nextAppoint!=undefined) {
          
          this.dateVisit=this.pet.nextAppoint.valueOf().toString().split("T",1)[0]  
        }
        if(this.pet.history){
          this.numeroRevisiones=this.pet.history.records.length
        }
      },
      error => {
        console.error('Error looking for a pet -> ' + error)
      }
    )
  }


  onSubmit(){
    console.log(this.pet)
    this.pet.dob=this.dateDOB
    this.pet.nextAppoint=this.dateVisit
    this.petService.updatePet(this.pet._id,this.pet).subscribe(
      result=> {
        console.log('Pet updated')
        this.pet=result['data']
        this.router.navigate(['/pet',this.pet._id])
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
        this.router.navigate(['/'])
      },
      error=>{
        console.error('Error deleting a Pet '+error)
      }
    )
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //saveRevision
      console.log('Revision created')
      let idPet = this.activateRoute.snapshot.params['_id']
      console.log('Saving the following record=>',this.recordId)
      this.recordService.saveRecord(idPet,this.recordId).subscribe(
        result=>{
          console.log('Revision saved')
          this.router.navigate(['/'])
        },
        error=>{
          console.error('Error creating a Revision '+error)
        })
    }, (reason) => {
      
    });
  }
  
  deleteRecord(id:string){
    let idPet = this.activateRoute.snapshot.params['_id']
    this.recordService.deleteRecord(idPet,id).subscribe(
      result=>{
        this.router.navigate(['/'])
      },
      error=>{
        console.error("Error deleting the pet")
      }
    )
  }

  updateRecord(id:string,record:RecordId){
    let idPet = this.activateRoute.snapshot.params['_id']
    this.recordService.updateRecord(id,record).subscribe(
      result=>{
        this.router.navigate(['/pet',idPet])
      },
      error=>{
        console.error('Error updating record '+record._id+' -> '+error)
      }
    )
  }

}
