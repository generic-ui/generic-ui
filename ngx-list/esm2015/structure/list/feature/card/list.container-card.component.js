/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListCardTemplateArchive } from './template/list.card-template.archive';
export class ListContainerCardComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureSourceWarehouse
     * @param {?} listCardTemplateArchive
     */
    constructor(changeDetectorRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.listCardTemplateArchive = listCardTemplateArchive;
        this.items = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureSourceWarehouse
            .onEntities(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.items = items.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i.getData()));
            this.changeDetectorRef.detectChanges();
        }));
        this.listCardTemplateArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        (template) => {
            this.cardTemplate = template;
            this.changeDetectorRef.detectChanges();
        }));
    }
}
ListContainerCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-container-card',
                template: `

		<gui-list-card-item *ngFor="let element of items"
								 [item]="element"
								 [template]="cardTemplate">
		</gui-list-card-item>

		<gui-empty-source [items]="items">
		</gui-empty-source>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-list-container-card]': `"true"`
                }
            }] }
];
/** @nocollapse */
ListContainerCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureSourceWarehouse },
    { type: ListCardTemplateArchive }
];
if (false) {
    /** @type {?} */
    ListContainerCardComponent.prototype.items;
    /** @type {?} */
    ListContainerCardComponent.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListContainerCardComponent.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb250YWluZXItY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9saXN0LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBcUJoRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBYzs7Ozs7OztJQU03RCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsd0JBQWtELEVBQ2xELHVCQUFnRDtRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQUpvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQVBwRSxVQUFLLEdBQWUsRUFBRSxDQUFDO0lBU3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHdCQUF3QjthQUMzQixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsdUJBQXVCO2FBQzFCLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsUUFBMEIsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXBERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7O0VBVVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsaUNBQWlDLEVBQUUsUUFBUTtpQkFDM0M7YUFDRDs7OztZQTNCaUMsaUJBQWlCO1lBSzFDLFdBQVc7WUFIWCx3QkFBd0I7WUFLeEIsdUJBQXVCOzs7O0lBdUIvQiwyQ0FBdUI7O0lBRXZCLGtEQUErQjs7Ozs7SUFFbkIsdURBQXFEOzs7OztJQUM5RCxpREFBeUM7Ozs7O0lBQ3pDLDhEQUFtRTs7Ozs7SUFDbkUsNkRBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTGlzdENhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC5jYXJkLXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LWNvbnRhaW5lci1jYXJkJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktbGlzdC1jYXJkLWl0ZW0gKm5nRm9yPVwibGV0IGVsZW1lbnQgb2YgaXRlbXNcIlxuXHRcdFx0XHRcdFx0XHRcdCBbaXRlbV09XCJlbGVtZW50XCJcblx0XHRcdFx0XHRcdFx0XHQgW3RlbXBsYXRlXT1cImNhcmRUZW1wbGF0ZVwiPlxuXHRcdDwvZ3VpLWxpc3QtY2FyZC1pdGVtPlxuXG5cdFx0PGd1aS1lbXB0eS1zb3VyY2UgW2l0ZW1zXT1cIml0ZW1zXCI+XG5cdFx0PC9ndWktZW1wdHktc291cmNlPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC1jb250YWluZXItY2FyZF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbnRhaW5lckNhcmRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRjYXJkVGVtcGxhdGU6IExpc3RDYXJkVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZVxuXHRcdFx0Lm9uRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0ZW1wbGF0ZTogTGlzdENhcmRUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNhcmRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==