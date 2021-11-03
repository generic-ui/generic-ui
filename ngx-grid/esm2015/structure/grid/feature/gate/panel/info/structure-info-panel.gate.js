import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/panel/info/structure.info-panel-config.service";
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
StructureInfoPanelGate.ɵfac = function StructureInfoPanelGate_Factory(t) { return new (t || StructureInfoPanelGate)(i0.ɵɵdirectiveInject(i1.StructureInfoPanelConfigService)); };
StructureInfoPanelGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureInfoPanelGate, selectors: [["gui-structure", "infoPanel", ""]], inputs: { infoPanel: "infoPanel" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureInfoPanelGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[infoPanel]'
            }]
    }], function () { return [{ type: i1.StructureInfoPanelConfigService }]; }, { infoPanel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3BhbmVsL2luZm8vc3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUc1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7OztBQVFuRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsSUFBSTtJQUsvQyxZQUErQiwrQkFBZ0U7UUFDOUYsS0FBSyxFQUFFLENBQUM7UUFEc0Isb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUUvRixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHO29CQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3ZCLENBQUM7YUFDRjtZQUVELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pEO0lBRUYsQ0FBQzs7NEZBckJXLHNCQUFzQjt5RUFBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7a0ZBSUEsU0FBUztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtpbmZvUGFuZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuIHwgSW5mb1BhbmVsQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVJbmZvUGFuZWxHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdpbmZvUGFuZWwnLCBjaGFuZ2VzKSkge1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmluZm9QYW5lbCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMuaW5mb1BhbmVsID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuaW5mb1BhbmVsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZS5zZXQodGhpcy5pbmZvUGFuZWwpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==