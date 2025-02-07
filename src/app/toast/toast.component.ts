
// @Component({
//   selector: 'app-toast',
//   standalone: true,
//   imports: [],
//   templateUrl: './toast.component.html',
//   styleUrl: './toast.component.css'
// })


import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'

})


export class ToastComponent {
  hideToast() {
    document.getElementById('toast')!.style.display = 'none';
  }
}


