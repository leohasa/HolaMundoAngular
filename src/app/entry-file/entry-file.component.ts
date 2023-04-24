import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'entry-file',
    templateUrl: './entry-file.component.html',
    styleUrls: ['./entry-file.component.css']
})
export class EntryFileComponent {
    jsonFile: File | undefined;

    constructor(private http: HttpClient) { }

    onFileChange(event: any) {
        this.jsonFile = event.target.files[0];
    }

    uploadJson() {
        if (!this.jsonFile) {
            return;
        }

        const apiUrl = 'http://localhost:8080/StudentsApi/files'; // Reemplaza con la URL de tu API

        const formData = new FormData();
        formData.append('archivoEntrada', this.jsonFile);

        this.http.post(apiUrl, formData).subscribe(
            response => {
                console.log('Archivo JSON enviado exitosamente:', response);
            }
        );
    }
}
