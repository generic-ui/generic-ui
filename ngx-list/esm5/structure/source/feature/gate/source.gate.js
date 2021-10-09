/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
/**
 * @abstract
 */
var SourceGate = /** @class */ (function (_super) {
    tslib_1.__extends(SourceGate, _super);
    function SourceGate(structureId, sourceCommandInvoker, sourceEventService) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.sourceCommandInvoker = sourceCommandInvoker;
        _this.sourceEventService = sourceEventService;
        _this.source = [];
        _this.items = [];
        _this.sourceEdited = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    SourceGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /**
         * Setting source should be last step
         */
        if (this.isDefined('source', changes)) {
            this.sourceCommandInvoker.setOrigin(this.source, this.structureId);
        }
        if (this.isDefined('items', changes)) {
            this.sourceCommandInvoker.setOrigin(this.items, this.structureId);
        }
    };
    /**
     * @return {?}
     */
    SourceGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeAndEmit(this.sourceEventService.onSourceEdited(this.structureId), this.sourceEdited);
    };
    /**
     * @return {?}
     */
    SourceGate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    SourceGate.propDecorators = {
        source: [{ type: Input }],
        items: [{ type: Input }],
        sourceEdited: [{ type: Output }]
    };
    return SourceGate;
}(Gate));
export { SourceGate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NvdXJjZS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFRN0Q7SUFBeUMsc0NBQUk7SUFXNUMsb0JBQXlDLFdBQXdCLEVBQ3ZDLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFGaEUsWUFHQyxpQkFBTyxTQUNQO1FBSndDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVZoRSxZQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFdBQUssR0FBZSxFQUFFLENBQUM7UUFHdkIsa0JBQVksR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFNbEUsQ0FBQzs7Ozs7SUFFRCxnQ0FBVzs7OztJQUFYLFVBQVksT0FBOEI7UUFFekM7O1dBRUc7UUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkU7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7SUFDRixDQUFDOzs7O0lBRUQsNkJBQVE7OztJQUFSO1FBRUMsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FDakIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxnQ0FBVzs7O0lBQVg7UUFDQyxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUNyQixDQUFDOzt5QkF2Q0EsS0FBSzt3QkFHTCxLQUFLOytCQUdMLE1BQU07O0lBbUNSLGlCQUFDO0NBQUEsQUEzQ0QsQ0FBeUMsSUFBSSxHQTJDNUM7U0EzQ3FCLFVBQVU7OztJQUUvQiw0QkFDd0I7O0lBRXhCLDJCQUN1Qjs7SUFFdkIsa0NBQ2tFOzs7OztJQUU1QyxpQ0FBMkM7Ozs7O0lBQzFELDBDQUE2RDs7Ozs7SUFDN0Qsd0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb3VyY2VHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNvdXJjZUdhdGU+KSB7XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzb3VyY2UnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRPcmlnaW4odGhpcy5zb3VyY2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaXRlbXMnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRPcmlnaW4odGhpcy5pdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZS5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdHRoaXMuc291cmNlRWRpdGVkXG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxufVxuIl19