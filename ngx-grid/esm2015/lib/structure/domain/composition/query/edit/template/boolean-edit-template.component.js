/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EditCommunicationComponent } from '../edit-communication.component';
export class BooleanEditTemplateComponent extends EditCommunicationComponent {
    constructor() {
        super();
        this.filterFieldName = 'booleanEdit';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const inputElement = this.checkboxRef.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.focus();
        fromEvent(inputElement, 'blur')
            .pipe(debounceTime(400), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.unsubscribe();
            this.submit();
        }));
    }
    /**
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
    }
}
BooleanEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-boolean-edit',
                template: `

		<gui-checkbox #checkbox
					  [checked]="value"
					  [name]="filterFieldName"
					  (changed)="toggle($event)"></gui-checkbox>

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC90ZW1wbGF0ZS9ib29sZWFuLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFnQjdFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSwwQkFBbUM7SUFPcEY7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUhBLG9CQUFlLEdBQUcsYUFBYSxDQUFDO0lBSXpDLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNSLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7UUFFM0YsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO2FBQzdCLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFnQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUExQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7OztFQU9UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7Ozs7MEJBR0MsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUF6RCxtREFDd0I7O0lBRXhCLHVEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ib29sZWFuLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1jaGVja2JveCAjY2hlY2tib3hcblx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInZhbHVlXCJcblx0XHRcdFx0XHQgIFtuYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiXG5cdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvZ3VpLWNoZWNrYm94PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxib29sZWFuPiB7XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFJlZjogRWxlbWVudFJlZjtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAnYm9vbGVhbkVkaXQnO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5jaGVja2JveFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cblx0XHRmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAnYmx1cicpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDQwMCksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZShjaGFuZ2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdChjaGFuZ2VkKTtcblx0fVxuXG5cbn1cbiJdfQ==