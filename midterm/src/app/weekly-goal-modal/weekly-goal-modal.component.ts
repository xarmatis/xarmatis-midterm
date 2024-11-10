import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


interface Goal {
  title: string;
  hash: string;
  progress: string;
  completed?: boolean;
}

@Component({
  selector: 'app-weekly-goal-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './weekly-goal-modal.component.html',
  styleUrl: './weekly-goal-modal.component.scss'
})
export class WeeklyGoalModalComponent {
  goalTitle: string = '';  // Model for goal title input
  goalHash: string = '';   // Model for goal hashtag input
  goals: Goal[] = [];

  constructor(
    public dialogRef: MatDialogRef<WeeklyGoalModalComponent>,  // Used to close the modal
    @Inject(MAT_DIALOG_DATA) public data: any  // Data passed from the parent component (goals array)
  ) {
    if (data && data.goals) {
      this.goals = data.goals;  // Assign the passed goals to the local 'goals' array
    }
  }

  // Method to save the new goal and pass it back to the parent
  saveGoal(): void {
    if (this.goalTitle && this.goalHash) {
      const newGoal = {
        title: this.goalTitle,
        hash: this.goalHash,
        progress: ''
      };

      // Close the modal and pass the new goal back to the parent component
      this.dialogRef.close(newGoal);
    } else {
      alert('Please fill out both the goal and the hashtag!');
    }
  }

  // Close the modal without saving the data
  closeModal(): void {
    this.dialogRef.close();
  }
}
