import { SCENE } from '../constants/constants'
import canvas from '../renderer/Canvas'

// Orchestrator/Controller for things regarding scenes, which are data objects
export class SceneManager{
  constructor(){
    this.scene = SCENE.Empty
    this.canvas = canvas
  }

  open(scene){
    this.scene = SCENE.Transition
    switch(scene){
      case SCENE.MainMenu:
        console.log("returning MainMenu")
        this.scene = scene; 
        break; 
      case SCENE.Game: 
        console.log("returning Game")
        this.scene = scene; 
        break; 
      default: 
        console.error("returning Broken")
        this.scene = SCENE.Error
        break; 
    }
  }
}
