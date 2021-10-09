/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureSummariesConfigService } from '../structure.summaries-config.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHeEY7SUFHNEMsa0RBQUk7SUFLL0MsZ0NBQTZCLCtCQUFnRTtRQUE3RixZQUNDLGlCQUFPLFNBQ1A7UUFGNEIscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQzs7SUFFN0YsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBMEM7UUFFckQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RDtJQUVGLENBQUM7O2dCQWxCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBTFEsK0JBQStCOzs7NEJBUXRDLEtBQUs7O0lBZVAsNkJBQUM7Q0FBQSxBQXBCRCxDQUc0QyxJQUFJLEdBaUIvQztTQWpCWSxzQkFBc0I7OztJQUVsQywyQ0FDMkI7Ozs7O0lBRWYsaUVBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc3VtbWFyaWVzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZTogU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlU3VtbWFyaWVzR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc3VtbWFyaWVzJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZS5zZXQodGhpcy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==