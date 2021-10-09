/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../hermes.observable';
/**
 * @param {?} interval
 * @return {?}
 */
export function hermesInterval(interval) {
    /** @type {?} */
    let counter = 0;
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const id = setInterval((/**
         * @return {?}
         */
        () => {
            observer.next(counter++);
        }), interval);
        return (/**
         * @return {?}
         */
        () => {
            clearInterval(id);
            observer.complete();
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmludGVydmFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2NyZWF0b3IvaGVybWVzLmludGVydmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFHeEQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFnQjs7UUFFMUMsT0FBTyxHQUFHLENBQUM7SUFFZixPQUFPLElBQUksZ0JBQWdCOzs7O0lBQVMsQ0FBQyxRQUFnQyxFQUFFLEVBQUU7O2NBRWxFLEVBQUUsR0FBRyxXQUFXOzs7UUFBQyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsR0FBRSxRQUFRLENBQUM7UUFFWjs7O1FBQU8sR0FBRyxFQUFFO1lBQ1gsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUE7SUFDRixDQUFDLEVBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzSW50ZXJ2YWwoaW50ZXJ2YWw6IG51bWJlcik6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0bGV0IGNvdW50ZXIgPSAwO1xuXG5cdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+KChvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8bnVtYmVyPikgPT4ge1xuXG5cdFx0Y29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KGNvdW50ZXIrKyk7XG5cdFx0fSwgaW50ZXJ2YWwpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHR9XG5cdH0pO1xufVxuIl19