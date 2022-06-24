import { Directive, Input } from '@angular/core';
import { Gate } from '../../../common/cdk/component/gate';
import { ifChanged } from '../../../common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/core/api/structure.publisher";
export class StructureQuickFiltersGate extends Gate {
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    ngOnChanges(changes) {
        ifChanged(changes.quickFilters, () => {
            let quickFilters;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandInvoker.setQuickFiltersConfig(quickFilters, this.structureId);
        });
    }
}
StructureQuickFiltersGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureQuickFiltersGate, deps: [{ token: i1.StructureId }, { token: i2.StructurePublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureQuickFiltersGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureQuickFiltersGate, selector: "gui-structure[quickFilters]", inputs: { quickFilters: "quickFilters" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureQuickFiltersGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[quickFilters]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.StructurePublisher }]; }, propDecorators: { quickFilters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL2dhdGUvc3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBS3RFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxJQUFJO0lBS2xELFlBQTZCLFdBQXdCLEVBQ2pDLHVCQUEyQztRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQW9CO0lBRS9ELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBNkM7UUFFeEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1lBRXBDLElBQUksWUFBZ0MsQ0FBQztZQUVyQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzNDLFlBQVksR0FBRztvQkFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7aUJBQzFCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNqQztZQUVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BGLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQzs7dUhBM0JXLHlCQUF5QjsyR0FBekIseUJBQXlCOzRGQUF6Qix5QkFBeUI7a0JBSHJDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtpQkFDdkM7bUlBSUEsWUFBWTtzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvYXBpL3F1aWNrLWZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3F1aWNrRmlsdGVyc10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVF1aWNrRmlsdGVyc0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUXVpY2tGaWx0ZXJzR2F0ZT4pIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnF1aWNrRmlsdGVycywgKCkgPT4ge1xuXG5cdFx0XHRsZXQgcXVpY2tGaWx0ZXJzOiBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5xdWlja0ZpbHRlcnMgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5xdWlja0ZpbHRlcnNcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHF1aWNrRmlsdGVycyA9IHRoaXMucXVpY2tGaWx0ZXJzO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhxdWlja0ZpbHRlcnMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuIl19