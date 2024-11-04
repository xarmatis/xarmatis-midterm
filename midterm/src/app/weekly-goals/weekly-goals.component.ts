import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Goal {
  title: string;
  hash: string;
  progress: string;
  completed?: boolean;
}

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-goals.component.html',
  styleUrl: './weekly-goals.component.scss'
})
export class WeeklyGoalsComponent {
  goals: Goal[] = [
    { title: 'Do well in algorithms class', hash: '#class-algorithms', progress: '' },
    { title: 'Apply to all internships', hash: '#apply-internships', progress: '' },
    { title: 'Technical interview prep', hash: '#interview-technical', progress: '' }
  ];

  toggleGoalCompletion(goal: Goal): void {
    goal.completed = !goal.completed; // Toggle the completed state
  }

  addGoal(): void {
    // Prompt the user for goal details
    const goalDescription = prompt("Enter a new quarter goal");
    const hashTag = prompt("Enter a goal hashtag");
    const progress = prompt("Enter goal completion status");

    // Ensure that all fields are filled out
    if (!goalDescription || !hashTag || !progress) {
      alert("All fields are required!");
      return;
    }

    // Create a new goal object
    const newGoal: Goal = {
      title: goalDescription,
      hash: `#${hashTag}`,
      progress: progress
    };

    // Add the new goal to the goals array
    this.goals.push(newGoal);
  }
}
