import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DynamicallyCreatedComponent, useReactiveContext } from '../../../../common/src/cdk/component/lib';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i4 from "@angular/common";
export class SelectCustomModalComponent extends DynamicallyCreatedComponent {
    constructor(elRef, structureId, formationPublisher, formationWarehouse) {
        super(elRef);
        this.structureId = structureId;
        this.formationPublisher = formationPublisher;
        this.formationWarehouse = formationWarehouse;
        this.rc = useReactiveContext();
    }
    ngOnInit() {
        this.rc
            .connect(this.formationWarehouse.onCustomSelections(this.structureId))
            .subscribeAndRender((selection) => {
            this.selection = selection;
        });
    }
    selectCustom(id) {
        this.formationPublisher.selectCustom(id, this.structureId);
    }
    getSelectorName() {
        return 'gui-select-custom-modal';
    }
}
SelectCustomModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectCustomModalComponent, deps: [{ token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.FormationPublisher }, { token: i3.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SelectCustomModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: SelectCustomModalComponent, selector: "div[gui-select-custom-modal]", usesInheritance: true, ngImport: i0, template: `

		<ul>
			<li *ngFor="let sel of selection.getSelections()"
				(click)="selectCustom(sel.getCustomSelectId())"
				[attr.id]="sel.key">
				{{sel.text}}
			</li>
		</ul>

	`, isInline: true, styles: [".gui-select-custom-modal{background:#fff;border:1px solid #d6d6d6;border-radius:0 0 4px 4px}.gui-select-custom-modal ul{list-style:none;margin:0;padding:0}.gui-select-custom-modal ul li{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;box-sizing:border-box;color:#333;cursor:pointer;display:block;font:14px Arial;padding:8px 12px}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectCustomModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-select-custom-modal]', template: `

		<ul>
			<li *ngFor="let sel of selection.getSelections()"
				(click)="selectCustom(sel.getCustomSelectId())"
				[attr.id]="sel.key">
				{{sel.text}}
			</li>
		</ul>

	`, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".gui-select-custom-modal{background:#fff;border:1px solid #d6d6d6;border-radius:0 0 4px 4px}.gui-select-custom-modal ul{list-style:none;margin:0;padding:0}.gui-select-custom-modal ul li{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border-color:#d6d6d6;box-sizing:border-box;color:#333;cursor:pointer;display:block;font:14px Arial;padding:8px 12px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FormationPublisher }, { type: i3.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7QUFpRDNHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSwyQkFBMkI7SUFNMUUsWUFBWSxLQUFpQixFQUNULFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSE0sZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTDFELE9BQUUsR0FBRyxrQkFBa0IsRUFBRSxDQUFDO0lBTzFCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEVBQUU7YUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyRSxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUEyQjtRQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzt1SEEzQlcsMEJBQTBCOzJHQUExQiwwQkFBMEIsMkZBekM1Qjs7Ozs7Ozs7OztFQVVUOzJGQStCVywwQkFBMEI7a0JBM0N0QyxTQUFTOytCQUNDLDhCQUE4QixZQUM5Qjs7Ozs7Ozs7OztFQVVULG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50LCB1c2VSZWFjdGl2ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2N1c3RvbS9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVNlbGVjdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvY3VzdG9tL2Zvcm1hdGlvbi5jdXN0b20tc2VsZWN0LmlkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zZWxlY3QtY3VzdG9tLW1vZGFsXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8dWw+XG5cdFx0XHQ8bGkgKm5nRm9yPVwibGV0IHNlbCBvZiBzZWxlY3Rpb24uZ2V0U2VsZWN0aW9ucygpXCJcblx0XHRcdFx0KGNsaWNrKT1cInNlbGVjdEN1c3RvbShzZWwuZ2V0Q3VzdG9tU2VsZWN0SWQoKSlcIlxuXHRcdFx0XHRbYXR0ci5pZF09XCJzZWwua2V5XCI+XG5cdFx0XHRcdHt7c2VsLnRleHR9fVxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRzdHlsZXM6IFtgXG5cblx0XHQuZ3VpLXNlbGVjdC1jdXN0b20tbW9kYWwge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcblx0XHR9XG5cblx0XHQuZ3VpLXNlbGVjdC1jdXN0b20tbW9kYWwgdWwge1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0fVxuXG5cdFx0Lmd1aS1zZWxlY3QtY3VzdG9tLW1vZGFsIHVsIGxpIHtcblx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdGJvcmRlci1jb2xvcjogI2Q2ZDZkNjtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0Zm9udDogMTRweCBBcmlhbDtcblx0XHRcdHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xuXHRcdH1cblxuXHRgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDdXN0b21Nb2RhbENvbXBvbmVudCBleHRlbmRzIER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCB7XG5cblx0c2VsZWN0aW9uOiBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb247XG5cblx0cmMgPSB1c2VSZWFjdGl2ZUNvbnRleHQoKTtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uUHVibGlzaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJjXG5cdFx0XHQuY29ubmVjdCh0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vbkN1c3RvbVNlbGVjdGlvbnModGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHQuc3Vic2NyaWJlQW5kUmVuZGVyKChzZWxlY3Rpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdEN1c3RvbShpZDogRm9ybWF0aW9uQ3VzdG9tU2VsZWN0SWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvblB1Ymxpc2hlci5zZWxlY3RDdXN0b20oaWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlbGVjdC1jdXN0b20tbW9kYWwnO1xuXHR9XG59XG4iXX0=