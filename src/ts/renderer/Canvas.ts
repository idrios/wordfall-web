import { Application, Assets, Sprite } from 'pixijs'
import flowerPNG from '../../res/flower.png'

export default class Canvas{
  private static instance: Canvas
  private app: Application
  private constructor(){
    try{
      this.app = new Application({
        view: document.getElementById("game-root") as HTMLCanvasElement, 
        resolution: window.devicePixelRatio || 1, 
        autoDensity: true, 
        resizeTo: window
      })
    }
    catch(e){
      console.error(`error occurred trying to initialize Pixi.js :: ${e}`)
    }
  }

  public static getInstance(): Canvas{
    if (!Canvas.instance){
      Canvas.instance = new Canvas()
    }
    return Canvas.instance
  }

  public async addFlower(){
    try{
      const flowerTexture = await Assets.load(flowerPNG)
      const flower = new Sprite(flowerTexture)
      
      // Setup the position of the flower
      flower.x = this.app.renderer.width / 2;
      flower.y = this.app.renderer.height / 2;

      flower.width = 100
      flower.height = 100
  
      // Rotate around the center
      flower.anchor.x = 0.5;
      flower.anchor.y = 0.5;
  
      // Add the bunny to the scene we are building
      this.app.stage.addChild(flower);
  
      // Listen for frame updates
      this.app.ticker.add(() => {
          // each frame we spin the bunny around a bit
          flower.rotation += 0.01;
      });
    }
    catch(e){
      console.error(`error occurred trying to initialize Pixi.js background :: ${e}`)
    }
  }
}