import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureBannerPanel } from '../structure-banner-panel';
import * as i0 from "@angular/core";
import * as i1 from "./structure.footer-panel.config-archive";
import * as i2 from "../../../../../../feature/gui-angular/template/push/gui.push.pipe";
import * as i3 from "../../../../../../feature/common/cdk/src/sanitize/safe.pipe";
export class StructureFooterPanelComponent extends StructureBannerPanel {
    constructor(structureFooterPanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.initObservables();
    }
    onBannerPanelConfig() {
        return this.structureFooterPanelConfigArchive
            .on();
    }
    getSelectorName() {
        return 'gui-structure-footer-panel';
    }
}
StructureFooterPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureFooterPanelComponent, deps: [{ token: i1.StructureFooterPanelConfigArchive }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureFooterPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureFooterPanelComponent, selector: "div[gui-structure-footer-panel]", usesInheritance: true, ngImport: i0, template: "<div [innerHTML]=\"bannerPanel$ | guiPush | guiSafe: 'html'\"\n\t class=\"gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid\">\n</div>\n", dependencies: [{ kind: "pipe", type: i2.GuiPushPipe, name: "guiPush" }, { kind: "pipe", type: i3.SafePipe, name: "guiSafe" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureFooterPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-footer-panel]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [innerHTML]=\"bannerPanel$ | guiPush | guiSafe: 'html'\"\n\t class=\"gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid\">\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.StructureFooterPanelConfigArchive }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQVdqRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsb0JBQW9CO0lBRXRFLFlBQ2tCLGlDQUFvRSxFQUNyRixpQkFBb0MsRUFDcEMsVUFBc0I7UUFFdEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSnBCLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFLckYsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUNBQWlDO2FBQ3ZDLEVBQUUsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOzsySEFsQlcsNkJBQTZCOytHQUE3Qiw2QkFBNkIsOEZDZDFDLGlKQUdBOzRGRFdhLDZCQUE2QjtrQkFOekMsU0FBUzsrQkFDQyxpQ0FBaUMsbUJBRTFCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU3RydWN0dXJlQmFubmVyUGFuZWwge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuaW5pdE9ic2VydmFibGVzKCk7XG5cdH1cblxuXHRvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmVcblx0XHRcdFx0ICAgLm9uKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbCc7XG5cdH1cbn1cbiIsIjxkaXYgW2lubmVySFRNTF09XCJiYW5uZXJQYW5lbCQgfCBndWlQdXNoIHwgZ3VpU2FmZTogJ2h0bWwnXCJcblx0IGNsYXNzPVwiZ3VpLWZvb3Rlci1wYW5lbCBndWktcC02IGd1aS1ib3JkZXItdCBndWktYm9yZGVyLXQtc29saWRcIj5cbjwvZGl2PlxuIl19