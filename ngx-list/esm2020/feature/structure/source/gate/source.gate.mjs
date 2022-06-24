import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/api/source.publisher";
import * as i3 from "../../../../core/structure/source/api/edit/source-event.service";
export class SourceGate extends Gate {
    constructor(structureId, sourceCommandInvoker, sourceEventService) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.sourceEventService = sourceEventService;
        this.source = [];
        this.items = [];
        this.sourceEdited = new EventEmitter();
    }
    ngOnChanges(changes) {
        /**
         * Setting source should be last step
         */
        if (this.isDefined('source', changes)) {
            this.sourceCommandInvoker.setOrigin(this.source, this.structureId);
        }
        if (this.isDefined('items', changes)) {
            this.sourceCommandInvoker.setOrigin(this.items, this.structureId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.sourceEventService.onSourceEdited(this.structureId), this.sourceEdited);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SourceGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceGate, deps: [{ token: i1.StructureId }, { token: i2.SourcePublisher }, { token: i3.SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
SourceGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: SourceGate, inputs: { source: "source", items: "items" }, outputs: { sourceEdited: "sourceEdited" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SourcePublisher }, { type: i3.SourceEventService }]; }, propDecorators: { source: [{
                type: Input
            }], items: [{
                type: Input
            }], sourceEdited: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9nYXRlL3NvdXJjZS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFRMUQsTUFBTSxPQUFnQixVQUFXLFNBQVEsSUFBSTtJQVc1QyxZQUF5QyxXQUF3QixFQUN2QyxvQkFBcUMsRUFDckMsa0JBQXNDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBSGdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFDckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVZoRSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFVBQUssR0FBZSxFQUFFLENBQUM7UUFHdkIsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1qRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQThCO1FBRXpDOztXQUVHO1FBQ0gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxJQUFJLENBQUMsWUFBWSxDQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7d0dBekNvQixVQUFVOzRGQUFWLFVBQVU7NEZBQVYsVUFBVTtrQkFEL0IsU0FBUztpS0FJVCxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFlBQVk7c0JBRFgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBFZGl0ZWRJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL2VkaXQvZWRpdGVkLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgU291cmNlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9zb3VyY2UucHVibGlzaGVyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvZWRpdC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZWRJdGVtTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUV2ZW50U2VydmljZTogU291cmNlRXZlbnRTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTb3VyY2VHYXRlPikge1xuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc291cmNlJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIuc2V0T3JpZ2luKHRoaXMuc291cmNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2l0ZW1zJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIuc2V0T3JpZ2luKHRoaXMuaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Uub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHR0aGlzLnNvdXJjZUVkaXRlZFxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==