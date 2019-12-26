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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3JlYWQvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0Q7SUFPQztRQUpRLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUV2QyxZQUFPLEdBQUcsSUFBSSxhQUFhLEVBQTJCLENBQUM7SUFHL0QsQ0FBQzs7Ozs7O0lBRUQsbURBQVM7Ozs7O0lBQVQsVUFBVSxNQUErQixFQUFFLFdBQXdCO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxzREFBWTs7OztJQUFaLFVBQWEsV0FBd0I7UUFFcEMsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxHQUE0QjtZQUNoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7O2dCQXpCRCxVQUFVOzs7O0lBMEJYLHNDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksK0JBQStCOzs7Ozs7SUFFM0MsaURBQStDOzs7OztJQUUvQyxrREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSBvcmlnaW4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8YW55Pj4oKTtcblxuXHRwcml2YXRlIG9yaWdpbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBBcnJheTxhbnk+Pj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdHNldE9yaWdpbihvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLm9yaWdpbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgb3JpZ2luKTtcblx0XHR0aGlzLm9yaWdpbiQubmV4dCh0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRzZWxlY3RPcmlnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgQXJyYXk8YW55Pj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19