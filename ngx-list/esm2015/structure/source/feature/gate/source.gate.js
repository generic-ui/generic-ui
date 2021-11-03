import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../core/api/source.command-invoker";
import * as i3 from "../../core/api/event/source-event.service";
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
SourceGate.ɵfac = function SourceGate_Factory(t) { return new (t || SourceGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SourceCommandInvoker), i0.ɵɵdirectiveInject(i3.SourceEventService)); };
SourceGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SourceGate, inputs: { source: "source", items: "items" }, outputs: { sourceEdited: "sourceEdited" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceGate, [{
        type: Directive
    }], function () { return [{ type: i1.StructureId }, { type: i2.SourceCommandInvoker }, { type: i3.SourceEventService }]; }, { source: [{
            type: Input
        }], items: [{
            type: Input
        }], sourceEdited: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NvdXJjZS5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFRN0QsTUFBTSxPQUFnQixVQUFXLFNBQVEsSUFBSTtJQVc1QyxZQUF5QyxXQUF3QixFQUN2QyxvQkFBMEMsRUFDMUMsa0JBQXNDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBSGdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVZoRSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLFVBQUssR0FBZSxFQUFFLENBQUM7UUFHdkIsaUJBQVksR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1sRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQThCO1FBRXpDOztXQUVHO1FBQ0gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxJQUFJLENBQUMsWUFBWSxDQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7b0VBekNvQixVQUFVOzZEQUFWLFVBQVU7dUZBQVYsVUFBVTtjQUQvQixTQUFTO2tJQUlULE1BQU07a0JBREwsS0FBSztZQUlOLEtBQUs7a0JBREosS0FBSztZQUlOLFlBQVk7a0JBRFgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb3VyY2VHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNvdXJjZUdhdGU+KSB7XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzb3VyY2UnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRPcmlnaW4odGhpcy5zb3VyY2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaXRlbXMnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRPcmlnaW4odGhpcy5pdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNvdXJjZUV2ZW50U2VydmljZS5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdHRoaXMuc291cmNlRWRpdGVkXG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxufVxuIl19