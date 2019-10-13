import { Injectable } from '@angular/core';
import { ConwaysCell } from '../conways/conways-cell';

/**
 * Service that simulates Conway's Game of Life.
 */
@Injectable()
export class GameOfLifeService {
   cells: ConwaysCell[];
   rows: number;
   columns: number;
   generation = 0;

  /**
   * Initializes the grid with dead cells.
   */
  initialize() {
    this.rows = 60;
    this.columns = 60;
    this.generation = 0;
    this.cells = Array.from({
      length: this.rows * this.columns
    }).map((_, i, a) => { return new ConwaysCell(
        Math.floor(i / this.columns),
        i % this.columns
      );
    });
  }

  /**
   * Makes a percentage of cells alive, depending on the input rate.
   * It will first call the reset method to clear the board, then randomly toggle the state of buttons, making roughly 40% of them alive.
   */
  randomizeCellStates() {
    const percentageDecimal = 0.4;
    this.reset();
    this.cells.forEach(cell => {
      if (Math.random() < percentageDecimal) {
        cell.toggleState();
      }
    });
  }

  /**
   * Gets all the cells as an array of arrays. Each subarray contains all
   * cells that share the same row, arranged by column number. The subarrays are
   * arranged by row number.
   */
  getGrid(): ConwaysCell[][] {
    const grid = [];
    for (let i = 0; i < this.rows; i++) {
      grid.push(this.cells.slice(i * this.columns, (i + 1) * this.columns));
    }
    return grid;
  }

  /**
   * Kills all cells and reverts the generation counter to 0.
   */
  reset() {
    this.cells.forEach(cell => cell.reset());
    this.generation = 0;
  }

  /**
   * Advances the simulation to the next generation.
   */
  nextGeneration() {
    this.cells.forEach(cell => {
      const liveNeighborCount = this.getNeighborsOfCell(cell)
        .filter(c => c.currentState)
        .length;
      const alive = true;
      switch (liveNeighborCount) {
        case 2: // cell retains status; do nothing
          break;
        case 3: // dead cell comes to life; live cells remain alive anyway
          cell.setTempState(alive);
          break;
        default:  // live cell dies; dead cells remain dead
          cell.setTempState(!alive);
      }
    });
    this.generation++;
    this.updateCellStates();
  }

  spawnGliders() {
    const alive = true;
    this.cells.forEach( cell => {
      if ( this.validGliderCoord(cell)) {
        cell.setTempState(alive);
      }
    });
    this.updateCellStates();
  }

  /**
   * Updates all of the cell states with their new states. This should be called
   * after the new states have been computed.
   */
  private updateCellStates() {
    this.cells.forEach(cell => cell.updateCurrentState());
  }

  /**
   * Gets all the cells that are adjacent to the input cell.
   * @param cell The cell whose neighbors we are interested with.
   */
  private getNeighborsOfCell(cell: ConwaysCell): ConwaysCell[] {
    const { row, column } = cell;
    const possibleNeighborCoords = [
      { row: row - 1, column },
      { row: row - 1, column: column + 1 },
      { row, column: column + 1 },
      { row: row + 1, column: column + 1 },
      { row: row + 1, column },
      { row: row + 1, column: column - 1 },
      { row, column: column - 1 },
      { row: row - 1, column: column - 1}
    ].filter(offset => !this.isOutOfBounds(offset));

    return possibleNeighborCoords.map(coords => this.getCellAt(coords));
  }

  private validGliderCoord(cell: ConwaysCell): boolean {
    const { row, column } = cell;
    const cornerGlidersCoords = [
      { row: 0, column: 1 },
      { row: 1, column: 2 },
      { row: 2, column: 2 },
      { row: 2, column: 1 },
      { row: 2, column: 0 },
      { row: 0, column: this.columns - 2 },
      { row: 1, column: this.columns - 3 },
      { row: 2, column: this.columns - 3 },
      { row: 2, column: this.columns - 2 },
      { row: 2, column: this.columns - 1 },
      { row: this.rows - 3, column: 0 },
      { row: this.rows - 3, column: 1 },
      { row: this.rows - 3, column: 2 },
      { row: this.rows - 2, column: 2 },
      { row: this.rows - 1, column: 1 },
      { row: this.rows - 1, column: this.columns - 2 },
      { row: this.rows - 2, column: this.columns - 3 },
      { row: this.rows - 3, column: this.columns - 3 },
      { row: this.rows - 3, column: this.columns - 2 },
      { row: this.rows - 3, column: this.columns - 1 },
    ];
    let gliderCoord = false;
    gliderCoord = cornerGlidersCoords.some( c => {
      if (c.row === row && c.column === column) {
        return true;
      }
    });
    return gliderCoord;
  }

  /**
   * Gets the cell with the specified row and column numbers.
   * @param row The cell's row number.
   * @param column The cell's column number.
   */
  private getCellAt({row = 0, column = 0} = {}): ConwaysCell {
    return this.cells[row * this.columns + column];
  }

  /**
   * Returns true if the supplied coords are outside the bounds of the grid.
   * @param param0 The coordinates we want to check.
   */
  private isOutOfBounds({row, column}): boolean {
    return this.isRowOutOfBounds(row) || this.isColOutOfBounds(column);
  }

  private isRowOutOfBounds(row) {
    return row < 0 || this.rows <= row;
  }

  private isColOutOfBounds(column) {
    return column < 0 || this.columns <= column;
  }
}
