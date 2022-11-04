// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength)
        this.name = name;

    }
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health >0){
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <=0){
            return `${this.name} has died in act of combat`
        }

        
        }
        battleCry(){
            return "Odin Owns You All!"
    }
   
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super (health, strength)
}
receiveDamage(damage){
    this.health = this.health - damage
    if (this.health >0){
        return `A Saxon has received ${damage} points of damage`
    } else if (this.health <=0){
        return `A Saxon has died in combat`
    }
}
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
// struggled with this. Think I understand what needs to be done but unsure how to achieve it.
    vikingAttack(){
        let randomSaxon = saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
        let randomViking = vikingArmy[Math.floor(Math.random()*vikingArmy.length)];
            
       randomSaxon.receiveDamage(randomViking.strength)   
          
    } 
// struggled with this. Think I understand what needs to be done but unsure how to achieve it.
    saxonAttack (){
        let randomSaxon = saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
        let randomViking = vikingArmy[Math.floor(Math.random()*vikingArmy.length)];
            
       randomViking.receiveDamage(randomSaxon.strength)  
    }

    // Beleive this is the correct solution but it might not work as the previous vikingAttack and saxonAttack are not working.
    showStatus(){
        
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }else if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century"
        }
        else if (this.saxonArmy.length && this.vikingArmy.length > 0){return "Vikings and Saxons are still in the thick of battle."}
    }
    
}



