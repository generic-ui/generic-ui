/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PagingCommandInvoker } from '../../../../paging/domain-api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/domain-api/paging.event-repository';
import { StructureId } from '../../../../core/domain/structure.id';
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
            .onPageChange(this.structureId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventRepository
            .onPageSizeChange(this.structureId.toReadModelRootId())
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
        { type: PagingCommandInvoker },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3REO0lBR3dDLDhDQUFJO0lBVzNDLDRCQUE2QixXQUF3QixFQUNqQyxnQ0FBc0QsRUFDdEQscUJBQTRDO1FBRmhFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQXNCO1FBQ3RELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFQaEUsaUJBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxxQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOztJQU1uRSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFOztnQkFFeEMsWUFBWSxTQUFjO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUzQiwrQ0FBK0M7Z0JBQy9DLHlFQUF5RTtnQkFDekUsSUFBSTthQUNKO1lBRUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFlQztRQWJBLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQWtCO1lBQzdCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxRQUFnQjtZQUMzQixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBN0RELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO2lCQUNqQzs7OztnQkFOUSxXQUFXO2dCQUZYLG9CQUFvQjtnQkFDcEIscUJBQXFCOzs7eUJBVTVCLEtBQUs7OEJBR0wsTUFBTTtrQ0FHTixNQUFNOztJQW9EUix5QkFBQztDQUFBLEFBL0RELENBR3dDLElBQUksR0E0RDNDO1NBNURZLGtCQUFrQjs7O0lBRTlCLG9DQUNxQjs7SUFFckIseUNBQytEOztJQUUvRCw2Q0FDbUU7Ozs7O0lBRXZELHlDQUF5Qzs7Ozs7SUFDbEQsOERBQXVFOzs7OztJQUN2RSxtREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1twYWdpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1BhZ2luZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3BhZ2luZycsIHNpbXBsZUNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cblx0XHRcdFx0Ly8gaWYgKHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5uZXh0KHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLnNldFBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblBhZ2VDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG59XG4iXX0=