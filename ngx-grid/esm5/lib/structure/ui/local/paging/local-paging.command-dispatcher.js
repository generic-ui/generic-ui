/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructurePagingCommandDispatcher } from '../../../ui-api/paging/structure-paging.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../domain/paging/paging.manager-factory';
import { PagingDispatcher } from '../../../domain/paging/paging.dispatcher';
var LocalPagingCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalPagingCommandDispatcher, _super);
    function LocalPagingCommandDispatcher(structureId, aggregateFactory, pagingDispatcher) {
        var _this = _super.call(this, pagingDispatcher) || this;
        _this.structureId = structureId;
        _this.aggregateFactory = aggregateFactory;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingCommandDispatcher.prototype.setDefaultPaging = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultPaggingAggregate = this.aggregateFactory.createDefault();
        _super.prototype.setPaging.call(this, {
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    LocalPagingCommandDispatcher.prototype.setPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        _super.prototype.setPaging.call(this, paging, this.structureId);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    LocalPagingCommandDispatcher.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        _super.prototype.changePageSize.call(this, pageSize, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingCommandDispatcher.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        _super.prototype.nextPage.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingCommandDispatcher.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        _super.prototype.prevPage.call(this, this.structureId);
    };
    LocalPagingCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingManagerFactory },
        { type: PagingDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandDispatcher.prototype, "setPaging", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandDispatcher.prototype, "changePageSize", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandDispatcher.prototype, "nextPage", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandDispatcher.prototype, "prevPage", null);
    return LocalPagingCommandDispatcher;
}(StructurePagingCommandDispatcher));
export { LocalPagingCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.aggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzlHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUk1RTtJQUNrRCx3REFBZ0M7SUFFakYsc0NBQW9CLFdBQXdCLEVBQ2pDLGdCQUFzQyxFQUM5QyxnQkFBa0M7UUFGckMsWUFHQyxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN2QjtRQUptQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXNCOztJQUdqRCxDQUFDOzs7O0lBRUQsdURBQWdCOzs7SUFBaEI7O1lBRU8sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtRQUVyRSxpQkFBTSxTQUFTLFlBQUM7WUFDZixJQUFJLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsU0FBUyxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRTtTQUNqRCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELGdEQUFTOzs7O0lBQVQsVUFBVSxNQUFvQjtRQUM3QixpQkFBTSxTQUFTLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUdELHFEQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjtRQUM5QixpQkFBTSxjQUFjLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0QsK0NBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBR0QsK0NBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF0Q0QsVUFBVTs7OztnQkFORixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsZ0JBQWdCOztJQXlCeEI7UUFEQyxRQUFROzs7O2lFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O3NFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O2dFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O2dFQUdSO0lBRUYsbUNBQUM7Q0FBQSxBQXhDRCxDQUNrRCxnQ0FBZ0MsR0F1Q2pGO1NBdkNZLDRCQUE0Qjs7Ozs7O0lBRTVCLG1EQUFnQzs7Ozs7SUFDekMsd0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBhZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKHBhZ2luZ0Rpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFBhZ2luZygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlID0gdGhpcy5hZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKTtcblxuXHRcdHN1cGVyLnNldFBhZ2luZyh7XG5cdFx0XHRwYWdlOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZTogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplczogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemVzKClcblx0XHR9LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRQYWdpbmcocGFnaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLm5leHRQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==