/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../../composition/domain-api/read/edit/changed-value.emitter';
import { FilterCommandInvoker } from '../../../../filter/domain-api/filter.command-invoker';
import { StructureId } from '../../../domain/structure.id';
export class StructureHeaderFilterComponent extends SmartComponent {
    /**
     * @param {?} structureFilterCommandService
     * @param {?} structureId
     */
    constructor(structureFilterCommandService, structureId) {
        super();
        this.structureFilterCommandService = structureFilterCommandService;
        this.structureId = structureId;
        this.sub = new ChangedValueEmitter();
        this.editContext = {
            changes: this.sub
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub
            .on()
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => this.filter(phrase)));
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    filter(phrase) {
        // this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    }
}
StructureHeaderFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header-filter',
                template: `

		<!--		<ng-container-->
		<!--				*ngTemplateOutlet="column.editTemplate; context: editContext">-->
		<!--		</ng-container>-->

		<button gui-button [primary]="true">Add Filter</button>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderFilterComponent.ctorParameters = () => [
    { type: FilterCommandInvoker },
    { type: StructureId }
];
StructureHeaderFilterComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.column;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.sub;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.editContext;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzNILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWlCM0QsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7Ozs7O0lBU2pFLFlBQW9CLDZCQUFtRCxFQUM1RCxXQUF3QjtRQUNsQyxLQUFLLEVBQUUsQ0FBQztRQUZXLGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBc0I7UUFDNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMbkMsUUFBRyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQVEvQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRztTQUNqQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsR0FBRzthQUNOLEVBQUUsRUFBRTthQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDcEIseUdBQXlHO0lBQzFHLENBQUM7OztZQXhDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWpCUSxvQkFBb0I7WUFDcEIsV0FBVzs7O3FCQW1CbEIsS0FBSzs7OztJQUFOLGdEQUNnQzs7SUFFaEMsNkNBQWdDOztJQUVoQyxxREFBaUI7Ozs7O0lBRUwsdUVBQTJEOzs7OztJQUNwRSxxREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2RvbWFpbi1hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8IS0tXHRcdDxuZy1jb250YWluZXItLT5cblx0XHQ8IS0tXHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi5lZGl0VGVtcGxhdGU7IGNvbnRleHQ6IGVkaXRDb250ZXh0XCI+LS0+XG5cdFx0PCEtLVx0XHQ8L25nLWNvbnRhaW5lcj4tLT5cblxuXHRcdDxidXR0b24gZ3VpLWJ1dHRvbiBbcHJpbWFyeV09XCJ0cnVlXCI+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHN1YiA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdGNoYW5nZXM6IHRoaXMuc3ViXG5cdFx0fTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3ViXG5cdFx0XHQub24oKVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKHBocmFzZSkpO1xuXHR9XG5cblx0ZmlsdGVyKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCAnMScsIHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19