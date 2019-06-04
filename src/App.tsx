import React from "react";
import "./App.css"


enum Player {
    None = 0,
    One = 1, 
    Two = 2
}

interface State {
    board: Player[] 
}


class App extends React.Component<{},State> {

    public state = {
        //loop through this later
        board: [Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,]
    }

    public renderCell = (index: number) => {
        return <div className="cell"> /></div>
    }

    public renderBoard = () => {
        const {board} = this.state
        return (
            <div className="board-container">
           {board.map((value, key) => this.renderCell(key))}
            </div>
        )
    }
    public render() {
        return (
            <div>
                <header>
                    <div>TicTacToe with REact Typescript</div>
                    {this.renderBoard()}
                </header>
            </div>
        )
    }
    
}

export default App
