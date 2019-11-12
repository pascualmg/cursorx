import { displayLog } from './utils'
import { interval } from 'rxjs'
import { tap, mapTo, take } from 'rxjs/operators'

export default () => {
  /** start coding */

  interval(1000, 2).pipe(
    take(22),
    tap(displayLog),
    tap(displayLog),
    mapTo('hola caracola'),
  ).subscribe(displayLog)

  interval(1000).subscribe(
    console.log,
  )

  /** end coding */
}