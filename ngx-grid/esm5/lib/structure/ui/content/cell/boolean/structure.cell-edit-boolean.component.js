/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/read/edit/state/edit.event-type';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureEditSourceItemParams } from '../../../../domain/source/origin/edit/structure.edit-source-item.params';
import { SourceCommandDispatcher } from '../../../../ui-api/source/source.command-dispatcher';
var StructureCellEditBooleanComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellEditBooleanComponent, _super);
    function StructureCellEditBooleanComponent(sourceCommandService) {
        var _this = _super.call(this) || this;
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
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
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
                    _this.submitChanges();
                    break;
                default:
                    break;
            }
        }));
    };
    StructureCellEditBooleanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-cell-edit-boolean[entity][cell]',
                    template: "\n\n\t\t<span #cellContainer >\n\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\t\t\t\t\t\tcontext: editContext\">\n\t\t\t</ng-container>\n\t\t</span>\n\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureCellEditBooleanComponent.ctorParameters = function () { return [
        { type: SourceCommandDispatcher }
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
    StructureCellEditBooleanComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFOUY7SUFhdUQsNkRBQWM7SUFtQnBFLDJDQUE2QixvQkFBNkM7UUFBMUUsWUFDQyxpQkFBTyxTQUNQO1FBRjRCLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7O0lBRTFFLENBQUM7Ozs7O0lBRUQsdURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN4RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7O0lBRUQsb0RBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8seURBQWE7Ozs7SUFBckI7O1lBQ08sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFOztZQUNqQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVc7O1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7UUFFbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDOzs7OztJQUVPLDJEQUFlOzs7O0lBQXZCO1FBQUEsaUJBNEJDO1FBM0JBLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBaUIsQ0FBQztRQUV4RCxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQixZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUM3QixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU87YUFDVixFQUFFLEVBQUU7YUFDSixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXFCO1lBRWhDLFFBQVEsTUFBTSxFQUFFO2dCQUNmLEtBQUssYUFBYSxDQUFDLE1BQU07b0JBQ3hCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFFUDtvQkFDQyxNQUFNO2FBQ1A7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXZGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLCtDQUErQztvQkFDekQsUUFBUSxFQUFFLDRMQVNUO2lCQUNEOzs7O2dCQWRRLHVCQUF1Qjs7O21DQWlCOUIsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBRzNDLEtBQUs7dUJBR0wsS0FBSzs7SUFvRVAsd0NBQUM7Q0FBQSxBQXpGRCxDQWF1RCxjQUFjLEdBNEVwRTtTQTVFWSxpQ0FBaUM7OztJQUU3Qyw2REFDNkI7O0lBRTdCLG1EQUNtQjs7SUFFbkIsaURBQytCOztJQUUvQix3REFBaUI7O0lBRWpCLDBEQUF3Qzs7SUFFeEMsb0RBQWtDOztJQUVsQyx3REFBaUI7Ozs7O0lBRUwsaUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9lZGl0L3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNlbGwtZWRpdC1ib29sZWFuW2VudGl0eV1bY2VsbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PHNwYW4gI2NlbGxDb250YWluZXIgPlxuXHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbC5lZGl0VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZXh0OiBlZGl0Q29udGV4dFwiPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9zcGFuPlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBWaWV3Q2hpbGQoJ2NlbGxDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRjZWxsQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjZWxsOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHR2YWx1ZUNoYW5nZXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0c3RhdHVzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdGFjdHVhbFZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuZW50aXR5ICE9PSBudWxsICYmIGNoYW5nZXMuZW50aXR5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuY2VsbCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmNlbGwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdWJtaXRDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGl0ZW1JZCA9IHRoaXMuZW50aXR5LmdldElkKCksXG5cdFx0XHR1cGRhdGVkVmFsdWUgPSB0aGlzLmFjdHVhbFZhbHVlLFxuXHRcdFx0ZmllbGRJZCA9IHRoaXMuY2VsbC5jb2x1bW5GaWVsZElkO1xuXG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5lZGl0SXRlbShuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZElkLCB1cGRhdGVkVmFsdWUpKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdEVkaXRDb250ZXh0KCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cdFx0dGhpcy5zdGF0dXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT4oKTtcblxuXHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzJCxcblx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0dmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSh0aGlzLmVudGl0eSksXG5cdFx0XHRmb2N1czogZmFsc2UsXG5cdFx0XHRwYXJlbnQ6IHRoaXMuY2VsbENvbnRhaW5lclJlZlxuXHRcdH07XG5cblx0XHR0aGlzLnN0YXR1cyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RhdHVzOiBFZGl0RXZlbnRUeXBlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0dXMpIHtcblx0XHRcdFx0XHRjYXNlIEVkaXRFdmVudFR5cGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5zdWJtaXRDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19