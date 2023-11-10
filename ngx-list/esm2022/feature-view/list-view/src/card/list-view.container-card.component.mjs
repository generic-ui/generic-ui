import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/component/src/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/src/api/source.warehouse";
import * as i3 from "./template/list-view.card-template.archive";
import * as i4 from "@angular/common";
import * as i5 from "../../../../feature/structure/source/src/empty/empty-source.component";
import * as i6 from "./card-item/list-view.card-item.component";
export class ListViewContainerCardComponent extends SmartComponent {
    changeDetectorRef;
    structureId;
    structureSourceWarehouse;
    listCardTemplateArchive;
    items = [];
    cardTemplate;
    constructor(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.listCardTemplateArchive = listCardTemplateArchive;
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-flex-wrap');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-rounded');
    }
    ngOnInit() {
        this.subscribe(this.structureSourceWarehouse.onItems(this.structureId), (items) => {
            this.items = items.map(i => i.getSourceItem());
        });
        this.subscribe(this.listCardTemplateArchive.on(), (template) => {
            this.cardTemplate = template;
            this.changeDetectorRef.detectChanges();
        });
    }
    getSelectorName() {
        return 'gui-list-container-card';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewContainerCardComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.SourceWarehouse }, { token: i3.ListViewCardTemplateArchive }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ListViewContainerCardComponent, selector: "div[gui-list-container-card]", usesInheritance: true, ngImport: i0, template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: i6.ListViewCardItemComponent, selector: "div[gui-list-card-item][item][template]", inputs: ["item", "template"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewContainerCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-container-card]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SourceWarehouse }, { type: i3.ListViewCardTemplateArchive }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9zcmMvY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBc0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztBQWExRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsY0FBYztJQU1wQztJQUVUO0lBQ0E7SUFDQTtJQVJwQixLQUFLLEdBQWUsRUFBRSxDQUFDO0lBRXZCLFlBQVksQ0FBdUI7SUFFbkMsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsd0JBQXlDLEVBQ3pDLHVCQUFvRDtRQUN2RSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFMVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBaUI7UUFDekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE2QjtRQUd2RSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN2RCxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUNqQyxDQUFDLFFBQThCLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7d0dBekNXLDhCQUE4Qjs0RkFBOUIsOEJBQThCLDJGQ2hCM0MsK0tBT0E7OzRGRFNhLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDQyw4QkFBOEIsaUJBRXpCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL2l0ZW0vaXRlbSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3QtY29udGFpbmVyLWNhcmRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdGNhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4LXdyYXAnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbS0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1yb3VuZGVkJyk7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZS5vbkl0ZW1zKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGl0ZW1zOiBBcnJheTxJdGVtPikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gaXRlbXMubWFwKGkgPT4gaS5nZXRTb3VyY2VJdGVtKCkpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUub24oKSxcblx0XHRcdCh0ZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGUpID0+IHtcblx0XHRcdFx0dGhpcy5jYXJkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LWNvbnRhaW5lci1jYXJkJztcblx0fVxuXG59XG4iLCI8ZGl2ICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGl0ZW1zXCIgW2l0ZW1dPVwiZWxlbWVudFwiXG5cdCBbdGVtcGxhdGVdPVwiY2FyZFRlbXBsYXRlXCJcblx0IGd1aS1saXN0LWNhcmQtaXRlbT5cbjwvZGl2PlxuXG48ZGl2IFtpdGVtc109XCJpdGVtc1wiIGd1aS1lbXB0eS1zb3VyY2U+XG48L2Rpdj5cbiJdfQ==