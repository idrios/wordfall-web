import app from './src/js/app.js' 
import canvas from './src/js/renderer/Canvas.js'

window.onload = () => {
  canvas.lateinit()
    .then(
      app.start()
    )
}
