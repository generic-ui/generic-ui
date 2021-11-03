import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../../../common/cdk/component/icon-component';
export class StructureInfoIconComponent extends IconComponent {
    constructor(elRef, cdr) {
        super(elRef, cdr);
    }
    getSelectorName() {
        return 'gui-structure-info-icon';
    }
}
StructureInfoIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-info-icon]',
                template: "<svg data-name=\"Layer 1\" viewBox=\"0 0 10.08 10.08\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path class=\"cls-1\"\n\t\t  d=\"M401.64,307.76c0-.28.23-.45.54-.45s.55.17.55.45v0a.49.49,0,0,1-.55.46.48.48,0,0,1-.54-.46Zm.05,1.27a.49.49,0,0,1,1,0v2.54a.49.49,0,0,1-1,0Z\"\n\t\t  transform=\"translate(-397.14 -304.64)\"/>\n\t<circle class=\"cls-2\" cx=\"5.04\" cy=\"5.04\" r=\"4.54\"/>\n</svg>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureInfoIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8taWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvaW5mby9pY29uL3N0cnVjdHVyZS5pbmZvLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQVN0RixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsYUFBYTtJQUU1RCxZQUFZLEtBQWlCLEVBQzFCLEdBQXNCO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzs7WUFmRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsc1pBQW1EO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQVYrRCxVQUFVO1lBQXhDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvaWNvbi1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWluZm8taWNvbl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmluZm8taWNvbi5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9JY29uQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbFJlZiwgY2RyKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtaW5mby1pY29uJztcblx0fVxuXG59XG4iXX0=