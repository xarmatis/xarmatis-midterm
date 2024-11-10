import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeeklyGoalModalComponent } from './weekly-goal-modal/weekly-goal-modal.component';
import { WeeklyGoalsComponent } from './weekly-goals/weekly-goals.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeeklyGoalModalComponent, WeeklyGoalsComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'midterm';
}
