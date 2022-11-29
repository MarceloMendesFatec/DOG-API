import { dogInterface } from './../interface';
import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private dogService: DogService) { }

  dog?:dogInterface

  ngOnInit(): void {
    this.onCLick();
  }


   onCLick(){
     this.dogService.getDog().subscribe(dog => this.dog = dog)
   }
}
