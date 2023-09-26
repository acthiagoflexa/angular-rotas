import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

//http://localhost:4200/portfolio/{1}
export class CardComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
    ){
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portfolio/1?{name=thiago&token=123}
    this.activeRoute.queryParams.subscribe(
      res=> console.log(res)
    )
  }

  ngOnit(): void{
    // setInterval(()=>{
    //   this.navegador.navigate(['/'])
    // },5000)
  }
}
