/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StreamCloser } from '../../../../common/cdk/reactive/stream-closer';
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
        _this.localStreamCloser = new StreamCloser();
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
            this.sourceCommandInvoker.setOrigin(this.source);
        }
        if (this.isDefined('items', changes)) {
            this.sourceCommandInvoker.setOrigin(this.items);
        }
    };
    /**
     * @return {?}
     */
    SourceGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            _this.sourceEdited.emit(values);
        }));
    };
    /**
     * @return {?}
     */
    SourceGate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.localStreamCloser.unsubscribe();
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
     * @private
     */
    SourceGate.prototype.localStreamCloser;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NvdXJjZS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBSTdFO0lBQXlDLHNDQUFJO0lBYTVDLG9CQUF5QyxXQUF3QixFQUN2QyxvQkFBMEMsRUFDMUMsa0JBQXNDO1FBRmhFLFlBR0MsaUJBQU8sU0FDUDtRQUp3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFaaEUsWUFBTSxHQUFlLEVBQUUsQ0FBQztRQUd4QixXQUFLLEdBQWUsRUFBRSxDQUFDO1FBR3ZCLGtCQUFZLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsdUJBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFNeEQsQ0FBQzs7Ozs7SUFFRCxnQ0FBVzs7OztJQUFYLFVBQVksT0FBOEI7UUFFekM7O1dBRUc7UUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7SUFFRCw2QkFBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVJBLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUNKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FDbEM7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUF3QjtZQUNuQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxnQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7eUJBN0NBLEtBQUs7d0JBR0wsS0FBSzsrQkFHTCxNQUFNOztJQXlDUixpQkFBQztDQUFBLEFBakRELENBQXlDLElBQUksR0FpRDVDO1NBakRxQixVQUFVOzs7SUFFL0IsNEJBQ3dCOztJQUV4QiwyQkFDdUI7O0lBRXZCLGtDQUNrRTs7Ozs7SUFFbEUsdUNBQXdEOzs7OztJQUVsQyxpQ0FBMkM7Ozs7O0lBQzFELDBDQUE2RDs7Ozs7SUFDN0Qsd0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvY2FsU3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNvdXJjZUdhdGU+KSB7XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzb3VyY2UnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRPcmlnaW4odGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaXRlbXMnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRPcmlnaW4odGhpcy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZVxuXHRcdFx0Lm9uU291cmNlRWRpdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWVzOiBFZGl0ZW1JdGVtVmFsdWVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRWRpdGVkLmVtaXQodmFsdWVzKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cbn1cbiJdfQ==