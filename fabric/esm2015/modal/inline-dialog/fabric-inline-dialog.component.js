import { ChangeDetectionStrategy, Component, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { themeToken } from '../../themes/theme.token';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-inline-dialog-geometry.service";
import * as i2 from "../../themes/fabric-modal-theme.service";
import * as i3 from "@angular/common";
import * as i4 from "./fabric-inline-dialog.service";
import * as i5 from "../../themes/theme";
const _c0 = ["container"];
function FabricInlineDialogComponent_ng_template_2_Template(rf, ctx) { }
export class FabricInlineDialogComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
        super(elRef, renderer, themeService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elRef = elRef;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
    }
    ngOnInit() {
        this.inlineDialogGeometryService
            .observeInlineDialogCords()
            .pipe(this.takeUntil())
            .subscribe((inlineDialogCords) => {
            this.dialogTopAttribute = inlineDialogCords.getVerticalPosition();
            this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
            this.changeDetectorRef.detectChanges();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.inlineDialogGeometryService.changeGeometry(this.elRef);
        this.changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    clickOutside(event) {
        if (this.isContainerClicked(event)) {
            this.inlineDialogService.close();
        }
    }
    isContainerClicked(event) {
        return !this.elRef.nativeElement.contains(event.target);
    }
    createNestedComponent(component) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (this.inlineDialogNestedInjector) {
            this.container.createComponent(componentFactory, null, this.inlineDialogNestedInjector);
        }
        else {
            this.container.createComponent(componentFactory);
        }
        this.changeDetectorRef.detectChanges();
    }
}
FabricInlineDialogComponent.ɵfac = function FabricInlineDialogComponent_Factory(t) { return new (t || FabricInlineDialogComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(forwardRef(() => FabricInlineDialogService)), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.InlineDialogGeometryService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.FabricModalThemeService), i0.ɵɵdirectiveInject(themeToken)); };
FabricInlineDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricInlineDialogComponent, selectors: [["ng-component"]], viewQuery: function FabricInlineDialogComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[1, "gui-inline-dialog-wrapper", 3, "ngClass"], [1, "gui-inline-dialog-content", 3, "click"], ["container", ""]], template: function FabricInlineDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function FabricInlineDialogComponent_Template_div_click_1_listener($event) { return ctx.clickOutside($event); }, false, i0.ɵɵresolveDocument);
        i0.ɵɵtemplate(2, FabricInlineDialogComponent_ng_template_2_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("left", ctx.dialogLeftAttribute, "px")("top", ctx.dialogTopAttribute, "px");
        i0.ɵɵproperty("ngClass", ctx.customClass);
    } }, directives: [i3.NgClass], styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 7px #999;box-sizing:border-box;display:block;max-width:400px;z-index:1000}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInlineDialogComponent, [{
        type: Component,
        args: [{
                templateUrl: 'fabric-inline-dialog.component.html',
                styleUrls: [
                    './fabric-inline-dialog.ngx.scss',
                    './themes/fabric-inline-dialog.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i4.FabricInlineDialogService, decorators: [{
                type: Inject,
                args: [forwardRef(() => FabricInlineDialogService)]
            }] }, { type: i0.ElementRef }, { type: i1.InlineDialogGeometryService }, { type: i0.Renderer2 }, { type: i2.FabricModalThemeService }, { type: i5.Theme, decorators: [{
                type: Inject,
                args: [themeToken]
            }] }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sRUFNTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7OztBQWFuRixNQUFNLE9BQU8sMkJBQTRCLFNBQVEscUJBQXFCO0lBZXJFLFlBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDaUIsbUJBQThDLEVBQ25HLEtBQWlCLEVBQ2pCLDJCQUF3RCxFQUN6RSxRQUFtQixFQUNuQixZQUFxQyxFQUNqQixLQUFZO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBUlQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2lCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7UUFDbkcsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixnQ0FBMkIsR0FBM0IsMkJBQTJC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ZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRUeXBlLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IElubGluZURpYWxvZ0NvcmRzIH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWNvcmRzJztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljVGhlbWVkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy10aGVtZWQtY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWlubGluZS1kaWFsb2cuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRmFicmljVGhlbWVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cblx0Y3VzdG9tQ2xhc3M6IHN0cmluZztcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PjtcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3RvcjogSW5qZWN0b3I7XG5cblx0ZGlhbG9nVG9wQXR0cmlidXRlOiBudW1iZXI7XG5cblx0ZGlhbG9nTGVmdEF0dHJpYnV0ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkpIHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2U6IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSxcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0dGhlbWVTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSxcblx0XHRcdFx0QEluamVjdCh0aGVtZVRva2VuKSB0aGVtZTogVGhlbWUpIHtcblx0XHRzdXBlcihlbFJlZiwgcmVuZGVyZXIsIHRoZW1lU2VydmljZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZVxuXHRcdFx0Lm9ic2VydmVJbmxpbmVEaWFsb2dDb3JkcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaW5saW5lRGlhbG9nQ29yZHM6IElubGluZURpYWxvZ0NvcmRzKSA9PiB7XG5cdFx0XHRcdHRoaXMuZGlhbG9nVG9wQXR0cmlidXRlID0gaW5saW5lRGlhbG9nQ29yZHMuZ2V0VmVydGljYWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmRpYWxvZ0xlZnRBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHR0aGlzLmNyZWF0ZU5lc3RlZENvbXBvbmVudCh0aGlzLmlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudCk7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UuY2hhbmdlR2VvbWV0cnkodGhpcy5lbFJlZik7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVOZXN0ZWRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4pOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgbnVsbCwgdGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3Rvcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHR9XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIlxuXHQgW3N0eWxlLmxlZnQucHhdPVwiZGlhbG9nTGVmdEF0dHJpYnV0ZVwiXG5cdCBbc3R5bGUudG9wLnB4XT1cImRpYWxvZ1RvcEF0dHJpYnV0ZVwiXG5cdCBjbGFzcz1cImd1aS1pbmxpbmUtZGlhbG9nLXdyYXBwZXJcIj5cblxuXHQ8ZGl2IChkb2N1bWVudDpjbGljayk9XCJjbGlja091dHNpZGUoJGV2ZW50KVwiXG5cdFx0IGNsYXNzPVwiZ3VpLWlubGluZS1kaWFsb2ctY29udGVudFwiPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjb250YWluZXI+PC9uZy10ZW1wbGF0ZT5cblxuXHQ8L2Rpdj5cblxuPC9kaXY+XG4iXX0=