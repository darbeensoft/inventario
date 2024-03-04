import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit  {

@Input() productoDetalle: any; // Recibe el producto seleccionado como entrada

constructor(private router: Router, private viewportScroller: ViewportScroller, private fb: FormBuilder) {
}
ngOnInit(): void {
}

}
