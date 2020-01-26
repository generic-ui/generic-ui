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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZ0I3RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsMEJBQW1DO0lBT3BGO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFIQSxvQkFBZSxHQUFHLGFBQWEsQ0FBQztJQUl6QyxDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUixZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDO1FBRTNGLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVyQixTQUFTLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQzthQUM3QixJQUFJLENBQ0osWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBMUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7OzBCQUdDLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFBekQsbURBQ3dCOztJQUV4Qix1REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYm9vbGVhbi1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktY2hlY2tib3ggI2NoZWNrYm94XG5cdFx0XHRcdFx0ICBbY2hlY2tlZF09XCJ2YWx1ZVwiXG5cdFx0XHRcdFx0ICBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlKCRldmVudClcIj48L2d1aS1jaGVja2JveD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8Ym9vbGVhbj4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hSZWY6IEVsZW1lbnRSZWY7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ2Jvb2xlYW5FZGl0JztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuY2hlY2tib3hSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuXHRcdGlucHV0RWxlbWVudC5mb2N1cygpO1xuXG5cdFx0ZnJvbUV2ZW50KGlucHV0RWxlbWVudCwgJ2JsdXInKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRlYm91bmNlVGltZSg0MDApLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGUoY2hhbmdlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQoY2hhbmdlZCk7XG5cdH1cblxuXG59XG4iXX0=