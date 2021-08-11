/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ColumnMenuConfig } from '../../../../core/api/column-menu-config';
import { StructureColumnMenuConfigArchive } from '../../../header/menu/config/structure.column-menu-config.archive';
import { Gate } from '../../../../../../common/cdk/component/gate';
var StructureColumnMenuGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnMenuGate, _super);
    function StructureColumnMenuGate(structureColumnMenuConfigArchive) {
        var _this = _super.call(this) || this;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureColumnMenuGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('columnMenu', changes)) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
    };
    StructureColumnMenuGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[columnMenu]'
                },] }
    ];
    /** @nocollapse */
    StructureColumnMenuGate.ctorParameters = function () { return [
        { type: StructureColumnMenuConfigArchive }
    ]; };
    StructureColumnMenuGate.propDecorators = {
        columnMenu: [{ type: Input }]
    };
    return StructureColumnMenuGate;
}(Gate));
export { StructureColumnMenuGate };
if (false) {
    /** @type {?} */
    StructureColumnMenuGate.prototype.columnMenu;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuGate.prototype.structureColumnMenuConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1tZW51LmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9jb2x1bW4vbWVudS9zdHJ1Y3R1cmUtY29sdW1uLW1lbnUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUduRTtJQUc2QyxtREFBSTtJQUtoRCxpQ0FBNkIsZ0NBQWtFO1FBQS9GLFlBQ0MsaUJBQU8sU0FDUDtRQUY0QixzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDOztJQUUvRixDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUEyQztRQUV0RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQzs7Z0JBakJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO2lCQUNyQzs7OztnQkFOUSxnQ0FBZ0M7Ozs2QkFTdkMsS0FBSzs7SUFjUCw4QkFBQztDQUFBLEFBbkJELENBRzZDLElBQUksR0FnQmhEO1NBaEJZLHVCQUF1Qjs7O0lBRW5DLDZDQUM2Qjs7Ozs7SUFFakIsbUVBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2NvbHVtbk1lbnVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51R2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUNvbHVtbk1lbnVHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdjb2x1bW5NZW51JywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUubmV4dENvbmZpZyh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=