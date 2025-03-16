import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-manager',
  imports: [],
  templateUrl: './display-manager.component.html',
  styleUrl: './display-manager.component.scss'
})
export class DisplayManagerComponent implements OnInit{

  id: number = 0;
  private router: Router = inject(Router);
  private route:ActivatedRoute = inject(ActivatedRoute);
  public constructor(){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
  }
}
