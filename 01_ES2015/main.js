'use strict';

class Fighter {
  constructor(name, power, health) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage) {
    this.health -= damage;
    console.log(`health: ${this.health}`);
  }

  hit(enemy, point) {
    const damage = point * this.power;
    enemy.setDamage(damage);
  }
}