/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
export class EmptySourceComponent extends PureComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        super(elRef);
        this.addClassToHost('gui-py-23');
        this.addClassToHost('gui-px-6');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.hasChanged(changes.items)) {
            if (this.items.length === 0) {
                this.removeClassFromHost('gui-hidden');
                this.addClassToHost('gui-block');
            }
            else {
                this.removeClassFromHost('gui-block');
                this.addClassToHost('gui-hidden');
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-empty-source';
    }
}
EmptySourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-empty-source][items]',
                template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
EmptySourceComponent.ctorParameters = () => [
    { type: ElementRef }
];
EmptySourceComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EmptySourceComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9mZWF0dXJlL2VtcHR5L2VtcHR5LXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFVaEYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7Ozs7SUFLdEQsWUFBWSxLQUFpQjtRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBd0M7UUFFbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw4R0FBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVg0QyxVQUFVOzs7b0JBY3JELEtBQUs7Ozs7SUFBTixxQ0FDa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1lbXB0eS1zb3VyY2VdW2l0ZW1zXScsXG5cdHRlbXBsYXRlVXJsOiBgLi9lbXB0eS1zb3VyY2UuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFbXB0eVNvdXJjZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW1zOiBBcnJheTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1weS0yMycpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1weC02Jyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8RW1wdHlTb3VyY2VDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAodGhpcy5oYXNDaGFuZ2VkKGNoYW5nZXMuaXRlbXMpKSB7XG5cdFx0XHRpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzc0Zyb21Ib3N0KCdndWktaGlkZGVuJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzc0Zyb21Ib3N0KCdndWktYmxvY2snKTtcblx0XHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWhpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1lbXB0eS1zb3VyY2UnO1xuXHR9XG59XG4iXX0=