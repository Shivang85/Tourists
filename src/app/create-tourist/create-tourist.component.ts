import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';
@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {
  tourist: Tourist= new Tourist();
  
  constructor(private touristService: TouristService, private router: Router) { }

  ngOnInit(): void {
  }
  saveTourist(){
    this.touristService.createTourist(this.tourist).subscribe(data => {console.log(data);
      this.goTotouristList();

  },
     error => console.log(error));
    
  }
  goTotouristList(){
    this.router.navigate(['/tourists']);
  }
  onSubmit(){
    console.log(this.tourist);
    alert("Tourist Registered Sucessfully ");
    this.saveTourist();
    console.log(this.tourist);
  }
 
}