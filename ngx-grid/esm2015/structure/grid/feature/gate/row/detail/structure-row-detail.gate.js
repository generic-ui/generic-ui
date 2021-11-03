import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../row-detail/structure.row-detail.config-archive";
export class StructureRowDetailGate extends Gate {
    constructor(structureDetailViewConfigArchive) {
        super();
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowDetail', changes)) {
            this.structureDetailViewConfigArchive.next(this.rowDetail);
        }
    }
}
StructureRowDetailGate.ɵfac = function StructureRowDetailGate_Factory(t) { return new (t || StructureRowDetailGate)(i0.ɵɵdirectiveInject(i1.StructureRowDetailConfigArchive)); };
StructureRowDetailGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureRowDetailGate, selectors: [["gui-structure", "rowDetail", ""]], inputs: { rowDetail: "rowDetail" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureRowDetailGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[rowDetail]'
            }]
    }], function () { return [{ type: i1.StructureRowDetailConfigArchive }]; }, { rowDetail: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3Jvdy9kZXRhaWwvc3RydWN0dXJlLXJvdy1kZXRhaWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUc1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7OztBQU9uRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSTtJQUsvQyxZQUE2QixnQ0FBaUU7UUFDN0YsS0FBSyxFQUFFLENBQUM7UUFEb0IscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFpQztJQUU5RixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDRixDQUFDOzs0RkFkVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2FBQ3BDO2tGQUlBLFNBQVM7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3dEZXRhaWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuY29uZmlnJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd0RldGFpbF0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0RldGFpbEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRyb3dEZXRhaWw6IFJvd0RldGFpbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dEZXRhaWxHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdyb3dEZXRhaWwnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMucm93RGV0YWlsKTtcblx0XHR9XG5cdH1cblxufVxuIl19