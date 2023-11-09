import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../manager/structure.column-manager.component";
import * as i2 from "../../../../../feature/l10n/src/translation.pipe";
export class StructureDialogColumnManagerComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
    }
    getSelectorName() {
        return 'gui-structure-dialog-column-manager';
    }
}
StructureDialogColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureDialogColumnManagerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureDialogColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureDialogColumnManagerComponent, selector: "div[gui-structure-dialog-column-manager]", usesInheritance: true, ngImport: i0, template: "<div class=\"gui-dialog-title\">{{'columnManagerModalTitle' | guiTranslate}}</div>\n\n<div class=\"-gui-mx-10\" gui-structure-column-manager>\n</div>\n", dependencies: [{ kind: "component", type: i1.StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]" }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureDialogColumnManagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-dialog-column-manager]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-dialog-title\">{{'columnManagerModalTitle' | guiTranslate}}</div>\n\n<div class=\"-gui-mx-10\" gui-structure-column-manager>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOzs7O0FBUTdGLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSxjQUFjO0lBRXhFLFlBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHFDQUFxQyxDQUFDO0lBQzlDLENBQUM7O21JQVRXLHFDQUFxQzt1SEFBckMscUNBQXFDLHVHQ1RsRCx5SkFJQTs0RkRLYSxxQ0FBcUM7a0JBTmpELFNBQVM7K0JBQ0MsMENBQTBDLG1CQUVuQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtZGlhbG9nLWNvbHVtbi1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWRpYWxvZy1jb2x1bW4tbWFuYWdlcic7XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJndWktZGlhbG9nLXRpdGxlXCI+e3snY29sdW1uTWFuYWdlck1vZGFsVGl0bGUnIHwgZ3VpVHJhbnNsYXRlfX08L2Rpdj5cblxuPGRpdiBjbGFzcz1cIi1ndWktbXgtMTBcIiBndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyPlxuPC9kaXY+XG4iXX0=