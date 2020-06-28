/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldCommandDispatcher } from '../../../../field/domain-api/field.command-dispatcher';
var ListViewFieldGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewFieldGate, _super);
    function ListViewFieldGate(structureId, fieldCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.fieldCommandDispatcher = fieldCommandDispatcher;
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewFieldGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('fields', simpleChanges)) {
            this.fieldCommandDispatcher.initFields(this.fields, this.structureId);
        }
    };
    ListViewFieldGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[fields]'
                },] }
    ];
    /** @nocollapse */
    ListViewFieldGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: FieldCommandDispatcher }
    ]; };
    ListViewFieldGate.propDecorators = {
        fields: [{ type: Input }]
    };
    return ListViewFieldGate;
}(Gate));
export { ListViewFieldGate };
if (false) {
    /** @type {?} */
    ListViewFieldGate.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    ListViewFieldGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewFieldGate.prototype.fieldCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRy9GO0lBR3VDLDZDQUFJO0lBSzFDLDJCQUE2QixXQUF3QixFQUNqQyxzQkFBOEM7UUFEbEUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7O0lBRWxFLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLGFBQTRCO1FBRXZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFFNUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0RTtJQUNGLENBQUM7O2dCQW5CRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtpQkFDakM7Ozs7Z0JBUlEsV0FBVztnQkFHWCxzQkFBc0I7Ozt5QkFRN0IsS0FBSzs7SUFnQlAsd0JBQUM7Q0FBQSxBQXJCRCxDQUd1QyxJQUFJLEdBa0IxQztTQWxCWSxpQkFBaUI7OztJQUU3QixtQ0FDMkI7Ozs7O0lBRWYsd0NBQXlDOzs7OztJQUNsRCxtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbZmllbGRzXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGaWVsZEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbW1hbmREaXNwYXRjaGVyOiBGaWVsZENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnZmllbGRzJywgc2ltcGxlQ2hhbmdlcykpIHtcblxuXHRcdFx0dGhpcy5maWVsZENvbW1hbmREaXNwYXRjaGVyLmluaXRGaWVsZHModGhpcy5maWVsZHMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=