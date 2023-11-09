import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { StructureSelectCustomService } from '../../../../../feature/structure/formation/src/select-custom/structure.select-custom.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/composition/src/api/global/composition.id";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../feature/structure/formation/src/select-custom/structure.select-custom.service";
import * as i4 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i5 from "../../../../../core/structure/sorting/src/api/sorting.publisher";
import * as i6 from "@angular/common";
import * as i7 from "../../../../../feature/structure/formation/src/select-all/select-all.component";
import * as i8 from "../menu/trigger/structure.column-config-trigger.component";
import * as i9 from "../../../../../feature/common/icons/arrow/structure.arrow-icon.component";
export class StructureHeaderColumnsComponent extends SmartComponent {
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, structureSelectCustomService, formationCommandDispatcher, sortingCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.structureSelectCustomService = structureSelectCustomService;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.showSelection = false;
        this.showCustom = true;
    }
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    openConfigDialog() {
        this.structureSelectCustomService.open(this.selectCustomContainer);
    }
    getSelectorName() {
        return 'gui-structure-header-columns';
    }
}
StructureHeaderColumnsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureHeaderColumnsComponent, deps: [{ token: i0.ElementRef }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }, { token: i1.CompositionId }, { token: i2.StructureId }, { token: i3.StructureSelectCustomService }, { token: i4.FormationPublisher }, { token: i5.SortingPublisher }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderColumnsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureHeaderColumnsComponent, selector: "div[gui-structure-header-columns][columns]", inputs: { columns: "columns", showSelection: "showSelection" }, providers: [
        StructureColumnConfigService,
        StructureSelectCustomService
    ], viewQueries: [{ propertyName: "selectCustomContainer", first: true, predicate: ["selectCustomContainer"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"showSelection\"\n\t class=\"gui-header-cell gui-row-checkbox\n\t gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<!--<div *ngIf=\"showCustom\"-->\n<!--\t class=\"gui-header-cell gui-row-checkbox-->\n<!--\t gui-flex gui-justify-between-->\n<!--\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border-->\n<!--\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">-->\n<!--\t<div #selectCustomContainer-->\n<!--\t\t (click)=\"openConfigDialog()\">-->\n<!--\t\t<div gui-structure-menu-icon></div>-->\n<!--\t</div>-->\n<!--</div>-->\n\n<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [class]=\"column.getCssClasses()\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t [style]=\"column.getStyles()\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div *ngIf=\"!column.isNoSort()\"\n\t\t\t [position]=\"column.getSortStatus()\"\n\t\t\t [sort]=\"true\"\n\t\t\t class=\"gui-ml-6\"\n\t\t\t gui-structure-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<div [column]=\"column\"\n\t\t\t gui-structure-column-config-trigger>\n\t\t</div>\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i7.SelectAllComponent, selector: "div[gui-select-all]" }, { kind: "component", type: i8.StructureColumnConfigTriggerComponent, selector: "div[gui-structure-column-config-trigger]", inputs: ["column"] }, { kind: "component", type: i9.StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureHeaderColumnsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header-columns][columns]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureColumnConfigService,
                        StructureSelectCustomService
                    ], template: "<div *ngIf=\"showSelection\"\n\t class=\"gui-header-cell gui-row-checkbox\n\t gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<!--<div *ngIf=\"showCustom\"-->\n<!--\t class=\"gui-header-cell gui-row-checkbox-->\n<!--\t gui-flex gui-justify-between-->\n<!--\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border-->\n<!--\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">-->\n<!--\t<div #selectCustomContainer-->\n<!--\t\t (click)=\"openConfigDialog()\">-->\n<!--\t\t<div gui-structure-menu-icon></div>-->\n<!--\t</div>-->\n<!--</div>-->\n\n<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [class]=\"column.getCssClasses()\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t [style]=\"column.getStyles()\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div *ngIf=\"!column.isNoSort()\"\n\t\t\t [position]=\"column.getSortStatus()\"\n\t\t\t [sort]=\"true\"\n\t\t\t class=\"gui-ml-6\"\n\t\t\t gui-structure-arrow-icon>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<div [column]=\"column\"\n\t\t\t gui-structure-column-config-trigger>\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.StructureSelectCustomService }, { type: i4.FormationPublisher }, { type: i5.SortingPublisher }]; }, propDecorators: { selectCustomContainer: [{
                type: ViewChild,
                args: ['selectCustomContainer', { read: ElementRef, static: false }]
            }], columns: [{
                type: Input
            }], showSelection: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL2NvbHVtbi9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqSixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFLN0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOEZBQThGLENBQUM7Ozs7Ozs7Ozs7O0FBYTVJLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxjQUFjO0lBYWxFLFlBQTZCLFVBQXNCLEVBQy9CLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixXQUF3QixFQUN4Qiw0QkFBMEQsRUFDMUQsMEJBQThDLEVBQzlDLHdCQUEwQztRQUM3RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFSVCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzFELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBb0I7UUFDOUMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFrQjtRQVg5RCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQVksSUFBSSxDQUFDO0lBVzNCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBK0I7UUFFekMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEc7SUFDRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLDhCQUE4QixDQUFDO0lBQ3ZDLENBQUM7OzZIQXJDVywrQkFBK0I7aUhBQS9CLCtCQUErQixxSUFMaEM7UUFDViw0QkFBNEI7UUFDNUIsNEJBQTRCO0tBQzVCLHFJQUkyQyxVQUFVLG9EQ3hCdkQsZ3BEQWtEQTs0RkQ1QmEsK0JBQStCO2tCQVYzQyxTQUFTOytCQUNDLDRDQUE0QyxtQkFFckMsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDViw0QkFBNEI7d0JBQzVCLDRCQUE0QjtxQkFDNUI7eVRBS1EscUJBQXFCO3NCQUQ3QixTQUFTO3VCQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUl2RSxPQUFPO3NCQUROLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VsZWN0Q3VzdG9tU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWN1c3RvbS9zdHJ1Y3R1cmUuc2VsZWN0LWN1c3RvbS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1oZWFkZXItY29sdW1uc11bY29sdW1uc10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UsXG5cdFx0U3RydWN0dXJlU2VsZWN0Q3VzdG9tU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgnc2VsZWN0Q3VzdG9tQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IHNlbGVjdEN1c3RvbUNvbnRhaW5lcj86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdEBJbnB1dCgpXG5cdHNob3dTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzaG93Q3VzdG9tOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlOiBTdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHRpZiAoY29sdW1uLmlzU29ydEVuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5zb3J0aW5nQ29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU29ydChjb2x1bW4uZ2V0RmllbGRJZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLm9wZW4odGhpcy5zZWxlY3RDdXN0b21Db250YWluZXIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItY29sdW1ucyc7XG5cdH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJzaG93U2VsZWN0aW9uXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1yb3ctY2hlY2tib3hcblx0IGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblx0PGRpdiBndWktc2VsZWN0LWFsbD48L2Rpdj5cbjwvZGl2PlxuXG48IS0tPGRpdiAqbmdJZj1cInNob3dDdXN0b21cIi0tPlxuPCEtLVx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1yb3ctY2hlY2tib3gtLT5cbjwhLS1cdCBndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuLS0+XG48IS0tXHQgZ3VpLW92ZXJmbG93LWhpZGRlbiBndWktcmVsYXRpdmUgZ3VpLXB5LTAgZ3VpLXB4LTYgZ3VpLWJveC1ib3JkZXItLT5cbjwhLS1cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj4tLT5cbjwhLS1cdDxkaXYgI3NlbGVjdEN1c3RvbUNvbnRhaW5lci0tPlxuPCEtLVx0XHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiPi0tPlxuPCEtLVx0XHQ8ZGl2IGd1aS1zdHJ1Y3R1cmUtbWVudS1pY29uPjwvZGl2Pi0tPlxuPCEtLVx0PC9kaXY+LS0+XG48IS0tPC9kaXY+LS0+XG5cbjxkaXYgKGNsaWNrKT1cInRvZ2dsZVNvcnQoY29sdW1uKVwiXG5cdCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIlxuXHQgW2NsYXNzXT1cImNvbHVtbi5nZXRDc3NDbGFzc2VzKClcIlxuXHQgW25nQ2xhc3NdPVwieydndWktaGVhZGVyLXNvcnRhYmxlJzogY29sdW1uLmlzU29ydEVuYWJsZWQoKX1cIlxuXHQgW3N0eWxlLndpZHRoLnB4XT1cImNvbHVtbi53aWR0aFwiXG5cdCBbc3R5bGVdPVwiY29sdW1uLmdldFN0eWxlcygpXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblx0IGd1aS1vdmVyZmxvdy1oaWRkZW4gZ3VpLXJlbGF0aXZlIGd1aS1weS0wIGd1aS1weC02IGd1aS1ib3gtYm9yZGVyXG5cdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci10aXRsZVwiPlxuXHRcdDxuZy1jb250YWluZXJcblx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLnZpZXdUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdFx0XHQgICBjb250ZXh0OiBjb2x1bW4uY29udGV4dFwiPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PGRpdiAqbmdJZj1cIiFjb2x1bW4uaXNOb1NvcnQoKVwiXG5cdFx0XHQgW3Bvc2l0aW9uXT1cImNvbHVtbi5nZXRTb3J0U3RhdHVzKClcIlxuXHRcdFx0IFtzb3J0XT1cInRydWVcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLW1sLTZcIlxuXHRcdFx0IGd1aS1zdHJ1Y3R1cmUtYXJyb3ctaWNvbj5cblx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51XCI+XG5cdFx0PGRpdiBbY29sdW1uXT1cImNvbHVtblwiXG5cdFx0XHQgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXRyaWdnZXI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG4iXX0=