/* eslint-disable prettier/prettier */
import EventCounter from "./EventCounter";

export default class GamePlay {
    constructor(size, counter) {
      this.size = size ** 2;
      this.counter = counter;
      this.count = 0;
      
    }
  
    createSize() {
      const wrapper = document.querySelector('.wrapper');
      for (let i = 0; i < this.size; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('data-index', i + 1);
        cell.classList.add('cell');
               
        if (wrapper) {
          wrapper.appendChild(cell);
        }
      }
      this.random();
      this.getScoring();
    }
  
    random() {
      setInterval(() => {
      const playCage = document.querySelectorAll('.cell');
        for (let i = 0; i < playCage.length; i++) {
          const playCageAcniv = 'activCell';
          if (playCage[i].classList.contains(playCageAcniv)) {
            playCage[i].classList.remove(playCageAcniv);
          }
        }
      const randomNumber = Math.floor(Math.random() * this.size);
      playCage[randomNumber].classList.add('activCell');
      this.count += 1;

      if (this.count === 5) {
        this.counter.countPass();
        this.count = 0;
      }
      }, 1000)
    }

   
    getScoring() {
      const playCage = document.querySelectorAll('.cell');
      playCage.forEach((index) => {
        index.addEventListener("click", () => {
          if (index.classList.contains('activCell')) {
            this.counter.countPointsHits();
            this.count = 0;
          } else {
            this.counter.countPointsMisses();
            this.count = 0;
          }
        })
      });
    }
}
  
  const newEventCounter = new EventCounter();
  const newGame = new GamePlay(4, newEventCounter );
  newGame.createSize();
