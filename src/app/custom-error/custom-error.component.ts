import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SnackbarService } from '../../../node_modules/ngx-snackbar';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.css']
})
export class CustomErrorComponent implements OnInit {

  showPopUp:boolean = false;
  @Input() errorObj:any;
  @Output() emitter = new EventEmitter(); //this will send back varaiables to parent component
  constructor(private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.add(this.errorObj["heading"]);
  }
  closeModal() {
    this.showPopUp = false;
    this.clear();
    //this.emitter.emit({"showError":this.showPopUp});
  }

  //this function will create a snackBar
  add(heading) {
    const _this = this;
    this.snackbarService.add({
      msg: heading,
      color: 'yellow',
      timeout: 8000,
      action: {
        text: 'Show Details',
        color:'white',
        onClick: (snack) => {
          console.log('dismissed: ' + snack.id);
          this.showPopUp = true;
          
        },
      },
      onAdd: (snack) => {
        console.log('added: ' + snack.id);
      },
      onRemove: (snack) => {
        console.log('removed: ' + snack.id);
      }
    });
  }

  clear() {
    this.snackbarService.clear();
  }
}
