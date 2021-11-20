import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { themeToken } from '../../themes/theme.token';
import { Theme } from '../../themes/theme';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
import { timer } from 'rxjs';
export class FabricInlineDialogComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, inlineDialogService, elRef, inlineDialogGeometryService, renderer, themeService, theme) {
        super(elRef, renderer, themeService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elRef = elRef;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
        this.width = '400px';
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
        timer(0)
            .pipe(this.takeUntil())
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
FabricInlineDialogComponent.decorators = [
    { type: Component, args: [{
                template: "<div [ngClass]=\"customClass\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t [style.top.px]=\"dialogTopAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t [class.gui-inline-dialog-visible]=\"visible\"\n\t\t [style.max-width]=\"width\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-inline-dialog-wrapper{box-sizing:border-box;position:absolute;z-index:1}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fff;border-radius:4px;box-shadow:0 3px 6px -4px rgba(0,0,0,.122),0 6px 16px rgba(0,0,0,.078),0 9px 28px 8px rgba(0,0,0,.051);box-sizing:border-box;display:block;z-index:1000;opacity:0;transition:opacity .2s ease-in-out}.gui-inline-dialog-wrapper .gui-inline-dialog-content.gui-inline-dialog-visible{opacity:1}\n", ".gui-dark .gui-inline-dialog-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"]
            },] }
];
FabricInlineDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: FabricInlineDialogService, decorators: [{ type: Inject, args: [forwardRef(() => FabricInlineDialogService),] }] },
    { type: ElementRef },
    { type: InlineDialogGeometryService },
    { type: Renderer2 },
    { type: FabricModalThemeService },
    { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] }
];
FabricInlineDialogComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBSU4sU0FBUyxFQUVULFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVk3QixNQUFNLE9BQU8sMkJBQTRCLFNBQVEscUJBQXFCO0lBbUJyRSxZQUE2Qix3QkFBa0QsRUFDM0QsaUJBQW9DLEVBQ2lCLG1CQUE4QyxFQUNuRyxLQUFpQixFQUNqQiwyQkFBd0QsRUFDekUsUUFBbUIsRUFDbkIsWUFBcUMsRUFDakIsS0FBWTtRQUNsQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQVJULDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0Qs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LFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRJbmplY3Rvcixcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dDb3JkcyB9IGZyb20gJy4vaW5saW5lLWRpYWxvZy1jb3Jkcyc7XG5pbXBvcnQgeyBGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZmFicmljLm5lc3RlZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY1RoZW1lZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtdGhlbWVkLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1pbmxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWlubGluZS1kaWFsb2cubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9mYWJyaWMtaW5saW5lLWRpYWxvZy5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRjdXN0b21DbGFzczogc3RyaW5nO1xuXG5cdGlubGluZURpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+O1xuXG5cdGlubGluZURpYWxvZ05lc3RlZEluamVjdG9yOiBJbmplY3RvcjtcblxuXHRkaWFsb2dUb3BBdHRyaWJ1dGU6IG51bWJlcjtcblxuXHRkaWFsb2dMZWZ0QXR0cmlidXRlOiBudW1iZXI7XG5cblx0dmlzaWJsZTogYm9vbGVhbjtcblxuXHR3aWR0aDogc3RyaW5nID0gJzQwMHB4JztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpKSBwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlOiBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsXG5cdFx0XHRcdEBJbmplY3QodGhlbWVUb2tlbikgdGhlbWU6IFRoZW1lKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZVNlcnZpY2UpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2Vcblx0XHRcdC5vYnNlcnZlSW5saW5lRGlhbG9nQ29yZHMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGlubGluZURpYWxvZ0NvcmRzOiBJbmxpbmVEaWFsb2dDb3JkcykgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZ1RvcEF0dHJpYnV0ZSA9IGlubGluZURpYWxvZ0NvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5kaWFsb2dMZWZ0QXR0cmlidXRlID0gaW5saW5lRGlhbG9nQ29yZHMuZ2V0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cdFx0dGhpcy5jcmVhdGVOZXN0ZWRDb21wb25lbnQodGhpcy5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQpO1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLmNoYW5nZUdlb21ldHJ5KHRoaXMuZWxSZWYpO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGltZXIoMClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50Pik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXG5cdFx0aWYgKHRoaXMuaW5saW5lRGlhbG9nTmVzdGVkSW5qZWN0b3IpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBudWxsLCB0aGlzLmlubGluZURpYWxvZ05lc3RlZEluamVjdG9yKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdH1cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIl19