import { SCENE } from '../constants/constants'
import Canvas from '../renderer/Canvas'
import { MenuScene, Scene } from './Scene'

// Orchestrator/Controller for things regarding scenes, which are data objects
export class SceneManager{
  private static instance: SceneManager
  private sceneId: number
  private canvas: Canvas
  private constructor(){
    this.sceneId = SCENE.Empty
    this.canvas = Canvas.getInstance()
  }

  public static getInstance(){
    if (!SceneManager.instance){
      SceneManager.instance = new SceneManager()
    }
    return SceneManager.instance
  }

  open(sceneId: number){
    this.sceneId = SCENE.Transition
    switch(sceneId){
      case SCENE.MainMenu:
        console.log("returning MainMenu")
        this.canvas.addFlower()
        this.sceneId = sceneId; 
        break; 
      case SCENE.Game: 
        console.log("returning Game")
        this.sceneId = sceneId; 
        break; 
      default: 
        console.error("returning Broken")
        this.sceneId = SCENE.Error
        break; 
    }
  }
}
