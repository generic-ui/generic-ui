import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../structure.column-manager.component";
import * as i2 from "../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-structure-dialog-column-manager", ""];
export class StructureDialogColumnManagerComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
    }
    getSelectorName() {
        return 'gui-structure-dialog-column-manager';
    }
}
StructureDialogColumnManagerComponent.ɵfac = function StructureDialogColumnManagerComponent_Factory(t) { return new (t || StructureDialogColumnManagerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureDialogColumnManagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureDialogColumnManagerComponent, selectors: [["div", "gui-structure-dialog-column-manager", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 4, vars: 3, consts: [[1, "gui-dialog-title"], ["gui-structure-column-manager", ""]], template: function StructureDialogColumnManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "columnManagerModalTitle"));
    } }, directives: [i1.StructureColumnManagerComponent], pipes: [i2.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureDialogColumnManagerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-dialog-column-manager]',
                templateUrl: './structure.dialog-column-manager.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7Ozs7QUFRckYsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLGNBQWM7SUFFeEUsWUFBWSxRQUEyQixFQUNwQyxVQUFzQjtRQUN4QixLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8scUNBQXFDLENBQUM7SUFDOUMsQ0FBQzs7MEhBVFcscUNBQXFDO3dGQUFyQyxxQ0FBcUM7UUNUbEQsOEJBQThCO1FBQUEsWUFBNEM7O1FBQUEsaUJBQU07UUFFaEYseUJBQ007O1FBSHdCLGVBQTRDO1FBQTVDLHFFQUE0Qzs7dUZEUzdELHFDQUFxQztjQU5qRCxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsV0FBVyxFQUFFLGtEQUFrRDtnQkFDL0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWRpYWxvZy1jb2x1bW4tbWFuYWdlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1kaWFsb2ctY29sdW1uLW1hbmFnZXInO1xuXHR9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZ3VpLWRpYWxvZy10aXRsZVwiPnt7J2NvbHVtbk1hbmFnZXJNb2RhbFRpdGxlJyB8IGd1aVRyYW5zbGF0ZX19PC9kaXY+XG5cbjxkaXYgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcj5cbjwvZGl2PlxuIl19