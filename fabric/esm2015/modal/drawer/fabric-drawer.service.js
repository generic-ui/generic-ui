import { Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogService } from '../common/dialog.service';
import * as i0 from "@angular/core";
export class FabricDrawerService extends DialogService {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.drawerRef = null;
    }
    ngOnDestroy() {
        this.removeDrawer();
        super.ngOnDestroy();
    }
    open(element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.drawerRef) {
            let theme = Theme.FABRIC, parentInjector = this.injector, closeOnClickOutside = false;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            if (config && config.closeOnClickOutside) {
                closeOnClickOutside = config.closeOnClickOutside;
            }
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(element, component, injector, closeOnClickOutside);
            this.closeOnEscKey();
        }
    }
    close() {
        this.removeDrawer();
    }
    closeOnEscKey() {
        const close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((key) => key.code === 'Escape'), this.takeUntil())
            .subscribe(() => this.close());
    }
    createAndAppend(element, component, injector, closeOnClickOutside) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDrawerComponent)
            .create(injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.instance.closeOnClickOutside = closeOnClickOutside;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domDrawerElement = componentRef.hostView
            .rootNodes[0];
        element.nativeElement.appendChild(domDrawerElement);
        this.drawerRef = componentRef;
    }
    removeDrawer() {
        if (this.drawerRef) {
            this.applicationRef.detachView(this.drawerRef.hostView);
            this.drawerRef.destroy();
            this.drawerRef = null;
        }
    }
}
FabricDrawerService.ɵfac = function FabricDrawerService_Factory(t) { return new (t || FabricDrawerService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricDrawerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricDrawerService, factory: FabricDrawerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDrawerService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RyYXdlci9mYWJyaWMtZHJhd2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQU1OLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGFBQWE7SUFJckQsWUFBb0Isd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQUpXLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBTDFDLGNBQVMsR0FBOEMsSUFBSSxDQUFDO0lBTzVELENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxDQUFDLE9B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RkFqR1csbUJBQW1CLGtIQU9wQixRQUFRO3lFQVBQLG1CQUFtQixXQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVOztzQkFRTixNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3RhYmxlLFxuXHRJbmplY3Rvcixcblx0T25EZXN0cm95LFxuXHRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcmF3ZXJTZXJ2aWNlIGV4dGVuZHMgRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0ZHJhd2VyUmVmOiBDb21wb25lbnRSZWY8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PiA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVEcmF3ZXIoKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50Pixcblx0XHQgY29uZmlnPzogeyBpbmplY3Rvcj86IEluamVjdG9yLCB0aGVtZT86IFRoZW1lLCBjbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbiB9KTogdm9pZCB7XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuZHJhd2VyUmVmKSB7XG5cblx0XHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSB0aGlzLmluamVjdG9yLFxuXHRcdFx0XHRjbG9zZU9uQ2xpY2tPdXRzaWRlID0gZmFsc2U7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5pbmplY3Rvcikge1xuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuXHRcdFx0XHRjbG9zZU9uQ2xpY2tPdXRzaWRlID0gY29uZmlnLmNsb3NlT25DbGlja091dHNpZGU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoZWxlbWVudCwgY29tcG9uZW50LCBpbmplY3RvciwgY2xvc2VPbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHR0aGlzLmNsb3NlT25Fc2NLZXkoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZURyYXdlcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9uRXNjS2V5KCk6IHZvaWQge1xuXHRcdGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZG9jdW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChrZXkpID0+IGtleS5jb2RlID09PSAnRXNjYXBlJyksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQW5kQXBwZW5kKGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+LFxuXHRcdFx0XHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdFx0XHRcdGNsb3NlT25DbGlja091dHNpZGU6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNEcmF3ZXJDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IGNsb3NlT25DbGlja091dHNpZGU7XG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRHJhd2VyRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0ZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvbURyYXdlckVsZW1lbnQpO1xuXG5cdFx0dGhpcy5kcmF3ZXJSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZURyYXdlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5kcmF3ZXJSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmRyYXdlclJlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmRyYXdlclJlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmRyYXdlclJlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==