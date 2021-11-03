import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../header/menu/config/structure.column-menu-config.archive";
export class StructureColumnMenuGate extends Gate {
    constructor(structureColumnMenuConfigArchive) {
        super();
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('columnMenu', changes)) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
    }
}
StructureColumnMenuGate.ɵfac = function StructureColumnMenuGate_Factory(t) { return new (t || StructureColumnMenuGate)(i0.ɵɵdirectiveInject(i1.StructureColumnMenuConfigArchive)); };
StructureColumnMenuGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureColumnMenuGate, selectors: [["gui-structure", "columnMenu", ""]], inputs: { columnMenu: "columnMenu" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnMenuGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[columnMenu]'
            }]
    }], function () { return [{ type: i1.StructureColumnMenuConfigArchive }]; }, { columnMenu: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1tZW51LmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9jb2x1bW4vbWVudS9zdHJ1Y3R1cmUtY29sdW1uLW1lbnUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUk1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7OztBQU1uRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsSUFBSTtJQUtoRCxZQUE2QixnQ0FBa0U7UUFDOUYsS0FBSyxFQUFFLENBQUM7UUFEb0IscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztJQUUvRixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTJDO1FBRXRELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEU7SUFDRixDQUFDOzs4RkFkVyx1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2FBQ3JDO21GQUlBLFVBQVU7a0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtjb2x1bW5NZW51XSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVDb2x1bW5NZW51R2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnY29sdW1uTWVudScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLm5leHRDb25maWcodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cdH1cblxufVxuIl19