/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/feature-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/feature-api/composition.command-dispatcher';
import { StructureColumnConfigService } from '../../structure.column-config.service';
var StructureColumnConfigColumnHideComponent = /** @class */ (function () {
    function StructureColumnConfigColumnHideComponent(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigColumnHideComponent.prototype.hideColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.compositionCommandService.disableColumn(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    };
    StructureColumnConfigColumnHideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-column-hide',
                    template: "\n\n\t\t<div class=\"gui-header-menu-item\"\n\t\t\t (click)=\"hideColumn(column)\">\n\t\t\tHide Column\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnHideComponent.ctorParameters = function () { return [
        { type: CompositionCommandDispatcher },
        { type: StructureColumnConfigService }
    ]; };
    StructureColumnConfigColumnHideComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureColumnConfigColumnHideComponent;
}());
export { StructureColumnConfigColumnHideComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDL0gsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHckY7SUFlQyxrREFBb0IseUJBQXVELEVBQ2hFLDRCQUEwRDtRQURqRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBQ2hFLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDckUsQ0FBQzs7Ozs7SUFFRCw2REFBVTs7OztJQUFWLFVBQVcsTUFBK0I7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkF2QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSx3SEFNVDtpQkFDRDs7OztnQkFiUSw0QkFBNEI7Z0JBQzVCLDRCQUE0Qjs7O3lCQWVuQyxLQUFLOztJQWFQLCtDQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FmWSx3Q0FBd0M7OztJQUVwRCwwREFDZ0M7Ozs7O0lBRXBCLDZFQUErRDs7Ozs7SUFDeEUsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGUnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCJcblx0XHRcdCAoY2xpY2spPVwiaGlkZUNvbHVtbihjb2x1bW4pXCI+XG5cdFx0XHRIaWRlIENvbHVtblxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbkhpZGVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0fVxuXG5cdGhpZGVDb2x1bW4oY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5kaXNhYmxlQ29sdW1uKGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG59XG4iXX0=