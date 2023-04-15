import * as PIXI from 'pixijs'
import flowerPNG from '../../res/flower.png'

class Canvas{
  async lateinit(){ 
    if(this.app){
      return
    }
    this.initDom()
    await this.initBackgroundAsync()
  }

  initDom(){
    try{
      this.app = new PIXI.Application()
      document.body.appendChild(this.app.view)
    }
    catch(e){
      this.app = undefined
      console.error(`error occurred trying to initialize Pixi.js :: ${e}`)
    }
  }

  async initBackgroundAsync(){
    try{
      this.flowerTexture = await PIXI.Assets.load(flowerPNG)
      this.flower = new PIXI.Sprite(this.flowerTexture)
      
      // Setup the position of the flower
      this.flower.x = this.app.renderer.width / 2;
      this.flower.y = this.app.renderer.height / 2;

      this.flower.width = 100
      this.flower.height = 100
  
      // Rotate around the center
      this.flower.anchor.x = 0.5;
      this.flower.anchor.y = 0.5;
  
      // Add the bunny to the scene we are building
      this.app.stage.addChild(this.flower);
  
      // Listen for frame updates
      this.app.ticker.add(() => {
          // each frame we spin the bunny around a bit
          this.flower.rotation += 0.01;
      });
    }
    catch(e){
      console.error(`error occurred trying to initialize Pixi.js background :: ${e}`)
    }
  }

  render(){

  }
}

export default new Canvas() // export an instance to make it a singleton