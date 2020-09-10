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
    getPreparedItems(structureId) {
        return this.origin.get(structureId.getId());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8sZ0NBQWdDO0lBRDdDO1FBR1MsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1FBRXBELFlBQU8sR0FBRyxJQUFJLGFBQWEsRUFBd0MsQ0FBQztJQXNCN0UsQ0FBQzs7Ozs7O0lBcEJBLFFBQVEsQ0FBQyxNQUErQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxXQUF3QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQXdCO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsR0FBNEIsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7O1lBMUJELFVBQVU7Ozs7Ozs7SUFHVixrREFBNEQ7Ozs7O0lBRTVELG1EQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIG9yaWdpbiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4oKTtcblxuXHRwcml2YXRlIG9yaWdpbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4+KCk7XG5cblx0c2V0SXRlbXMob3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5vcmlnaW4uc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIG9yaWdpbik7XG5cdFx0dGhpcy5vcmlnaW4kLm5leHQodGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKTtcblx0fVxuXG5cdG9uUHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4kXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgQXJyYXk8YW55Pj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19