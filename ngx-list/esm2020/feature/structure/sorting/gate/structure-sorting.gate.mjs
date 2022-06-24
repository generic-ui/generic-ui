import { Directive, Input } from '@angular/core';
import { Gate } from '../../../common/cdk/component/gate';
import { ifChanged } from '../../../common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/sorting/api/sorting.publisher";
export class StructureSortingGate extends Gate {
    constructor(structureId, sortingCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sortingCommandInvoker = sortingCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.sorting, () => {
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
        });
    }
}
StructureSortingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSortingGate, deps: [{ token: i1.StructureId }, { token: i2.SortingPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSortingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureSortingGate, selector: "gui-structure[sorting]", inputs: { sorting: "sorting" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSortingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[sorting]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SortingPublisher }]; }, propDecorators: { sorting: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvcnRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9nYXRlL3N0cnVjdHVyZS1zb3J0aW5nLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSTFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQU10RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsSUFBSTtJQUs3QyxZQUE2QixXQUF3QixFQUNqQyxxQkFBdUM7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFrQjtJQUUzRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXdDO1FBRW5ELFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUUvQixJQUFJLE9BQXNCLENBQUM7WUFFM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN0QyxPQUFPLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNyQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O2tIQTFCVyxvQkFBb0I7c0dBQXBCLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ2xDO2lJQUlBLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvcnRpbmcvYXBpL2NvbmZpZy9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFNvcnRpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL2FwaS9zb3J0aW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9jaGVjay5pbnB1dCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtzb3J0aW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU29ydGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgU29ydGluZ0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVNvcnRpbmdHYXRlPikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuc29ydGluZywgKCkgPT4ge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zb3J0aW5nQ29tbWFuZEludm9rZXIuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblx0fVxufVxuIl19