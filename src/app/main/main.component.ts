import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: string = "Will"
  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    
  }
  send(): void {
    let lista: any = document.getElementsByClassName("hamburguer")[0];
    lista.style.display = "none";
  }
  toFuncionarios(): void {
    this.router.navigate(['./main/funcionarios']);
  }

  toProdutos(): void {
    this.router.navigate(['./main/produtos']);
  }

  toHome(): void {
    // this.router.navigate(['./main/home']);
  }
  toSair(): void {
    this.router.navigate(['./']);
  }
}
