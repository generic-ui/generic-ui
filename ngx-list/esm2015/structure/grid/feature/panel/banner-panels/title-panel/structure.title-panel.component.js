import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureBannerPanel } from '../structure-banner-panel';
import * as i0 from "@angular/core";
import * as i1 from "./structure.title-panel.config-archive";
import * as i2 from "../../../../../../common/cdk/sanitize/safe.pipe";
const _c0 = ["gui-structure-title-panel", ""];
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
StructureTitlePanelComponent.ɵfac = function StructureTitlePanelComponent_Factory(t) { return new (t || StructureTitlePanelComponent)(i0.ɵɵdirectiveInject(i1.StructureTitlePanelConfigArchive), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureTitlePanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureTitlePanelComponent, selectors: [["div", "gui-structure-title-panel", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 4, consts: [[1, "gui-title-panel", "gui-p-6", "gui-border-b", "gui-border-b-solid", 3, "innerHTML"]], template: function StructureTitlePanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵpipe(1, "guiSafe");
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 1, ctx.bannerPanel, "html"), i0.ɵɵsanitizeHtml);
    } }, pipes: [i2.SafePipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureTitlePanelComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-title-panel]',
                templateUrl: './structure.title-panel.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.StructureTitlePanelConfigArchive }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBV2pFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxvQkFBb0I7SUFFckUsWUFBNkIsZ0NBQWtFLEVBQzVGLGlCQUFvQyxFQUNwQyxVQUFzQjtRQUN4QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFIVCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO0lBSS9GLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQzs7d0dBbEJXLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FDZHpDLHlCQUVNOzs7UUFGRCw0RkFBMkM7O3VGRGNuQyw0QkFBNEI7Y0FOeEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU3RydWN0dXJlQmFubmVyUGFuZWwge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpO1xuXHR9XG5cblx0Z2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsJztcblx0fVxuXG5cdGdldFBhbmVsVGl0bGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ1RpdGxlIHBhbmVsJztcblx0fVxuXG59XG4iLCI8ZGl2IFtpbm5lckhUTUxdPVwiYmFubmVyUGFuZWwgfCBndWlTYWZlOiAnaHRtbCdcIlxuXHQgY2xhc3M9XCJndWktdGl0bGUtcGFuZWwgZ3VpLXAtNiBndWktYm9yZGVyLWIgZ3VpLWJvcmRlci1iLXNvbGlkXCI+XG48L2Rpdj5cbiJdfQ==