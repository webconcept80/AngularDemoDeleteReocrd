import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  data: any;
  isConfirm = true;

  constructor(public ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}

  deleteUser(isConfirm) {
    if (isConfirm === true) {
      this.ngbActiveModal.close(this.data);
    } else {
      this.ngbActiveModal.dismiss('cancel click');
    }
  }

  closeWindow() {
    this.ngbActiveModal.dismiss('Cross click');
  }
}
