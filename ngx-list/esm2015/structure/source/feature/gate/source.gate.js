/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
/**
 * @abstract
 */
export class SourceGate extends Gate {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} sourceCommandInvoker
     * @param {?} sourceEventService
     */
    constructor(structureId, sourceCommandInvoker, sourceEventService) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.sourceEventService = sourceEventService;
        this.source = [];
        this.items = [];
        this.sourceEdited = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /**
         * Setting source should be last step
         */
        if (this.isDefined('source', changes)) {
            this.sourceCommandInvoker.setOrigin(this.source, this.structureId);
        }
        if (this.isDefined('items', changes)) {
            this.sourceCommandInvoker.setOrigin(this.items, this.structureId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeAndEmit(this.sourceEventService.onSourceEdited(this.structureId), this.sourceEdited);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SourceGate.propDecorators = {
    source: [{ type: Input }],
    items: [{ type: Input }],
    sourceEdited: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SourceGate.prototype.source;
    /** @type {?} */
    SourceGate.prototype.items;
    /** @type {?} */
    SourceGate.prototype.sourceEdited;
    /**
     * @type {?}
     * @protected
     */
    SourceGate.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    SourceGate.prototype.sourceCommandInvoker;
    /**
     * @type {?}
     * @protected
     */
    SourceGate.prototype.sourceEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NvdXJjZS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVE3RCxNQUFNLE9BQWdCLFVBQVcsU0FBUSxJQUFJOzs7Ozs7O0lBVzVDLFlBQXlDLFdBQXdCLEVBQ3ZDLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVmhFLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHeEIsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUd2QixpQkFBWSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWxFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQThCO1FBRXpDOztXQUVHO1FBQ0gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxJQUFJLENBQUMsWUFBWSxDQUNqQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O3FCQXZDQSxLQUFLO29CQUdMLEtBQUs7MkJBR0wsTUFBTTs7OztJQU5QLDRCQUN3Qjs7SUFFeEIsMkJBQ3VCOztJQUV2QixrQ0FDa0U7Ozs7O0lBRTVDLGlDQUEyQzs7Ozs7SUFDMUQsMENBQTZEOzs7OztJQUM3RCx3Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2V2ZW50L2VkaXRlbS1pdGVtLnZhbHVlcyc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8RWRpdGVtSXRlbVZhbHVlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U291cmNlR2F0ZT4pIHtcblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3NvdXJjZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLnNldE9yaWdpbih0aGlzLnNvdXJjZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdpdGVtcycsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLnNldE9yaWdpbih0aGlzLml0ZW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlLm9uU291cmNlRWRpdGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWRcblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=