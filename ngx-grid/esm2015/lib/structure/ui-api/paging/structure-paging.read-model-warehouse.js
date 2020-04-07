/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PagingRepository } from '../../read/paging/paging.repository';
import { structureGlobalId } from '../structure.global-id';
export class StructurePagingReadModelWarehouse {
    /**
     * @param {?} pagingRepository
     */
    constructor(pagingRepository) {
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onPaging(structureId = structureGlobalId) {
        return this.pagingRepository.on(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSinglePaging(structureId = structureGlobalId) {
        return this.onPaging(structureId)
            .pipe(take(1));
    }
}
StructurePagingReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePagingReadModelWarehouse.ctorParameters = () => [
    { type: PagingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingReadModelWarehouse.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5yZWFkLW1vZGVsLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzNELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFFN0MsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxjQUEyQixpQkFBaUI7UUFDMUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUMzQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7WUFmRCxVQUFVOzs7O1lBTkYsZ0JBQWdCOzs7Ozs7O0lBU1osNkRBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ1JlcG9zaXRvcnk6IFBhZ2luZ1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uUGFnaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uU2luZ2xlUGFnaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxQYWdpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5vblBhZ2luZyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==