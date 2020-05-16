/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9maWx0ZXIvY29sdW1uLXNlbGVjdG9yL3N0cnVjdHVyZS5jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBZ0JoRyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsY0FBYzs7OztJQVNuRSxZQUE2QixvQkFBMEM7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEb0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU52RSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFNUMsWUFBTyxHQUFtQyxFQUFFLENBQUM7UUFFN0MsWUFBTyxHQUFrQixFQUFFLENBQUM7SUFJNUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsb0JBQW9CO2FBQ3ZCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxNQUErQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDO1FBQzVHLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBdkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFmUSxvQkFBb0I7Ozs2QkFrQjNCLE1BQU07Ozs7SUFBUCwwREFDNEM7O0lBRTVDLG1EQUE2Qzs7SUFFN0MsbURBQTRCOzs7OztJQUVoQixnRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLXNlbGVjdG9yJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktc2VsZWN0XG5cdFx0XHRcdFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuXHRcdFx0XHQob3B0aW9uQ2hhbmdlZCk9XCJvblNlbGVjdENoYW5nZSgkZXZlbnQpXCI+XG5cdFx0PC9ndWktc2VsZWN0PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtblNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdG9wdGlvbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblxuXHRcdFx0XHR0aGlzLm9wdGlvbnMgPSBjb2x1bW5zLm1hcCgoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkgPT4gY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLnRvU3RyaW5nKCkpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvblNlbGVjdENoYW5nZShjb2x1bW5JZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5TZWxlY3RlZC5lbWl0KGNvbHVtbklkKTtcblx0fVxufVxuIl19