import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/component/src/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/src/api/source.warehouse";
import * as i3 from "./template/list-view-template.archive";
import * as i4 from "@angular/common";
import * as i5 from "../../../../feature/structure/source/src/empty/empty-source.component";
import * as i6 from "./list-item/list-view-item.component";
export class ListViewSourceComponent extends SmartComponent {
    changeDetectorRef;
    structureId;
    sourceWarehouse;
    listViewTemplateArchive;
    source = [];
    template;
    constructor(changeDetectorRef, elementRef, structureId, sourceWarehouse, listViewTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.sourceWarehouse = sourceWarehouse;
        this.listViewTemplateArchive = listViewTemplateArchive;
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.subscribe(this.sourceWarehouse.onItems(this.structureId), (items) => {
            this.source = items.map(i => i.getSourceItem());
        });
        this.subscribe(this.listViewTemplateArchive.on(), (template) => {
            this.template = template;
        });
    }
    getSelectorName() {
        return 'gui-list-view-source';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewSourceComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.SourceWarehouse }, { token: i3.ListViewTemplateArchive }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ListViewSourceComponent, selector: "div[gui-list-view-source]", usesInheritance: true, ngImport: i0, template: "<div *ngFor=\"let element of source\"\n\t [item]=\"element\"\n\t [template]=\"template\"\n\t gui-list-view-item>\n</div>\n\n<div [items]=\"source\" gui-empty-source>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: i6.ListViewItemComponent, selector: "div[gui-list-view-item][item][template]", inputs: ["item", "template"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewSourceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-view-source]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngFor=\"let element of source\"\n\t [item]=\"element\"\n\t [template]=\"template\"\n\t gui-list-view-item>\n</div>\n\n<div [items]=\"source\" gui-empty-source>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SourceWarehouse }, { type: i3.ListViewTemplateArchive }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9zcmMvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWlDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7Ozs7Ozs7QUFZMUYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWM7SUFNN0I7SUFFVDtJQUNBO0lBQ0E7SUFScEIsTUFBTSxHQUFlLEVBQUUsQ0FBQztJQUV4QixRQUFRLENBQW1CO0lBRTNCLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLHVCQUFnRDtRQUNuRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFMVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBRW5FLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDOUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUNELENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsRUFDakMsQ0FBQyxRQUEwQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDMUIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7d0dBbENXLHVCQUF1Qjs0RkFBdkIsdUJBQXVCLHdGQ2RwQyxpTEFRQTs7NEZETWEsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNDLDJCQUEyQixpQkFFdEIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvaXRlbS9pdGVtJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3Qtdmlldy1zb3VyY2VdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NvdXJjZUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zb3VyY2VXYXJlaG91c2Uub25JdGVtcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChpdGVtczogQXJyYXk8SXRlbT4pID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBpdGVtcy5tYXAoaSA9PiBpLmdldFNvdXJjZUl0ZW0oKSk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5saXN0Vmlld1RlbXBsYXRlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3Qtdmlldy1zb3VyY2UnO1xuXHR9XG59XG4iLCI8ZGl2ICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIHNvdXJjZVwiXG5cdCBbaXRlbV09XCJlbGVtZW50XCJcblx0IFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiXG5cdCBndWktbGlzdC12aWV3LWl0ZW0+XG48L2Rpdj5cblxuPGRpdiBbaXRlbXNdPVwic291cmNlXCIgZ3VpLWVtcHR5LXNvdXJjZT5cbjwvZGl2PlxuIl19