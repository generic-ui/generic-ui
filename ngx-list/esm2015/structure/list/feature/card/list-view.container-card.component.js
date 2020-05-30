/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
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
    { type: StructureSourceWarehouse },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQXFCekYsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7Ozs7Ozs7SUFNakUsWUFBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHdCQUFrRCxFQUNsRCx1QkFBb0Q7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFKb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7UUFQeEUsVUFBSyxHQUFlLEVBQUUsQ0FBQztJQVN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHVCQUF1QjthQUMxQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQThCLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFwREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7OztFQVVUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNMLGlDQUFpQyxFQUFFLFFBQVE7aUJBQzNDO2FBQ0Q7Ozs7WUEzQmlDLGlCQUFpQjtZQUsxQyxXQUFXO1lBSFgsd0JBQXdCO1lBS3hCLDJCQUEyQjs7OztJQXVCbkMsK0NBQXVCOztJQUV2QixzREFBbUM7Ozs7O0lBRXZCLDJEQUFxRDs7Ozs7SUFDOUQscURBQXlDOzs7OztJQUN6QyxrRUFBbUU7Ozs7O0lBQ25FLGlFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC1jb250YWluZXItY2FyZCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWxpc3QtY2FyZC1pdGVtICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGl0ZW1zXCJcblx0XHRcdFx0XHRcdFx0XHQgW2l0ZW1dPVwiZWxlbWVudFwiXG5cdFx0XHRcdFx0XHRcdFx0IFt0ZW1wbGF0ZV09XCJjYXJkVGVtcGxhdGVcIj5cblx0XHQ8L2d1aS1saXN0LWNhcmQtaXRlbT5cblxuXHRcdDxndWktZW1wdHktc291cmNlIFtpdGVtc109XCJpdGVtc1wiPlxuXHRcdDwvZ3VpLWVtcHR5LXNvdXJjZT5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtY29udGFpbmVyLWNhcmRdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29udGFpbmVyQ2FyZENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdGNhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Vcblx0XHRcdC5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBpdGVtcy5tYXAoaSA9PiBpLmdldERhdGEoKSk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FyZFRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19