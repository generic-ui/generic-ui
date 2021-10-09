/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../../../../composition/core/api/composition.command-invoker';
import { StructureColumnConfigService } from '../../structure.column-config.service';
import { CompositionId } from '../../../../../../../composition/core/domain/composition.id';
var StructureColumnConfigColumnMoveComponent = /** @class */ (function () {
    function StructureColumnConfigColumnMoveComponent(compositionId, compositionCommandService, structureColumnConfigService) {
        this.compositionId = compositionId;
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
        this.compositionCommandService.moveLeft(column.getColumnDefinitionId(), this.compositionId);
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
        this.compositionCommandService.moveRight(column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    };
    StructureColumnConfigColumnMoveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-column-move',
                    template: "\n\t\t<div class=\"gui-header-menu-column-move\">\n\t\t\t<div class=\"gui-header-menu-column-move-item left\"\n\t\t\t\t (click)=\"moveLeft(column)\">\n\t\t\t\t<gui-structure-column-menu-arrow-icon [rotateDeg]=\"-90\"></gui-structure-column-menu-arrow-icon>\n\t\t\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-header-menu-column-move-item right\"\n\t\t\t\t (click)=\"moveRight(column)\">\n\t\t\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t\t\t<gui-structure-column-menu-arrow-icon></gui-structure-column-menu-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnMoveComponent.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionCommandInvoker },
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
    StructureColumnConfigColumnMoveComponent.prototype.compositionId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ2xJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUU1RjtJQXVCQyxrREFBNkIsYUFBNEIsRUFDckMseUJBQW9ELEVBQ3BELDRCQUEwRDtRQUZqRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNyQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCwyREFBUTs7OztJQUFSLFVBQVMsTUFBK0I7UUFDdkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsNERBQVM7Ozs7SUFBVCxVQUFVLE1BQStCO1FBQ3hDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFwQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSw4bEJBY1Q7aUJBQ0Q7Ozs7Z0JBbkJRLGFBQWE7Z0JBRmIseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Ozt5QkF1Qm5DLEtBQUs7O0lBa0JQLCtDQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FwQlksd0NBQXdDOzs7SUFFcEQsMERBQ2dDOzs7OztJQUVwQixpRUFBNkM7Ozs7O0lBQ3RELDZFQUFxRTs7Ozs7SUFDckUsZ0ZBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIGxlZnRcIlxuXHRcdFx0XHQgKGNsaWNrKT1cIm1vdmVMZWZ0KGNvbHVtbilcIj5cblx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbiBbcm90YXRlRGVnXT1cIi05MFwiPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYk1vdmVMZWZ0JyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIHJpZ2h0XCJcblx0XHRcdFx0IChjbGljayk9XCJtb3ZlUmlnaHQoY29sdW1uKVwiPlxuXHRcdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYk1vdmVSaWdodCcgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVMZWZ0KGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVSaWdodChjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxufVxuIl19