/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../../composition/core/domain-read/edit/state/edit.event-type';
import { ItemEntity } from '../../../../../source/core/domain/core/item/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { StructureEditSourceItemParams } from '../../../../../source/core/domain/origin/edit/structure.edit-source-item.params';
import { SourceCommandInvoker } from '../../../../../source/core/api/source.command-invoker';
import { StructureId } from '../../../../../core/api/structure.id';
var StructureCellEditBooleanComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellEditBooleanComponent, _super);
    function StructureCellEditBooleanComponent(changeDetectorRef, elementRef, structureId, sourceCommandService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.sourceCommandService = sourceCommandService;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureCellEditBooleanComponent.prototype.ngOnChanges = /**
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
    StructureCellEditBooleanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initEditContext();
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditBooleanComponent.prototype.submitChanges = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemId = this.entity.getId();
        /** @type {?} */
        var updatedValue = this.actualValue;
        /** @type {?} */
        var fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellEditBooleanComponent.prototype.initEditContext = /**
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
            value: this.cell.getValue(this.entity).value,
            focus: false,
            parent: this.cellContainerRef
        };
        this.observeValueChanges();
        this.status$
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            switch (status) {
                case EditEventType.SUBMIT:
                    _this.submitChanges();
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
    StructureCellEditBooleanComponent.prototype.observeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChanges$
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.actualValue = value;
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    StructureCellEditBooleanComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-cell-edit-boolean';
    };
    StructureCellEditBooleanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-cell-edit-boolean][entity][cell]',
                    template: "\n\n\t\t<span #cellContainer>\n\t\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\t\t\t\t\t\tcontext: editContext\">\n\t\t\t</ng-container>\n\t\t</span>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureCellEditBooleanComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: SourceCommandInvoker }
    ]; };
    StructureCellEditBooleanComponent.propDecorators = {
        cellContainerRef: [{ type: ViewChild, args: ['cellContainer', { static: true },] }],
        entity: [{ type: Input }],
        cell: [{ type: Input }]
    };
    return StructureCellEditBooleanComponent;
}(SmartComponent));
export { StructureCellEditBooleanComponent };
if (false) {
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.cellContainerRef;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.entity;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.cell;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.editContext;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.status$;
    /** @type {?} */
    StructureCellEditBooleanComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditBooleanComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditBooleanComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureCellEditBooleanComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUNqSSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDMUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNoSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU3RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkU7SUFldUQsNkRBQWM7SUFtQnBFLDJDQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixvQkFBMEM7UUFIOUQsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNC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LEFBbkhELENBZXVELGNBQWMsR0FvR3BFO1NBcEdZLGlDQUFpQzs7O0lBRTdDLDZEQUM2Qjs7SUFFN0IsbURBQ21COztJQUVuQixpREFDK0I7O0lBRS9CLHdEQUFpQjs7SUFFakIsMERBQXdDOztJQUV4QyxvREFBa0M7O0lBRWxDLHdEQUFpQjs7Ozs7SUFFTCw4REFBcUQ7Ozs7O0lBRTlELHdEQUF5Qzs7Ozs7SUFDekMsaUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY2VsbC1lZGl0LWJvb2xlYW5dW2VudGl0eV1bY2VsbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PHNwYW4gI2NlbGxDb250YWluZXI+XG5cdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbC5lZGl0VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZXh0OiBlZGl0Q29udGV4dFwiPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9zcGFuPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjZWxsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y2VsbENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMuZW50aXR5ICE9PSBudWxsICYmIGNoYW5nZXMuZW50aXR5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmNlbGwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdWJtaXRDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1JZCA9IHRoaXMuZW50aXR5LmdldElkKCksXG5cdFx0XHR1cGRhdGVkVmFsdWUgPSB0aGlzLmFjdHVhbFZhbHVlLFxuXHRcdFx0ZmllbGRJZCA9IHRoaXMuY2VsbC5jb2x1bW5GaWVsZElkO1xuXG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5lZGl0SXRlbShcblx0XHRcdG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkSWQsIHVwZGF0ZWRWYWx1ZSksXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUlkXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdEVkaXRDb250ZXh0KCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cdFx0dGhpcy5zdGF0dXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT4oKTtcblxuXHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzJCxcblx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0dmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSh0aGlzLmVudGl0eSkudmFsdWUsXG5cdFx0XHRmb2N1czogZmFsc2UsXG5cdFx0XHRwYXJlbnQ6IHRoaXMuY2VsbENvbnRhaW5lclJlZlxuXHRcdH07XG5cblx0XHR0aGlzLm9ic2VydmVWYWx1ZUNoYW5nZXMoKTtcblxuXHRcdHRoaXMuc3RhdHVzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0dXM6IEVkaXRFdmVudFR5cGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXR1cykge1xuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdENoYW5nZXMoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZVZhbHVlQ2hhbmdlcygpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQtYm9vbGVhbic7XG5cdH1cblxufVxuIl19