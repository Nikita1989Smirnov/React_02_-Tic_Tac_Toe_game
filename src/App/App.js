import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      square: Array(9).fill(null),
      count: 0,
      startSymbol: "X",
      secondSymbol: "O",
      winnerX: 0,
      winnerO: 0

    }

    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

  }

  isWinner() {

    let draw;
    let symbol = (this.state.count % 2 === 0) ? this.state.startSymbol : this.state.secondSymbol;
    for (let i = 0; i < this.winnerLine.length; i++) {

      if (this.state.square[this.winnerLine[i][0]] === symbol && this.state.square[this.winnerLine[i][1]] === symbol && this.state.square[this.winnerLine[i][2]] === symbol) {

        alert("Победили " + symbol);
        if (symbol === "X") {

          this.setState({
            winnerX: this.state.winnerX + 1
          });

        } else {

          this.setState({
            winnerO: this.state.winnerO + 1
          });

        }
        setTimeout(() => {

          this.setState({

            square: Array(9).fill(null),
            count: 0,
            startSymbol: "X",
            secondSymbol: "O"

          });

        }, 2000);
        draw = false;

      } else {

        draw = true;

      }

    }

    if (this.state.count === 8 && draw === true) {

      alert("Ничья");
      setTimeout(() => {

        this.setState({

          square: Array(9).fill(null),
          count: 0,
          startSymbol: "X",
          secondSymbol: "O"

        });

      }, 2000);

    }


  }



  myClick = (event) => {

    let data = event.target.getAttribute("data");
    let currentSquare = this.state.square;
    if (currentSquare[data] === null) {

      let symbol = this.state.count % 2 === 0 ? this.state.startSymbol : this.state.secondSymbol;
      currentSquare[data] = symbol;
      this.setState({

        square: currentSquare,
        count: this.state.count + 1

      });

    } else {

      alert("Ошибка ввода! В данном поле уже имеется символ");

    }

    this.isWinner();

  }

  myChange = (event) => {

    let selectedValue = event.target.options[event.target.options.selectedIndex].value;
    if (selectedValue !== "Выбрать символ") {

      if (selectedValue === "X") {

        this.setState({

          startSymbol: "X",
          secondSymbol: "O"

        });

      } else {

        this.setState({

          startSymbol: "O",
          secondSymbol: "X"

        });

      }

    } else {

      this.setState({

        startSymbol: "X",
        secondSymbol: "O"

      });
      alert("По умолчанию выбран символ Х в качестве первого хода");

    }

  }

  myReset = () => {

    this.setState({

      square: Array(9).fill(null),
      count: 0,
      startSymbol: "X",
      secondSymbol: "O",
      winnerX: 0,
      winnerO: 0

    });

  }

  render() {

    return (

      <div className="App">
        <div>
          <div>Кресты: {this.state.winnerX}</div>
          <div>Нули: {this.state.winnerO}</div>
        </div>
        <hr />
        <div>Выбрать первый символ ввода</div>
        <select onChange={this.myChange}>
          <option>Выбрать символ</option>
          <option>X</option>
          <option>O</option>
        </select>

        <div className="board">
          <div className="square" onClick={this.myClick} data="0">{this.state.square[0]}</div>
          <div className="square" onClick={this.myClick} data="1">{this.state.square[1]}</div>
          <div className="square" onClick={this.myClick} data="2">{this.state.square[2]}</div>
          <div className="square" onClick={this.myClick} data="3">{this.state.square[3]}</div>
          <div className="square" onClick={this.myClick} data="4">{this.state.square[4]}</div>
          <div className="square" onClick={this.myClick} data="5">{this.state.square[5]}</div>
          <div className="square" onClick={this.myClick} data="6">{this.state.square[6]}</div>
          <div className="square" onClick={this.myClick} data="7">{this.state.square[7]}</div>
          <div className="square" onClick={this.myClick} data="8">{this.state.square[8]}</div>
        </div>
        <hr />
        <button onClick={this.myReset}>Reset game</button>
      </div>

    );

  }

}

export default App;
