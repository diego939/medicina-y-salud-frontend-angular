import { Component, HostListener } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

 isSidebarOpen = false;

  openNav() {
    this.isSidebarOpen = true;
  }

  exitNav() {
    this.isSidebarOpen = false;
  }
}
