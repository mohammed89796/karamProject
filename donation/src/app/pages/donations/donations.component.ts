import { HistoryService } from './../../Service/history.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../Service/history.service';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-donations',
  standalone: true,  
  imports: [CommonModule,RouterLink],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {

  products: Product[] = [
    { id: 1, name: 'Ahl Masr Burn Hospital', image: '/images/ahl masr burn hospitalk.jpg' },
    { id: 2, name: 'ALnas Hospital', image: '/images/alnas hospital.jpg' },
    { id: 3, name: 'Baheya Foundation', image: '/images/baheya.jpg' },
    { id: 4, name: 'Bait ALzakat and ALsadkat', image: '/images/bait zakat and sadkat.jpg' },
    { id: 5, name: 'Cancer Institute', image: '/images/cancer institude.jpg' },
    { id: 6, name: '57357 Hospital', image: '/images/57357.jpg' },
    { id: 7, name: 'Ahl Masr Burn Hospital', image: '/images/egption food bank.jpg' },
    { id: 8, name: 'ALnas Hospital', image: '/public/images/elorman assicotion.jpg' },
    { id: 9, name: 'Baheya Foundation', image: '/images/baheya.jpg' },
    { id: 10, name: 'Bait ALzakat and ALsadkat', image: '/images/bait zakat and sadkat.jpg' },
    { id: 11, name: 'Cancer Institute', image: '/images/cancer institude.jpg' },
    { id: 12, name: '57357 Hospital', image: '/images/57357.jpg' }
  ];

  constructor(private historyservice : HistoryService) { }
  addToHistory(product: Product) {
    this.historyservice.addHistory(product);
  }


  

}