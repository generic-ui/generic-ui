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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3F1ZXJ5L29yaWdpbi9zdHJ1Y3R1cmUuc291cmNlLW9yaWdpbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNELE1BQU0sT0FBTywrQkFBK0I7SUFNM0M7UUFKUSxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFFdkMsWUFBTyxHQUFHLElBQUksYUFBYSxFQUEyQixDQUFDO0lBRy9ELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUErQixFQUFFLFdBQXdCO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsV0FBd0I7UUFFcEMsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxHQUE0QixFQUFFLEVBQUU7WUFDcEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7WUF6QkQsVUFBVTs7Ozs7Ozs7O0lBR1YsaURBQStDOzs7OztJQUUvQyxrREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSBvcmlnaW4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8YW55Pj4oKTtcblxuXHRwcml2YXRlIG9yaWdpbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBBcnJheTxhbnk+Pj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdHNldE9yaWdpbihvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLm9yaWdpbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgb3JpZ2luKTtcblx0XHR0aGlzLm9yaWdpbiQubmV4dCh0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRzZWxlY3RPcmlnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgQXJyYXk8YW55Pj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19