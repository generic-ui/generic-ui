/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/domain/read/definition/cell-template-with-context';
import { CompositionCommandService } from '../../../../../../composition/ui-api/composition.command-service';
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
        this.compositionCommandService.disableColumn(column.getColumnId());
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
        { type: CompositionCommandService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzFILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR3JGO0lBZUMsa0RBQW9CLHlCQUFvRCxFQUM3RCw0QkFBMEQ7UUFEakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUM3RCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsNkRBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBQ3pDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7O2dCQXZCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHlDQUF5QztvQkFDbkQsUUFBUSxFQUFFLHdIQU1UO2lCQUNEOzs7O2dCQWJRLHlCQUF5QjtnQkFDekIsNEJBQTRCOzs7eUJBZW5DLEtBQUs7O0lBYVAsK0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQWZZLHdDQUF3Qzs7O0lBRXBELDBEQUNnQzs7Ozs7SUFFcEIsNkVBQTREOzs7OztJQUNyRSxnRkFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiXG5cdFx0XHQgKGNsaWNrKT1cImhpZGVDb2x1bW4oY29sdW1uKVwiPlxuXHRcdFx0SGlkZSBDb2x1bW5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHRoaWRlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uSWQoKSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG59XG4iXX0=