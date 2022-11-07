import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: string = "Will"
  constructor() { }

  ngOnInit(): void {
  }
  send(): void {
    let lista: any = document.getElementsByClassName("hamburguer")[0];
    lista.style.display = "none";
  }
}
