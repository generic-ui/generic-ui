/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureSummariesConfigService } from '../structure.summaries-config.service';
export class StructureSummariesGate extends Gate {
    /**
     * @param {?} structureSummariesConfigService
     */
    constructor(structureSummariesConfigService) {
        super();
        this.structureSummariesConfigService = structureSummariesConfigService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('summaries', changes)) {
            this.structureSummariesConfigService.set(this.summaries);
        }
    }
}
StructureSummariesGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[summaries]'
            },] }
];
/** @nocollapse */
StructureSummariesGate.ctorParameters = () => [
    { type: StructureSummariesConfigService }
];
StructureSummariesGate.propDecorators = {
    summaries: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureSummariesGate.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.structureSummariesConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU14RixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSTs7OztJQUsvQyxZQUE2QiwrQkFBZ0U7UUFDNUYsS0FBSyxFQUFFLENBQUM7UUFEb0Isb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUU3RixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUEwQztRQUVyRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pEO0lBRUYsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2FBQ3BDOzs7O1lBTFEsK0JBQStCOzs7d0JBUXRDLEtBQUs7Ozs7SUFBTiwyQ0FDMkI7Ozs7O0lBRWYsaUVBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc3VtbWFyaWVzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZTogU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlU3VtbWFyaWVzR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc3VtbWFyaWVzJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZS5zZXQodGhpcy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==