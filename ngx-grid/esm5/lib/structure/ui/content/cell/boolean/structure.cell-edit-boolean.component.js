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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1ib29sZWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTlGO0lBYXVELDZEQUFjO0lBbUJwRSwyQ0FBNkIsb0JBQTZDO1FBQTFFLFlBQ0MsaUJBQU8sU0FDUDtRQUY0QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCOztJQUUxRSxDQUFDOzs7OztJQUVELHVEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQzs7OztJQUVELG9EQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVPLHlEQUFhOzs7O0lBQXJCOztZQUNPLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTs7WUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXOztZQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1FBRWxDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7Ozs7SUFFTywyREFBZTs7OztJQUF2QjtRQUFBLGlCQTRCQztRQTNCQSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQWlCLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RDLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDN0IsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPO2FBQ1YsRUFBRSxFQUFFO2FBQ0osSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFxQjtZQUVoQyxRQUFRLE1BQU0sRUFBRTtnQkFDZixLQUFLLGFBQWEsQ0FBQyxNQUFNO29CQUN4QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVA7b0JBQ0MsTUFBTTthQUNQO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2RkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwrQ0FBK0M7b0JBQ3pELFFBQVEsRUFBRSw0TEFTVDtpQkFDRDs7OztnQkFkUSx1QkFBdUI7OzttQ0FpQjlCLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUczQyxLQUFLO3VCQUdMLEtBQUs7O0lBb0VQLHdDQUFDO0NBQUEsQUF6RkQsQ0FhdUQsY0FBYyxHQTRFcEU7U0E1RVksaUNBQWlDOzs7SUFFN0MsNkRBQzZCOztJQUU3QixtREFDbUI7O0lBRW5CLGlEQUMrQjs7SUFFL0Isd0RBQWlCOztJQUVqQiwwREFBd0M7O0lBRXhDLG9EQUFrQzs7SUFFbEMsd0RBQWlCOzs7OztJQUVMLGlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQtYm9vbGVhbltlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuICNjZWxsQ29udGFpbmVyID5cblx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZWRpdFRlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogZWRpdENvbnRleHRcIj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvc3Bhbj5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCdjZWxsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0Y2VsbENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmVudGl0eSAhPT0gbnVsbCAmJiBjaGFuZ2VzLmVudGl0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmluaXRFZGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNlbGwgIT09IG51bGwgJiYgY2hhbmdlcy5jZWxsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdEVkaXRDb250ZXh0KCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0RWRpdENvbnRleHQoKTtcblx0fVxuXG5cdHByaXZhdGUgc3VibWl0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0obmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRFZGl0Q29udGV4dCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdHRoaXMuc3RhdHVzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+KCk7XG5cblx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyQsXG5cdFx0XHR2YWx1ZUNoYW5nZXM6IHRoaXMudmFsdWVDaGFuZ2VzJCxcblx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLFxuXHRcdFx0Zm9jdXM6IGZhbHNlLFxuXHRcdFx0cGFyZW50OiB0aGlzLmNlbGxDb250YWluZXJSZWZcblx0XHR9O1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==