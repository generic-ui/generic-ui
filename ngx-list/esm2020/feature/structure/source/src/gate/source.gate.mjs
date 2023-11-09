import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/source/src/api/source.publisher";
import * as i3 from "../../../../../core/structure/source/src/api/edit/source-event.service";
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
}
SourceGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SourceGate, deps: [{ token: i1.StructureId }, { token: i2.SourcePublisher }, { token: i3.SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
SourceGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: SourceGate, inputs: { source: "source", items: "items" }, outputs: { sourceEdited: "sourceEdited" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SourceGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SourcePublisher }, { type: i3.SourceEventService }]; }, propDecorators: { source: [{
                type: Input
            }], items: [{
                type: Input
            }], sourceEdited: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZ2F0ZS9zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBUTdELE1BQU0sT0FBZ0IsVUFBVyxTQUFRLElBQUk7SUFXNUMsWUFBeUMsV0FBd0IsRUFDdkMsb0JBQXFDLEVBQ3JDLGtCQUFzQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUhnQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWlCO1FBQ3JDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFWaEUsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUd4QixVQUFLLEdBQWUsRUFBRSxDQUFDO1FBR3ZCLGlCQUFZLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7SUFNakUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE4QjtRQUV6Qzs7V0FFRztRQUNILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FDakIsQ0FBQztJQUNILENBQUM7O3dHQXJDb0IsVUFBVTs0RkFBVixVQUFVOzRGQUFWLFVBQVU7a0JBRC9CLFNBQVM7aUtBSVQsTUFBTTtzQkFETCxLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSztnQkFJTixZQUFZO3NCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBFZGl0ZWRJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9lZGl0L2VkaXRlZC1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvZWRpdC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZWRJdGVtTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUV2ZW50U2VydmljZTogU291cmNlRXZlbnRTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTb3VyY2VHYXRlPikge1xuXG5cdFx0LyoqXG5cdFx0ICogU2V0dGluZyBzb3VyY2Ugc2hvdWxkIGJlIGxhc3Qgc3RlcFxuXHRcdCAqL1xuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc291cmNlJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIuc2V0T3JpZ2luKHRoaXMuc291cmNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2l0ZW1zJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIuc2V0T3JpZ2luKHRoaXMuaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Uub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHR0aGlzLnNvdXJjZUVkaXRlZFxuXHRcdCk7XG5cdH1cblxufVxuIl19