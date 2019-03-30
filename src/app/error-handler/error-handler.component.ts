import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  onClose(): void {
    this.activeModal.close('closed');
  }



  onDismiss(reason: String): void {
    this.activeModal.dismiss(reason);
  }
}
