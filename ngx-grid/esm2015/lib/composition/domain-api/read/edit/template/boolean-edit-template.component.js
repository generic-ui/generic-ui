/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export class BooleanEditTemplateComponent extends EditCommunicationComponent {
    constructor() {
        super();
        this.filterFieldName = 'booleanEdit';
    }
    /**
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
        this.submit();
    }
}
BooleanEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-boolean-edit',
                template: `

		<span class="gui-cell-boolean">
			<gui-checkbox #checkbox
						  [checked]="value"
						  [name]="filterFieldName"
						  (changed)="toggle($event)">
			</gui-checkbox>
		</span>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
BooleanEditTemplateComponent.ctorParameters = () => [];
BooleanEditTemplateComponent.propDecorators = {
    checkboxRef: [{ type: ViewChild, args: ['checkbox', { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.checkboxRef;
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.filterFieldName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQW1CN0UsTUFBTSxPQUFPLDRCQUE2QixTQUFRLDBCQUFtQztJQU9wRjtRQUNDLEtBQUssRUFBRSxDQUFDO1FBSEEsb0JBQWUsR0FBRyxhQUFhLENBQUM7SUFJekMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7O1lBOUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7RUFVVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7OzBCQUdDLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFBekQsbURBQ3dCOztJQUV4Qix1REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJvb2xlYW4tZWRpdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLWJvb2xlYW5cIj5cblx0XHRcdDxndWktY2hlY2tib3ggI2NoZWNrYm94XG5cdFx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInZhbHVlXCJcblx0XHRcdFx0XHRcdCAgW25hbWVdPVwiZmlsdGVyRmllbGROYW1lXCJcblx0XHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlKCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDwvc3Bhbj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8Ym9vbGVhbj4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hSZWY6IEVsZW1lbnRSZWY7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ2Jvb2xlYW5FZGl0JztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0dG9nZ2xlKGNoYW5nZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KGNoYW5nZWQpO1xuXHRcdHRoaXMuc3VibWl0KCk7XG5cdH1cblxufVxuIl19