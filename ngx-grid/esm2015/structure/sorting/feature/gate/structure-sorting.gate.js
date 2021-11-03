import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../core/api/sorting.command-invoker";
export class StructureSortingGate extends Gate {
    constructor(structureId, sortingCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sortingCommandInvoker = sortingCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('sorting', changes)) {
            let sorting;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.sortingCommandInvoker.setSortingConfig(sorting, this.structureId);
        }
    }
}
StructureSortingGate.ɵfac = function StructureSortingGate_Factory(t) { return new (t || StructureSortingGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SortingCommandInvoker)); };
StructureSortingGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureSortingGate, selectors: [["gui-structure", "sorting", ""]], inputs: { sorting: "sorting" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSortingGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[sorting]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.SortingCommandInvoker }]; }, { sorting: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvcnRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3NvcnRpbmcvZmVhdHVyZS9nYXRlL3N0cnVjdHVyZS1zb3J0aW5nLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBUzdELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxJQUFJO0lBSzdDLFlBQTZCLFdBQXdCLEVBQ2pDLHFCQUE0QztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBRWhFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBd0M7UUFFbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUV2QyxJQUFJLE9BQXNCLENBQUM7WUFFM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN0QyxPQUFPLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNyQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RTtJQUVGLENBQUM7O3dGQTNCVyxvQkFBb0I7dUVBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2FBQ2xDO2tHQUlBLE9BQU87a0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtzb3J0aW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU29ydGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgU29ydGluZ0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlU29ydGluZ0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3NvcnRpbmcnLCBjaGFuZ2VzKSkge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zb3J0aW5nQ29tbWFuZEludm9rZXIuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0fVxufVxuIl19