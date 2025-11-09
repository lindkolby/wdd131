const character = {
    name: "Snortleblat",
    class: "Butterfly Snorter",
    level: 5,
    health: 100,

    attacked: function() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died  💀`)
        }
        updateCard();
    },

    levelUp: function() {
        this.level += 1;
        updateCard();
    }
};    

function updateCard() {
    document.querySelector("#name").textContent = character.name;
    document.querySelector("#class").textContent = `Class: ${character.class}`;
    document.querySelector("#level").textContent = `Level: ${character.level}`;
    document.querySelector("#health").textContent = `Health: ${character.health}`;
}

document.addEventListener("DOMContentLoaded", function() {
    updateCard();
  
    document.querySelector("#attack").addEventListener("click", function() {
      character.attacked();
    });
  
    document.querySelector("#level_up").addEventListener("click", function() {
      character.levelUp();
    });
  });
