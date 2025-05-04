import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-magdy-yacoub',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './magdy-yacoub.component.html',
  styleUrls: ['./magdy-yacoub.component.css']
})
export class MagdyYacoubComponent {
  constructor(private http: HttpClient) {}

  formData = {
    name: '',
    email: '',
    currency: '',
    nationality: '',
    donation_type: '',
    phone: '',
    amount: null,
    address: ''
  };

  successMsg = '';
  errorMsg = '';

  submitForm() {
    if (this.isFormValid()) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post<any>(
        'http://localhost/donation/backend2/donationsubmit.php',
        JSON.stringify(this.formData),
        { headers }
      ).subscribe({
        next: (response) => {
          this.successMsg = response.message;
          this.errorMsg = '';
        },
        error: (error) => {
          console.error('Error sending form:', error);
          this.successMsg = '';
          this.errorMsg = 'Error submitting the form. Please try again.';
        }
      });
    } else {
      this.successMsg = '';
      this.errorMsg = 'Please fill all required fields correctly.';
    }
  }

  isFormValid(): boolean {
    return Object.values(this.formData).every(value => value !== '' && value !== null);
  }
}
