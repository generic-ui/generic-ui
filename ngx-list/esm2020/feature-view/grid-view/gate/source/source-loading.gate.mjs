import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/api/source.publisher";
export class SourceLoadingGate extends Gate {
    constructor(structureId, sourceCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('loading', changes)) {
            this.sourceCommandInvoker.setLoading(this.loading, this.structureId);
        }
    }
    ngOnInit() {
    }
}
SourceLoadingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceLoadingGate, deps: [{ token: i1.StructureId }, { token: i2.SourcePublisher }], target: i0.ɵɵFactoryTarget.Directive });
SourceLoadingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: SourceLoadingGate, selector: "gui-structure[loading]", inputs: { loading: "loading" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceLoadingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[loading]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SourcePublisher }]; }, propDecorators: { loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9nYXRlL3NvdXJjZS9zb3VyY2UtbG9hZGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFTckUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLElBQUk7SUFLMUMsWUFBNkIsV0FBd0IsRUFDakMsb0JBQXFDO1FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7SUFFekQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFxQztRQUdoRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckU7SUFDRixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OytHQW5CVyxpQkFBaUI7bUdBQWpCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ2xDO2dJQUlBLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2xvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VMb2FkaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTb3VyY2VMb2FkaW5nR2F0ZT4pOiB2b2lkIHtcblxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdsb2FkaW5nJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIuc2V0TG9hZGluZyh0aGlzLmxvYWRpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG59XG4iXX0=