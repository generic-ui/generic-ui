import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i2 from "../../../../../core/schema/src/api/schema.publisher";
import * as i3 from "../../../../../core/schema/src/api/schema.event-repository";
export class ThemeGridGate extends Gate {
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
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
}
ThemeGridGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ThemeGridGate, deps: [{ token: i1.SchemaReadModelRootId }, { token: i2.SchemaPublisher }, { token: i3.SchemaEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
ThemeGridGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: ThemeGridGate, selector: "gui-structure[verticalGrid][horizontalGrid]", inputs: { verticalGrid: "verticalGrid", horizontalGrid: "horizontalGrid" }, outputs: { horizontalGridChanged: "horizontalGridChanged", verticalGridChanged: "verticalGridChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ThemeGridGate, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtZ3JpZC5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvZ2F0ZS9ncmlkL3RoZW1lLWdyaWQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFLekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNbEYsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJO0lBY3RDLFlBQTZCLFFBQStCLEVBQ3hDLG9CQUFxQyxFQUNyQyxxQkFBNEM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIb0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtRQUNyQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBUGhFLDBCQUFxQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xFLHdCQUFtQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDakUsSUFBSSxDQUFDLHFCQUFxQixDQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUMvRCxJQUFJLENBQUMsbUJBQW1CLENBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWlDO1FBRTVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1RTtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEY7SUFDRixDQUFDOzswR0F2Q1csYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBSHpCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDZDQUE2QztpQkFDdkQ7OEtBSUEsWUFBWTtzQkFEWCxLQUFLO2dCQUlOLGNBQWM7c0JBRGIsS0FBSztnQkFJTixxQkFBcUI7c0JBRHBCLE1BQU07Z0JBSVAsbUJBQW1CO3NCQURsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL2dhdGUnO1xuaW1wb3J0IHsgU2NoZW1hUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEucHVibGlzaGVyJztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3ZlcnRpY2FsR3JpZF1baG9yaXpvbnRhbEdyaWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUdyaWRHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmVydGljYWxHcmlkPzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZD86IGJvb2xlYW47XG5cblx0QE91dHB1dCgpXG5cdGhvcml6b250YWxHcmlkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHR2ZXJ0aWNhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnkub25Ib3Jpem9udGFsR3JpZENoYW5nZWQodGhpcy5zY2hlbWFJZCksXG5cdFx0XHR0aGlzLmhvcml6b250YWxHcmlkQ2hhbmdlZFxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeS5vblZlcnRpY2FsR3JpZENoYW5nZWQodGhpcy5zY2hlbWFJZCksXG5cdFx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWRcblx0XHQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFRoZW1lR3JpZEdhdGU+KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3ZlcnRpY2FsR3JpZCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZCh0aGlzLnZlcnRpY2FsR3JpZCwgdGhpcy5zY2hlbWFJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdob3Jpem9udGFsR3JpZCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKHRoaXMuaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=