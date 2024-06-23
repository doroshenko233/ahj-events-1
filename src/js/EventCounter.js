/* eslint-disable prettier/prettier */
export default class EventCounter {
    constructor() {
      this.clickHit = 0;
      this.clickMiss = 0;
    }
  
    countPointsHits() {
      const clickHits = document.querySelector('.hits');
      const clickMisses = document.querySelector('.misses');
      this.clickHit ++;
      clickHits.innerText = this.clickHit;
        if (this.clickHit === 10) {
          alert ('Вы победили!!!');
          this.clickHit = 0;
          this.clickMiss = 0;
          clickHits.innerText = this.clickHit;
          clickMisses.innerText = this.clickMiss;
        } 
    }
  
    countPointsMisses() {
      const clickHits = document.querySelector('.hits');
      const clickMisses = document.querySelector('.misses');
      this.clickMiss ++;
      clickMisses.innerText = this.clickMiss;
        if (this.clickMiss === 5) {
          alert ('Вы проиграли!');
          this.clickHit = 0;
          this.clickMiss = 0;
          clickHits.innerText = this.clickHit;
          clickMisses.innerText = this.clickMiss;
        }         
    }
  
    countPass() {
      const clickHits = document.querySelector('.hits');
      const clickMisses = document.querySelector('.misses');
      this.clickHit = 0;
      this.clickMiss = 0;
      alert ('Вы проиграли!');
      clickHits.innerText = this.clickHit;
      clickMisses.innerText = this.clickMiss;
        
      return;
    }
  }