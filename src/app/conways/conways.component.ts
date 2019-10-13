import { Component, OnInit, Input } from '@angular/core';
import { GameOfLifeService } from '../services/conways-service';
import { ConwaysCell } from '../conways/conways-cell';

@Component({
  selector: 'app-conways',
  templateUrl: './conways.component.html',
  styleUrls: ['./conways.component.scss']
})
export class ConwaysComponent implements OnInit {

  @Input() rows: number;
  @Input() cols: number;
  gameOfLifeService: GameOfLifeService;
  grid: ConwaysCell[][];

  ngOnInit() {
    this.gameOfLifeService = new GameOfLifeService();
    this.gameOfLifeService.initialize();
    this.gameOfLifeService.randomizeCellStates();
    this.grid = this.gameOfLifeService.getGrid();
  }

  toggleState(cell: ConwaysCell) {
    cell.toggleState();
  }
}
