/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
var StructureColumnConfigColumnMoveComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigColumnMoveComponent, _super);
    function StructureColumnConfigColumnMoveComponent(elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.movedLeft = new EventEmitter();
        _this.movedRight = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        this.movedLeft.emit();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        this.movedRight.emit();
    };
    /**
     * @protected
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-column-config-column-move';
    };
    StructureColumnConfigColumnMoveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-column-config-column-move][column]',
                    template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [rotateDeg]=\"-90\" gui-structure-column-menu-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div gui-structure-column-menu-arrow-icon></div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnMoveComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StructureColumnConfigColumnMoveComponent.propDecorators = {
        column: [{ type: Input }],
        movedLeft: [{ type: Output }],
        movedRight: [{ type: Output }]
    };
    return StructureColumnConfigColumnMoveComponent;
}(PureComponent));
export { StructureColumnConfigColumnMoveComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.movedLeft;
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.movedRight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFekY7SUFNOEQsb0VBQWE7SUFXMUUsa0RBQVksS0FBaUI7UUFBN0IsWUFDQyxrQkFBTSxLQUFLLENBQUMsU0FDWjtRQVBELGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3JDLGdCQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7SUFJdEMsQ0FBQzs7OztJQUVELDJEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDREQUFTOzs7SUFBVDtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFUyxrRUFBZTs7OztJQUF6QjtRQUNDLE9BQU8seUNBQXlDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBL0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0RBQXNEO29CQUNoRSw4ZUFBbUU7b0JBQ25FLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBVjRDLFVBQVU7Ozt5QkFhckQsS0FBSzs0QkFHTCxNQUFNOzZCQUdOLE1BQU07O0lBbUJSLCtDQUFDO0NBQUEsQUFqQ0QsQ0FNOEQsYUFBYSxHQTJCMUU7U0EzQlksd0NBQXdDOzs7SUFFcEQsMERBQ2dDOztJQUVoQyw2REFDcUM7O0lBRXJDLDhEQUNzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZV1bY29sdW1uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdEBPdXRwdXQoKVxuXHRtb3ZlZExlZnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0QE91dHB1dCgpXG5cdG1vdmVkUmlnaHQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRtb3ZlTGVmdCgpOiB2b2lkIHtcblx0XHR0aGlzLm1vdmVkTGVmdC5lbWl0KCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5tb3ZlZFJpZ2h0LmVtaXQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZSc7XG5cdH1cblxufVxuIl19