import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-entry-file-content',
    templateUrl: './entry-file-content.component.html',
    styleUrls: ['./entry-file-content.component.css']
})
export class EntryFileContentComponent {
    apiUrl = 'http://localhost:8080/StudentsApi/fileContent'; // Coloca aquí la URL de tu API
    jsonContent: string;

    constructor(private http: HttpClient) {
        this.jsonContent = '';
    }

    onFileSelected(event: any): void {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            this.jsonContent = e.target!.result!.toString();
        };
        reader.readAsText(file);
    }

    sendJson(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(this.apiUrl, this.jsonContent, httpOptions)
            .subscribe(response => console.log(response));
    }
}
