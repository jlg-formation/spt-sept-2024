import "./style.css";

import { Board } from "./Board";
import { Command } from "./Command";

const config = {
  samples: 100,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.onUpdate((newConfig) => {
  board.setConfig(newConfig);
  board.draw();
});
