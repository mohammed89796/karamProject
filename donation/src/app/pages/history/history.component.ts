import { Component, OnInit } from '@angular/core';
import { HistoryService, Product } from '../../Service/history.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems: Product[] = [];
  errorMsg: string = '';  

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.getHistoryFromServer().subscribe({
      next: (data) => {
        this.historyItems = data;  
      },
      error: (error) => {
        console.error('Error fetching history:', error);
        this.errorMsg = 'There was an error fetching the history data. Please try again later.'; 
      }
    });
  }

  clearHistory(): void {
    this.historyItems = [];  
  }
}