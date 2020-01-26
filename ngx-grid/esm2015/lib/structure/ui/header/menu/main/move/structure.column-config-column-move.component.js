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

		<div class="gui-header-menu-item"
			 (click)="moveLeft(column)">
			Move Left
		</div>

		<div class="gui-header-menu-item"
			 (click)="moveRight(column)">
			Move Right
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzFILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBaUJyRixNQUFNLE9BQU8sd0NBQXdDOzs7OztJQUtwRCxZQUFvQix5QkFBb0QsRUFDN0QsNEJBQTBEO1FBRGpELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUNyRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUErQjtRQUN2QyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN4QyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7RUFXVDthQUNEOzs7O1lBakJRLHlCQUF5QjtZQUN6Qiw0QkFBNEI7OztxQkFtQm5DLEtBQUs7Ozs7SUFBTiwwREFDZ0M7Ozs7O0lBRXBCLDZFQUE0RDs7Ozs7SUFDckUsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLW1vdmUnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCJcblx0XHRcdCAoY2xpY2spPVwibW92ZUxlZnQoY29sdW1uKVwiPlxuXHRcdFx0TW92ZSBMZWZ0XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIlxuXHRcdFx0IChjbGljayk9XCJtb3ZlUmlnaHQoY29sdW1uKVwiPlxuXHRcdFx0TW92ZSBSaWdodFxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UubW92ZUxlZnQoY29sdW1uLmdldENvbHVtbklkKCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UubW92ZVJpZ2h0KGNvbHVtbi5nZXRDb2x1bW5JZCgpKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG59XG4iXX0=