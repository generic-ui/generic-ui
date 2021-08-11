/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { StructureSummariesConfigService } from '../../panel/summaries/structure.summaries-config.service';
var StructureSummariesGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesGate, _super);
    function StructureSummariesGate(structureSummariesConfigService) {
        var _this = _super.call(this) || this;
        _this.structureSummariesConfigService = structureSummariesConfigService;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureSummariesGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('summaries', changes)) {
            this.structureSummariesConfigService.set(this.summaries);
        }
    };
    StructureSummariesGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[summaries]'
                },] }
    ];
    /** @nocollapse */
    StructureSummariesGate.ctorParameters = function () { return [
        { type: StructureSummariesConfigService }
    ]; };
    StructureSummariesGate.propDecorators = {
        summaries: [{ type: Input }]
    };
    return StructureSummariesGate;
}(Gate));
export { StructureSummariesGate };
if (false) {
    /** @type {?} */
    StructureSummariesGate.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.structureSummariesConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUczRztJQUc0QyxrREFBSTtJQUsvQyxnQ0FBNkIsK0JBQWdFO1FBQTdGLFlBQ0MsaUJBQU8sU0FDUDtRQUY0QixxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDOztJQUU3RixDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxPQUEwQztRQUVyRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pEO0lBRUYsQ0FBQzs7Z0JBbEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO2lCQUNwQzs7OztnQkFMUSwrQkFBK0I7Ozs0QkFRdEMsS0FBSzs7SUFlUCw2QkFBQztDQUFBLEFBcEJELENBRzRDLElBQUksR0FpQi9DO1NBakJZLHNCQUFzQjs7O0lBRWxDLDJDQUMyQjs7Ozs7SUFFZixpRUFBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvYXBpL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3N1bW1hcmllc10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IFN1bW1hcmllc0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVN1bW1hcmllc0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3N1bW1hcmllcycsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=