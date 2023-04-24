import { Component } from '@angular/core';

@Component({
    selector: 'app-estudiante',
    templateUrl: './estudiante.component.html',
    styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
    name: string = 'Leonidas';
    age: number = 24;
    email: string = 'leonidas@email.com';
    status: boolean = false;


    updateStatus() {
        this.status = !this.status;
    }
}
