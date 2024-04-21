import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor() {  }

  ngOnInit(): void {
    console.log('OnInit -> ');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit -> ');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }
}
