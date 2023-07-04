AFRAME.registerComponent("key-collide",{
    schema: {
        elementId: {type: "string", default: "#key0"}
    },

    update: function(){
        this.isCollided(this.data.elementId);
    },

    isCollided: function(elementId){
        const ele = document.querySelector(elementId);

        ele.addEventListener("collide", () => {
            if(elementId.includes("#key")){
                ele.setAttribute("visible", false);
                ele.setAttribute("position", {x: 1000, y: 1000, z: 1000})
                
                this.updateScore();
            }
        });
    },

    updateScore: function(){
        var score = document.querySelector("#score");
        var count = score.getAttribute("text").value;
        var currentScore = parseInt(count);

        currentScore += 1;

        score.setAttribute("text", {
            value: currentScore
        });
    }
})