/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { PagingCommandInvoker } from '../../../../paging/domain-api/paging.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../../paging/domain/paging.manager-factory';
import { PagingDispatcher } from '../../../../paging/domain/paging.dispatcher';
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
}(PagingCommandInvoker));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUkvRTtJQUNrRCx3REFBb0I7SUFFckUsc0NBQW9CLFdBQXdCLEVBQ2pDLGdCQUFzQyxFQUM5QyxnQkFBa0M7UUFGckMsWUFHQyxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN2QjtRQUptQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXNCOztJQUdqRCxDQUFDOzs7O0lBRUQsdURBQWdCOzs7SUFBaEI7O1lBRU8sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtRQUVyRSxpQkFBTSxTQUFTLFlBQUM7WUFDZixJQUFJLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsU0FBUyxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRTtTQUNqRCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELGdEQUFTOzs7O0lBQVQsVUFBVSxNQUFvQjtRQUM3QixpQkFBTSxTQUFTLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUdELHFEQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjtRQUM5QixpQkFBTSxjQUFjLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0QsK0NBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBR0QsK0NBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF0Q0QsVUFBVTs7OztnQkFORixXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsZ0JBQWdCOztJQXlCeEI7UUFEQyxRQUFROzs7O2lFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O3NFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O2dFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O2dFQUdSO0lBRUYsbUNBQUM7Q0FBQSxBQXhDRCxDQUNrRCxvQkFBb0IsR0F1Q3JFO1NBdkNZLDRCQUE0Qjs7Ozs7O0lBRTVCLG1EQUFnQzs7Ozs7SUFDekMsd0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4vcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBQYWdpbmdDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgYWdncmVnYXRlRmFjdG9yeTogUGFnaW5nTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHBhZ2luZ0Rpc3BhdGNoZXI6IFBhZ2luZ0Rpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihwYWdpbmdEaXNwYXRjaGVyKTtcblx0fVxuXG5cdHNldERlZmF1bHRQYWdpbmcoKTogdm9pZCB7XG5cblx0XHRjb25zdCBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCk7XG5cblx0XHRzdXBlci5zZXRQYWdpbmcoe1xuXHRcdFx0cGFnZTogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZSgpLFxuXHRcdFx0cGFnZVNpemU6IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlLmdldFBhZ2VTaXplKCksXG5cdFx0XHRwYWdlU2l6ZXM6IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlLmdldFBhZ2VTaXplcygpXG5cdFx0fSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UGFnaW5nKHBhZ2luZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRzdXBlci5uZXh0UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRzdXBlci5wcmV2UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=