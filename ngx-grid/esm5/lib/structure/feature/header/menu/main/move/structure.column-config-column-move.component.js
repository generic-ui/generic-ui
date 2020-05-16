/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/domain-api/composition.command-dispatcher';
import { StructureColumnConfigService } from '../../structure.column-config.service';
var StructureColumnConfigColumnMoveComponent = /** @class */ (function () {
    function StructureColumnConfigColumnMoveComponent(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.moveLeft = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.compositionCommandService.moveLeft(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.moveRight = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.compositionCommandService.moveRight(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    };
    StructureColumnConfigColumnMoveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-column-move',
                    template: "\n\t\t<div class=\"gui-header-menu-column-move\">\n\t\t\t<div class=\"gui-header-menu-column-move-item left\"\n\t\t\t\t (click)=\"moveLeft(column)\">\n\t\t\t\t<gui-structure-column-menu-arrow-icon [rotateDeg]=\"-90\"></gui-structure-column-menu-arrow-icon>\n\t\t\t\tMove Left\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-header-menu-column-move-item right\"\n\t\t\t\t (click)=\"moveRight(column)\">\n\t\t\t\tMove Right\n\t\t\t\t<gui-structure-column-menu-arrow-icon></gui-structure-column-menu-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnMoveComponent.ctorParameters = function () { return [
        { type: CompositionCommandDispatcher },
        { type: StructureColumnConfigService }
    ]; };
    StructureColumnConfigColumnMoveComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureColumnConfigColumnMoveComponent;
}());
export { StructureColumnConfigColumnMoveComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnMoveComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnMoveComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9tb3ZlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFckY7SUF1QkMsa0RBQW9CLHlCQUF1RCxFQUNoRSw0QkFBMEQ7UUFEakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUE4QjtRQUNoRSxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsMkRBQVE7Ozs7SUFBUixVQUFTLE1BQStCO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCw0REFBUzs7OztJQUFULFVBQVUsTUFBK0I7UUFDeEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFuQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSxvaEJBY1Q7aUJBQ0Q7Ozs7Z0JBcEJRLDRCQUE0QjtnQkFDNUIsNEJBQTRCOzs7eUJBc0JuQyxLQUFLOztJQWlCUCwrQ0FBQztDQUFBLEFBckNELElBcUNDO1NBbkJZLHdDQUF3Qzs7O0lBRXBELDBEQUNnQzs7Ozs7SUFFcEIsNkVBQStEOzs7OztJQUN4RSxnRkFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlLWl0ZW0gbGVmdFwiXG5cdFx0XHRcdCAoY2xpY2spPVwibW92ZUxlZnQoY29sdW1uKVwiPlxuXHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uIFtyb3RhdGVEZWddPVwiLTkwXCI+PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHRcdE1vdmUgTGVmdFxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtY29sdW1uLW1vdmUtaXRlbSByaWdodFwiXG5cdFx0XHRcdCAoY2xpY2spPVwibW92ZVJpZ2h0KGNvbHVtbilcIj5cblx0XHRcdFx0TW92ZSBSaWdodFxuXHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2U6IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSkge1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5tb3ZlTGVmdChjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UubW92ZVJpZ2h0KGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxufVxuIl19