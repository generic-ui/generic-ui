import { Gate } from '../../../common/cdk/component/gate';
import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/core/api/structure.publisher";
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
VerticalFormationGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: VerticalFormationGate, deps: [{ token: i1.StructureId }, { token: i2.StructurePublisher }], target: i0.ɵɵFactoryTarget.Directive });
VerticalFormationGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: VerticalFormationGate, selector: "gui-structure[virtualScroll]", inputs: { virtualScroll: "virtualScroll" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: VerticalFormationGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[virtualScroll]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.StructurePublisher }]; }, propDecorators: { virtualScroll: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9nYXRlL3ZlcnRpY2FsLWZvcm1hdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUcxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7OztBQU01RCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSTtJQUs5QyxZQUE2QixXQUF3QixFQUNqQyx1QkFBMkM7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFvQjtJQUUvRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEU7U0FDRDtJQUNGLENBQUM7O21IQW5CVyxxQkFBcUI7dUdBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7aUJBQ3hDO21JQUlBLGFBQWE7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdmlydHVhbFNjcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8VmVydGljYWxGb3JtYXRpb25HYXRlPik6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd2aXJ0dWFsU2Nyb2xsJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5lbmFibGVWaXJ0dWFsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5kaXNhYmxlVmlydHVhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19