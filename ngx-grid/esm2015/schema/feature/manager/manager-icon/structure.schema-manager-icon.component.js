import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../common/cdk/component/icon-component';
export class StructureSchemaManagerIconComponent extends IconComponent {
    constructor(elRef, cdr) {
        super(elRef, cdr);
    }
    getSelectorName() {
        return 'gui-structure-schema-manager-icon';
    }
}
StructureSchemaManagerIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-schema-manager-icon]',
                template: "<svg height=\"24\" viewBox=\"0 0 32 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<g transform=\"translate(0 -4)\">\n\t\t<path d=\"M23.337,4H32v6H23.337Z\" data-name=\"Path 303\" id=\"Path_303\"/>\n\t\t<path d=\"M11.662,4h8.662v6H11.662Z\" data-name=\"Path 304\" id=\"Path_304\"/>\n\t\t<path d=\"M0,4H8.662v6H0Z\" data-name=\"Path 305\" id=\"Path_305\"/>\n\t\t<path d=\"M23.337,22H32v6H23.337Z\" data-name=\"Path 306\" id=\"Path_306\"/>\n\t\t<path d=\"M0,22H8.662v6H0Z\" data-name=\"Path 307\" id=\"Path_307\"/>\n\t\t<path d=\"M11.662,22h8.662v6H11.662Z\" data-name=\"Path 308\" id=\"Path_308\"/>\n\t\t<path d=\"M23.337,13H32v6H23.337Z\" data-name=\"Path 309\" id=\"Path_309\"/>\n\t\t<path d=\"M11.662,13h8.662v6H11.662Z\" data-name=\"Path 310\" id=\"Path_310\"/>\n\t\t<path d=\"M0,13H8.662v6H0Z\" data-name=\"Path 311\" id=\"Path_311\"/>\n\t</g>\n</svg>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureSchemaManagerIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5hZ2VyLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL21hbmFnZXItaWNvbi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmFnZXItaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBU2hGLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxhQUFhO0lBRXJFLFlBQVksS0FBaUIsRUFDMUIsR0FBc0I7UUFDeEIsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLG1DQUFtQyxDQUFDO0lBQzVDLENBQUM7OztZQWZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCxpM0JBQTZEO2dCQUM3RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQVQrRCxVQUFVO1lBQXhDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2ljb24tY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1pY29uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmFnZXItaWNvbi5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJJY29uQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbFJlZiwgY2RyKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItaWNvbic7XG5cdH1cbn1cbiJdfQ==