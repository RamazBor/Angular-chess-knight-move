import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-and-movement',
  templateUrl: './board-and-movement.component.html',
  styleUrls: ['./board-and-movement.component.css']
})
export class BoardAndMovementComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.isPotentialMove(this.startLocationForKnight)

  }
  
  squares: string[][] =[
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
  ];

  // knight initial position

  startLocationForKnight: string = "g1";
  displayAllknightSquares: boolean = false;
  
  
  public moveKnight(destination: string) {

    if(destination === this.startLocationForKnight){
      return;
    }else if(this.getAllPossibleMoves(this.startLocationForKnight).includes(destination)){   
      
    }else{
      this.errorMove();
      return;
    }
    this.updateLocation(destination)
  }
  

  public updateLocation(position: string):void {
    this.playMoveSound();
    this.startLocationForKnight = position;
    this.displayAllknightSquares = false;
    this.playMoveSound();
  }
  
  public isPotentialMove(square: string): boolean {
    return this.getAllPossibleMoves(this.startLocationForKnight).includes(square);
  }

  public ShowAllSquares(): void{
    this.displayAllknightSquares = !this.displayAllknightSquares;
  }
  
  public getAllPossibleMoves(position: string):string[] {
    const [column, row] = position.split('');
    const columnIndex = 'abcdefgh'.indexOf(column);
    const rowIndex = parseInt(row, 10) - 1;
    const possibleMoves = [];
  
    possibleMoves.push([columnIndex - 2, rowIndex + 1]);
    possibleMoves.push([columnIndex - 1, rowIndex + 2]);
    possibleMoves.push([columnIndex + 1, rowIndex + 2]);
    possibleMoves.push([columnIndex + 2, rowIndex + 1]);
    possibleMoves.push([columnIndex - 2, rowIndex - 1]);
    possibleMoves.push([columnIndex - 1, rowIndex - 2]);
    possibleMoves.push([columnIndex + 1, rowIndex - 2]);
    possibleMoves.push([columnIndex + 2, rowIndex - 1]);
 
    // filter out movements that are outside the bounds of the chessboard
    const filteredMoves = possibleMoves.filter(([c, r]) => c >= 0 && c <= 7 && r >= 0 && r <= 7); 
    // convert movements back to chess notation
    return filteredMoves.map(([c, r]) => `${String.fromCharCode(c + 'a'.charCodeAt(0))}${r + 1}`);
    
  }
  
  // sounds
  public playMoveSound(): void {
    const moveSound = this.elementRef.nativeElement.querySelector('#rightMovementSound');
    moveSound.currentTime = 0;
    moveSound.play();
  }

  public errorMove(): void {
    const moveSound = this.elementRef.nativeElement.querySelector('#wrongMovementSound');
    moveSound.currentTime = 0;
    moveSound.play();
  }

}
