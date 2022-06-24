import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
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
StructurePanelGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructurePanelGate, deps: [{ token: i1.StructureTitlePanelConfigArchive }, { token: i2.StructureFooterPanelConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructurePanelGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructurePanelGate, selector: "gui-structure[titlePanel][footerPanel]", inputs: { titlePanel: "titlePanel", footerPanel: "footerPanel" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructurePanelGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[titlePanel][footerPanel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureTitlePanelConfigArchive }, { type: i2.StructureFooterPanelConfigArchive }]; }, propDecorators: { titlePanel: [{
                type: Input
            }], footerPanel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhbmVsLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvZ2F0ZS9wYW5lbC9zdHJ1Y3R1cmUtcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFTckUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLElBQUk7SUFRM0MsWUFBNkIsZ0NBQWtFLEVBQzNFLGlDQUFvRTtRQUN2RixLQUFLLEVBQUUsQ0FBQztRQUZvQixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQzNFLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFFeEYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQztRQUVqRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7O2dIQXRCVyxrQkFBa0I7b0dBQWxCLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSx3Q0FBd0M7aUJBQ2xEO3VLQUlBLFVBQVU7c0JBRFQsS0FBSztnQkFJTixXQUFXO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFuZWwvYmFubmVyLXBhbmVscy9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdGl0bGVQYW5lbF1bZm9vdGVyUGFuZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYW5lbEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0aXRsZVBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZztcblxuXHRASW5wdXQoKVxuXHRmb290ZXJQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVBhbmVsR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndGl0bGVQYW5lbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy50aXRsZVBhbmVsKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2Zvb3RlclBhbmVsJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy5mb290ZXJQYW5lbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==