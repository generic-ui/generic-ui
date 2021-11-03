import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureBannerPanel } from '../structure-banner-panel';
import * as i0 from "@angular/core";
import * as i1 from "./structure.footer-panel.config-archive";
import * as i2 from "../../../../../../common/cdk/sanitize/safe.pipe";
const _c0 = ["gui-structure-footer-panel", ""];
export class StructureFooterPanelComponent extends StructureBannerPanel {
    constructor(structureFooterPanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    onBannerPanelConfig() {
        return this.structureFooterPanelConfigArchive.on();
    }
    getSelectorName() {
        return 'gui-structure-footer-panel';
    }
    getPanelTitle() {
        return 'Footer panel';
    }
}
StructureFooterPanelComponent.ɵfac = function StructureFooterPanelComponent_Factory(t) { return new (t || StructureFooterPanelComponent)(i0.ɵɵdirectiveInject(i1.StructureFooterPanelConfigArchive), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureFooterPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureFooterPanelComponent, selectors: [["div", "gui-structure-footer-panel", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 4, consts: [[1, "gui-footer-panel", "gui-p-6", "gui-border-t", "gui-border-t-solid", 3, "innerHTML"]], template: function StructureFooterPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵpipe(1, "guiSafe");
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 1, ctx.bannerPanel, "html"), i0.ɵɵsanitizeHtml);
    } }, pipes: [i2.SafePipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureFooterPanelComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-footer-panel]',
                templateUrl: './structure.footer-panel.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.StructureFooterPanelConfigArchive }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdySCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFXakUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLG9CQUFvQjtJQUV0RSxZQUE2QixpQ0FBb0UsRUFDOUYsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhULHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFJakcsQ0FBQztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzswR0FsQlcsNkJBQTZCO2dGQUE3Qiw2QkFBNkI7UUNkMUMseUJBRU07OztRQUZELDRGQUEyQzs7dUZEY25DLDZCQUE2QjtjQU56QyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCBleHRlbmRzIFN0cnVjdHVyZUJhbm5lclBhbmVsIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUub24oKTtcblx0fVxuXG5cdGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWwnO1xuXHR9XG5cblx0Z2V0UGFuZWxUaXRsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnRm9vdGVyIHBhbmVsJztcblx0fVxufVxuIiwiPGRpdiBbaW5uZXJIVE1MXT1cImJhbm5lclBhbmVsIHwgZ3VpU2FmZTogJ2h0bWwnXCJcblx0IGNsYXNzPVwiZ3VpLWZvb3Rlci1wYW5lbCBndWktcC02IGd1aS1ib3JkZXItdCBndWktYm9yZGVyLXQtc29saWRcIj5cbjwvZGl2PlxuIl19