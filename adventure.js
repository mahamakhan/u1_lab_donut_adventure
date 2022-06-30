class Hero {
  constructor(name) {
    this.health = 100
    this.name = name
    this.objects = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories"
    ]
  }

  talkSass() {
    console.log(this.catchPhrases)
  }
  announceHealth() {
    return this.health
  }
  battle() {
    console.log("i'm ready to rumble")
  }
}

class Enemy {
  constructor(name) {
    this.name = name
    this.health = 100
    this.objects = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer"
    ]
  }
  talkSmack() {
    console.log(Enemy.this.catchPhrases)
  }
  announceHealth() {
    console.log("i'm gonna flatten you like a slice of pepperoni!")
  }
}
