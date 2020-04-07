/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/read/edit/state/edit.event-type';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureEditSourceItemParams } from '../../../../domain/source/origin/edit/structure.edit-source-item.params';
import { SourceCommandDispatcher } from '../../../../ui-api/source/source.command-dispatcher';
import { StructureCellEditState } from '../../../edit/structure.cell-edit.state';
var StructureCellEditComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellEditComponent, _super);
    function StructureCellEditComponent(sourceCommandService) {
        var _this = _super.call(this) || this;
        _this.sourceCommandService = sourceCommandService;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureCellEditComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.entity !== null && changes.entity !== undefined) {
            this.initEditContext();
        }
        if (changes.cell !== null && changes.cell !== undefined) {
            this.initEditContext();
        }
    };
    /**
     * @return {?}
     */
    StructureCellEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initEditContext();
    };
    /**
     * @return {?}
     */
    StructureCellEditComponent.prototype.submitChangesAndExit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemId = this.entity.getId();
        /** @type {?} */
        var updatedValue = this.actualValue;
        /** @type {?} */
        var fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditComponent.prototype.initEditContext = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.getValue(this.entity),
            focus: false,
            parent: this.cellContainerRef
        };
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            switch (status) {
                case EditEventType.SUBMIT:
                    _this.submitChangesAndExit();
                    _this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    // this.exitEditMode();
                    _this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditComponent.prototype.observeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.actualValue = value;
        }));
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    StructureCellEditComponent.prototype.publishEditState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        // this.structureCellEditStore.next(state);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditComponent.prototype.publishEditEnter = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.ENTER);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditComponent.prototype.publishEditCancel = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.CANCEL);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditComponent.prototype.publishEditSubmit = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.SUBMIT);
    };
    StructureCellEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-cell-edit[entity][cell]',
                    template: "\n\n\t\t<span #cellContainer >\n\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\t\t\t\t\t\tcontext: editContext\">\n\t\t\t</ng-container>\n\t\t</span>\n\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureCellEditComponent.ctorParameters = function () { return [
        { type: SourceCommandDispatcher }
    ]; };
    StructureCellEditComponent.propDecorators = {
        cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
        entity: [{ type: Input }],
        cell: [{ type: Input }]
    };
    return StructureCellEditComponent;
}(SmartComponent));
export { StructureCellEditComponent };
if (false) {
    /** @type {?} */
    StructureCellEditComponent.prototype.cellContainerRef;
    /** @type {?} */
    StructureCellEditComponent.prototype.entity;
    /** @type {?} */
    StructureCellEditComponent.prototype.cell;
    /** @type {?} */
    StructureCellEditComponent.prototype.editContext;
    /** @type {?} */
    StructureCellEditComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellEditComponent.prototype.status$;
    /** @type {?} */
    StructureCellEditComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9jZWxsL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakY7SUFhZ0Qsc0RBQWM7SUFtQjdELG9DQUE2QixvQkFBNkM7UUFBMUUsWUFDQyxpQkFBTyxTQUNQO1FBRjRCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7O0lBRTFFLENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLENBQUMs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LElBQUksRUFBRTt5QkFHM0MsS0FBSzt1QkFHTCxLQUFLOztJQXVHUCxpQ0FBQztDQUFBLEFBNUhELENBYWdELGNBQWMsR0ErRzdEO1NBL0dZLDBCQUEwQjs7O0lBRXRDLHNEQUM2Qjs7SUFFN0IsNENBQ21COztJQUVuQiwwQ0FDK0I7O0lBRS9CLGlEQUFpQjs7SUFFakIsbURBQXdDOztJQUV4Qyw2Q0FBa0M7O0lBRWxDLGlEQUFpQjs7Ozs7SUFFTCwwREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvc3RhdGUvZWRpdC5ldmVudC10eXBlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXRbZW50aXR5XVtjZWxsXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8c3BhbiAjY2VsbENvbnRhaW5lciA+XG5cdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsLmVkaXRUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ6IGVkaXRDb250ZXh0XCI+XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L3NwYW4+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjZWxsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y2VsbENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVudGl0eSAhPT0gbnVsbCAmJiBjaGFuZ2VzLmVudGl0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNlbGwgIT09IG51bGwgJiYgY2hhbmdlcy5jZWxsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0fVxuXG5cdHN1Ym1pdENoYW5nZXNBbmRFeGl0KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gdGhpcy5lbnRpdHkuZ2V0SWQoKSxcblx0XHRcdHVwZGF0ZWRWYWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWUsXG5cdFx0XHRmaWVsZElkID0gdGhpcy5jZWxsLmNvbHVtbkZpZWxkSWQ7XG5cblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLmVkaXRJdGVtKG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkSWQsIHVwZGF0ZWRWYWx1ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0RWRpdENvbnRleHQoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblx0XHR0aGlzLnN0YXR1cyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPigpO1xuXG5cdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMkLFxuXHRcdFx0dmFsdWVDaGFuZ2VzOiB0aGlzLnZhbHVlQ2hhbmdlcyQsXG5cdFx0XHR2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKHRoaXMuZW50aXR5KSxcblx0XHRcdGZvY3VzOiBmYWxzZSxcblx0XHRcdHBhcmVudDogdGhpcy5jZWxsQ29udGFpbmVyUmVmXG5cdFx0fTtcblxuXHRcdHRoaXMuc3RhdHVzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0dXM6IEVkaXRFdmVudFR5cGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXR1cykge1xuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdENoYW5nZXNBbmRFeGl0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0U3VibWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHQvLyB0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdENhbmNlbCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3RhdGUoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpOiB2b2lkIHtcblx0XHQvLyB0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmUubmV4dChzdGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0RW50ZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuRU5URVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUwpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdFN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5TVUJNSVQpO1xuXHR9XG5cbn1cbiJdfQ==