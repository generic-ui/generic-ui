/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
/**
 * @abstract
 */
export class PagingGate extends Gate {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} pagingCommandInvoker
     * @param {?} pagingEventRepository
     */
    constructor(structureId, compositionId, pagingCommandInvoker, pagingEventRepository) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.pagingEventRepository = pagingEventRepository;
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('paging', changes)) {
            /** @type {?} */
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
            }
            this.pagingCommandInvoker.setPaging(pagingConfig, this.compositionId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeAndEmit(this.pagingEventRepository.onPageChange(this.structureId.toReadModelRootId()), this.pageChanged);
        this.subscribeAndEmit(this.pagingEventRepository.onPageSizeChange(this.structureId.toReadModelRootId()), this.pageSizeChanged);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
}
PagingGate.propDecorators = {
    paging: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PagingGate.prototype.paging;
    /** @type {?} */
    PagingGate.prototype.pageChanged;
    /** @type {?} */
    PagingGate.prototype.pageSizeChanged;
    /**
     * @type {?}
     * @protected
     */
    PagingGate.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    PagingGate.prototype.compositionId;
    /**
     * @type {?}
     * @protected
     */
    PagingGate.prototype.pagingCommandInvoker;
    /**
     * @type {?}
     * @protected
     */
    PagingGate.prototype.pagingEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9nYXRlL3BhZ2luZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVM3RCxNQUFNLE9BQWdCLFVBQVcsU0FBUSxJQUFJOzs7Ozs7OztJQVc1QyxZQUF5QyxXQUF3QixFQUN2QyxhQUE0QixFQUM1QixvQkFBMEMsRUFDMUMscUJBQTRDO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBSmdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVJ0RSxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFPbkUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBOEI7UUFFekMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTs7Z0JBRWxDLFlBQTBCO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNCO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQzdFLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFDakYsSUFBSSxDQUFDLGVBQWUsQ0FDcEIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O3FCQWpEQSxLQUFLOzBCQUdMLE1BQU07OEJBR04sTUFBTTs7OztJQU5QLDRCQUMrQjs7SUFFL0IsaUNBQytEOztJQUUvRCxxQ0FDbUU7Ozs7O0lBRTdDLGlDQUEyQzs7Ozs7SUFDMUQsbUNBQStDOzs7OztJQUMvQywwQ0FBNkQ7Ozs7O0lBQzdELDJDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IGJvb2xlYW4gfCBQYWdpbmdDb25maWc7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFBhZ2luZ0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3BhZ2luZycsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZywgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5Lm9uUGFnZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpLFxuXHRcdFx0dGhpcy5wYWdlQ2hhbmdlZFxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnBhZ2luZ0V2ZW50UmVwb3NpdG9yeS5vblBhZ2VTaXplQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQudG9SZWFkTW9kZWxSb290SWQoKSksXG5cdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZFxuXHRcdCk7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cbn1cbiJdfQ==