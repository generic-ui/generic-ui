/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PagingCommandDispatcher } from '../../../../paging/domain-api/paging.command-dispatcher';
import { PagingEventRepository } from '../../../../paging/domain-api/paging.event-repository';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
export class ListViewPagingGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     */
    constructor(structureId, structurePagingCommandDispatcher, pagingEventRepository) {
        super();
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
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        (pageNumber) => {
            this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventRepository
            .onPageSizeChange(this.structureId)
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
    { type: StructureId },
    { type: PagingCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLElBQUk7Ozs7OztJQVczQyxZQUE2QixXQUF3QixFQUNqQyxnQ0FBeUQsRUFDekQscUJBQTRDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBSG9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBeUI7UUFDekQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVBoRSxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFNbkUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBNEI7UUFFdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsRUFBRTs7Z0JBRXhDLFlBQTBCO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUzQiwrQ0FBK0M7Z0JBQy9DLHlFQUF5RTtnQkFDekUsSUFBSTthQUNKO1lBRUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBN0RELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2FBQ2pDOzs7O1lBTlEsV0FBVztZQUZYLHVCQUF1QjtZQUN2QixxQkFBcUI7OztxQkFVNUIsS0FBSzswQkFHTCxNQUFNOzhCQUdOLE1BQU07Ozs7SUFOUCxvQ0FDcUI7O0lBRXJCLHlDQUMrRDs7SUFFL0QsNkNBQ21FOzs7OztJQUV2RCx5Q0FBeUM7Ozs7O0lBQ2xELDhEQUEwRTs7Ozs7SUFDMUUsbURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbcGFnaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdQYWdpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZ0NvbmZpZztcblxuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdwYWdpbmcnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdC8vIGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25QYWdlQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZU51bWJlcjogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlTnVtYmVyKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblBhZ2VTaXplQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG59XG4iXX0=