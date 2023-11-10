import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../feature/common/component/src/smart-component';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../config/structure.column-menu-config.archive";
import * as i2 from "../structure.column-config.service";
import * as i3 from "@angular/common";
import * as i4 from "../../../../../../feature/gui-angular/template/if/gui.if.directive";
import * as i5 from "../../../../../../feature/common/icons/menu/structure.column-menu-icon.component";
export class StructureColumnConfigTriggerComponent extends SmartComponent {
    elementRef;
    changeDetectorRef;
    structureColumnMenuConfigArchive;
    structureColumnConfigService;
    headerDialogContainer;
    column;
    isEnabled$ = this.selectIsEnabled();
    constructor(elementRef, changeDetectorRef, structureColumnMenuConfigArchive, structureColumnConfigService) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    openConfigDialog() {
        this.structureColumnConfigService.open(this.headerDialogContainer, this.column);
    }
    // closeConfigDialog(): void {
    // 	this.structureColumnConfigService.close();
    // }
    getSelectorName() {
        return 'gui-structure-column-config-trigger';
    }
    selectIsEnabled() {
        return this.structureColumnMenuConfigArchive
            .on()
            .pipe(hermesMap((config) => {
            return config.isEnabled();
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnConfigTriggerComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.StructureColumnMenuConfigArchive }, { token: i2.StructureColumnConfigService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureColumnConfigTriggerComponent, selector: "div[gui-structure-column-config-trigger]", inputs: { column: "column" }, viewQueries: [{ propertyName: "headerDialogContainer", first: true, predicate: ["headerDialogContainer"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div #headerDialogContainer\n\t (click)=\"openConfigDialog()\"\n\t *guiIf=\"isEnabled$\"\n\t class=\"gui-header-menu-icon-wrapper\">\n\n\t<div [ngClass]=\"'gui-header-menu-icon'\" gui-structure-menu-icon></div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.GuiIfDirective, selector: "[guiIf]", inputs: ["guiIf"] }, { kind: "component", type: i5.StructureColumnMenuIconComponent, selector: "div[gui-structure-menu-icon]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnConfigTriggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-trigger]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #headerDialogContainer\n\t (click)=\"openConfigDialog()\"\n\t *guiIf=\"isEnabled$\"\n\t class=\"gui-header-menu-icon-wrapper\">\n\n\t<div [ngClass]=\"'gui-header-menu-icon'\" gui-structure-menu-icon></div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.StructureColumnMenuConfigArchive }, { type: i2.StructureColumnConfigService }]; }, propDecorators: { headerDialogContainer: [{
                type: ViewChild,
                args: ['headerDialogContainer', { read: ElementRef, static: false }]
            }], column: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9tZW51L3RyaWdnZXIvc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9tZW51L3RyaWdnZXIvc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt2SSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFaEcsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQVNqRSxNQUFNLE9BQU8scUNBQXNDLFNBQVEsY0FBYztJQVUzQztJQUNUO0lBQ0E7SUFDQTtJQVZYLHFCQUFxQixDQUFjO0lBRzVDLE1BQU0sQ0FBMEI7SUFFdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUU3QyxZQUE2QixVQUFzQixFQUMvQixpQkFBb0MsRUFDcEMsZ0NBQWtFLEVBQ2xFLDRCQUEwRDtRQUM3RSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFKVCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBRTlFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDhCQUE4QjtJQUM5Qiw4Q0FBOEM7SUFDOUMsSUFBSTtJQUVNLGVBQWU7UUFDeEIsT0FBTyxxQ0FBcUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sZUFBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxnQ0FBZ0M7YUFDdEMsRUFBRSxFQUFFO2FBQ0osSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRTtZQUMvQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzt3R0FyQ1cscUNBQXFDOzRGQUFyQyxxQ0FBcUMseU5BRUwsVUFBVSxvRENsQnZELGdPQVFBOzs0RkRRYSxxQ0FBcUM7a0JBTmpELFNBQVM7K0JBQ0MsMENBQTBDLG1CQUVuQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzJOQUs1QixxQkFBcUI7c0JBRDdCLFNBQVM7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBSXZFLE1BQU07c0JBREwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctdHJpZ2dlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyRGlhbG9nQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IGhlYWRlckRpYWxvZ0NvbnRhaW5lcj86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRyZWFkb25seSBpc0VuYWJsZWQkID0gdGhpcy5zZWxlY3RJc0VuYWJsZWQoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0b3BlbkNvbmZpZ0RpYWxvZygpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Uub3Blbih0aGlzLmhlYWRlckRpYWxvZ0NvbnRhaW5lciwgdGhpcy5jb2x1bW4pO1xuXHR9XG5cblx0Ly8gY2xvc2VDb25maWdEaWFsb2coKTogdm9pZCB7XG5cdC8vIFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdC8vIH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctdHJpZ2dlcic7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdElzRW5hYmxlZCgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0XHQgICAub24oKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbmZpZy5pc0VuYWJsZWQoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiIsIjxkaXYgI2hlYWRlckRpYWxvZ0NvbnRhaW5lclxuXHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiXG5cdCAqZ3VpSWY9XCJpc0VuYWJsZWQkXCJcblx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWljb24td3JhcHBlclwiPlxuXG5cdDxkaXYgW25nQ2xhc3NdPVwiJ2d1aS1oZWFkZXItbWVudS1pY29uJ1wiIGd1aS1zdHJ1Y3R1cmUtbWVudS1pY29uPjwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==