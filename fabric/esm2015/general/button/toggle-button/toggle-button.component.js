import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../../indicator';
import * as i0 from "@angular/core";
import * as i1 from "../toggle-button-group/toggle-button-group.service";
import * as i2 from "../button/button.component";
const _c0 = ["*"];
export class FabricToggleButtonComponent extends Indicator {
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
    ngOnChanges(changes) {
        if (changes.checked) {
            this.setButtonChecked(this.checked);
        }
        if (changes.disabled) {
            this.toggleDisabledCssClass();
        }
    }
    ngOnInit() {
        this.observeToggleButtonGroup();
    }
    tryToToggle(e) {
        if (e.target.disabled) {
            e.stopPropagation();
        }
        else {
            this.toggle();
        }
    }
    toggle() {
        this.toggleButtonChecked();
        this.changed.emit(this.buttonChecked);
    }
    toggleButtonChecked() {
        this.setButtonChecked(!this.buttonChecked);
    }
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
    observeToggleButtonGroup() {
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.observeToggledButton().subscribe(id => {
                if (id !== this.buttonId) {
                    this.buttonChecked = !this.buttonChecked;
                    this.removeClass('gui-checked');
                }
                else {
                    this.buttonChecked = true;
                }
                this.changed.emit(this.buttonChecked);
            });
        }
    }
    generateButtonId() {
        return this.buttonId;
    }
    toggleDisabledCssClass() {
        if (this.disabled) {
            this.addClass('gui-disabled');
        }
        else {
            this.removeClass('gui-disabled');
        }
    }
}
FabricToggleButtonComponent.ɵfac = function FabricToggleButtonComponent_Factory(t) { return new (t || FabricToggleButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.ToggleButtonGroupService, 8)); };
FabricToggleButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricToggleButtonComponent, selectors: [["gui-button-toggle"]], hostVars: 2, hostBindings: function FabricToggleButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-button-toggle", true);
    } }, inputs: { checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 4, consts: [["gui-button", "", 3, "disabled", "outline", "primary", "secondary", "click"]], template: function FabricToggleButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function FabricToggleButtonComponent_Template_button_click_0_listener($event) { return ctx.tryToToggle($event); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("outline", ctx.outline)("primary", ctx.primary)("secondary", ctx.secondary);
    } }, directives: [i2.FabricButtonComponent], styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricToggleButtonComponent, [{
        type: Component,
        args: [{
                selector: 'gui-button-toggle',
                templateUrl: './toggle-button.component.html',
                styleUrls: [
                    './toggle-button.ngx.scss',
                    './themes/toggle-button.material.ngx.scss',
                    './themes/toggle-button.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-button-toggle]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ToggleButtonGroupService, decorators: [{
                type: Optional
            }] }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9idXR0b24vdG9nZ2xlLWJ1dHRvbi90b2dnbGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL2J1dHRvbi90b2dnbGUtYnV0dG9uL3RvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBbUI1QyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsU0FBUztJQWV6RCxZQUFZLFVBQXNCLEVBQy9CLFFBQW1CLEVBQ0Msd0JBQWtEO1FBQ3hFLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFETiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZHpFLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFHekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFYixhQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFNdkUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVB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QkFDckMsSUFBSSxFQUFFO29CQUNMLDJCQUEyQixFQUFFLE1BQU07aUJBQ25DO2FBQ0Q7O3NCQW1CSSxRQUFRO3dCQWRaLE9BQU87a0JBRE4sS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSztZQUlOLE9BQU87a0JBRE4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZGljYXRvciB9IGZyb20gJy4uLy4uL2luZGljYXRvcic7XG5cbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSB9IGZyb20gJy4uL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJ1dHRvbi10b2dnbGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3RvZ2dsZS1idXR0b24ubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90b2dnbGUtYnV0dG9uLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdG9nZ2xlLWJ1dHRvbi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWJ1dHRvbi10b2dnbGVdJzogJ3RydWUnXG5cdH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWJyaWNUb2dnbGVCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJbmRpY2F0b3Ige1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJpdmF0ZSBidXR0b25DaGVja2VkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBidXR0b25JZDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSB0b2dnbGVCdXR0b25Hcm91cFNlcnZpY2U6IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0XHR0aGlzLmdlbmVyYXRlQnV0dG9uSWQoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuc2V0QnV0dG9uQ2hlY2tlZCh0aGlzLmNoZWNrZWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZURpc2FibGVkQ3NzQ2xhc3MoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpO1xuXHR9XG5cblx0dHJ5VG9Ub2dnbGUoZTogYW55KTogdm9pZCB7XG5cblx0XHRpZiAoZS50YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uQ2hlY2tlZCgpO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uQ2hlY2tlZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUJ1dHRvbkNoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRCdXR0b25DaGVja2VkKCF0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25DaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSBjaGVja2VkO1xuXG5cdFx0aWYgKHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZS50b2dnbGVCdXR0b24odGhpcy5idXR0b25JZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYnV0dG9uQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50b2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlLm9ic2VydmVUb2dnbGVkQnV0dG9uKCkuc3Vic2NyaWJlKGlkID0+IHtcblxuXHRcdFx0XHRpZiAoaWQgIT09IHRoaXMuYnV0dG9uSWQpIHtcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSAhdGhpcy5idXR0b25DaGVja2VkO1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5idXR0b25DaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUJ1dHRvbklkKCkge1xuXHRcdHJldHVybiB0aGlzLmJ1dHRvbklkO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVEaXNhYmxlZENzc0NsYXNzKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktZGlzYWJsZWQnKTtcblx0XHR9XG5cdH1cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cInRyeVRvVG9nZ2xlKCRldmVudClcIlxuXHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0W291dGxpbmVdPVwib3V0bGluZVwiXG5cdFx0W3ByaW1hcnldPVwicHJpbWFyeVwiXG5cdFx0W3NlY29uZGFyeV09XCJzZWNvbmRhcnlcIlxuXHRcdGd1aS1idXR0b24+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPlxuIl19