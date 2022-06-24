import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../../indicator';
import * as i0 from "@angular/core";
import * as i1 from "../toggle-button-group/toggle-button-group.service";
import * as i2 from "../button/button.component";
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
        if (changes['checked']) {
            this.setButtonChecked(this.checked);
        }
        if (changes['disabled']) {
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
FabricToggleButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ToggleButtonGroupService, optional: true }], target: i0.ɵɵFactoryTarget.Component });
FabricToggleButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricToggleButtonComponent, selector: "gui-button-toggle", inputs: { checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, host: { properties: { "class.gui-button-toggle": "true" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n", styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"], components: [{ type: i2.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricToggleButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-button-toggle', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-button-toggle]': 'true'
                    }, template: "<button (click)=\"tryToToggle($event)\"\n\t\t[disabled]=\"disabled\"\n\t\t[outline]=\"outline\"\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\tgui-button>\n\t<ng-content></ng-content>\n</button>\n", styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#cccccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:transparent;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:transparent;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fff}.gui-checked .gui-button.gui-outline.gui-secondary{background:transparent;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fff}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fff}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fff}.gui-disabled{pointer-events:none}\n", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}\n", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ToggleButtonGroupService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9idXR0b24vdG9nZ2xlLWJ1dHRvbi90b2dnbGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL2J1dHRvbi90b2dnbGUtYnV0dG9uL3RvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFtQjVDLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxTQUFTO0lBZXpELFlBQVksVUFBc0IsRUFDL0IsUUFBbUIsRUFDVSx3QkFBa0Q7UUFDakYsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQURHLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFkbEYsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR2pCLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUViLGFBQVEsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQU12RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFNO1FBRWpCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtJQUNGLENBQUM7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxtQkFBbUI7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsS0FBSyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFTyx3QkFBd0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEtBQUssSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFFbkUsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ2hDO3FCQUFNO29CQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFFTyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxzQkFBc0I7UUFFN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDakM7SUFDRixDQUFDOzt5SEEvRlcsMkJBQTJCOzZHQUEzQiwyQkFBMkIseVBDaEN4QyxzTkFRQTs0RkR3QmEsMkJBQTJCO2tCQWZ2QyxTQUFTOytCQUNDLG1CQUFtQixtQkFPWix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBQy9CO3dCQUNMLDJCQUEyQixFQUFFLE1BQU07cUJBQ25DOzswQkFvQkcsUUFBUTs0Q0FkWixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlHLE9BQU87c0JBRGYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZGljYXRvciB9IGZyb20gJy4uLy4uL2luZGljYXRvcic7XG5cbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSB9IGZyb20gJy4uL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJ1dHRvbi10b2dnbGUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3RvZ2dsZS1idXR0b24ubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy90b2dnbGUtYnV0dG9uLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvdG9nZ2xlLWJ1dHRvbi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWJ1dHRvbi10b2dnbGVdJzogJ3RydWUnXG5cdH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWJyaWNUb2dnbGVCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJbmRpY2F0b3Ige1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJpdmF0ZSBidXR0b25DaGVja2VkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBidXR0b25JZDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSB0b2dnbGVCdXR0b25Hcm91cFNlcnZpY2U6IFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0XHR0aGlzLmdlbmVyYXRlQnV0dG9uSWQoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChjaGFuZ2VzWydjaGVja2VkJ10pIHtcblx0XHRcdHRoaXMuc2V0QnV0dG9uQ2hlY2tlZCh0aGlzLmNoZWNrZWQpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzWydkaXNhYmxlZCddKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZURpc2FibGVkQ3NzQ2xhc3MoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLm9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpO1xuXHR9XG5cblx0dHJ5VG9Ub2dnbGUoZTogYW55KTogdm9pZCB7XG5cblx0XHRpZiAoZS50YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlKCk6IHZvaWQge1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uQ2hlY2tlZCgpO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uQ2hlY2tlZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUJ1dHRvbkNoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRCdXR0b25DaGVja2VkKCF0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25DaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSBjaGVja2VkO1xuXG5cdFx0aWYgKHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZS50b2dnbGVCdXR0b24odGhpcy5idXR0b25JZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYnV0dG9uQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWNoZWNrZWQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVUb2dnbGVCdXR0b25Hcm91cCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50b2dnbGVCdXR0b25Hcm91cFNlcnZpY2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMudG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlLm9ic2VydmVUb2dnbGVkQnV0dG9uKCkuc3Vic2NyaWJlKGlkID0+IHtcblxuXHRcdFx0XHRpZiAoaWQgIT09IHRoaXMuYnV0dG9uSWQpIHtcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbkNoZWNrZWQgPSAhdGhpcy5idXR0b25DaGVja2VkO1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1jaGVja2VkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5idXR0b25DaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmJ1dHRvbkNoZWNrZWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUJ1dHRvbklkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uSWQ7XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZURpc2FibGVkQ3NzQ2xhc3MoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwidHJ5VG9Ub2dnbGUoJGV2ZW50KVwiXG5cdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRbb3V0bGluZV09XCJvdXRsaW5lXCJcblx0XHRbcHJpbWFyeV09XCJwcmltYXJ5XCJcblx0XHRbc2Vjb25kYXJ5XT1cInNlY29uZGFyeVwiXG5cdFx0Z3VpLWJ1dHRvbj5cblx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+XG4iXX0=