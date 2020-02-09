/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
var StructureSourceOriginRepository = /** @class */ (function () {
    function StructureSourceOriginRepository() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    StructureSourceOriginRepository.prototype.setOrigin = /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    function (origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSourceOriginRepository.prototype.onOrigin = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructureSourceOriginRepository.decorators = [
        { type: Injectable }
    ];
    return StructureSourceOriginRepository;
}());
export { StructureSourceOriginRepository };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3JlYWQvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0Q7SUFBQTtRQUdTLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUV2QyxZQUFPLEdBQUcsSUFBSSxhQUFhLEVBQTJCLENBQUM7SUFrQmhFLENBQUM7Ozs7OztJQWhCQSxtREFBUzs7Ozs7SUFBVCxVQUFVLE1BQStCLEVBQUUsV0FBd0I7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGtEQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUVoQyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQTRCO1lBQ2hDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7Z0JBdEJELFVBQVU7O0lBdUJYLHNDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksK0JBQStCOzs7Ozs7SUFFM0MsaURBQStDOzs7OztJQUUvQyxrREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgb3JpZ2luID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KCk7XG5cblx0cHJpdmF0ZSBvcmlnaW4kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQXJyYXk8YW55Pj4+KCk7XG5cblx0c2V0T3JpZ2luKG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMub3JpZ2luLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCBvcmlnaW4pO1xuXHRcdHRoaXMub3JpZ2luJC5uZXh0KHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdG9uT3JpZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==