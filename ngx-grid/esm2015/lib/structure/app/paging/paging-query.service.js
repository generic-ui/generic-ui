/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PagingRepository } from '../../domain/paging/query/paging.repository';
import { globalStructureId } from '../../domain/global-structure-id';
export class PagingQueryService {
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
    select(structureId = globalStructureId) {
        return this.pagingRepository.select(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectOne(structureId = globalStructureId) {
        return this.select(structureId)
            .pipe(take(1));
    }
}
PagingQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingQueryService.ctorParameters = () => [
    { type: PagingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingQueryService.prototype.pagingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3BhZ2luZy9wYWdpbmctcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLckUsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU5QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLGNBQTJCLGlCQUFpQjtRQUNyRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ3pCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7OztZQWZELFVBQVU7Ozs7WUFORixnQkFBZ0I7Ozs7Ozs7SUFTWiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9xdWVyeS9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3F1ZXJ5L3BhZ2luZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1F1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRzZWxlY3Qoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFBhZ2luZz4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZ1JlcG9zaXRvcnkuc2VsZWN0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNlbGVjdE9uZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19