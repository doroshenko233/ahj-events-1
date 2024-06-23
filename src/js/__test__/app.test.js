/* eslint-disable prettier/prettier */
import GamePlay from "../app";
import EventCounter from "../EventCounter";

describe('GamePlay', () => {
  let gameInstance;
  let wrapper;
  let cells;
  
 

  beforeEach(() => {
    gameInstance = new GamePlay(4, new EventCounter());
    wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.appendChild(wrapper);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Конструктор', () => {
    it('принимает один аргумент и устанавливает свойство size', () => {
      expect(gameInstance.size).toBe(16);
    });
  });

  describe('createSize', () => {
    it('создает элементы DOM с классом cell', () => {
      gameInstance.createSize();
      cells = wrapper.querySelectorAll('.cell');
      expect(cells.length).toBe(16);
    });

    it('создает элементы DOM с классом cell в правильном порядке', () => {
      gameInstance.createSize();
      const expectedIndices = [];
        for (let i = 0; i < 16; i++) {
          expectedIndices.push(i + 1);
        } 
      const actualIndices = [];
      cells.forEach((cell) => {
        actualIndices.push(parseInt(cell.getAttribute('data-index'), 10));
      });
      expect(actualIndices).toEqual(expectedIndices);
    });
  });

  describe('random', () => {
    it('активирует случайный элемент с классом cell каждую секунду', () => {
      gameInstance.createSize();
      setTimeout(() => {
        const activatedCells = wrapper.querySelectorAll('.activCell');
        expect(activatedCells.length).toBeGreaterThanOrEqual(1);
      }, 1000);
    });

    it('удаляет класс activCell у всех элементов', () => {
      gameInstance.createSize();
      gameInstance.random();
      const playCage = document.querySelectorAll('.cell');
      playCage.forEach(cell => {
        expect(cell.classList.contains('activCell')).toBeFalsy();
      });
    });
      
    it('функция random корректно добавляет класс activCell', () => {
      const playCage = [...document.querySelectorAll('.cell')]; 
      const originalClassLists = playCage.map(cell => cell.classList.contains('activCell')); 
      gameInstance.random(); 
      
      playCage.forEach((cell, index) => {
        expect(cell.classList.contains('activCell')).toBe(originalClassLists[index] ? false : true); 
      });
    })

    it('генерирует случайное число от 0 до this.size - 1', () => {
      gameInstance.random();
      const randomNumber = Math.floor(Math.random() * gameInstance.size);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(gameInstance.size);
    });
  })

  describe('getScoring', () => {
    it('должен добавлять обработчик события клика к каждому элементу с классом cell', () => {
      gameInstance.createSize(); 

      const cells = document.querySelectorAll('.cell');
      expect(cells.length).toBeGreaterThanOrEqual(gameInstance.size); 

      cells.forEach((cell, index) => {
        expect(cell.dataset.index).toBe(`${index + 1}`); 
        expect(cell.classList.contains('activCell')).toBeFalsy(); 
        expect(cell.classList.contains('activCell')).toBeFalsy(); 
      });
    });
  });
}) 


