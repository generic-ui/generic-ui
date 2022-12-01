import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureBannerPanel } from '../structure-banner-panel';
import * as i0 from "@angular/core";
import * as i1 from "./structure.title-panel.config-archive";
import * as i2 from "../../../../../../feature/common/src/cdk/sanitize/safe.pipe";
export class StructureTitlePanelComponent extends StructureBannerPanel {
    constructor(structureTitlePanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
    }
    onBannerPanelConfig() {
        return this.structureTitlePanelConfigArchive.on();
    }
    getSelectorName() {
        return 'gui-structure-title-panel';
    }
    getPanelTitle() {
        return 'Title panel';
    }
}
StructureTitlePanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureTitlePanelComponent, deps: [{ token: i1.StructureTitlePanelConfigArchive }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureTitlePanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: StructureTitlePanelComponent, selector: "div[gui-structure-title-panel]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n</div>\n", dependencies: [{ kind: "pipe", type: i2.SafePipe, name: "guiSafe" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureTitlePanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-title-panel]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.StructureTitlePanelConfigArchive }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdySCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQVdqRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9CO0lBRXJFLFlBQTZCLGdDQUFrRSxFQUM1RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSFQscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztJQUkvRixDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7O3lIQWxCVyw0QkFBNEI7NkdBQTVCLDRCQUE0Qiw2RkNkekMscUlBR0E7MkZEV2EsNEJBQTRCO2tCQU54QyxTQUFTOytCQUNDLGdDQUFnQyxtQkFFekIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU3RydWN0dXJlQmFubmVyUGFuZWwge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpO1xuXHR9XG5cblx0Z2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsJztcblx0fVxuXG5cdGdldFBhbmVsVGl0bGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ1RpdGxlIHBhbmVsJztcblx0fVxuXG59XG4iLCI8ZGl2IFtpbm5lckhUTUxdPVwiYmFubmVyUGFuZWwgfCBndWlTYWZlOiAnaHRtbCdcIlxuXHQgY2xhc3M9XCJndWktdGl0bGUtcGFuZWwgZ3VpLXAtNiBndWktYm9yZGVyLWIgZ3VpLWJvcmRlci1iLXNvbGlkXCI+XG48L2Rpdj5cbiJdfQ==