/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../../indicator';
import { ToggleButtonGroupService } from '../toggle-button-group/toggle-button-group.service';
export class FabricToggleButtonComponent extends Indicator {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} toggleButtonGroupService
     */
    constructor(elementRef, renderer, toggleButtonGroupService) {
        super(elementRef, renderer);
        this.toggleButtonGroupService = toggleButtonGroupService;
        this.checked = false;
        this.disabled = false;
        this.changed = new EventEmitter();
        this.buttonChecked = false;
        this.buttonId = Math.floor(Math.random() * 1000000);
        this.generateButtonId();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.checked) {
            this.setButtonChecked(this.checked);
        }
        if (changes.disabled) {
            this.toggleDisabledCssClass();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeToggleButtonGroup();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    tryToToggle(e) {
        if (e.target.disabled) {
            e.stopPropagation();
        }
        else {
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.toggleButtonChecked();
        this.changed.emit(this.buttonChecked);
    }
    /**
     * @private
     * @return {?}
     */
    toggleButtonChecked() {
        this.setButtonChecked(!this.buttonChecked);
    }
    /**
     * @private
     * @param {?} checked
     * @return {?}
     */
    setButtonChecked(checked) {
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
    }
    /**
     * @private
     * @return {?}
     */
    observeToggleButtonGroup() {
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.observeToggledButton().subscribe((/**
             * @param {?} id
             * @return {?}
             */
            id => {
                if (id != this.buttonId) {
                    this.buttonChecked = !this.buttonChecked;
                    this.removeClass('gui-checked');
                }
                else {
                    this.buttonChecked = true;
                }
                this.changed.emit(this.buttonChecked);
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    generateButtonId() {
        return this.buttonId;
    }
    /**
     * @private
     * @return {?}
     */
    toggleDisabledCssClass() {
        if (this.disabled) {
            this.addClass('gui-disabled');
        }
        else {
            this.removeClass('gui-disabled');
        }
    }
}
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
FabricToggleButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ToggleButtonGroupService, decorators: [{ type: Optional }] }
];
FabricToggleButtonComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    changed: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL2J1dHRvbi90b2dnbGUtYnV0dG9uL3RvZ2dsZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBaUI5RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsU0FBUzs7Ozs7O0lBZXpELFlBQVksVUFBc0IsRUFDL0IsUUFBbUIsRUFDQyx3QkFBa0Q7UUFDeEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUROLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFkekUsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUViLGFBQVEsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQU12RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNw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ZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZGljYXRvciB9IGZyb20gJy4uLy4uL2luZGljYXRvcic7XG5cbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSB9IGZyb20gJy4uL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJ1dHRvbi10b2dnbGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3RvZ2dsZS1idXR0b24ubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90b2dnbGUtYnV0dG9uLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdG9nZ2xlLWJ1dHRvbi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWJ1dHRvbi10b2dnbGVdJzogJ3RydWUnXG5cdH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWJyaWNUb2dnbGVCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJbmRpY2F0b3Ige1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJpdmF0ZSBidXR0b25DaGVja2VkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBidXR0b25JZDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSB0b2dnbGVCdXR0b25Hcm91cFNlcnZpY2U6IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0XHR0aGlzLmdlbmVyYXRlQnV0dG9uSWQoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuc2V0QnV0dG9uQ2hlY2tlZCh0aGlzLmNoZWNrZWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZURpc2FibGVkQ3NzQ2xhc3MoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpO1xuXHR9XG5cblx0dHJ5VG9Ub2dnbGUoZTogYW55KTogdm9pZCB7XG5cblx0XHRpZiAoZS50YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uQ2hlY2tlZCgpO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uQ2hlY2tlZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUJ1dHRvbkNoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRCdXR0b25DaGVja2VkKCF0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25DaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSBjaGVja2VkO1xuXG5cdFx0aWYgKHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZS50b2dnbGVCdXR0b24odGhpcy5idXR0b25JZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYnV0dG9uQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50b2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlLm9ic2VydmVUb2dnbGVkQnV0dG9uKCkuc3Vic2NyaWJlKGlkID0+IHtcblxuXHRcdFx0XHRpZiAoaWQgIT0gdGhpcy5idXR0b25JZCkge1xuXHRcdFx0XHRcdHRoaXMuYnV0dG9uQ2hlY2tlZCA9ICF0aGlzLmJ1dHRvbkNoZWNrZWQ7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uQ2hlY2tlZCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlQnV0dG9uSWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uSWQ7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZURpc2FibGVkQ3NzQ2xhc3MoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxufVxuIl19