import { displayLog } from './utils';
import { interval } from 'rxjs'
import { mapTo, take } from 'rxjs/operators'

export default () => {
    /** start coding */

    interval(1000,2).pipe(
      take(2),
      mapTo('hola')
    ).subscribe(displayLog)

    /** end coding */
}