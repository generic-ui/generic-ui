/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { CellValue, CellValueType } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class TextViewComponent extends PureComponent {
    /**
     * @param {?} isBold
     * @param {?} isItalic
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(isBold, isItalic, elementRef, renderer) {
        super(elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isHtml = false;
        if (isBold !== null) {
            this.addClassToHost('gui-bold');
        }
        if (isItalic !== null) {
            this.addClassToHost('gui-italic');
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.isHtml = this.value.type === CellValueType.HTML;
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-text-view';
    }
}
TextViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-view-text[value]',
                template: `

		<ng-container *ngIf="isHtml; else text">
			<span [innerHTML]="value.value | guiSafe: 'html'"></span>
		</ng-container>

		<ng-template #text>
			<span>
				{{value.value}}
			</span>
		</ng-template>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
TextViewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Attribute, args: ['bold',] }] },
    { type: undefined, decorators: [{ type: Attribute, args: ['italic',] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
TextViewComponent.propDecorators = {
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextViewComponent.prototype.value;
    /** @type {?} */
    TextViewComponent.prototype.isHtml;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFtQm5GLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhOzs7Ozs7O0lBT25ELFlBQStCLE1BQVcsRUFDbEIsUUFBYSxFQUNqQixVQUFzQixFQUN0QixRQUFtQjtRQUN0QyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFGQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMdkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVFkLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7O1lBN0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7OzRDQVFhLFNBQVMsU0FBQyxNQUFNOzRDQUN6QixTQUFTLFNBQUMsUUFBUTtZQTlCaUMsVUFBVTtZQUFTLFNBQVM7OztvQkF3QmxGLEtBQUs7Ozs7SUFBTixrQ0FDaUI7O0lBRWpCLG1DQUFlOzs7OztJQUlaLHVDQUF1Qzs7Ozs7SUFDdkMscUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmFsdWUsIENlbGxWYWx1ZVR5cGUgfSBmcm9tICcuLi8uLi9kZWZpbml0aW9uL2NlbGwtdmFsdWUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXZpZXctdGV4dFt2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSHRtbDsgZWxzZSB0ZXh0XCI+XG5cdFx0XHQ8c3BhbiBbaW5uZXJIVE1MXT1cInZhbHVlLnZhbHVlIHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHt7dmFsdWUudmFsdWV9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWaWV3Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IENlbGxWYWx1ZTtcblxuXHRpc0h0bWwgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdib2xkJykgaXNCb2xkOiBhbnksXG5cdFx0XHRcdEBBdHRyaWJ1dGUoJ2l0YWxpYycpIGlzSXRhbGljOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cblx0XHRpZiAoaXNCb2xkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYm9sZCcpO1xuXHRcdH1cblxuXHRcdGlmIChpc0l0YWxpYyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWl0YWxpYycpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuaXNIdG1sID0gdGhpcy52YWx1ZS50eXBlID09PSBDZWxsVmFsdWVUeXBlLkhUTUw7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktdGV4dC12aWV3Jztcblx0fVxuXG59XG4iXX0=