/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../indicator';
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
        else
            this.toggle();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJidXR0b25zLWluZGljYXRvcnMvdG9nZ2xlLWJ1dHRvbi90b2dnbGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFpQjlGLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxTQUFTOzs7Ozs7SUFlekQsWUFBWSxVQUFzQixFQUMvQixRQUFtQixFQUNDLHdCQUFrRDtRQUN4RSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRE4sNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWR6RSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsWUFBTyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRWIsYUFBUSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBTXZFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NB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ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZGljYXRvciB9IGZyb20gJy4uL2luZGljYXRvcic7XG5cbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSB9IGZyb20gJy4uL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJ1dHRvbi10b2dnbGUnLFxuXHR0ZW1wbGF0ZVVybDogYHRvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi90b2dnbGUtYnV0dG9uLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdG9nZ2xlLWJ1dHRvbi5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3RvZ2dsZS1idXR0b24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1idXR0b24tdG9nZ2xlXSc6ICd0cnVlJ1xuXHR9XG59KVxuXG5leHBvcnQgY2xhc3MgRmFicmljVG9nZ2xlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgSW5kaWNhdG9yIHtcblxuXHRASW5wdXQoKVxuXHRjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRAT3V0cHV0KClcblx0Y2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByaXZhdGUgYnV0dG9uQ2hlY2tlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uSWQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdEBPcHRpb25hbCgpIHByaXZhdGUgdG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlOiBUb2dnbGVCdXR0b25Hcm91cFNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cdFx0dGhpcy5nZW5lcmF0ZUJ1dHRvbklkKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLnNldEJ1dHRvbkNoZWNrZWQodGhpcy5jaGVja2VkKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy50b2dnbGVEaXNhYmxlZENzc0NsYXNzKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlVG9nZ2xlQnV0dG9uR3JvdXAoKTtcblx0fVxuXG5cdHRyeVRvVG9nZ2xlKGU6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKGUudGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB0aGlzLnRvZ2dsZSgpO1xuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uQ2hlY2tlZCgpO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uQ2hlY2tlZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUJ1dHRvbkNoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRCdXR0b25DaGVja2VkKCF0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25DaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSBjaGVja2VkO1xuXG5cdFx0aWYgKHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZS50b2dnbGVCdXR0b24odGhpcy5idXR0b25JZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYnV0dG9uQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50b2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlLm9ic2VydmVUb2dnbGVkQnV0dG9uKCkuc3Vic2NyaWJlKGlkID0+IHtcblxuXHRcdFx0XHRpZiAoaWQgIT0gdGhpcy5idXR0b25JZCkge1xuXHRcdFx0XHRcdHRoaXMuYnV0dG9uQ2hlY2tlZCA9ICF0aGlzLmJ1dHRvbkNoZWNrZWQ7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uQ2hlY2tlZCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlQnV0dG9uSWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uSWQ7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZURpc2FibGVkQ3NzQ2xhc3MoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxufVxuIl19