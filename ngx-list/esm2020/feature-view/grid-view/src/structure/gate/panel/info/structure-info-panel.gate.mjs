import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "./structure.info-panel-config.service";
export class StructureInfoPanelGate extends Gate {
    constructor(structureInfoPanelConfigService) {
        super();
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
    }
    ngOnChanges(changes) {
        if (this.isDefined('infoPanel', changes)) {
            if (typeof this.infoPanel === 'boolean') {
                this.infoPanel = {
                    enabled: this.infoPanel
                };
            }
            this.structureInfoPanelConfigService.set(this.infoPanel);
        }
    }
}
StructureInfoPanelGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelGate, deps: [{ token: i1.StructureInfoPanelConfigService }], target: i0.ɵɵFactoryTarget.Directive });
StructureInfoPanelGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructureInfoPanelGate, selector: "gui-structure[infoPanel]", inputs: { infoPanel: "infoPanel" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[infoPanel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureInfoPanelConfigService }]; }, propDecorators: { infoPanel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc3RydWN0dXJlL2dhdGUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUtaW5mby1wYW5lbC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7O0FBUTlFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJO0lBSy9DLFlBQStCLCtCQUFnRTtRQUM5RixLQUFLLEVBQUUsQ0FBQztRQURzQixvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBRS9GLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMEM7UUFFckQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN6QyxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUc7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDdkIsQ0FBQzthQUNGO1lBRUQsSUFBSSxDQUFDLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekQ7SUFFRixDQUFDOztvSEFyQlcsc0JBQXNCO3dHQUF0QixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO2lCQUNwQztzSEFJQSxTQUFTO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9wYW5lbC9pbmZvL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2luZm9QYW5lbF0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW4gfCBJbmZvUGFuZWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUluZm9QYW5lbEdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2luZm9QYW5lbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaW5mb1BhbmVsID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWwgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5pbmZvUGFuZWxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLnNldCh0aGlzLmluZm9QYW5lbCk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19