/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/feature-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/feature-api/composition.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9tb3ZlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDL0gsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFckY7SUF1QkMsa0RBQW9CLHlCQUF1RCxFQUNoRSw0QkFBMEQ7UUFEakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUE4QjtRQUNoRSxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsMkRBQVE7Ozs7SUFBUixVQUFTLE1BQStCO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCw0REFBUzs7OztJQUFULFVBQVUsTUFBK0I7UUFDeEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFuQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSxvaEJBY1Q7aUJBQ0Q7Ozs7Z0JBcEJRLDRCQUE0QjtnQkFDNUIsNEJBQTRCOzs7eUJBc0JuQyxLQUFLOztJQWlCUCwrQ0FBQztDQUFBLEFBckNELElBcUNDO1NBbkJZLHdDQUF3Qzs7O0lBRXBELDBEQUNnQzs7Ozs7SUFFcEIsNkVBQStEOzs7OztJQUN4RSxnRkFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLW1vdmUnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtY29sdW1uLW1vdmVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtY29sdW1uLW1vdmUtaXRlbSBsZWZ0XCJcblx0XHRcdFx0IChjbGljayk9XCJtb3ZlTGVmdChjb2x1bW4pXCI+XG5cdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24gW3JvdGF0ZURlZ109XCItOTBcIj48L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj5cblx0XHRcdFx0TW92ZSBMZWZ0XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIHJpZ2h0XCJcblx0XHRcdFx0IChjbGljayk9XCJtb3ZlUmlnaHQoY29sdW1uKVwiPlxuXHRcdFx0XHRNb3ZlIFJpZ2h0XG5cdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVMZWZ0KGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5tb3ZlUmlnaHQoY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG59XG4iXX0=