/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../indicator';
import { ToggleButtonGroupService } from '../toggle-button-group/toggle-button-group.service';
var FabricToggleButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricToggleButtonComponent, _super);
    function FabricToggleButtonComponent(elementRef, renderer, toggleButtonGroupService) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.toggleButtonGroupService = toggleButtonGroupService;
        _this.checked = false;
        _this.disabled = false;
        _this.changed = new EventEmitter();
        _this.buttonChecked = false;
        _this.buttonId = Math.floor(Math.random() * 1000000);
        _this.generateButtonId();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.checked) {
            this.setButtonChecked(this.checked);
        }
        if (changes.disabled) {
            this.toggleDisabledCssClass();
        }
    };
    /**
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeToggleButtonGroup();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.tryToToggle = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target.disabled) {
            e.stopPropagation();
        }
        else
            this.toggle();
    };
    /**
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.toggleButtonChecked();
        this.changed.emit(this.buttonChecked);
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.toggleButtonChecked = /**
     * @private
     * @return {?}
     */
    function () {
        this.setButtonChecked(!this.buttonChecked);
    };
    /**
     * @private
     * @param {?} checked
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.setButtonChecked = /**
     * @private
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.buttonChecked = checked;
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.toggleButton(this.buttonId);
        }
        if (this.buttonChecked) {
            this.addClass('gui-checked');
        }
        else {
            this.removeClass('gui-checked');
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.observeToggleButtonGroup = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.observeToggledButton().subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                if (id != _this.buttonId) {
                    _this.buttonChecked = !_this.buttonChecked;
                    _this.removeClass('gui-checked');
                }
                else {
                    _this.buttonChecked = true;
                }
                _this.changed.emit(_this.buttonChecked);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.generateButtonId = /**
     * @private
     * @return {?}
     */
    function () {
        return this.buttonId;
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.toggleDisabledCssClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this.addClass('gui-disabled');
        }
        else {
            this.removeClass('gui-disabled');
        }
    };
    FabricToggleButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-button-toggle',
                    template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-button-toggle]': 'true'
                    },
                    styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#ccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:0 0;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:0 0;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:0 0;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}"]
                }] }
    ];
    /** @nocollapse */
    FabricToggleButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ToggleButtonGroupService, decorators: [{ type: Optional }] }
    ]; };
    FabricToggleButtonComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricToggleButtonComponent;
}(Indicator));
export { FabricToggleButtonComponent };
if (false) {
    /** @type {?} */
    FabricToggleButtonComponent.prototype.checked;
    /** @type {?} */
    FabricToggleButtonComponent.prototype.disabled;
    /** @type {?} */
    FabricToggleButtonComponent.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    FabricToggleButtonComponent.prototype.buttonChecked;
    /**
     * @type {?}
     * @private
     */
    FabricToggleButtonComponent.prototype.buttonId;
    /**
     * @type {?}
     * @private
     */
    FabricToggleButtonComponent.prototype.toggleButtonGroupService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJidXR0b25zLWluZGljYXRvcnMvdG9nZ2xlLWJ1dHRvbi90b2dnbGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTlGO0lBZWlELHVEQUFTO0lBZXpELHFDQUFZLFVBQXNCLEVBQy9CLFFBQW1CLEVBQ0Msd0JBQWtEO1FBRnpFLFlBR0Msa0JBQU0sVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUUzQjtRQUhzQiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZHpFLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFHekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixhQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFFYixjQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFNdkUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0lBQ3pCLENBQUM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO1FB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R0E4RnpEO1NBOUZZLDJCQUEyQjs7O0lBRXZDLDhDQUN5Qjs7SUFFekIsK0NBQzBCOztJQUUxQiw4Q0FDb0Q7Ozs7O0lBRXBELG9EQUE4Qjs7Ozs7SUFFOUIsK0NBQXdFOzs7OztJQUlyRSwrREFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPcHRpb25hbCxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmRpY2F0b3IgfSBmcm9tICcuLi9pbmRpY2F0b3InO1xuXG5pbXBvcnQgeyBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgfSBmcm9tICcuLi90b2dnbGUtYnV0dG9uLWdyb3VwL3RvZ2dsZS1idXR0b24tZ3JvdXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1idXR0b24tdG9nZ2xlJyxcblx0dGVtcGxhdGVVcmw6IGB0b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vdG9nZ2xlLWJ1dHRvbi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3RvZ2dsZS1idXR0b24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90b2dnbGUtYnV0dG9uLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktYnV0dG9uLXRvZ2dsZV0nOiAndHJ1ZSdcblx0fVxufSlcblxuZXhwb3J0IGNsYXNzIEZhYnJpY1RvZ2dsZUJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEluZGljYXRvciB7XG5cblx0QElucHV0KClcblx0Y2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcml2YXRlIGJ1dHRvbkNoZWNrZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJ1dHRvbklkOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRAT3B0aW9uYWwoKSBwcml2YXRlIHRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZTogVG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuXHRcdHRoaXMuZ2VuZXJhdGVCdXR0b25JZCgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5zZXRCdXR0b25DaGVja2VkKHRoaXMuY2hlY2tlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMudG9nZ2xlRGlzYWJsZWRDc3NDbGFzcygpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZVRvZ2dsZUJ1dHRvbkdyb3VwKCk7XG5cdH1cblxuXHR0cnlUb1RvZ2dsZShlOiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmIChlLnRhcmdldC5kaXNhYmxlZCkge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2UgdGhpcy50b2dnbGUoKTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkNoZWNrZWQoKTtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVCdXR0b25DaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuc2V0QnV0dG9uQ2hlY2tlZCghdGhpcy5idXR0b25DaGVja2VkKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0QnV0dG9uQ2hlY2tlZChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5idXR0b25DaGVja2VkID0gY2hlY2tlZDtcblxuXHRcdGlmICh0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy50b2dnbGVCdXR0b25Hcm91cFNlcnZpY2UudG9nZ2xlQnV0dG9uKHRoaXMuYnV0dG9uSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmJ1dHRvbkNoZWNrZWQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlVG9nZ2xlQnV0dG9uR3JvdXAoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZS5vYnNlcnZlVG9nZ2xlZEJ1dHRvbigpLnN1YnNjcmliZShpZCA9PiB7XG5cblx0XHRcdFx0aWYgKGlkICE9IHRoaXMuYnV0dG9uSWQpIHtcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSAhdGhpcy5idXR0b25DaGVja2VkO1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5idXR0b25DaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUJ1dHRvbklkKCkge1xuXHRcdHJldHVybiB0aGlzLmJ1dHRvbklkO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVEaXNhYmxlZENzc0NsYXNzKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktZGlzYWJsZWQnKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==