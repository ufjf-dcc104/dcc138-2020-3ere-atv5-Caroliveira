import Scene from "./Scene.js";
import PCSprite from "../Sprites/PCSprite.js";
import EnemySprite from "../Sprites/EnemySprite.js";
import Map from "../Map.js";
import modelMap1 from "../maps/map1.js";

export default class SceneGame extends Scene {
  onCrash(a, b) {
    if (!this.toRemove.includes(a)) {
      this.toRemove.push(a);
      this.assets.play("boom");
    }
    if (!this.toRemove.includes(b)) {
      this.toRemove.push(b);
      this.assets.play("boom");
    }
    if (a.tags.has("pc") && b.tags.has("enemy")) {
      this.game.selectScene("end");
    }
  }

  setup() {
    super.setup();
    const map1 = new Map();
    map1.loadMap(modelMap1);
    this.configureMap(map1);
    
    const pc = new PCSprite({
      x: 96,
      y: 96,
      image: this.assets?.getImage("girl"),
      tags: ["pc"],
    });
    this.addSprite(pc);


    const en1 = new EnemySprite({
      x: 12 * 64 + 10,
      image: this.assets?.getImage("orc"),
      tags: ["enemy"],
    });
    const en2 = new EnemySprite({
      x: 6 * 64 + 10,
      image: this.assets?.getImage("skelly"),
      tags: ["enemy"],
    });
    const en3 = new EnemySprite({
      x: 64 + 10,
      y: 3 * 64 + 10,
      image: this.assets?.getImage("orc"),
      tags: ["enemy"],
    });
    en1.defineTarget(pc);
    en2.defineTarget(pc);
    en3.defineTarget(pc);
    this.addSprite(en1);
    this.addSprite(en2);
    this.addSprite(en3);
  }
}
