import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ModalComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  productos: any;
  productoSeleccionado: any;
  productoDetalle: any;
  public form: FormGroup;

  constructor(private productoService: ProductoService, private fb:FormBuilder){
    this.form = this.fb.group({
      productId: ['']
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductoPorId(): void {
    const productId = this.form.get('productId')?.value;
  
    // Limpiar productoSeleccionado si productId está vacío o undefined
    if (!productId) {
      this.productoSeleccionado = '';
    }
  
    if (productId) {
      this.productoService.obtenerProductoPorId(productId).subscribe(
        (producto) => {
          this.productoSeleccionado = producto;
          console.log(this.productoSeleccionado);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.cargarProductos();
    }
  }

  cargarProductos(): void {

    if(this.productoSeleccionado){
      this.productos = this.productoSeleccionado;
    }else{
      console.log('estoy cargando todos los productos');
    this.productoService.getProducto().subscribe(
      (datos) => {
        this.productos = datos;
        console.log(this.productos);
      },
      (error) => {
        console.error(error);
      }
    );
    }
    
  }

  mostrarDetalles(producto: any): void {
    this.productoDetalle = producto;
  }

  

  
}
