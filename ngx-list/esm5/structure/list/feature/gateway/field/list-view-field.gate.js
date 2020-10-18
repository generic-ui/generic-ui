/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldCommandInvoker } from '../../../../field/core/api/field.command-invoker';
var ListViewFieldGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewFieldGate, _super);
    function ListViewFieldGate(changeDetectorRef, structureId, fieldCommandDispatcher) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
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
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: FieldCommandInvoker }
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
    ListViewFieldGate.prototype.changeDetectorRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3ZGO0lBR3VDLDZDQUFJO0lBSzFDLDJCQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsc0JBQTJDO1FBRi9ELFlBR0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFKNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXFCOztJQUUvRCxDQUFDOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBRTVDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDOztnQkFwQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2pDOzs7O2dCQVRRLGlCQUFpQjtnQkFDakIsV0FBVztnQkFHWCxtQkFBbUI7Ozt5QkFRMUIsS0FBSzs7SUFpQlAsd0JBQUM7Q0FBQSxBQXRCRCxDQUd1QyxJQUFJLEdBbUIxQztTQW5CWSxpQkFBaUI7OztJQUU3QixtQ0FDMkI7Ozs7O0lBRWYsOENBQXFEOzs7OztJQUM5RCx3Q0FBeUM7Ozs7O0lBQ3pDLG1EQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tmaWVsZHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZpZWxkR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbW1hbmREaXNwYXRjaGVyOiBGaWVsZENvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdmaWVsZHMnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXG5cdFx0XHR0aGlzLmZpZWxkQ29tbWFuZERpc3BhdGNoZXIuaW5pdEZpZWxkcyh0aGlzLmZpZWxkcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==