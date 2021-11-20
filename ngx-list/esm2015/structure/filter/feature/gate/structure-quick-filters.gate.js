import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
import { ifChanged } from '../../../../common/cdk/component/check.input';
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
StructureQuickFiltersGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[quickFilters]'
            },] }
];
StructureQuickFiltersGate.ctorParameters = () => [
    { type: StructureId },
    { type: StructureCommandInvoker }
];
StructureQuickFiltersGate.propDecorators = {
    quickFilters: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2dhdGUvc3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUt6RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsSUFBSTtJQUtsRCxZQUE2QixXQUF3QixFQUNqQyx1QkFBZ0Q7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUVwRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZDO1FBRXhELFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtZQUVwQyxJQUFJLFlBQWdDLENBQUM7WUFFckMsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUMzQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZO2lCQUMxQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDakM7WUFFRCxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjthQUN2Qzs7O1lBTFEsV0FBVztZQUZYLHVCQUF1Qjs7OzJCQVU5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3F1aWNrLWZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9jaGVjay5pbnB1dCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbcXVpY2tGaWx0ZXJzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUXVpY2tGaWx0ZXJzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVF1aWNrRmlsdGVyc0dhdGU+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5xdWlja0ZpbHRlcnMsICgpID0+IHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHR9XG5cbn1cbiJdfQ==