
export enum Piece {Rock, Scissors, Lizard, Paper, Spock}

export enum Compare { 
    GreaterThan = 1,
    EqualTo = 0,
    LessThan = -1
}
/* 
    console.log('-----', Piece) // Piece :: {} //Piece[0] :: Rock //Piece[0][0] :: R //Piece['Scissors'] :: 1 `index    */
/* 
    const Pieces: Piece[] = Object.values(Piece)
    .filter(
        myValue => isNaN(parseInt(myValue)) //values not keys???
    ) */
/* 
    console.log(Pieces[0]); // Rock

    console.log({ a: parseInt('1'), b: parseFloat('A'), c: Number.isNaN(parseFloat('thing')) })
    console.log( Object.values({ a: 1, b: 2, c: 'three' }).filter(key => typeof key === 'string' && isNaN(parseInt(key))) )     */

let { Rock, Scissors, Lizard, Paper, Spock } = Piece //destructor into a number: index of enum not index of restructured 
/*  
    console.log('Piece::',Piece); ////Piece :: {Rock : 0, ...}
    console.log('TCL: Piece', Rock, Paper, Scissors, Lizard, Spock) //:: 0, 3, ...

    console.log(Rock); // 0
    console.log(Object.entries(Piece)) //[[]]
    console.log(Object.keys(Piece)) //[]
    console.log(Object.values(Piece)) //[]
    console.log(Piece[0]) //Rock
    console.log('Piece.Rock::', Piece.Rock) //0

    type PieceBeatsRule = [Piece, Piece]    
    
    //err for RuleMap: An index [signature parameter] type must be 'string' or 'number'  */
    
    
type RulesMap = { [key: string] : [Piece, Piece]  }  

export class Game{
    /*     
        public iPlayed:number */
    public cpuPlayed:number
    public gamePiece: Array<number>
    /*     
        //public myRules: Array<Array<number>>
        //public cpuRandomIndex: number */
    public ruleMap: RulesMap = { //0: (2) [1, 2]: index based
        [Rock]: [Scissors, Lizard],
        [Scissors]: [Lizard, Paper],
        [Lizard]: [Paper, Spock],
        [Paper]: [Spock, Rock],
        [Spock]: [Rock, Scissors]
    }
    /*     
        // public myVar3: void
        // public myVar:void = console.log('TCL: Game -> ruleMap keys', Object.keys(this.ruleMap)) //["0", "1", "2", "3", "4"]
        // public myVar2:void = console.log('TCL: Game -> ruleMap values', Object.values(this.ruleMap)) //0: (2) [1, 2] 
        // public myVar2:void = console.log('TCL: Game -> ruleMap values', Object.values(this.ruleMap[0])) //0: (2) [1, 2]  */
    constructor(){
        /*    
            //this.iPlayed = 0
            //console.log('TCL: Game -> constructor -> iPlayed', this.iPlayed) */
        this.gamePiece = [Rock,Scissors,Lizard,Paper,Spock]
        /*     
            //this.myRules = [[22, 33],[33,44],[44,55],[55,11],[11,22]]
            //this.cpuRandomIndex = 1 //Math.floor(Math.random() * 5) */
        this.cpuPlayed = 0 //Math.floor(Math.random() * 5)
        /*     
        //this.myVar3 = console.log('gamePiece', this.gamePiece) // Object.keys or values :: [0, 1, ...] */
    }
    /**
     * @param iPick Piece.<iPick>
     * Piece<Rock|Scissors|Lizard|Paper|Spock>
     */
    play(iPick: Piece){ //>>Piece.Rock :: 0
        /*     
            //>> if gamePiece is not of type Piece 
            //console.log('iPick::',iPick) */
            let iPickedGamePieceIndex = this.gamePiece[iPick] //>> 0
            //console.log('iPickedIndex::', iPickedGamePieceIndex);
            let iPickedRules = this.ruleMap[iPick] //>> [1, 2]
         
            //console.log('TCL: Game -> play -> iPickedRules', iPickedRules)
            //console.log('this.ruleMap[iPick][0]',this.ruleMap[iPick][0])
            //console.log(this.cpuPlayed === this.ruleMap[iPick][0] || this.cpuPlayed === this.ruleMap[iPick][1]) 
            let myInnerLength = this.ruleMap[iPick].length //>> 2
        
            //for(let i = 0; i < myInnerLength; i++){ */
        if(this.cpuPlayed === this.ruleMap[iPick][0] || this.cpuPlayed === this.ruleMap[iPick][1]){ //cpu 11 me[11, 22]
            /* 
                if(Piece[this.cpuPlayed] === this.ruleMap[]){ //cpu 11 me[11, 22] */
            console.log(`I WIN:    My game piece beats:    ${Piece[this.cpuPlayed]} with ${Piece[iPick]}`)
           
        }else{
            console.log(`I LOOSE:   My game piece does not beats:   ${Piece[this.cpuPlayed]} with ${Piece[iPick]}`)
        }
        /*     
            //}
            //this.cpu() */
    }

    public compare(selected: Piece, other: Piece) : Compare {
        return this.ruleMap[selected].includes(other) ? Compare.GreaterThan
            : selected === other ? Compare.EqualTo
            : Compare.LessThan
    }
    /*     
        cpu(){
            console.log('TCL:-----------------------------cpuGamePiece', this.cpuPlayed)
            let cpuInnerLength = this.myRules[this.cpuRandomIndex].length // (0 - 4) :: 2
            for(let i = 0; i < cpuInnerLength; i++){
                if(this.iPlayed === this.myRules[this.cpuRandomIndex][i]){ // me11 cpu[11, 22]
                    console.log(`cpu piece beats ${this.iPlayed} with ${this.myRules[this.cpuRandomIndex][i]}`)
                    
                }else{
                    console.log(`cpu piece does not beat ${this.iPlayed} with ${this.myRules[this.cpuRandomIndex][i]}`)
                }
            }
        } */


}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Notes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    //Check is valid input with:
        if(iPick > iPickedIndex){
            this.iPlayed = iPick
			console.log('TCL: ---------------------------my game piece', this.iPlayed)
        }else{
            console.log('invalid Game Piece')
        }
    //or with proper type inputs

    // const Types = {
    //     Rock: 1,
    //     Scissors: 2
    // }


    export enum Piece {
        Rock,
        Scissors,
        Lizard,
        Paper,
        Spock
    }
    // console.log('-----', Piece) // Piece :: {} //Piece[0] :: Rock //Piece[0][0] :: R //Piece['Scissors'] :: 1 `index
    const Pieces: Piece[] = Object.values(Piece)
        .filter(
            myValue => isNaN(parseInt(myValue))
        )
    // console.log(Pieces[0]); // Rock

    //console.log({ a: parseInt('1'), b: parseFloat('A'), c: Number.isNaN(parseFloat('thing')) })
    //console.log( Object.values({ a: 1, b: 2, c: 'three' }).filter(key => typeof key === 'string' && isNaN(parseInt(key))) )

    let { Rock, Paper, Scissors, Lizard, Spock } = Piece
    //console.log(Rock); // 0
    // console.log(Object.entries(Piece)) //[[]]
    // console.log(Object.keys(Piece)) //[]
    // console.log(Object.values(Piece)) //[]
    // console.log(Piece[0])

    //type PieceBeatsRule = [Piece, Piece] 
    type RulesMap = { [key: string] : [Piece, Piece]  }  //err: An index [signature parameter] type must be 'string' or 'number' */