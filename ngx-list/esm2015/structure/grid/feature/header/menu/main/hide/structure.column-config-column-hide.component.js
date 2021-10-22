/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
export class StructureColumnConfigColumnHideComponent extends PureComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.columnHidden = new EventEmitter();
    }
    /**
     * @return {?}
     */
    hideColumn() {
        this.columnHidden.emit();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-column-config-column-hide';
    }
}
StructureColumnConfigColumnHideComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-config-column-hide]',
                template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnHideComponent.ctorParameters = () => [
    { type: ElementRef }
];
StructureColumnConfigColumnHideComponent.propDecorators = {
    column: [{ type: Input }],
    columnHidden: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.columnHidden;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ2xJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQVN6RixNQUFNLE9BQU8sd0NBQXlDLFNBQVEsYUFBYTs7OztJQVExRSxZQUFZLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUhkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUl4QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUNBQXlDLENBQUM7SUFDbEQsQ0FBQzs7O1lBeEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOENBQThDO2dCQUN4RCwySUFBbUU7Z0JBQ25FLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVg0QyxVQUFVOzs7cUJBY3JELEtBQUs7MkJBR0wsTUFBTTs7OztJQUhQLDBEQUNnQzs7SUFFaEMsZ0VBQ3dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbkhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdGhpZGVDb2x1bW4oKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5IaWRkZW4uZW1pdCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlJztcblx0fVxuXG59XG4iXX0=