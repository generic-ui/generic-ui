/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EditCommunicationComponent } from '../edit-communication.component';
var BooleanEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanEditTemplateComponent, _super);
    function BooleanEditTemplateComponent() {
        var _this = _super.call(this) || this;
        _this.filterFieldName = 'booleanEdit';
        return _this;
    }
    /**
     * @return {?}
     */
    BooleanEditTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputElement = this.checkboxRef.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.focus();
        fromEvent(inputElement, 'blur')
            .pipe(debounceTime(400), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
    };
    /**
     * @param {?} changed
     * @return {?}
     */
    BooleanEditTemplateComponent.prototype.toggle = /**
     * @param {?} changed
     * @return {?}
     */
    function (changed) {
        this.valueChanges.emit(changed);
    };
    BooleanEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-boolean-edit',
                    template: "\n\n\t\t<gui-checkbox #checkbox\n\t\t\t\t\t  [checked]=\"value\"\n\t\t\t\t\t  [name]=\"filterFieldName\"\n\t\t\t\t\t  (changed)=\"toggle($event)\"></gui-checkbox>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    BooleanEditTemplateComponent.ctorParameters = function () { return []; };
    BooleanEditTemplateComponent.propDecorators = {
        checkboxRef: [{ type: ViewChild, args: ['checkbox', { read: ElementRef, static: true },] }]
    };
    return BooleanEditTemplateComponent;
}(EditCommunicationComponent));
export { BooleanEditTemplateComponent };
if (false) {
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.checkboxRef;
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.filterFieldName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC90ZW1wbGF0ZS9ib29sZWFuLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFO0lBYWtELHdEQUFtQztJQU9wRjtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQUpRLHFCQUFlLEdBQUcsYUFBYSxDQUFDOztJQUl6QyxDQUFDOzs7O0lBRUQsc0RBQWU7OztJQUFmO1FBQUEsaUJBY0M7O1lBYk0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztRQUUzRixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckIsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7YUFDN0IsSUFBSSxDQUNKLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBTTs7OztJQUFOLFVBQU8sT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBMUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMEtBT1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7Ozs7OEJBR0MsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUE4QjFELG1DQUFDO0NBQUEsQUE3Q0QsQ0Fha0QsMEJBQTBCLEdBZ0MzRTtTQWhDWSw0QkFBNEI7OztJQUV4QyxtREFDd0I7O0lBRXhCLHVEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ib29sZWFuLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1jaGVja2JveCAjY2hlY2tib3hcblx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInZhbHVlXCJcblx0XHRcdFx0XHQgIFtuYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiXG5cdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvZ3VpLWNoZWNrYm94PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxib29sZWFuPiB7XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFJlZjogRWxlbWVudFJlZjtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAnYm9vbGVhbkVkaXQnO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5jaGVja2JveFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cblx0XHRmcm9tRXZlbnQoaW5wdXRFbGVtZW50LCAnYmx1cicpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDQwMCksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZShjaGFuZ2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdChjaGFuZ2VkKTtcblx0fVxuXG5cbn1cbiJdfQ==