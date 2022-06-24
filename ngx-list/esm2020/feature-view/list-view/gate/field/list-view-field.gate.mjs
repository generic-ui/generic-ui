import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/field/api/field.publisher";
export class ListViewFieldGate extends Gate {
    constructor(structureId, fieldCommandDispatcher) {
        super();
        this.structureId = structureId;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('fields', changes)) {
            this.fieldCommandDispatcher.initFields(this.fields, this.structureId);
        }
    }
}
ListViewFieldGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewFieldGate, deps: [{ token: i1.StructureId }, { token: i2.FieldPublisher }], target: i0.ɵɵFactoryTarget.Directive });
ListViewFieldGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ListViewFieldGate, selector: "gui-list-view[fields]", inputs: { fields: "fields" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewFieldGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[fields]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FieldPublisher }]; }, propDecorators: { fields: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvZ2F0ZS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFTckUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLElBQUk7SUFLMUMsWUFBNkIsV0FBd0IsRUFDakMsc0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBZ0I7SUFFMUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFxQztRQUVoRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBRXRDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDOzsrR0FoQlcsaUJBQWlCO21HQUFqQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO2lCQUNqQzsrSEFJQSxNQUFNO3NCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9hcGkvZmllbGQucHVibGlzaGVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tmaWVsZHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZpZWxkR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld0ZpZWxkR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnZmllbGRzJywgY2hhbmdlcykpIHtcblxuXHRcdFx0dGhpcy5maWVsZENvbW1hbmREaXNwYXRjaGVyLmluaXRGaWVsZHModGhpcy5maWVsZHMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=