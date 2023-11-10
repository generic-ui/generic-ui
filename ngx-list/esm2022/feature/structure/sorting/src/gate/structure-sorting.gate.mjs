import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import { ifChanged } from '../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/sorting/src/api/sorting.publisher";
export class StructureSortingGate extends Gate {
    structureId;
    sortingCommandInvoker;
    sorting;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSortingGate, deps: [{ token: i1.StructureId }, { token: i2.SortingPublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureSortingGate, selector: "gui-structure[sorting]", inputs: { sorting: "sorting" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSortingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[sorting]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SortingPublisher }]; }, propDecorators: { sorting: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvcnRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvZ2F0ZS9zdHJ1Y3R1cmUtc29ydGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUk3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFNekUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLElBQUk7SUFLaEI7SUFDVDtJQUhwQixPQUFPLENBQTBCO0lBRWpDLFlBQTZCLFdBQXdCLEVBQ2pDLHFCQUF1QztRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQywwQkFBcUIsR0FBckIscUJBQXFCLENBQWtCO0lBRTNELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBd0M7UUFFbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBRS9CLElBQUksT0FBc0IsQ0FBQztZQUUzQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3RDLE9BQU8sR0FBRztvQkFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQ3JCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2QjtZQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzt3R0ExQlcsb0JBQW9COzRGQUFwQixvQkFBb0I7OzRGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbEM7aUlBSUEsT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9hcGkvY29uZmlnL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU29ydGluZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvcnRpbmcvc3JjL2FwaS9zb3J0aW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9jaGVjay5pbnB1dCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtzb3J0aW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU29ydGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgU29ydGluZ0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVNvcnRpbmdHYXRlPikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuc29ydGluZywgKCkgPT4ge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zb3J0aW5nQ29tbWFuZEludm9rZXIuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblx0fVxufVxuIl19