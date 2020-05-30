/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PagingCommandDispatcher } from '../../../../paging/domain-api/paging.command-dispatcher';
import { PagingEventRepository } from '../../../../paging/domain-api/paging.event-repository';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
var ListViewPagingGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewPagingGate, _super);
    function ListViewPagingGate(structureId, structurePagingCommandDispatcher, pagingEventRepository) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        _this.pagingEventRepository = pagingEventRepository;
        _this.pageChanged = new EventEmitter();
        _this.pageSizeChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewPagingGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('paging', simpleChanges)) {
            /** @type {?} */
            var pagingConfig = void 0;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                // if (this.paging.displayMode !== undefined) {
                // 	this.structurePagingDisplayModeArchive.next(this.paging.displayMode);
                // }
            }
            this.structurePagingCommandDispatcher.setPaging(pagingConfig);
        }
    };
    /**
     * @return {?}
     */
    ListViewPagingGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pagingEventRepository
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventRepository
            .onPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            _this.pageSizeChanged.emit(pageSize);
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ListViewPagingGate.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    ListViewPagingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[paging]'
                },] }
    ];
    /** @nocollapse */
    ListViewPagingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingCommandDispatcher },
        { type: PagingEventRepository }
    ]; };
    ListViewPagingGate.propDecorators = {
        paging: [{ type: Input }],
        pageChanged: [{ type: Output }],
        pageSizeChanged: [{ type: Output }]
    };
    return ListViewPagingGate;
}(Gate));
export { ListViewPagingGate };
if (false) {
    /** @type {?} */
    ListViewPagingGate.prototype.paging;
    /** @type {?} */
    ListViewPagingGate.prototype.pageChanged;
    /** @type {?} */
    ListViewPagingGate.prototype.pageSizeChanged;
    /**
     * @type {?}
     * @private
     */
    ListViewPagingGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewPagingGate.prototype.structurePagingCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    ListViewPagingGate.prototype.pagingEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3REO0lBR3dDLDhDQUFJO0lBVzNDLDRCQUE2QixXQUF3QixFQUNqQyxnQ0FBeUQsRUFDekQscUJBQTRDO1FBRmhFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQXlCO1FBQ3pELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFQaEUsaUJBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxxQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOztJQU1uRSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFOztnQkFFeEMsWUFBWSxTQUFjO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUzQiwrQ0FBK0M7Z0JBQy9DLHlFQUF5RTtnQkFDekUsSUFBSTthQUNKO1lBRUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFlQztRQWJBLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxVQUFrQjtZQUM3QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQWdCO1lBQzNCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx5Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkE3REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2pDOzs7O2dCQU5RLFdBQVc7Z0JBRlgsdUJBQXVCO2dCQUN2QixxQkFBcUI7Ozt5QkFVNUIsS0FBSzs4QkFHTCxNQUFNO2tDQUdOLE1BQU07O0lBb0RSLHlCQUFDO0NBQUEsQUEvREQsQ0FHd0MsSUFBSSxHQTREM0M7U0E1RFksa0JBQWtCOzs7SUFFOUIsb0NBQ3FCOztJQUVyQix5Q0FDK0Q7O0lBRS9ELDZDQUNtRTs7Ozs7SUFFdkQseUNBQXlDOzs7OztJQUNsRCw4REFBMEU7Ozs7O0lBQzFFLG1EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9nYXRlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W3BhZ2luZ10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3UGFnaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmdDb25maWc7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0V2ZW50UmVwb3NpdG9yeTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncGFnaW5nJywgc2ltcGxlQ2hhbmdlcykpIHtcblxuXHRcdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucGFnaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB0aGlzLnBhZ2luZztcblxuXHRcdFx0XHQvLyBpZiAodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLm5leHQodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUpO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnBhZ2luZ0V2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uUGFnZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VTaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxufVxuIl19