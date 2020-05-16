/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/domain-api/composition.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHckY7SUFlQyxrREFBb0IseUJBQXVELEVBQ2hFLDRCQUEwRDtRQURqRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBQ2hFLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDckUsQ0FBQzs7Ozs7SUFFRCw2REFBVTs7OztJQUFWLFVBQVcsTUFBK0I7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkF2QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSx3SEFNVDtpQkFDRDs7OztnQkFiUSw0QkFBNEI7Z0JBQzVCLDRCQUE0Qjs7O3lCQWVuQyxLQUFLOztJQWFQLCtDQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FmWSx3Q0FBd0M7OztJQUVwRCwwREFDZ0M7Ozs7O0lBRXBCLDZFQUErRDs7Ozs7SUFDeEUsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiXG5cdFx0XHQgKGNsaWNrKT1cImhpZGVDb2x1bW4oY29sdW1uKVwiPlxuXHRcdFx0SGlkZSBDb2x1bW5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHRoaWRlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxufVxuIl19