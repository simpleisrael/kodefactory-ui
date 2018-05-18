import {Injectable} from '@angular/core';
import swal from 'sweetalert2';


@Injectable()
export class NotificationService {

  constructor() {}

  success(title: string, text: string) {
    swal({title, text, type: 'success'});
  }

  error(title: string, html: string) {
    swal({title, html, type: 'error'})
  }

  public displayHttpError(error: any, title = 'Request Error') {
    if (error && error['message']) {
      this.error(title, error['message']);
    } else if (error._body) {
      try {
        const err = JSON.parse(error._body);
        const errorMessage = err.error;
        this.error(title, errorMessage);
      }catch (e) {
        // console.log('unable to display error');
      }
    } else {
      const errorMessage = 'Network Error';
      this.error('', errorMessage);
    }
  }


  public confirm(fileName, callback) {

    const name = fileName ? fileName : 'Item';
    swal({
      title: 'Are you sure?',
      text: `You will not be able to recover this ${name}!`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        callback();
        // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      } else if (result.dismiss === swal.DismissReason.cancel) {
        /*swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )*/
      }
    });

  }

  public confirmApprove(fileName, callback) {

    const name = fileName ? fileName : 'Item';
    swal({
      title: 'Are you sure you want to approve this request',
      text: ``,
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: 'lightgreen',
      confirmButtonText: 'Yes, approve it!',
    }).then((result) => {
      if (result.value) {
        callback();
        // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      } else if (result.dismiss === swal.DismissReason.cancel) {
        /*swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )*/
      }
    });
  }

  /*  swal({
        title: 'Are you sure?',
        text: `You will not be able to recover this ${name}!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      },
      function(){
        console.log('completed');
        callback();
      });
    */



}
