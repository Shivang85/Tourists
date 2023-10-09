import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';


@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {

  tourists: Tourist[] = [];
  router: any;
  
  constructor(private touristService:TouristService) { }

  ngOnInit(): void{
    this.getTourists();
  }
  public getTourists(){
    this.touristService.getTouristList().subscribe(data=>{
      this.tourists=data;
    },(error) => {
      console.error('Error deleting tourist:', error);
    })
  }
  
  public deleteTourist(id: number) {
    this.touristService.deleteTourist(id).subscribe(() => {
      this.getTourists;
    },(error) => {
      console.error('Error deleting tourist:', error);
    });
    
  }

}