import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "./structure.info-panel-config.service";
export class StructureInfoPanelGate extends Gate {
    structureInfoPanelConfigService;
    infoPanel;
    constructor(structureInfoPanelConfigService) {
        super();
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
    }
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureInfoPanelGate, deps: [{ token: i1.StructureInfoPanelConfigService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureInfoPanelGate, selector: "gui-structure[infoPanel]", inputs: { infoPanel: "infoPanel" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureInfoPanelGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[infoPanel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureInfoPanelConfigService }]; }, propDecorators: { infoPanel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc3RydWN0dXJlL2dhdGUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUtaW5mby1wYW5lbC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7O0FBUTlFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJO0lBS2hCO0lBRi9CLFNBQVMsQ0FBNEI7SUFFckMsWUFBK0IsK0JBQWdFO1FBQzlGLEtBQUssRUFBRSxDQUFDO1FBRHNCLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFFL0YsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUEwQztRQUVyRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUN2QixDQUFDO2FBQ0Y7WUFFRCxJQUFJLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RDtJQUVGLENBQUM7d0dBckJXLHNCQUFzQjs0RkFBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3BDO3NIQUlBLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbaW5mb1BhbmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGluZm9QYW5lbDogYm9vbGVhbiB8IEluZm9QYW5lbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlSW5mb1BhbmVsR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaW5mb1BhbmVsJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5pbmZvUGFuZWwgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbCA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmluZm9QYW5lbFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuaW5mb1BhbmVsKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=