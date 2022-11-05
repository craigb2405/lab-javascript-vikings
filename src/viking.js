// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    (this.vikingArmy = []), (this.saxonArmy = []);
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

getRandom(army){
    return Math.floor(Math.random() * army.length);
}

vikingAttack(){
    const randomViking = this.vikingArmy[this.getRandom(this.vikingArmy)]
    
    const saxonIndex = this.getRandom(this.saxonArmy)
    const randomSaxon = this.saxonArmy[saxonIndex]

    const result = randomSaxon.receiveDamage(randomViking.strength)

    if (randomSaxon.health <= 0){
        this.saxonArmy.splice(saxonIndex, 1)
    }

    return result
}

saxonAttack(){
    const randomSaxon = this.saxonArmy[this.getRandom(this.saxonArmy)]
    
    const vikingIndex = this.getRandom(this.vikingArmy)
    const randomViking = this.vikingArmy[vikingIndex]

    const result = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0){
        this.vikingArmy.splice(vikingIndex, 1)
    }

    return result
}

showStatus(){
        
    if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    }else if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century"
    }
    else if (this.saxonArmy.length && this.vikingArmy.length > 0){return "Vikings and Saxons are still in the thick of battle."}
}

}



