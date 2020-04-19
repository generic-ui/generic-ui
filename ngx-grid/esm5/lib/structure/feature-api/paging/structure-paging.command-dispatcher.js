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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTNEO0lBR0MsMENBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsaURBQU07Ozs7SUFBTixVQUFPLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxrREFBTzs7OztJQUFQLFVBQVEsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxvREFBUzs7Ozs7SUFBVCxVQUFVLE1BQW9CLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDM0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRUQseURBQWM7Ozs7O0lBQWQsVUFBZSxRQUFnQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsbURBQVE7Ozs7SUFBUixVQUFTLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxtREFBUTs7OztJQUFSLFVBQVMsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxtREFBUTs7Ozs7SUFBUixVQUFTLFVBQWtCLEVBQUUsV0FBbUI7UUFFL0MsSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFO1lBQzdCLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixXQUFXLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixXQUFXLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFRCx5REFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7SUFFRCw0REFBaUI7Ozs7O0lBQWpCLFVBQWtCLE9BQWdCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFuREQsVUFBVTs7OztnQkFORixnQkFBZ0I7O0lBMER6Qix1Q0FBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLGdDQUFnQzs7Ozs7O0lBRWhDLDREQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRlbmFibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IHRydWUgfSk7XG5cdH1cblxuXHRkaXNhYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBlbmFibGVkOiBmYWxzZSB9KTtcblx0fVxuXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCBwYWdpbmcpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuY2hhbmdlUGFnZVNpemUoc3RydWN0dXJlSWQsIHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByZXZQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcikge1xuXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgcGFnZU51bWJlcikge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMubmV4dFBhZ2UoKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgKz0gMTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucHJldlBhZ2UoKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgLT0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlclRvcChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJUb3A6IGVuYWJsZWQgfSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoc3RydWN0dXJlSWQsIHsgcGFnZXJCb3R0b206IGVuYWJsZWQgfSk7XG5cdH1cbn1cbiJdfQ==