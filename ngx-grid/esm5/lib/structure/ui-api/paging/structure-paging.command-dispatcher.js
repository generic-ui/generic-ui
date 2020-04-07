/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingDispatcher } from '../../domain/paging/paging.dispatcher';
import { structureGlobalId } from '../structure.global-id';
var StructurePagingCommandDispatcher = /** @class */ (function () {
    function StructurePagingCommandDispatcher(pagingDispatcher) {
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.enable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.disable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    };
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.setPaging = /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    function (paging, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, paging);
    };
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.changePageSize = /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    function (pageSize, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.nextPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.nextPage(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.prevPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.prevPage(structureId);
    };
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.goToPage = /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    function (pageNumber, currentPage) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage();
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage();
                currentPage -= 1;
            }
        }
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.changePagerTop = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    StructurePagingCommandDispatcher.prototype.changePagerBottom = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    };
    StructurePagingCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePagingCommandDispatcher.ctorParameters = function () { return [
        { type: PagingDispatcher }
    ]; };
    return StructurePagingCommandDispatcher;
}());
export { StructurePagingCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingCommandDispatcher.prototype.pagingDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRDtJQUdDLDBDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELGlEQUFNOzs7O0lBQU4sVUFBTyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsa0RBQU87Ozs7SUFBUCxVQUFRLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsb0RBQVM7Ozs7O0lBQVQsVUFBVSxNQUFvQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELHlEQUFjOzs7OztJQUFkLFVBQWUsUUFBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELG1EQUFROzs7O0lBQVIsVUFBUyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsbURBQVE7Ozs7SUFBUixVQUFTLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsbURBQVE7Ozs7O0lBQVIsVUFBUyxVQUFrQixFQUFFLFdBQW1CO1FBRS9DLElBQUksV0FBVyxHQUFHLFVBQVUsRUFBRTtZQUM3QixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO2FBQU07WUFDTixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQseURBQWM7Ozs7O0lBQWQsVUFBZSxPQUFnQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7O0lBRUQsNERBQWlCOzs7OztJQUFqQixVQUFrQixPQUFnQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQy9FLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Z0JBbkRELFVBQVU7Ozs7Z0JBTkYsZ0JBQWdCOztJQTBEekIsdUNBQUM7Q0FBQSxBQXBERCxJQW9EQztTQW5EWSxnQ0FBZ0M7Ozs7OztJQUVoQyw0REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0ZW5hYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBlbmFibGVkOiB0cnVlIH0pO1xuXHR9XG5cblx0ZGlzYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgZW5hYmxlZDogZmFsc2UgfSk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgcGFnaW5nKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLmNoYW5nZVBhZ2VTaXplKHN0cnVjdHVyZUlkLCBwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpIHtcblxuXHRcdGlmIChjdXJyZW50UGFnZSA8IHBhZ2VOdW1iZXIpIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlKCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlICs9IDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLnByZXZQYWdlKCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlIC09IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hhbmdlUGFnZXJUb3AoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyVG9wOiBlbmFibGVkIH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyQm90dG9tOiBlbmFibGVkIH0pO1xuXHR9XG59XG4iXX0=