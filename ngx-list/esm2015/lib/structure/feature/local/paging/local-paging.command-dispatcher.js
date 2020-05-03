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
export class LocalPagingCommandDispatcher extends StructurePagingCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} aggregateFactory
     * @param {?} pagingDispatcher
     */
    constructor(structureId, aggregateFactory, pagingDispatcher) {
        super(pagingDispatcher);
        this.structureId = structureId;
        this.aggregateFactory = aggregateFactory;
    }
    /**
     * @return {?}
     */
    setDefaultPaging() {
        /** @type {?} */
        const defaultPaggingAggregate = this.aggregateFactory.createDefault();
        super.setPaging({
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        super.setPaging(paging, this.structureId);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        super.changePageSize(pageSize, this.structureId);
    }
    /**
     * @return {?}
     */
    nextPage() {
        super.nextPage(this.structureId);
    }
    /**
     * @return {?}
     */
    prevPage() {
        super.prevPage(this.structureId);
    }
}
LocalPagingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: PagingManagerFactory },
    { type: PagingDispatcher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3BhZ2luZy9sb2NhbC1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSzVFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxnQ0FBZ0M7Ozs7OztJQUVqRixZQUFvQixXQUF3QixFQUNqQyxnQkFBc0MsRUFDOUMsZ0JBQWtDO1FBQ3BDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBSEwsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtJQUdqRCxDQUFDOzs7O0lBRUQsZ0JBQWdCOztjQUVULHVCQUF1QixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7UUFFckUsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNmLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLFdBQVcsRUFBRTtZQUMvQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsWUFBWSxFQUFFO1NBQ2pELEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLE1BQW9CO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUdELGNBQWMsQ0FBQyxRQUFnQjtRQUM5QixLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELFFBQVE7UUFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBR0QsUUFBUTtRQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQXRDRCxVQUFVOzs7O1lBTkYsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixnQkFBZ0I7O0FBeUJ4QjtJQURDLFFBQVE7Ozs7NkRBR1I7QUFHRDtJQURDLFFBQVE7Ozs7a0VBR1I7QUFHRDtJQURDLFFBQVE7Ozs7NERBR1I7QUFHRDtJQURDLFFBQVE7Ozs7NERBR1I7Ozs7OztJQW5DVyxtREFBZ0M7Ozs7O0lBQ3pDLHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBhZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKHBhZ2luZ0Rpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFBhZ2luZygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlID0gdGhpcy5hZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKTtcblxuXHRcdHN1cGVyLnNldFBhZ2luZyh7XG5cdFx0XHRwYWdlOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZTogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplczogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemVzKClcblx0XHR9LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRQYWdpbmcocGFnaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLm5leHRQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==