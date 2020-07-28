import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  recived: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Honey', name: '20', weight: 80, symbol: '18', recived:'20'},
  {position: 'Lucy', name: '18', weight: 60, symbol: '10', recived:'50'},
  {position: 'Kaler', name: '20', weight: 22, symbol: '11', recived:'30'},
  {position: 'Deni', name: '13', weight: 42, symbol: '33', recived:'45'},
  {position: 'Beki', name: '41', weight: 40, symbol: '49', recived:'22'},
 
];
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(private srv: CompanyService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'recived'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.refresh();
  }

  dataRecieved: any;

  refresh() {
    let self = this;
    self.srv.GetCompany().subscribe(m => {
      self.dataRecieved = m.data;
      console.log("Data revieced: ", this.dataRecieved);
    });
  }

}
