/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../core/domain/structure.id';
import { Gate } from '../../../../../common/cdk/component/gate';
import { FieldCommandInvoker } from '../../../../field/core/api/field.command-invoker';
var ListViewFieldGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewFieldGate, _super);
    function ListViewFieldGate(structureId, fieldCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.fieldCommandDispatcher = fieldCommandDispatcher;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ListViewFieldGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('fields', changes)) {
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
    ListViewFieldGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewFieldGate.prototype.fieldCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJdkY7SUFHdUMsNkNBQUk7SUFLMUMsMkJBQTZCLFdBQXdCLEVBQ2pDLHNCQUEyQztRQUQvRCxZQUVDLGlCQUFPLFNBQ1A7UUFINEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFxQjs7SUFFL0QsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBcUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUV0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0YsQ0FBQzs7Z0JBbkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO2lCQUNqQzs7OztnQkFUUSxXQUFXO2dCQUdYLG1CQUFtQjs7O3lCQVMxQixLQUFLOztJQWdCUCx3QkFBQztDQUFBLEFBckJELENBR3VDLElBQUksR0FrQjFDO1NBbEJZLGlCQUFpQjs7O0lBRTdCLG1DQUMyQjs7Ozs7SUFFZix3Q0FBeUM7Ozs7O0lBQ2xELG1EQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W2ZpZWxkc10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RmllbGRHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0ZmllbGRzOiBBcnJheTxGaWVsZENvbmZpZz47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb21tYW5kRGlzcGF0Y2hlcjogRmllbGRDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8TGlzdFZpZXdGaWVsZEdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2ZpZWxkcycsIGNoYW5nZXMpKSB7XG5cblx0XHRcdHRoaXMuZmllbGRDb21tYW5kRGlzcGF0Y2hlci5pbml0RmllbGRzKHRoaXMuZmllbGRzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxufVxuIl19