import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menubar } from './common/menubar/menubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menubar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-hug';
}
