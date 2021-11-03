import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../panel/banner-panels/title-panel/structure.title-panel.config-archive";
import * as i2 from "../../panel/banner-panels/footer-panel/structure.footer-panel.config-archive";
export class StructurePanelGate extends Gate {
    constructor(structureTitlePanelConfigArchive, structureFooterPanelConfigArchive) {
        super();
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('titlePanel', changes)) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (this.isDefined('footerPanel', changes)) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
    }
}
StructurePanelGate.ɵfac = function StructurePanelGate_Factory(t) { return new (t || StructurePanelGate)(i0.ɵɵdirectiveInject(i1.StructureTitlePanelConfigArchive), i0.ɵɵdirectiveInject(i2.StructureFooterPanelConfigArchive)); };
StructurePanelGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructurePanelGate, selectors: [["gui-structure", "titlePanel", "", "footerPanel", ""]], inputs: { titlePanel: "titlePanel", footerPanel: "footerPanel" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructurePanelGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[titlePanel][footerPanel]'
            }]
    }], function () { return [{ type: i1.StructureTitlePanelConfigArchive }, { type: i2.StructureFooterPanelConfigArchive }]; }, { titlePanel: [{
            type: Input
        }], footerPanel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhbmVsLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9wYW5lbC9zdHJ1Y3R1cmUtcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFTaEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLElBQUk7SUFRM0MsWUFBNkIsZ0NBQWtFLEVBQzNFLGlDQUFvRTtRQUN2RixLQUFLLEVBQUUsQ0FBQztRQUZvQixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQzNFLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFFeEYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQztRQUVqRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7O29GQXRCVyxrQkFBa0I7cUVBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsd0NBQXdDO2FBQ2xEO21JQUlBLFVBQVU7a0JBRFQsS0FBSztZQUlOLFdBQVc7a0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3RpdGxlUGFuZWxdW2Zvb3RlclBhbmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFuZWxHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dGl0bGVQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc7XG5cblx0QElucHV0KClcblx0Zm9vdGVyUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVQYW5lbEdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3RpdGxlUGFuZWwnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMudGl0bGVQYW5lbCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdmb290ZXJQYW5lbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMuZm9vdGVyUGFuZWwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=