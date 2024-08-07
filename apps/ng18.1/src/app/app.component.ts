import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooComponent } from '@nx19.5.6/foo';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FooComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng18.1';
}
