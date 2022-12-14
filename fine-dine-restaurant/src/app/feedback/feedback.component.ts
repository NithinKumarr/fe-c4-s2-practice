import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }

  submitted=true;

  feedback : Feedback = {};

  locations = ["Hunts Ville", "Spring Dale", "Orlando", "Augusta", "New York"​]

  onSubmit(feedback: any){
    this.snackBar.open('Feedback submitted successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })

  }
  }