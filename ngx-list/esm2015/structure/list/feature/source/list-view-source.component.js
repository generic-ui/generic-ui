/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
export class ListViewSourceComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureSourceWarehouse
     * @param {?} containerTemplateArchive
     */
    constructor(changeDetectorRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.containerTemplateArchive = containerTemplateArchive;
        this.source = [];
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
            this.source = items.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i.getData()));
            this.changeDetectorRef.detectChanges();
        }));
        this.containerTemplateArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        (template) => {
            this.template = template;
            this.changeDetectorRef.detectChanges();
        }));
    }
}
ListViewSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-view-source',
                template: `

		<gui-list-view-item *ngFor="let element of source"
							[item]="element"
							[template]="template">
		</gui-list-view-item>

		<gui-empty-source [items]="source">
		</gui-empty-source>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-list-view-source]': `"true"`
                }
            }] }
];
/** @nocollapse */
ListViewSourceComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureSourceWarehouse },
    { type: ListViewTemplateArchive }
];
if (false) {
    /** @type {?} */
    ListViewSourceComponent.prototype.source;
    /** @type {?} */
    ListViewSourceComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.containerTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFxQmhGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7O0lBTTFELFlBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4Qix3QkFBa0QsRUFDbEQsd0JBQWlEO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBSm9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBUHJFLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFTeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsd0JBQXdCO2FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxRQUEwQixFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7RUFVVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDTCw4QkFBOEIsRUFBRSxRQUFRO2lCQUN4QzthQUNEOzs7O1lBMUJpQyxpQkFBaUI7WUFJMUMsV0FBVztZQUhYLHdCQUF3QjtZQUt4Qix1QkFBdUI7Ozs7SUF1Qi9CLHlDQUF3Qjs7SUFFeEIsMkNBQTJCOzs7OztJQUVmLG9EQUFxRDs7Ozs7SUFDOUQsOENBQXlDOzs7OztJQUN6QywyREFBbUU7Ozs7O0lBQ25FLDJEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlldy1zb3VyY2UnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1saXN0LXZpZXctaXRlbSAqbmdGb3I9XCJsZXQgZWxlbWVudCBvZiBzb3VyY2VcIlxuXHRcdFx0XHRcdFx0XHRbaXRlbV09XCJlbGVtZW50XCJcblx0XHRcdFx0XHRcdFx0W3RlbXBsYXRlXT1cInRlbXBsYXRlXCI+XG5cdFx0PC9ndWktbGlzdC12aWV3LWl0ZW0+XG5cblx0XHQ8Z3VpLWVtcHR5LXNvdXJjZSBbaXRlbXNdPVwic291cmNlXCI+XG5cdFx0PC9ndWktZW1wdHktc291cmNlPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC12aWV3LXNvdXJjZV0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0dGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Vcblx0XHRcdC5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlID0gaXRlbXMubWFwKGkgPT4gaS5nZXREYXRhKCkpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19