/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring/row-coloring';
import { SchemaCommandInvoker } from '../../../../../../schema/core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../../../schema/core/api/schema.read-model-root-id';
export class StructureRowColoringGate extends Gate {
    /**
     * @param {?} schemaId
     * @param {?} schemaCommandInvoker
     * @param {?} schemaEventRepository
     */
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.rowColoringChanged = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('rowColoring', changes)) {
            this.schemaCommandInvoker.setRowColoring(this.rowColoring, this.schemaId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeAndEmit(this.schemaEventRepository.onRowColoring(this.schemaId), this.rowColoringChanged);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
StructureRowColoringGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[rowColoring]'
            },] }
];
/** @nocollapse */
StructureRowColoringGate.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: SchemaCommandInvoker },
    { type: SchemaEventRepository }
];
StructureRowColoringGate.propDecorators = {
    rowColoring: [{ type: Input }],
    rowColoringChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureRowColoringGate.prototype.rowColoring;
    /** @type {?} */
    StructureRowColoringGate.prototype.rowColoringChanged;
    /**
     * @type {?}
     * @private
     */
    StructureRowColoringGate.prototype.schemaId;
    /**
     * @type {?}
     * @private
     */
    StructureRowColoringGate.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureRowColoringGate.prototype.schemaEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jb2xvcmluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcm93L2NvbG9yaW5nL3N0cnVjdHVyZS1yb3ctY29sb3JpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUUxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQU1wRyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsSUFBSTs7Ozs7O0lBUWpELFlBQTZCLFFBQStCLEVBQ3hDLG9CQUEwQyxFQUMxQyxxQkFBNEM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIb0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBSmhFLHVCQUFrQixHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXpFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTRDO1FBRXZELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRTtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUN2QixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2FBQ3RDOzs7O1lBTFEscUJBQXFCO1lBRnJCLG9CQUFvQjtZQUNwQixxQkFBcUI7OzswQkFTNUIsS0FBSztpQ0FHTCxNQUFNOzs7O0lBSFAsK0NBQ3lCOztJQUV6QixzREFDeUU7Ozs7O0lBRTdELDRDQUFnRDs7Ozs7SUFDekQsd0RBQTJEOzs7OztJQUMzRCx5REFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd0NvbG9yaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93Q29sb3JpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZztcblxuXHRAT3V0cHV0KClcblx0cm93Q29sb3JpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hUm93Q29sb3Jpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93Q29sb3JpbmcnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nLCB0aGlzLnNjaGVtYUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFJZCksXG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZFxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG59XG4iXX0=