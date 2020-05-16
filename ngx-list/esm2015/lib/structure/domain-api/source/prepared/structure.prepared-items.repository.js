/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
export class StructurePreparedItemsRepository {
    constructor() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    setItems(origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPreparedItems(structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructurePreparedItemsRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsRepository.prototype.origin$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0QsTUFBTSxPQUFPLGdDQUFnQztJQUQ3QztRQUdTLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUV2QyxZQUFPLEdBQUcsSUFBSSxhQUFhLEVBQTJCLENBQUM7SUFrQmhFLENBQUM7Ozs7OztJQWhCQSxRQUFRLENBQUMsTUFBK0IsRUFBRSxXQUF3QjtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQXdCO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsR0FBNEIsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7Ozs7SUFHVixrREFBK0M7Ozs7O0lBRS9DLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgb3JpZ2luID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KCk7XG5cblx0cHJpdmF0ZSBvcmlnaW4kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQXJyYXk8YW55Pj4+KCk7XG5cblx0c2V0SXRlbXMob3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5vcmlnaW4uc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIG9yaWdpbik7XG5cdFx0dGhpcy5vcmlnaW4kLm5leHQodGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0b25QcmVwYXJlZEl0ZW1zKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9yaWdpbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBBcnJheTxhbnk+PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=