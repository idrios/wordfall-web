
// Scene is a dataclass that holds both renderer info and data info
// If I were making this a full-blown game engine, a scene would probably have
// little to nothing in it, but would provide a means for users to add
// components with composition
export interface Scene{
  background : Object
}

export class MenuScene implements Scene{
  background = require('../../res/background.png')
}

export class GameScene implements Scene{
  background = require('../../res/background.png')
}