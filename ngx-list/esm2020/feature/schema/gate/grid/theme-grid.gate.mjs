import { Gate } from '../../../common/cdk/component/gate';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/schema/api/global/schema.read-model-root-id";
import * as i2 from "../../../../core/schema/api/schema.publisher";
import * as i3 from "../../../../core/schema/api/schema.event-repository";
export class ThemeGridGate extends Gate {
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('verticalGrid', changes)) {
            this.schemaCommandInvoker.setVerticalGrid(this.verticalGrid, this.schemaId);
        }
        if (this.isDefined('horizontalGrid', changes)) {
            this.schemaCommandInvoker.setHorizontalGrid(this.horizontalGrid, this.schemaId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.schemaEventRepository.onHorizontalGridChanged(this.schemaId), this.horizontalGridChanged);
        this.subscribeAndEmit(this.schemaEventRepository.onVerticalGridChanged(this.schemaId), this.verticalGridChanged);
    }
}
ThemeGridGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ThemeGridGate, deps: [{ token: i1.SchemaReadModelRootId }, { token: i2.SchemaPublisher }, { token: i3.SchemaEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
ThemeGridGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ThemeGridGate, selector: "gui-structure[verticalGrid][horizontalGrid]", inputs: { verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid" }, outputs: { horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ThemeGridGate, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtZ3JpZC5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9nYXRlL2dyaWQvdGhlbWUtZ3JpZC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUsxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNMUYsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJO0lBY3RDLFlBQTZCLFFBQStCLEVBQ3hDLG9CQUFxQyxFQUNyQyxxQkFBNEM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIb0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtRQUNyQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBUGhFLDBCQUFxQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xFLHdCQUFtQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWhFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRjtJQUNGLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQzFCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FDeEIsQ0FBQztJQUNILENBQUM7OzJHQTFDVyxhQUFhOytGQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFIekIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsNkNBQTZDO2lCQUN2RDs4S0FJQSxZQUFZO3NCQURYLEtBQUs7Z0JBSU4sY0FBYztzQkFEYixLQUFLO2dCQUlOLHFCQUFxQjtzQkFEcEIsTUFBTTtnQkFJUCxtQkFBbUI7c0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVt2ZXJ0aWNhbEdyaWRdW2hvcml6b250YWxHcmlkXSdcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVHcmlkR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKVxuXHRob3Jpem9udGFsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0dmVydGljYWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUV2ZW50UmVwb3NpdG9yeTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxUaGVtZUdyaWRHYXRlPik6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd2ZXJ0aWNhbEdyaWQnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaG9yaXpvbnRhbEdyaWQnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZENoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnkub25WZXJ0aWNhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkXG5cdFx0KTtcblx0fVxufVxuIl19