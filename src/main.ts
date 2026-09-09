import AppGame from './AppGame';

declare global {
  interface Window {
    game?: AppGame;
  }
}

const isDevelop: boolean = true;

const game = new AppGame();

if (isDevelop) {
  window.game = game;
}
