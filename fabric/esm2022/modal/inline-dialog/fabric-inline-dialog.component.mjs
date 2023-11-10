import { ChangeDetectionStrategy, Component, forwardRef, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { themeToken } from '../../themes/theme.token';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-inline-dialog-geometry.service";
import * as i2 from "../../themes/fabric-modal-theme.service";
import * as i3 from "@angular/common";
import * as i4 from "./fabric-inline-dialog.service";
import * as i5 from "../../themes/theme";
export class FabricInlineDialogComponent extends FabricThemedComponent {
    componentFactoryResolver;
    changeDetectorRef;
    inlineDialogService;
    elRef;
    inlineDialogGeometryService;
    container;
    customClass = '';
    inlineDialogNestedComponent;
    inlineDialogNestedInjector;
    dialogTopAttribute;
    dialogLeftAttribute;
    visible = false;
    width = '400px';
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
            .pipe(takeUntil(this.unsubscribe$))
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
        timer(0)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.visible = true;
            this.changeDetectorRef.detectChanges();
        });
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
        if (this.container && component) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            if (this.inlineDialogNestedInjector) {
                this.container.createComponent(componentFactory, undefined, this.inlineDialogNestedInjector);
            }
            else {
                this.container.createComponent(componentFactory);
            }
            this.changeDetectorRef.detectChanges();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricInlineDialogComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: forwardRef(() => FabricInlineDialogService) }, { token: i0.ElementRef }, { token: i1.InlineDialogGeometryService }, { token: i0.Renderer2 }, { token: i2.FabricModalThemeService }, { token: themeToken }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricInlineDialogComponent, selector: "ng-component", viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesInheritance: true, ngImport: i0, template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t [class.gui-inline-dialog-visible]=\"visible\"\n\t\t [style.max-width]=\"width\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n", styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;box-sizing:border-box;display:block;z-index:1000;opacity:0;transition:opacity .2s ease-in-out}.gui-inline-dialog-wrapper .gui-inline-dialog-content.gui-inline-dialog-visible{opacity:1}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricInlineDialogComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t [class.gui-inline-dialog-visible]=\"visible\"\n\t\t [style.max-width]=\"width\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n", styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;box-sizing:border-box;display:block;z-index:1000;opacity:0;transition:opacity .2s ease-in-out}.gui-inline-dialog-wrapper .gui-inline-dialog-content.gui-inline-dialog-visible{opacity:1}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i4.FabricInlineDialogService, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => FabricInlineDialogService)]
                }] }, { type: i0.ElementRef }, { type: i1.InlineDialogGeometryService }, { type: i0.Renderer2 }, { type: i2.FabricModalThemeService }, { type: i5.Theme, decorators: [{
                    type: Inject,
                    args: [themeToken]
                }] }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sRUFNTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFbkYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFZM0MsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHFCQUFxQjtJQW1CeEM7SUFDVDtJQUNxRDtJQUNyRDtJQUNBO0lBcEJYLFNBQVMsQ0FBb0I7SUFFdEMsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUV6QiwyQkFBMkIsQ0FBcUM7SUFFaEUsMEJBQTBCLENBQVk7SUFFdEMsa0JBQWtCLENBQVU7SUFFNUIsbUJBQW1CLENBQVU7SUFFN0IsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV6QixLQUFLLEdBQVcsT0FBTyxDQUFDO0lBRXhCLFlBQTZCLHdCQUFrRCxFQUMz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RVAsZ0JBQWdCLG9EQzFDakQsMFpBZUE7OzRGRHlCYSwyQkFBMkI7a0JBVHZDLFNBQVM7c0NBTVEsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBdUJqQyxNQUFNOzJCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7MEJBS2xELE1BQU07MkJBQUMsVUFBVTs0Q0F2QlosU0FBUztzQkFEakIsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdGZvcndhcmRSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFR5cGUsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWlubGluZS1kaWFsb2cuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRmFicmljVGhlbWVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBjb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcblxuXHRpbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQ/OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD47XG5cblx0aW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3I/OiBJbmplY3RvcjtcblxuXHRkaWFsb2dUb3BBdHRyaWJ1dGU/OiBudW1iZXI7XG5cblx0ZGlhbG9nTGVmdEF0dHJpYnV0ZT86IG51bWJlcjtcblxuXHR2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0d2lkdGg6IHN0cmluZyA9ICc0MDBweCc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSkgcHJpdmF0ZSByZWFkb25seSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZTogSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHR0aGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KHRoZW1lVG9rZW4pIHRoZW1lOiBUaGVtZSkge1xuXHRcdHN1cGVyKGVsUmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChpbmxpbmVEaWFsb2dDb3JkczogSW5saW5lRGlhbG9nQ29yZHMpID0+IHtcblx0XHRcdFx0dGhpcy5kaWFsb2dUb3BBdHRyaWJ1dGUgPSBpbmxpbmVEaWFsb2dDb3Jkcy5nZXRWZXJ0aWNhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdHRoaXMuZGlhbG9nTGVmdEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXHRcdHRoaXMuY3JlYXRlTmVzdGVkQ29tcG9uZW50KHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50KTtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5jaGFuZ2VHZW9tZXRyeSh0aGlzLmVsUmVmKTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRpbWVyKDApXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRjbGlja091dHNpZGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29udGFpbmVyQ2xpY2tlZChldmVudCkpIHtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVOZXN0ZWRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4gfCB1bmRlZmluZWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb250YWluZXIgJiYgY29tcG9uZW50KSB7XG5cdFx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblxuXHRcdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnksIHVuZGVmaW5lZCwgdGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRJbmplY3Rvcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIlxuXHQgW3N0eWxlLmxlZnQucHhdPVwiZGlhbG9nTGVmdEF0dHJpYnV0ZVwiXG5cdCBbc3R5bGUudG9wLnB4XT1cImRpYWxvZ1RvcEF0dHJpYnV0ZVwiXG5cdCBjbGFzcz1cImd1aS1pbmxpbmUtZGlhbG9nLXdyYXBwZXJcIj5cblxuXHQ8ZGl2IChkb2N1bWVudDpjbGljayk9XCJjbGlja091dHNpZGUoJGV2ZW50KVwiXG5cdFx0IFtjbGFzcy5ndWktaW5saW5lLWRpYWxvZy12aXNpYmxlXT1cInZpc2libGVcIlxuXHRcdCBbc3R5bGUubWF4LXdpZHRoXT1cIndpZHRoXCJcblx0XHQgY2xhc3M9XCJndWktaW5saW5lLWRpYWxvZy1jb250ZW50XCI+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxuXG5cdDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==