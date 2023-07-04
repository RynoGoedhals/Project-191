AFRAME.registerComponent("keys-placement", {
    init: function(){
        for(var i = 0; i <= 3; i++){
            var id = `key${i}`;
            
            var posX = [28.2, 41.9, -86.6, -28.7];
            var posY = [-54, 50.5, -53.8, 21.8];
            var posZ = [3.1, 2.3, 2.1, 2.1];

            var scX = 0.5;
            var scY = 0.5;
            var scZ = 0.5;

            var rotX = [0, 90, 90, 0];
            var rotY = [90, 90, 90, 90];
            var rotZ = [0, 0, 0, 0]

            var position = {x: posX[i], y: posY[i], z: posZ[i]};
            var scale = {x: scX, y: scY, z: scZ};
            var rotation = {x: rotX[i], y: rotY[i], z: rotZ[i]};

            this.key(id, position, rotation, scale);
        }
    },

    key: function(id, position, rotation, scale){
        var ground = document.querySelector("#ground");
        var keys = document.createElement("a-entity");

        keys.setAttribute("id", id);
        keys.setAttribute("position", position);
        keys.setAttribute("scale", scale);
        keys.setAttribute("gltf-model", "./assets/keys/key4/scene.gltf");
        keys.setAttribute("rotation", rotation);
        keys.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 3
        });
        keys.setAttribute("key-collide", {
            elementId: `#${id}`
        });

        ground.appendChild(keys);
    },
})

// <!-- <a-entity id = "keys">
//     <a-entity id="key1" gltf-model="#key_1" scale="0.005 0.005 0.005" position = "27 2 52" rotation = "0 90 0" static-body key-collide = "elementId: #key1"></a-entity>
//     <a-entity id="key2" gltf-model="#key_2" scale="0.01 0.01 0.01" position = "-30 1.5 -23" rotation = "0 90 0" static-body key-collide = "elementId: #key2"></a-entity>
//     <a-entity id="key3" gltf-model="#key_3" scale="10 10 10" position = "-86 2 56" rotation = "0 90 75" static-body key-collide = "elementId: #key3"></a-entity>
//     <a-entity id="key4" gltf-model="#key_4" scale="0.5 0.5 0.5" position = "40 2 -52" rotation = "0 0 -90" static-body key-collide = "elementId: #key4"></a-entity>
// </a-entity> -->