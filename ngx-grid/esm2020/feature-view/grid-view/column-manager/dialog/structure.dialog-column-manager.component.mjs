import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../structure.column-manager.component";
import * as i2 from "../../../../feature/l10n/translation.pipe";
export class StructureDialogColumnManagerComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
    }
    getSelectorName() {
        return 'gui-structure-dialog-column-manager';
    }
}
StructureDialogColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureDialogColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureDialogColumnManagerComponent, selector: "div[gui-structure-dialog-column-manager]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-dialog-title\">{{'columnManagerModalTitle' | guiTranslate}}</div>\n\n<div class=\"-gui-mx-10\" gui-structure-column-manager>\n</div>\n", dependencies: [{ kind: "component", type: i1.StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]" }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogColumnManagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-dialog-column-manager]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-dialog-title\">{{'columnManagerModalTitle' | guiTranslate}}</div>\n\n<div class=\"-gui-mx-10\" gui-structure-column-manager>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7OztBQVExRixNQUFNLE9BQU8scUNBQXNDLFNBQVEsY0FBYztJQUV4RSxZQUFZLFFBQTJCLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxxQ0FBcUMsQ0FBQztJQUM5QyxDQUFDOztrSUFUVyxxQ0FBcUM7c0hBQXJDLHFDQUFxQyx1R0NUbEQseUpBSUE7MkZES2EscUNBQXFDO2tCQU5qRCxTQUFTOytCQUNDLDBDQUEwQyxtQkFFbkMsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWRpYWxvZy1jb2x1bW4tbWFuYWdlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1kaWFsb2ctY29sdW1uLW1hbmFnZXInO1xuXHR9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZ3VpLWRpYWxvZy10aXRsZVwiPnt7J2NvbHVtbk1hbmFnZXJNb2RhbFRpdGxlJyB8IGd1aVRyYW5zbGF0ZX19PC9kaXY+XG5cbjxkaXYgY2xhc3M9XCItZ3VpLW14LTEwXCIgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcj5cbjwvZGl2PlxuIl19