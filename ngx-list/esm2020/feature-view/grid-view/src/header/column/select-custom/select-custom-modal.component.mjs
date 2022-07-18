import { Component } from '@angular/core';
import { useReactiveContext } from '../../../../../../feature/common/src/cdk/component/lib';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i3 from "@angular/common";
export class SelectCustomModalComponent {
    constructor(structureId, formationWarehouse) {
        this.structureId = structureId;
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
}
SelectCustomModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectCustomModalComponent, deps: [{ token: i1.StructureId }, { token: i2.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SelectCustomModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SelectCustomModalComponent, selector: "ng-component", ngImport: i0, template: `

		<ul>
			<li *ngFor="let sel of selection.getSelections()"
				(click)="sel.onClick()"
				[attr.id]="sel.key"
			>{{sel.text}}</li>
		</ul>

	`, isInline: true, dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectCustomModalComponent, decorators: [{
            type: Component,
            args: [{
                    template: `

		<ul>
			<li *ngFor="let sel of selection.getSelections()"
				(click)="sel.onClick()"
				[attr.id]="sel.key"
			>{{sel.text}}</li>
		</ul>

	`
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9jb2x1bW4vc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOzs7OztBQWdCNUYsTUFBTSxPQUFPLDBCQUEwQjtJQU10QyxZQUE2QixXQUF3QixFQUNqQyxrQkFBc0M7UUFEN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUgxRCxPQUFFLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztJQUkxQixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxFQUFFO2FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckUsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7O3VIQWpCVywwQkFBMEI7MkdBQTFCLDBCQUEwQixvREFYNUI7Ozs7Ozs7OztFQVNUOzJGQUVXLDBCQUEwQjtrQkFadEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUU7Ozs7Ozs7OztFQVNUO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IHVzZVJlYWN0aXZlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9jdXN0b20vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDx1bD5cblx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgc2VsIG9mIHNlbGVjdGlvbi5nZXRTZWxlY3Rpb25zKClcIlxuXHRcdFx0XHQoY2xpY2spPVwic2VsLm9uQ2xpY2soKVwiXG5cdFx0XHRcdFthdHRyLmlkXT1cInNlbC5rZXlcIlxuXHRcdFx0Pnt7c2VsLnRleHR9fTwvbGk+XG5cdFx0PC91bD5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEN1c3RvbU1vZGFsQ29tcG9uZW50IHtcblxuXHRzZWxlY3Rpb246IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbjtcblxuXHRyYyA9IHVzZVJlYWN0aXZlQ29udGV4dCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJjXG5cdFx0XHQuY29ubmVjdCh0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vbkN1c3RvbVNlbGVjdGlvbnModGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHQuc3Vic2NyaWJlQW5kUmVuZGVyKChzZWxlY3Rpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG5cdFx0XHR9KTtcblxuXHR9XG59XG4iXX0=