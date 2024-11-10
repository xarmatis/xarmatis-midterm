import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { WeeklyGoalModalComponent } from '../weekly-goal-modal/weekly-goal-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

interface Goal {
  title: string;
  hash: string;
  progress: string;
  completed?: boolean;
}

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [CommonModule, MatDialogModule,],
  templateUrl: './weekly-goals.component.html',
  styleUrl: './weekly-goals.component.scss'
})
export class WeeklyGoalsComponent {
  goals: Goal[] = [
    { title: 'Do well in algorithms class', hash: '#class-algorithms', progress: '' },
    { title: 'Apply to all internships', hash: '#apply-internships', progress: '' },
    { title: 'Technical interview prep', hash: '#interview-technical', progress: '' }
  ];

  constructor(private dialog: MatDialog) {} // Inject MatDialog for modal handling

  toggleGoalCompletion(goal: Goal): void {
    goal.completed = !goal.completed; // Toggle the completed state
  }

  addGoal(): void {
    const dialogRef = this.dialog.open(WeeklyGoalModalComponent, {
      width: '80%',
      maxWidth:'600px',  // Optional, adjust based on your design
      data: {goals: this.goals}
    });

    // Handle the modal result when it is closed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Add the new goal to the goals array when the modal is closed and has a result
        this.goals.push(result);
      }
    });
  }
}