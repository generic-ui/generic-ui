import { Gate } from '../../../../common/cdk/component/gate';
import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../core/api/structure.command-invoker";
export class VerticalFormationGate extends Gate {
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('virtualScroll', changes)) {
            if (this.virtualScroll) {
                this.structureCommandInvoker.enableVirtualScroll(this.structureId);
            }
            else {
                this.structureCommandInvoker.disableVirtualScroll(this.structureId);
            }
        }
    }
}
VerticalFormationGate.ɵfac = function VerticalFormationGate_Factory(t) { return new (t || VerticalFormationGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.StructureCommandInvoker)); };
VerticalFormationGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: VerticalFormationGate, selectors: [["gui-structure", "virtualScroll", ""]], inputs: { virtualScroll: "virtualScroll" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalFormationGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[virtualScroll]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.StructureCommandInvoker }]; }, { virtualScroll: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vZmVhdHVyZS9nYXRlL3ZlcnRpY2FsLWZvcm1hdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7OztBQU01RCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSTtJQUs5QyxZQUE2QixXQUF3QixFQUNqQyx1QkFBZ0Q7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUVwRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEU7U0FDRDtJQUNGLENBQUM7OzBGQW5CVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2FBQ3hDO29HQUlBLGFBQWE7a0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3ZpcnR1YWxTY3JvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8VmVydGljYWxGb3JtYXRpb25HYXRlPik6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd2aXJ0dWFsU2Nyb2xsJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5lbmFibGVWaXJ0dWFsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5kaXNhYmxlVmlydHVhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19