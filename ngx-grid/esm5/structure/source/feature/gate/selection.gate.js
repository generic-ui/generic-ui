/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { RowSelection } from '../../core/api/row-selection';
/**
 * @abstract
 */
var SelectionGate = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionGate, _super);
    function SelectionGate(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.formationEventService = formationEventService;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        _this.itemsSelected = new EventEmitter();
        _this.selectedRows = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectionGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('rowSelection', changes)) {
            if (this.rowSelection.isEnabledDefined()) {
                this.formationCommandDispatcher.setSelection(this.rowSelection.isEnabled(), this.structureId);
            }
            if (this.rowSelection.isTypeDefined()) {
                this.rowSelectionTypeArchive.next(this.rowSelection.getType());
            }
            if (this.rowSelection.isModeDefined()) {
                this.formationCommandDispatcher.changeMode(this.rowSelection.getMode(), this.structureId);
            }
        }
    };
    /**
     * @return {?}
     */
    SelectionGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.itemsSelected.emit(items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getSource(); })));
            _this.selectedRows.emit(items);
        }));
    };
    /**
     * @return {?}
     */
    SelectionGate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    SelectionGate.propDecorators = {
        rowSelection: [{ type: Input }],
        itemsSelected: [{ type: Output }],
        selectedRows: [{ type: Output }]
    };
    return SelectionGate;
}(Gate));
export { SelectionGate };
if (false) {
    /** @type {?} */
    SelectionGate.prototype.rowSelection;
    /** @type {?} */
    SelectionGate.prototype.itemsSelected;
    /** @type {?} */
    SelectionGate.prototype.selectedRows;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.formationEventService;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.rowSelectionTypeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBTzVEO0lBQTRDLHlDQUFJO0lBVy9DLHVCQUF5QyxXQUF3QixFQUN2QyxxQkFBK0MsRUFDL0MsMEJBQW1ELEVBQ25ELHVCQUFnRDtRQUgxRSxZQUlDLGlCQUFPLFNBQ1A7UUFMd0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQyxnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFSMUUsbUJBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxrQkFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQU9wRSxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFpQztRQUU1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlGO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUMvRDtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxRjtTQUNEO0lBQ0YsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUEEsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQXlCO1lBQ3BDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUMsQ0FBQztZQUN2RCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUNyQixDQUFDOzsrQkE5Q0EsS0FBSztnQ0FHTCxNQUFNOytCQUdOLE1BQU07O0lBMENSLG9CQUFDO0NBQUEsQUFsREQsQ0FBNEMsSUFBSSxHQWtEL0M7U0FsRHFCLGFBQWE7OztJQUVsQyxxQ0FDMkI7O0lBRTNCLHNDQUNzRDs7SUFFdEQscUNBQ29FOzs7OztJQUU5QyxvQ0FBMkM7Ozs7O0lBQzFELDhDQUFrRTs7Ozs7SUFDbEUsbURBQXNFOzs7OztJQUN0RSxnREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlbGVjdGlvbkdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0cm93U2VsZWN0aW9uOiBSb3dTZWxlY3Rpb247XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWxlY3RlZFJvd3M6IEV2ZW50RW1pdHRlcjxBcnJheTxTZWxlY3RlZFJvdz4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNlbGVjdGlvbkdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd1NlbGVjdGlvbicsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNFbmFibGVkRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0U2VsZWN0aW9uKHRoaXMucm93U2VsZWN0aW9uLmlzRW5hYmxlZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzVHlwZURlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLnJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLm5leHQodGhpcy5yb3dTZWxlY3Rpb24uZ2V0VHlwZSgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzTW9kZURlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLmNoYW5nZU1vZGUodGhpcy5yb3dTZWxlY3Rpb24uZ2V0TW9kZSgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW1zLm1hcChpID0+IGkuZ2V0U291cmNlKCkpKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuZW1pdChpdGVtcyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxufVxuIl19