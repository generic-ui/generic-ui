/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../hermes.observable';
/**
 * @param {?} time
 * @return {?}
 */
export function hermesTimer(time) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const id = setTimeout((/**
         * @return {?}
         */
        () => {
            observer.next(0);
        }), time);
        return (/**
         * @return {?}
         */
        () => {
            clearTimeout(id);
            observer.complete();
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRpbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2NyZWF0b3IvaGVybWVzLnRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFHeEQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFZO0lBRXZDLE9BQU8sSUFBSSxnQkFBZ0I7Ozs7SUFBUyxDQUFDLFFBQWdDLEVBQUUsRUFBRTs7Y0FFbEUsRUFBRSxHQUFHLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsR0FBRSxJQUFJLENBQUM7UUFFUjs7O1FBQU8sR0FBRyxFQUFFO1lBQ1gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUE7SUFDRixDQUFDLEVBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzVGltZXIodGltZTogbnVtYmVyKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPigob2JzZXJ2ZXI6IEhlcm1lc09ic2VydmVyPG51bWJlcj4pID0+IHtcblxuXHRcdGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KDApO1xuXHRcdH0sIHRpbWUpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGNsZWFyVGltZW91dChpZCk7XG5cdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH1cblx0fSk7XG59XG4iXX0=