/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
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
    StructureSourceOriginRepository.prototype.selectOrigin = /**
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
    /** @nocollapse */
    StructureSourceOriginRepository.ctorParameters = function () { return []; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3F1ZXJ5L29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTNEO0lBT0M7UUFKUSxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFFdkMsWUFBTyxHQUFHLElBQUksYUFBYSxFQUEyQixDQUFDO0lBRy9ELENBQUM7Ozs7OztJQUVELG1EQUFTOzs7OztJQUFULFVBQVUsTUFBK0IsRUFBRSxXQUF3QjtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsc0RBQVk7Ozs7SUFBWixVQUFhLFdBQXdCO1FBRXBDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsR0FBNEI7WUFDaEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOztnQkF6QkQsVUFBVTs7OztJQTBCWCxzQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLCtCQUErQjs7Ozs7O0lBRTNDLGlEQUErQzs7Ozs7SUFFL0Msa0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgb3JpZ2luID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KCk7XG5cblx0cHJpdmF0ZSBvcmlnaW4kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQXJyYXk8YW55Pj4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRzZXRPcmlnaW4ob3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5vcmlnaW4uc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIG9yaWdpbik7XG5cdFx0dGhpcy5vcmlnaW4kLm5leHQodGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0c2VsZWN0T3JpZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==