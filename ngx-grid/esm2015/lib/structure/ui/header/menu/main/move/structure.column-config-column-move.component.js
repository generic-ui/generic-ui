/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/domain/read/definition/cell-template-with-context';
import { CompositionCommandService } from '../../../../../../composition/ui-api/composition.command-service';
import { StructureColumnConfigService } from '../../structure.column-config.service';
export class StructureColumnConfigColumnMoveComponent {
    /**
     * @param {?} compositionCommandService
     * @param {?} structureColumnConfigService
     */
    constructor(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveLeft(column) {
        this.compositionCommandService.moveLeft(column.getColumnId());
        this.structureColumnConfigService.close();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveRight(column) {
        this.compositionCommandService.moveRight(column.getColumnId());
        this.structureColumnConfigService.close();
    }
}
StructureColumnConfigColumnMoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-column-move',
                template: `
		<div class="gui-header-menu-column-move">
			<div class="gui-header-menu-column-move-left"
				 (click)="moveLeft(column)">
				Move Left
			</div>

			<div class="gui-header-menu-column-move-right"
				 (click)="moveRight(column)">
				Move Right
			</div>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnMoveComponent.ctorParameters = () => [
    { type: CompositionCommandService },
    { type: StructureColumnConfigService }
];
StructureColumnConfigColumnMoveComponent.propDecorators = {
    column: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzFILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBa0JyRixNQUFNLE9BQU8sd0NBQXdDOzs7OztJQUtwRCxZQUFvQix5QkFBb0QsRUFDN0QsNEJBQTBEO1FBRGpELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUNyRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUErQjtRQUN2QyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN4QyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0VBWVQ7YUFDRDs7OztZQWxCUSx5QkFBeUI7WUFDekIsNEJBQTRCOzs7cUJBb0JuQyxLQUFLOzs7O0lBQU4sMERBQ2dDOzs7OztJQUVwQiw2RUFBNEQ7Ozs7O0lBQ3JFLGdGQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlLWxlZnRcIlxuXHRcdFx0XHQgKGNsaWNrKT1cIm1vdmVMZWZ0KGNvbHVtbilcIj5cblx0XHRcdFx0TW92ZSBMZWZ0XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1yaWdodFwiXG5cdFx0XHRcdCAoY2xpY2spPVwibW92ZVJpZ2h0KGNvbHVtbilcIj5cblx0XHRcdFx0TW92ZSBSaWdodFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2U6IENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSkge1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5tb3ZlTGVmdChjb2x1bW4uZ2V0Q29sdW1uSWQoKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5tb3ZlUmlnaHQoY29sdW1uLmdldENvbHVtbklkKCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==