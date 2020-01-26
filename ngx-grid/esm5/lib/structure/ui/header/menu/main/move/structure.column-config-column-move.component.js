/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/domain/read/definition/cell-template-with-context';
import { CompositionCommandService } from '../../../../../../composition/ui-api/composition.command-service';
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
        this.compositionCommandService.moveLeft(column.getColumnId());
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
        this.compositionCommandService.moveRight(column.getColumnId());
        this.structureColumnConfigService.close();
    };
    StructureColumnConfigColumnMoveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-column-move',
                    template: "\n\n\t\t<div class=\"gui-header-menu-item\"\n\t\t\t (click)=\"moveLeft(column)\">\n\t\t\tMove Left\n\t\t</div>\n\n\t\t<div class=\"gui-header-menu-item\"\n\t\t\t (click)=\"moveRight(column)\">\n\t\t\tMove Right\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnMoveComponent.ctorParameters = function () { return [
        { type: CompositionCommandService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzFILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXJGO0lBb0JDLGtEQUFvQix5QkFBb0QsRUFDN0QsNEJBQTBEO1FBRGpELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUNyRSxDQUFDOzs7OztJQUVELDJEQUFROzs7O0lBQVIsVUFBUyxNQUErQjtRQUN2QyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELDREQUFTOzs7O0lBQVQsVUFBVSxNQUErQjtRQUN4QyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFoQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSxvT0FXVDtpQkFDRDs7OztnQkFqQlEseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Ozt5QkFtQm5DLEtBQUs7O0lBaUJQLCtDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FuQlksd0NBQXdDOzs7SUFFcEQsMERBQ2dDOzs7OztJQUVwQiw2RUFBNEQ7Ozs7O0lBQ3JFLGdGQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiXG5cdFx0XHQgKGNsaWNrKT1cIm1vdmVMZWZ0KGNvbHVtbilcIj5cblx0XHRcdE1vdmUgTGVmdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCJcblx0XHRcdCAoY2xpY2spPVwibW92ZVJpZ2h0KGNvbHVtbilcIj5cblx0XHRcdE1vdmUgUmlnaHRcblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVMZWZ0KGNvbHVtbi5nZXRDb2x1bW5JZCgpKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVSaWdodChjb2x1bW4uZ2V0Q29sdW1uSWQoKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxufVxuIl19