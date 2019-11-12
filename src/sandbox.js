import { displayLog } from './utils'
import { fromEvent } from 'rxjs'
import { filter, map } from 'rxjs/operators'

const log = (next) => {
  console.log('next', next)//TODO: borrame.
  displayLog(next)
}

function Coord (x, y) {
  this.x = x
  this.y = y
  this.toString = () => `coordenada: ${x}, ${y}`

}

function styledGrid (grid) {
  grid.style.height = '500px'
  grid.style.width = '500px'
  grid.style.bottom = '500px'
  grid.style.marginRight = '10px'
  grid.style.marginLeft = '10px'
  grid.style.backgroundImage = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wECDC4GIBN3ygAAALRJREFUeNrt3EERACAIRUF0LED/kETACp5xXwNm519Z3d0xoKqacEbsEBABASIgQAQEiIAAERABASIgQAQEiIAAERABASIgQAQEiIAAERABASIgQAQEiIAAERABASIgQAQEiIAAERABAaLHzpRPbJlpIQICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRED+6gIWHgqTCjDh1wAAAABJRU5ErkJggg==')`
  grid.style.border = '#AAA 1px solid'
  grid.style.flexShrink = 0
  return grid
}

const toCoord = (ev) => new Coord(ev.offsetX, ev.offsetY)
const toSquareCoord = (coord) => new Coord(Math.floor(coord.x / 50),
  Math.floor(coord.y / 50))

const toSquare = (ev) => {
  return toSquareCoord(toCoord(ev))
}
/**
 *
 * @param coord {Coord}
 */
const pares = (coord) => coord.x % 2 === 0

export default () => {
  /** start coding */
  const grid = styledGrid(document.getElementById('grid'))

  fromEvent(grid, 'click').pipe(
    map(toSquare),
    filter(pares)
  ).subscribe(log)

  /** end coding */
}