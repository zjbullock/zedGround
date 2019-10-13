import { Component, OnInit, Input } from '@angular/core';
import { GameOfLifeService } from '../services/conways-service';

@Component({
  selector: 'app-conways-controls',
  templateUrl: './conways-controls.component.html',
  styleUrls: ['./conways-controls.component.scss']
})
export class ConwaysControlsComponent implements OnInit {

  @Input() gameOfLifeService: GameOfLifeService;
  intervalId: number;
  gliderIntervalId: number;
  isRunning: boolean;
  glidersOn: boolean;

  ngOnInit() {
  }

  start() {
    this.intervalId = window.setInterval(() => {
      this.gameOfLifeService.nextGeneration();
    }, 100);
    this.isRunning = true;
  }

  step() {
    this.gameOfLifeService.nextGeneration();
  }

  stop() {
    window.clearInterval(this.intervalId);
    this.isRunning = false;
    window.clearInterval(this.gliderIntervalId);
    this.glidersOn = false;
  }

  randomize() {
    this.gameOfLifeService.randomizeCellStates();
  }

  spawnGliders() {
    if (!this.glidersOn) {
      this.gameOfLifeService.spawnGliders();
      this.gliderIntervalId = window.setInterval(() => {
        this.gameOfLifeService.spawnGliders();
      }, 5000);
      this.glidersOn = true;
    } else {
      window.clearInterval(this.gliderIntervalId);
      this.glidersOn = false;
    }
  }

  getGenerationCount() {
    return this.gameOfLifeService.generation;
  }

  getGliderStatus() {
    return this.glidersOn ? 'On' : 'Off';
  }

  reset() {
    this.stop();
    this.gameOfLifeService.reset();
  }
}
