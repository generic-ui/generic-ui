/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../../indicator';
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
        else {
            this.toggle();
        }
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
                if (id !== _this.buttonId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL2J1dHRvbi90b2dnbGUtYnV0dG9uL3RvZ2dsZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU5RjtJQWVpRCx1REFBUztJQWV6RCxxQ0FBWSxVQUFzQixFQUMvQixRQUFtQixFQUNDLHdCQUFrRDtRQUZ6RSxZQUdDLGtCQUFNLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FFM0I7UUFIc0IsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWR6RSxhQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsYUFBTyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVDLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBRWIsY0FBUSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBTXZFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztJQUN6QixDQUFDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztRQUVE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LFNBQVMsR0FnR3pEO1NBaEdZLDJCQUEyQjs7O0lBRXZDLDhDQUN5Qjs7SUFFekIsK0NBQzBCOztJQUUxQiw4Q0FDb0Q7Ozs7O0lBRXBELG9EQUE4Qjs7Ozs7SUFFOUIsK0NBQXdFOzs7OztJQUlyRSwrREFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPcHRpb25hbCxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmRpY2F0b3IgfSBmcm9tICcuLi8uLi9pbmRpY2F0b3InO1xuXG5pbXBvcnQgeyBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgfSBmcm9tICcuLi90b2dnbGUtYnV0dG9uLWdyb3VwL3RvZ2dsZS1idXR0b24tZ3JvdXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1idXR0b24tdG9nZ2xlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90b2dnbGUtYnV0dG9uLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdG9nZ2xlLWJ1dHRvbi5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3RvZ2dsZS1idXR0b24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1idXR0b24tdG9nZ2xlXSc6ICd0cnVlJ1xuXHR9XG59KVxuXG5leHBvcnQgY2xhc3MgRmFicmljVG9nZ2xlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgSW5kaWNhdG9yIHtcblxuXHRASW5wdXQoKVxuXHRjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRAT3V0cHV0KClcblx0Y2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByaXZhdGUgYnV0dG9uQ2hlY2tlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uSWQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdEBPcHRpb25hbCgpIHByaXZhdGUgdG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlOiBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cdFx0dGhpcy5nZW5lcmF0ZUJ1dHRvbklkKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLnNldEJ1dHRvbkNoZWNrZWQodGhpcy5jaGVja2VkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy50b2dnbGVEaXNhYmxlZENzc0NsYXNzKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlVG9nZ2xlQnV0dG9uR3JvdXAoKTtcblx0fVxuXG5cdHRyeVRvVG9nZ2xlKGU6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKGUudGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkNoZWNrZWQoKTtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVCdXR0b25DaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuc2V0QnV0dG9uQ2hlY2tlZCghdGhpcy5idXR0b25DaGVja2VkKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0QnV0dG9uQ2hlY2tlZChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5idXR0b25DaGVja2VkID0gY2hlY2tlZDtcblxuXHRcdGlmICh0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy50b2dnbGVCdXR0b25Hcm91cFNlcnZpY2UudG9nZ2xlQnV0dG9uKHRoaXMuYnV0dG9uSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmJ1dHRvbkNoZWNrZWQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlVG9nZ2xlQnV0dG9uR3JvdXAoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZS5vYnNlcnZlVG9nZ2xlZEJ1dHRvbigpLnN1YnNjcmliZShpZCA9PiB7XG5cblx0XHRcdFx0aWYgKGlkICE9PSB0aGlzLmJ1dHRvbklkKSB7XG5cdFx0XHRcdFx0dGhpcy5idXR0b25DaGVja2VkID0gIXRoaXMuYnV0dG9uQ2hlY2tlZDtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktY2hlY2tlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuYnV0dG9uQ2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5idXR0b25DaGVja2VkKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVCdXR0b25JZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5idXR0b25JZDtcblx0fVxuXG5cdHByaXZhdGUgdG9nZ2xlRGlzYWJsZWRDc3NDbGFzcygpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=