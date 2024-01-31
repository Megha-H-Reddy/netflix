import { Component,Input } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   
    @Input({required:true}) userImg:string='';
    // @Input() userName:string='';

    navList=["Home","TV Shows","News & Popular","Browse by Language"]
}
