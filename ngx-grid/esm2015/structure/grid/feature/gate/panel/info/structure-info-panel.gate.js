/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureInfoPanelConfigService } from '../../../../core/api/panel/info/structure.info-panel-config.service';
export class StructureInfoPanelGate extends Gate {
    /**
     * @param {?} structureInfoPanelConfigService
     */
    constructor(structureInfoPanelConfigService) {
        super();
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('infoPanel', changes)) {
            if (typeof this.infoPanel === 'boolean') {
                this.infoPanel = {
                    enabled: this.infoPanel
                };
            }
            this.structureInfoPanelConfigService.set(this.infoPanel);
        }
    }
}
StructureInfoPanelGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[infoPanel]'
            },] }
];
/** @nocollapse */
StructureInfoPanelGate.ctorParameters = () => [
    { type: StructureInfoPanelConfigService }
];
StructureInfoPanelGate.propDecorators = {
    infoPanel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureInfoPanelGate.prototype.infoPanel;
    /**
     * @type {?}
     * @protected
     */
    StructureInfoPanelGate.prototype.structureInfoPanelConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3BhbmVsL2luZm8vc3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBT3RILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJOzs7O0lBSy9DLFlBQStCLCtCQUFnRTtRQUM5RixLQUFLLEVBQUUsQ0FBQztRQURzQixvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBRS9GLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHO29CQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3ZCLENBQUM7YUFDRjtZQUVELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pEO0lBRUYsQ0FBQzs7O1lBeEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2FBQ3BDOzs7O1lBTlEsK0JBQStCOzs7d0JBU3RDLEtBQUs7Ozs7SUFBTiwyQ0FDcUM7Ozs7O0lBRXpCLGlFQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbaW5mb1BhbmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGluZm9QYW5lbDogYm9vbGVhbiB8IEluZm9QYW5lbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlSW5mb1BhbmVsR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaW5mb1BhbmVsJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5pbmZvUGFuZWwgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbCA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmluZm9QYW5lbFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuaW5mb1BhbmVsKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=