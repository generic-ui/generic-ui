import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../schema/core/api/styling/schema.row-style.archive";
export class StructureRowStyleGate extends Gate {
    constructor(schemaRowStyleArchive) {
        super();
        this.schemaRowStyleArchive = schemaRowStyleArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowStyle', changes)) {
            this.schemaRowStyleArchive.next(this.rowStyle);
        }
    }
}
StructureRowStyleGate.ɵfac = function StructureRowStyleGate_Factory(t) { return new (t || StructureRowStyleGate)(i0.ɵɵdirectiveInject(i1.SchemaRowStyleArchive)); };
StructureRowStyleGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureRowStyleGate, selectors: [["gui-structure", "rowStyle", ""]], inputs: { rowStyle: "rowStyle" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureRowStyleGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[rowStyle]'
            }]
    }], function () { return [{ type: i1.SchemaRowStyleArchive }]; }, { rowStyle: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1zdHlsZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcm93L3N0eWxlL3N0cnVjdHVyZS1yb3ctc3R5bGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7OztBQVNuRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSTtJQUs5QyxZQUE2QixxQkFBNEM7UUFDeEUsS0FBSyxFQUFFLENBQUM7UUFEb0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUV6RSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBMEIsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0YsQ0FBQzs7MEZBZFcscUJBQXFCO3dFQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUhqQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjthQUNuQzt3RUFJQSxRQUFRO2tCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IEd1aVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZS5hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd1N0eWxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93U3R5bGVHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93U3R5bGVBcmNoaXZlOiBTY2hlbWFSb3dTdHlsZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd1N0eWxlR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93U3R5bGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFSb3dTdHlsZUFyY2hpdmUubmV4dCh0aGlzLnJvd1N0eWxlIGFzIFNjaGVtYVJvd1N0eWxlKTtcblx0XHR9XG5cdH1cblxufVxuIl19