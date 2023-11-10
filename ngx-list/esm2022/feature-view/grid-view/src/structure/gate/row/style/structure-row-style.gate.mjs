import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i2 from "../../../../../../../core/schema/src/api/schema.publisher";
export class StructureRowStyleGate extends Gate {
    schemaReadModelRootId;
    schemaPublisher;
    rowStyle;
    constructor(schemaReadModelRootId, schemaPublisher) {
        super();
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaPublisher = schemaPublisher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowStyle', changes)) {
            this.schemaPublisher.setRowStyle(this.rowStyle, this.schemaReadModelRootId);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowStyleGate, deps: [{ token: i1.SchemaReadModelRootId }, { token: i2.SchemaPublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureRowStyleGate, selector: "gui-structure[rowStyle]", inputs: { rowStyle: "rowStyle" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowStyleGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowStyle]'
                }]
        }], ctorParameters: function () { return [{ type: i1.SchemaReadModelRootId }, { type: i2.SchemaPublisher }]; }, propDecorators: { rowStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1zdHlsZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zdHJ1Y3R1cmUvZ2F0ZS9yb3cvc3R5bGUvc3RydWN0dXJlLXJvdy1zdHlsZS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7OztBQVU5RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSTtJQUtqQjtJQUNUO0lBSHBCLFFBQVEsQ0FBYztJQUV0QixZQUE2QixxQkFBNEMsRUFDckQsZUFBZ0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFGb0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNyRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFcEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF5QztRQUVwRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUEwQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzlGO0lBQ0YsQ0FBQzt3R0FmVyxxQkFBcUI7NEZBQXJCLHFCQUFxQjs7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO2lCQUNuQzswSUFJQSxRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgR3VpUm93U3R5bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9ndWkvZ3JpZC9zcmMvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLnB1Ymxpc2hlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbcm93U3R5bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dTdHlsZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRyb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFQdWJsaXNoZXI6IFNjaGVtYVB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUm93U3R5bGVHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdyb3dTdHlsZScsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYVB1Ymxpc2hlci5zZXRSb3dTdHlsZSh0aGlzLnJvd1N0eWxlIGFzIFNjaGVtYVJvd1N0eWxlLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==