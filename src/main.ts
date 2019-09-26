import AppGame from './AppGame';

let isDevelop:Boolean = true;

const game = new AppGame();

if(isDevelop) {
  window.game = game;
}