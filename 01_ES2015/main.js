'use strict';

class Fighter {
  constructor(name='Black Shadow', power=1, health=100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage=0) {
    this.health -= damage;

    if (this.health < 0) {
      this.health = 0;
    }

    console.log(`${this.name}: ${this.health} HP`);
  }

  hit(enemy, point=0) {
    const damage = point * this.power;
    enemy.setDamage(damage);

    if(!enemy.isAlive()) {
      console.log(`Winner: ${this.name}`);
    }
  }

  isAlive() {
    return this.health > 0;
  }

  static fight(player1, player2, ...point) {
    const max = point.length;

    // determine who strikes first
    if (randomInteger(2)) {
      [player1, player2] = [player2, player1]
    }

    while (player1.isAlive() && player2.isAlive()) {
      Fighter.strike(player1, player2, point[ randomInteger(max) ]);
      Fighter.strike(player2, player1, point[ randomInteger(max) ]);
    }
  }

  static strike(fighter1, fighter2, point) {
    if (fighter1.isAlive()) {
      if (fighter1 instanceof ImprovedFighter && fighter1.health > 100) {
        fighter1.doubleHit(fighter2, point);
      } else {
        fighter1.hit(fighter2, point);
      }
    }
  }
}

class ImprovedFighter extends Fighter {
  constructor(...args) {
    super(...args);
  }

  doubleHit(enemy, point=0) {
    super.hit(enemy, point * 2);
  }
}

const randomInteger = max => Math.random() * max ^ 0;

const player1 = new Fighter('Joshua', 3, 550),
      player2 = new ImprovedFighter('Klitschko', 2, 500);

Fighter.fight(player1, player2, 25, 13, 45);