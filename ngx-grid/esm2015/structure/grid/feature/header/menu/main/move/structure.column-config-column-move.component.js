/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
export class StructureColumnConfigColumnMoveComponent extends PureComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.movedLeft = new EventEmitter();
        this.movedRight = new EventEmitter();
    }
    /**
     * @return {?}
     */
    moveLeft() {
        this.movedLeft.emit();
    }
    /**
     * @return {?}
     */
    moveRight() {
        this.movedRight.emit();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-column-config-column-move';
    }
}
StructureColumnConfigColumnMoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-config-column-move][column]',
                template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [rotateDeg]=\"-90\" gui-structure-column-menu-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div gui-structure-column-menu-arrow-icon></div>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnMoveComponent.ctorParameters = () => [
    { type: ElementRef }
];
StructureColumnConfigColumnMoveComponent.propDecorators = {
    column: [{ type: Input }],
    movedLeft: [{ type: Output }],
    movedRight: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.movedLeft;
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.movedRight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ2xJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQVF6RixNQUFNLE9BQU8sd0NBQXlDLFNBQVEsYUFBYTs7OztJQVcxRSxZQUFZLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU5kLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBSXRDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUNBQXlDLENBQUM7SUFDbEQsQ0FBQzs7O1lBL0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0RBQXNEO2dCQUNoRSw4ZUFBbUU7Z0JBQ25FLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVY0QyxVQUFVOzs7cUJBYXJELEtBQUs7d0JBR0wsTUFBTTt5QkFHTixNQUFNOzs7O0lBTlAsMERBQ2dDOztJQUVoQyw2REFDcUM7O0lBRXJDLDhEQUNzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZV1bY29sdW1uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdEBPdXRwdXQoKVxuXHRtb3ZlZExlZnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0QE91dHB1dCgpXG5cdG1vdmVkUmlnaHQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRtb3ZlTGVmdCgpOiB2b2lkIHtcblx0XHR0aGlzLm1vdmVkTGVmdC5lbWl0KCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5tb3ZlZFJpZ2h0LmVtaXQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZSc7XG5cdH1cblxufVxuIl19