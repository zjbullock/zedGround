import { Input } from '@angular/core';

export class ConwaysCell  {
    // The actual state of the cell.
    currentState = false;
    // This is where the cell's new state will be stored after
    // computing the next generation.
     tempState = false;
     row: number;
     column: number;

     constructor(row: number, column: number) {
         this.row = row;
         this.column = column;
     }
    setTempState(state: boolean) {
      this.tempState = state;
    }
    toggleState() {
      this.tempState = !this.tempState;
      this.updateCurrentState();
    }
    updateCurrentState() {
      this.currentState = this.tempState;
    }
    reset() {
      this.currentState = this.tempState = false;
    }
  }
