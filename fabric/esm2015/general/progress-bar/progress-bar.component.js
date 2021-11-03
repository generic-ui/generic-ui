import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class FabricProgressBarComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnChanges(changes) {
        if (changes.primary) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass('gui-secondary');
            }
            else {
                this.removeClass('gui-secondary');
            }
        }
    }
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
FabricProgressBarComponent.ɵfac = function FabricProgressBarComponent_Factory(t) { return new (t || FabricProgressBarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricProgressBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricProgressBarComponent, selectors: [["gui-progress-bar"]], hostVars: 2, hostBindings: function FabricProgressBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-progress", true);
    } }, inputs: { progress: "progress", color: "color", height: "height", width: "width", textTop: "textTop", textAlign: "textAlign", primary: "primary", secondary: "secondary" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 12, consts: [[1, "gui-progress-bar"], [1, "gui-progress"], [1, "gui-progress-text"]], template: function FabricProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.height, "px")("text-align", ctx.textAlign)("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background", ctx.color)("width", ctx.progress, "%");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("top", ctx.textTop);
    } }, styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#d6d6d6;border-style:solid;border-width:1px;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}\n", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}\n", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricProgressBarComponent, [{
        type: Component,
        args: [{
                selector: 'gui-progress-bar',
                templateUrl: 'progress-bar.component.html',
                styleUrls: [
                    './progress-bar.ngx.scss',
                    './themes/progress-bar.material.ngx.scss',
                    './themes/progress-bar.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-progress]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { progress: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], textTop: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], primary: [{
            type: Input
        }], secondary: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9nZW5lcmFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2dlbmVyYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWlCbkksTUFBTSxPQUFPLDBCQUEwQjtJQTBCdEMsWUFBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEM7U0FDRDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUVPLFFBQVEsQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sV0FBVyxDQUFDLFNBQWlCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O29HQXJEVywwQkFBMEI7NkVBQTFCLDBCQUEwQjs7OztRQ2pCdkMsOEJBSTBCO1FBQ3pCLDhCQUdzQjtRQUNyQiwrQkFFMkI7UUFDMUIsa0JBQXlCO1FBQzFCLGlCQUFPO1FBQ1IsaUJBQU07UUFDUCxpQkFBTTs7UUFkTCwwQ0FBMEIsNkJBQUEsMEJBQUE7UUFLekIsZUFBMEI7UUFBMUIsdUNBQTBCLDRCQUFBO1FBSXpCLGVBQXFCO1FBQXJCLGtDQUFxQjs7dUZET1gsMEJBQTBCO2NBZHRDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUU7b0JBQ1YseUJBQXlCO29CQUN6Qix5Q0FBeUM7b0JBQ3pDLHFDQUFxQztpQkFDckM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtpQkFDOUI7YUFDRDtxRkFJQSxRQUFRO2tCQURQLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixNQUFNO2tCQURMLEtBQUs7WUFJTixLQUFLO2tCQURKLEtBQUs7WUFJTixPQUFPO2tCQUROLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUs7WUFJTixPQUFPO2tCQUROLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wcm9ncmVzcy1iYXInLFxuXHR0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3Byb2dyZXNzLWJhci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLWJhci5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLWJhci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXByb2dyZXNzXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Byb2dyZXNzQmFyQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRwcm9ncmVzczogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGNvbG9yOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR0ZXh0VG9wOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0dGV4dEFsaWduOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cHJpbWFyeTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWNvbmRhcnk6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wcmltYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmltYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2hhbmdlcy5zZWNvbmRhcnkpIHtcblx0XHRcdGlmICh0aGlzLnNlY29uZGFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIiwiPGRpdlxuXHRbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiXG5cdFtzdHlsZS50ZXh0LWFsaWduXT1cInRleHRBbGlnblwiXG5cdFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG5cdGNsYXNzPVwiZ3VpLXByb2dyZXNzLWJhclwiPlxuXHQ8ZGl2XG5cdFx0W3N0eWxlLmJhY2tncm91bmRdPVwiY29sb3JcIlxuXHRcdFtzdHlsZS53aWR0aC4lXT1cInByb2dyZXNzXCJcblx0XHRjbGFzcz1cImd1aS1wcm9ncmVzc1wiPlxuXHRcdDxzcGFuXG5cdFx0XHRbc3R5bGUudG9wXT1cInRleHRUb3BcIlxuXHRcdFx0Y2xhc3M9XCJndWktcHJvZ3Jlc3MtdGV4dFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvc3Bhbj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==