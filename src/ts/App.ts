import { SceneManager } from "./scenes/SceneManager"
import { SCENE } from "./constants/constants"

export default class App{
  private static instance: App
  private sceneManager: SceneManager

  private constructor(){
    this.sceneManager = SceneManager.getInstance()
  }

  public static getInstance(): App {
    if (!App.instance){
      App.instance = new App()
    }
    return App.instance
  }

  public start(){
    this.sceneManager.open(SCENE.MainMenu)
  }

  public stop(){
    console.log("stopping")
  }
}
