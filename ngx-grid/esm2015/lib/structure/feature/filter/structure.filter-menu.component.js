/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class StructureFilterMenuComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    onColumnSelect(value) {
        this.selectedColumnId = value;
    }
}
StructureFilterMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-filter-menu',
                template: `
		
		<gui-structure-column-selector
				(columnSelected)="onColumnSelect($event)">
		</gui-structure-column-selector>
		
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-filter-menu]': 'true'
                }
            }] }
];
if (false) {
    /** @type {?} */
    StructureFilterMenuComponent.prototype.selectedColumnId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpbHRlci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBa0J0RixNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUl4QyxjQUFjLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7OztZQXJCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7RUFNVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxtQ0FBbUMsRUFBRSxNQUFNO2lCQUMzQzthQUNEOzs7O0lBR0Esd0RBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWZpbHRlci1tZW51Jyxcblx0dGVtcGxhdGU6IGBcblx0XHRcblx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tc2VsZWN0b3Jcblx0XHRcdFx0KGNvbHVtblNlbGVjdGVkKT1cIm9uQ29sdW1uU2VsZWN0KCRldmVudClcIj5cblx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLXNlbGVjdG9yPlxuXHRcdFxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXN0cnVjdHVyZS1maWx0ZXItbWVudV0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJNZW51Q29tcG9uZW50IHtcblxuXHRzZWxlY3RlZENvbHVtbklkOiBzdHJpbmc7XG5cblx0b25Db2x1bW5TZWxlY3QodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW5JZCA9IHZhbHVlO1xuXHR9XG59XG4iXX0=