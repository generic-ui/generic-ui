/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
export class StructureSourceOriginRepository {
    constructor() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    setOrigin(origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectOrigin(structureId) {
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
StructureSourceOriginRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSourceOriginRepository.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3JlYWQvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0QsTUFBTSxPQUFPLCtCQUErQjtJQU0zQztRQUpRLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUV2QyxZQUFPLEdBQUcsSUFBSSxhQUFhLEVBQTJCLENBQUM7SUFHL0QsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQStCLEVBQUUsV0FBd0I7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUVwQyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQTRCLEVBQUUsRUFBRTtZQUNwQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7OztZQXpCRCxVQUFVOzs7Ozs7Ozs7SUFHVixpREFBK0M7Ozs7O0lBRS9DLGtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIG9yaWdpbiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxhbnk+PigpO1xuXG5cdHByaXZhdGUgb3JpZ2luJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIEFycmF5PGFueT4+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0c2V0T3JpZ2luKG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMub3JpZ2luLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCBvcmlnaW4pO1xuXHRcdHRoaXMub3JpZ2luJC5uZXh0KHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdHNlbGVjdE9yaWdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9yaWdpbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgobWFwOiBNYXA8c3RyaW5nLCBBcnJheTxhbnk+PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5nZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=