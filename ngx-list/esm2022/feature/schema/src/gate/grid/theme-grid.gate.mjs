import { Gate } from '../../../../common/component/src/gate';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i2 from "../../../../../core/schema/src/api/schema.publisher";
import * as i3 from "../../../../../core/schema/src/api/schema.event-repository";
export class ThemeGridGate extends Gate {
    schemaId;
    schemaCommandInvoker;
    schemaEventRepository;
    verticalGrid;
    horizontalGrid;
    horizontalGridChanged = new EventEmitter();
    verticalGridChanged = new EventEmitter();
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.subscribeAndEmit(this.schemaEventRepository.onHorizontalGridChanged(this.schemaId), this.horizontalGridChanged);
        this.subscribeAndEmit(this.schemaEventRepository.onVerticalGridChanged(this.schemaId), this.verticalGridChanged);
    }
    ngOnChanges(changes) {
        if (this.isDefined('verticalGrid', changes)) {
            this.schemaCommandInvoker.setVerticalGrid(this.verticalGrid, this.schemaId);
        }
        if (this.isDefined('horizontalGrid', changes)) {
            this.schemaCommandInvoker.setHorizontalGrid(this.horizontalGrid, this.schemaId);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeGridGate, deps: [{ token: i1.SchemaReadModelRootId }, { token: i2.SchemaPublisher }, { token: i3.SchemaEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ThemeGridGate, selector: "gui-structure[verticalGrid][horizontalGrid]", inputs: { verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid" }, outputs: { horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeGridGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[verticalGrid][horizontalGrid]'
                }]
        }], ctorParameters: function () { return [{ type: i1.SchemaReadModelRootId }, { type: i2.SchemaPublisher }, { type: i3.SchemaEventRepository }]; }, propDecorators: { verticalGrid: [{
                type: Input
            }], horizontalGrid: [{
                type: Input
            }], horizontalGridChanged: [{
                type: Output
            }], verticalGridChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtZ3JpZC5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvZ2F0ZS9ncmlkL3RoZW1lLWdyaWQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNbEYsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJO0lBY1Q7SUFDVDtJQUNBO0lBYnBCLFlBQVksQ0FBVztJQUd2QixjQUFjLENBQVc7SUFHekIscUJBQXFCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbEUsbUJBQW1CLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFaEUsWUFBNkIsUUFBK0IsRUFDeEMsb0JBQXFDLEVBQ3JDLHFCQUE0QztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUhvQixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUN4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWlCO1FBQ3JDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFHL0QsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQzFCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FDeEIsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRjtJQUNGLENBQUM7d0dBdkNXLGFBQWE7NEZBQWIsYUFBYTs7NEZBQWIsYUFBYTtrQkFIekIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsNkNBQTZDO2lCQUN2RDs4S0FJQSxZQUFZO3NCQURYLEtBQUs7Z0JBSU4sY0FBYztzQkFEYixLQUFLO2dCQUlOLHFCQUFxQjtzQkFEcEIsTUFBTTtnQkFJUCxtQkFBbUI7c0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdmVydGljYWxHcmlkXVtob3Jpem9udGFsR3JpZF0nXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lR3JpZEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR2ZXJ0aWNhbEdyaWQ/OiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGhvcml6b250YWxHcmlkPzogYm9vbGVhbjtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYVB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeS5vbkhvcml6b250YWxHcmlkQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKSxcblx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkXG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uVmVydGljYWxHcmlkQ2hhbmdlZCh0aGlzLnNjaGVtYUlkKSxcblx0XHRcdHRoaXMudmVydGljYWxHcmlkQ2hhbmdlZFxuXHRcdCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8VGhlbWVHcmlkR2F0ZT4pOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndmVydGljYWxHcmlkJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VmVydGljYWxHcmlkKHRoaXMudmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYUlkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2hvcml6b250YWxHcmlkJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQodGhpcy5ob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==