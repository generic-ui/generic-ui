/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/domain-api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../core/domain/structure.id';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
export class ListViewContainerCardComponent extends SmartComponent {
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
ListViewContainerCardComponent.decorators = [
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
ListViewContainerCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: SourceWarehouse },
    { type: ListViewCardTemplateArchive }
];
if (false) {
    /** @type {?} */
    ListViewContainerCardComponent.prototype.items;
    /** @type {?} */
    ListViewContainerCardComponent.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFxQnpGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxjQUFjOzs7Ozs7O0lBTWpFLFlBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsdUJBQW9EO1FBQ3ZFLEtBQUssRUFBRSxDQUFDO1FBSm9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTZCO1FBUHhFLFVBQUssR0FBZSxFQUFFLENBQUM7SUFTdkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsd0JBQXdCO2FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxRQUE4QixFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7RUFVVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDTCxpQ0FBaUMsRUFBRSxRQUFRO2lCQUMzQzthQUNEOzs7O1lBM0JpQyxpQkFBaUI7WUFLMUMsV0FBVztZQUhYLGVBQWU7WUFLZiwyQkFBMkI7Ozs7SUF1Qm5DLCtDQUF1Qjs7SUFFdkIsc0RBQW1DOzs7OztJQUV2QiwyREFBcUQ7Ozs7O0lBQzlELHFEQUF5Qzs7Ozs7SUFDekMsa0VBQTBEOzs7OztJQUMxRCxpRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC1jb250YWluZXItY2FyZCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWxpc3QtY2FyZC1pdGVtICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGl0ZW1zXCJcblx0XHRcdFx0XHRcdFx0W2l0ZW1dPVwiZWxlbWVudFwiXG5cdFx0XHRcdFx0XHRcdFt0ZW1wbGF0ZV09XCJjYXJkVGVtcGxhdGVcIj5cblx0XHQ8L2d1aS1saXN0LWNhcmQtaXRlbT5cblxuXHRcdDxndWktZW1wdHktc291cmNlIFtpdGVtc109XCJpdGVtc1wiPlxuXHRcdDwvZ3VpLWVtcHR5LXNvdXJjZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtY29udGFpbmVyLWNhcmRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdGNhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Vcblx0XHRcdC5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBpdGVtcy5tYXAoaSA9PiBpLmdldERhdGEoKSk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FyZFRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19