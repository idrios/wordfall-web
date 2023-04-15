import { SceneManager } from "./scenes/SceneManager"
import { SCENE } from "./constants/constants"

class App{
  constructor(){
    this.sceneManager = new SceneManager()
  }

  start(){
    this.sceneManager.open(SCENE.MainMenu)
  }

  stop(){
    console.log("stopping")
  }
}

export default new App()