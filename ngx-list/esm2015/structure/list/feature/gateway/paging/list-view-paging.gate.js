/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, EventEmitter, Input, Output } from '@angular/core';
import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
export class ListViewPagingGate extends Gate {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     */
    constructor(changeDetectorRef, structureId, structurePagingCommandDispatcher, pagingEventRepository) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (this.isDefined('paging', simpleChanges)) {
            /** @type {?} */
            let pagingConfig;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pagingEventRepository
            .onPageChange(this.structureId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        (pageNumber) => {
            this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventRepository
            .onPageSizeChange(this.structureId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        (pageSize) => {
            this.pageSizeChanged.emit(pageSize);
        }));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
}
ListViewPagingGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[paging]'
            },] }
];
/** @nocollapse */
ListViewPagingGate.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: PagingCommandInvoker },
    { type: PagingEventRepository }
];
ListViewPagingGate.propDecorators = {
    paging: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }]
};
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
    ListViewPagingGate.prototype.changeDetectorRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRzVILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLElBQUk7Ozs7Ozs7SUFXM0MsWUFBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLGdDQUFzRCxFQUN0RCxxQkFBNEM7UUFDL0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFKRyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBc0I7UUFDdEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVJoRSxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFPbkUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBNEI7UUFFdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsRUFBRTs7Z0JBRXhDLFlBQTBCO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUzQiwrQ0FBK0M7Z0JBQy9DLHlFQUF5RTtnQkFDekUsSUFBSTthQUNKO1lBRUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsVUFBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQTlERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjthQUNqQzs7OztZQVhRLGlCQUFpQjtZQUtqQixXQUFXO1lBRlgsb0JBQW9CO1lBQ3BCLHFCQUFxQjs7O3FCQVU1QixLQUFLOzBCQUdMLE1BQU07OEJBR04sTUFBTTs7OztJQU5QLG9DQUNxQjs7SUFFckIseUNBQytEOztJQUUvRCw2Q0FDbUU7Ozs7O0lBRXZELCtDQUFxRDs7Ozs7SUFDOUQseUNBQXlDOzs7OztJQUN6Qyw4REFBdUU7Ozs7O0lBQ3ZFLG1EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1twYWdpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1BhZ2luZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3BhZ2luZycsIHNpbXBsZUNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cblx0XHRcdFx0Ly8gaWYgKHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5uZXh0KHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLnNldFBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblBhZ2VDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG59XG4iXX0=