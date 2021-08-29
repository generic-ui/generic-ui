/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
var EmptySourceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EmptySourceComponent, _super);
    function EmptySourceComponent(elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.addClassToHost('gui-py-23');
        _this.addClassToHost('gui-px-6');
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    EmptySourceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @protected
     * @return {?}
     */
    EmptySourceComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-empty-source';
    };
    EmptySourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-empty-source][items]',
                    template: "<ng-container *ngIf=\"items.length === 0\">\n\t{{'sourceEmpty' | guiTranslate}}\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    EmptySourceComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EmptySourceComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return EmptySourceComponent;
}(PureComponent));
export { EmptySourceComponent };
if (false) {
    /** @type {?} */
    EmptySourceComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9mZWF0dXJlL2VtcHR5L2VtcHR5LXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSWhGO0lBTTBDLGdEQUFhO0lBS3RELDhCQUFZLEtBQWlCO1FBQTdCLFlBQ0Msa0JBQU0sS0FBSyxDQUFDLFNBR1o7UUFGQSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBQ2pDLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXdDO1FBRW5ELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEM7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRVMsOENBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7O2dCQWhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsOEdBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVg0QyxVQUFVOzs7d0JBY3JELEtBQUs7O0lBeUJQLDJCQUFDO0NBQUEsQUFqQ0QsQ0FNMEMsYUFBYSxHQTJCdEQ7U0EzQlksb0JBQW9COzs7SUFFaEMscUNBQ2tCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZW1wdHktc291cmNlXVtpdGVtc10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZW1wdHktc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlTb3VyY2VDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PjtcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHktMjMnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcHgtNicpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEVtcHR5U291cmNlQ29tcG9uZW50Pikge1xuXG5cdFx0aWYgKHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLml0ZW1zKSkge1xuXHRcdFx0aWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tSG9zdCgnZ3VpLWhpZGRlbicpO1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZW1wdHktc291cmNlJztcblx0fVxufVxuIl19