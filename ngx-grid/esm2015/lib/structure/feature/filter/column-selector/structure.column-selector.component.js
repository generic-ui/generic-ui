/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/feature-api/composition.warehouse';
export class StructureColumnSelectorComponent extends SmartComponent {
    /**
     * @param {?} compositionWarehouse
     */
    constructor(compositionWarehouse) {
        super();
        this.compositionWarehouse = compositionWarehouse;
        this.columnSelected = new EventEmitter();
        this.columns = [];
        this.options = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.options = columns.map((/**
             * @param {?} column
             * @return {?}
             */
            (column) => column.getColumnDefinitionId().toString()));
        }));
    }
    /**
     * @param {?} columnId
     * @return {?}
     */
    onSelectChange(columnId) {
        this.columnSelected.emit(columnId);
    }
}
StructureColumnSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-selector',
                template: `

		<gui-select
				[options]="options"
				(optionChanged)="onSelectChange($event)">
		</gui-select>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnSelectorComponent.ctorParameters = () => [
    { type: CompositionWarehouse }
];
StructureColumnSelectorComponent.propDecorators = {
    columnSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.columnSelected;
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    StructureColumnSelectorComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9maWx0ZXIvY29sdW1uLXNlbGVjdG9yL3N0cnVjdHVyZS5jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBZ0JqRyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsY0FBYzs7OztJQVNuRSxZQUE2QixvQkFBMEM7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEb0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU52RSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFNUMsWUFBTyxHQUFtQyxFQUFFLENBQUM7UUFFN0MsWUFBTyxHQUFrQixFQUFFLENBQUM7SUFJNUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsb0JBQW9CO2FBQ3ZCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxNQUErQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDO1FBQzVHLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBdkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFmUSxvQkFBb0I7Ozs2QkFrQjNCLE1BQU07Ozs7SUFBUCwwREFDNEM7O0lBRTVDLG1EQUE2Qzs7SUFFN0MsbURBQTRCOzs7OztJQUVoQixnRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tc2VsZWN0b3InLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1zZWxlY3Rcblx0XHRcdFx0W29wdGlvbnNdPVwib3B0aW9uc1wiXG5cdFx0XHRcdChvcHRpb25DaGFuZ2VkKT1cIm9uU2VsZWN0Q2hhbmdlKCRldmVudClcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0b3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSA9PiBjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkudG9TdHJpbmcoKSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtblNlbGVjdGVkLmVtaXQoY29sdW1uSWQpO1xuXHR9XG59XG4iXX0=