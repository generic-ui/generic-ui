import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/formation/src/api/formation.event-repository";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
export class SelectionGate extends Gate {
    structureId;
    formationEventRepository;
    formationPublisher;
    rowSelection;
    itemsSelected = new EventEmitter();
    selectedRows = new EventEmitter();
    constructor(structureId, formationEventRepository, formationPublisher) {
        super();
        this.structureId = structureId;
        this.formationEventRepository = formationEventRepository;
        this.formationPublisher = formationPublisher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowSelection', changes)) {
            if (this.rowSelection.isEnabledDefined()) {
                this.formationPublisher.setSelection(this.rowSelection.isEnabled(), this.structureId);
            }
            if (this.rowSelection.isTypeDefined()) {
                this.formationPublisher.changeType(this.rowSelection.getType(), this.structureId);
            }
            if (this.rowSelection.isModeDefined()) {
                this.formationPublisher.changeMode(this.rowSelection.getMode(), this.structureId);
            }
            if (this.rowSelection.isMatcherDefined()) {
                this.formationPublisher.setMatcher(this.rowSelection.getMatcher(), this.structureId);
            }
            if (this.rowSelection.isSelectedRowIndexesDefined()) {
                this.formationPublisher.selectByIndex(this.rowSelection.getSelectedRowIndexes(), this.structureId);
            }
            if (this.rowSelection.isSelectedRowIdsDefined()) {
                this.formationPublisher.selectByIds(this.rowSelection.getSelectedRowIds(), this.structureId);
            }
            if (this.rowSelection.isCustomSelectConfig()) {
                this.formationPublisher.setCustomSelection(this.rowSelection.getCustomSelectConfig(), this.structureId);
            }
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.formationEventRepository.onItemSelected(this.structureId), this.selectedRows);
        this.subscribeAndEmit(this.selectItemsSelected(), this.itemsSelected);
    }
    selectItemsSelected() {
        return this.formationEventRepository
            .onItemSelected(this.structureId)
            .pipe(hermesMap((items) => {
            return items.map(i => i.getItem());
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SelectionGate, inputs: { rowSelection: "rowSelection" }, outputs: { itemsSelected: "itemsSelected", selectedRows: "selectedRows" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectionGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }]; }, propDecorators: { rowSelection: [{
                type: Input
            }], itemsSelected: [{
                type: Output
            }], selectedRows: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvZ2F0ZS9zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUkvQyxNQUFNLE9BQWdCLGFBQWMsU0FBUSxJQUFJO0lBV047SUFDZjtJQUNBO0lBVjFCLFlBQVksQ0FBZTtJQUczQixhQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHdEQsWUFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBFLFlBQXlDLFdBQXdCLEVBQ3ZDLHdCQUFrRCxFQUNsRCxrQkFBc0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRWhFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUU1QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN0RjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNsRjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNsRjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3JGO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuRztZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDN0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEc7U0FDRDtJQUNGLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQzFCLElBQUksQ0FBQyxhQUFhLENBQ2xCLENBQUM7SUFDSCxDQUFDO0lBRU8sbUJBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QjthQUM5QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO3dHQXhFb0IsYUFBYTs0RkFBYixhQUFhOzs0RkFBYixhQUFhO2tCQURsQyxTQUFTOzBLQUlULFlBQVk7c0JBRFgsS0FBSztnQkFJTixhQUFhO3NCQURaLE1BQU07Z0JBSVAsWUFBWTtzQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBoZXJtZXNNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlbGVjdGlvbkdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogUm93U2VsZWN0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8U2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybWF0aW9uUHVibGlzaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNlbGVjdGlvbkdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd1NlbGVjdGlvbicsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc0VuYWJsZWREZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25QdWJsaXNoZXIuc2V0U2VsZWN0aW9uKHRoaXMucm93U2VsZWN0aW9uLmlzRW5hYmxlZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzVHlwZURlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvblB1Ymxpc2hlci5jaGFuZ2VUeXBlKHRoaXMucm93U2VsZWN0aW9uLmdldFR5cGUoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc01vZGVEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25QdWJsaXNoZXIuY2hhbmdlTW9kZSh0aGlzLnJvd1NlbGVjdGlvbi5nZXRNb2RlKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNNYXRjaGVyRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLnNldE1hdGNoZXIodGhpcy5yb3dTZWxlY3Rpb24uZ2V0TWF0Y2hlcigpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzU2VsZWN0ZWRSb3dJbmRleGVzRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLnNlbGVjdEJ5SW5kZXgodGhpcy5yb3dTZWxlY3Rpb24uZ2V0U2VsZWN0ZWRSb3dJbmRleGVzKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNTZWxlY3RlZFJvd0lkc0RlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvblB1Ymxpc2hlci5zZWxlY3RCeUlkcyh0aGlzLnJvd1NlbGVjdGlvbi5nZXRTZWxlY3RlZFJvd0lkcygpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzQ3VzdG9tU2VsZWN0Q29uZmlnKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25QdWJsaXNoZXIuc2V0Q3VzdG9tU2VsZWN0aW9uKHRoaXMucm93U2VsZWN0aW9uLmdldEN1c3RvbVNlbGVjdENvbmZpZygpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5Lm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0dGhpcy5zZWxlY3RlZFJvd3Ncblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zZWxlY3RJdGVtc1NlbGVjdGVkKCksXG5cdFx0XHR0aGlzLml0ZW1zU2VsZWN0ZWRcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RJdGVtc1NlbGVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaXRlbXMubWFwKGkgPT4gaS5nZXRJdGVtKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19