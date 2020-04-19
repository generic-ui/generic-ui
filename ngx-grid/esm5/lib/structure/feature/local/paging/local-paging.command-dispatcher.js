/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructurePagingCommandDispatcher } from '../../../feature-api/paging/structure-paging.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3BhZ2luZy9sb2NhbC1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSTVFO0lBQ2tELHdEQUFnQztJQUVqRixzQ0FBb0IsV0FBd0IsRUFDakMsZ0JBQXNDLEVBQzlDLGdCQUFrQztRQUZyQyxZQUdDLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3ZCO1FBSm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBc0I7O0lBR2pELENBQUM7Ozs7SUFFRCx1REFBZ0I7OztJQUFoQjs7WUFFTyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1FBRXJFLGlCQUFNLFNBQVMsWUFBQztZQUNmLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLFdBQVcsRUFBRTtZQUMvQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsWUFBWSxFQUFFO1NBQ2pELEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBR0QsZ0RBQVM7Ozs7SUFBVCxVQUFVLE1BQW9CO1FBQzdCLGlCQUFNLFNBQVMsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBR0QscURBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzlCLGlCQUFNLGNBQWMsWUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCwrQ0FBUTs7O0lBQVI7UUFDQyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFHRCwrQ0FBUTs7O0lBQVI7UUFDQyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXRDRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBQ1gsb0JBQW9CO2dCQUNwQixnQkFBZ0I7O0lBeUJ4QjtRQURDLFFBQVE7Ozs7aUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7c0VBR1I7SUFHRDtRQURDLFFBQVE7Ozs7Z0VBR1I7SUFHRDtRQURDLFFBQVE7Ozs7Z0VBR1I7SUFFRixtQ0FBQztDQUFBLEFBeENELENBQ2tELGdDQUFnQyxHQXVDakY7U0F2Q1ksNEJBQTRCOzs7Ozs7SUFFNUIsbURBQWdDOzs7OztJQUN6Qyx3REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmcubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgYWdncmVnYXRlRmFjdG9yeTogUGFnaW5nTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHBhZ2luZ0Rpc3BhdGNoZXI6IFBhZ2luZ0Rpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihwYWdpbmdEaXNwYXRjaGVyKTtcblx0fVxuXG5cdHNldERlZmF1bHRQYWdpbmcoKTogdm9pZCB7XG5cblx0XHRjb25zdCBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCk7XG5cblx0XHRzdXBlci5zZXRQYWdpbmcoe1xuXHRcdFx0cGFnZTogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZSgpLFxuXHRcdFx0cGFnZVNpemU6IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlLmdldFBhZ2VTaXplKCksXG5cdFx0XHRwYWdlU2l6ZXM6IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlLmdldFBhZ2VTaXplcygpXG5cdFx0fSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UGFnaW5nKHBhZ2luZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRzdXBlci5uZXh0UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRzdXBlci5wcmV2UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=