/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
var StructureColumnConfigColumnHideComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigColumnHideComponent, _super);
    function StructureColumnConfigColumnHideComponent(elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.columnHidden = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigColumnHideComponent.prototype.hideColumn = /**
     * @return {?}
     */
    function () {
        this.columnHidden.emit();
    };
    /**
     * @protected
     * @return {?}
     */
    StructureColumnConfigColumnHideComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-column-config-column-hide';
    };
    StructureColumnConfigColumnHideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-column-config-column-hide]',
                    template: "<div (click)=\"hideColumn()\"\n\t class=\"gui-header-menu-item\">\n\t{{'headerMenuMainTabHideColumn' | guiTranslate}}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnHideComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StructureColumnConfigColumnHideComponent.propDecorators = {
        column: [{ type: Input }],
        columnHidden: [{ type: Output }]
    };
    return StructureColumnConfigColumnHideComponent;
}(PureComponent));
export { StructureColumnConfigColumnHideComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.columnHidden;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHekY7SUFNOEQsb0VBQWE7SUFRMUUsa0RBQVksS0FBaUI7UUFBN0IsWUFDQyxrQkFBTSxLQUFLLENBQUMsU0FDWjtRQUpELGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7SUFJeEMsQ0FBQzs7OztJQUVELDZEQUFVOzs7SUFBVjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFUyxrRUFBZTs7OztJQUF6QjtRQUNDLE9BQU8seUNBQXlDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBeEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsOENBQThDO29CQUN4RCwySUFBbUU7b0JBQ25FLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBWDRDLFVBQVU7Ozt5QkFjckQsS0FBSzsrQkFHTCxNQUFNOztJQWVSLCtDQUFDO0NBQUEsQUExQkQsQ0FNOEQsYUFBYSxHQW9CMUU7U0FwQlksd0NBQXdDOzs7SUFFcEQsMERBQ2dDOztJQUVoQyxnRUFDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uSGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXHR9XG5cblx0aGlkZUNvbHVtbigpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbkhpZGRlbi5lbWl0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLWhpZGUnO1xuXHR9XG5cbn1cbiJdfQ==