import { Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { filter, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-inline-dialog-geometry.service";
export class FabricInlineDialogService {
    componentFactoryResolver;
    applicationRef;
    injector;
    document;
    inlineDialogGeometryService;
    inlineDialogRef = null;
    opened = false;
    opened$ = new BehaviorSubject(false);
    destroy$ = new Subject();
    constructor(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.inlineDialogGeometryService = inlineDialogGeometryService;
    }
    ngOnDestroy() {
        this.removeInlineDialog();
    }
    open(element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
            let parentInjector = this.injector, placement = FabricPlacement.BOTTOM, offset = 0, theme = Theme.FABRIC, customClass = '';
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            if (config && config.placement) {
                placement = config.placement;
            }
            if (config && config.offset) {
                offset = config.offset;
            }
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.customClass) {
                customClass = config.customClass;
            }
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.setOpened(true);
            this.appendInlineDialogToElement(component, injector, customClass);
            this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
            this.closeOnEscKey();
        }
        else {
            this.close();
        }
    }
    close() {
        this.removeInlineDialog();
        this.destroy$.next(undefined);
        this.destroy$.complete();
        this.setOpened(false);
    }
    isOpened() {
        return this.opened;
    }
    onOpened() {
        return this.opened$.asObservable();
    }
    appendInlineDialogToElement(component, injector, customClass) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
        if (customClass) {
            componentRef.instance.customClass = customClass;
        }
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domDialogElement = componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    }
    removeInlineDialog() {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    }
    setOpened(opened) {
        this.opened = opened;
        this.opened$.next(this.opened);
    }
    closeOnEscKey() {
        const close$ = fromEvent(this.document, 'keyup');
        close$
            .pipe(filter((key) => key.code === 'Escape'), takeUntil(this.destroy$))
            .subscribe(() => this.close());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricInlineDialogService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }, { token: i1.InlineDialogGeometryService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricInlineDialogService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricInlineDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.InlineDialogGeometryService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQU1OLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBSTVFLE1BQU0sT0FBTyx5QkFBeUI7SUFVUjtJQUNUO0lBQ0E7SUFDa0I7SUFDbEI7SUFaWixlQUFlLEdBQXFELElBQUksQ0FBQztJQUV6RSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRWYsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTVCLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRWhELFlBQTZCLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWEsRUFDL0IsMkJBQXdEO1FBSi9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsbUJBQWMsR0FBZCxjQUFj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LEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQzt3R0E3SVcseUJBQXlCLGdIQWExQixRQUFROzRHQWJQLHlCQUF5Qjs7NEZBQXpCLHlCQUF5QjtrQkFEckMsVUFBVTs7MEJBY04sTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0YWJsZSxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvY29yZHMvZmFicmljLXBsYWNlbWVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nUmVmOiBDb21wb25lbnRSZWY8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuXG5cdHByaXZhdGUgb3BlbmVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlOiBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UpIHtcblxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4sXG5cdFx0IGNvbmZpZz86IHtcblx0XHRcdCBpbmplY3Rvcj86IEluamVjdG9yLFxuXHRcdFx0IHBsYWNlbWVudD86IEZhYnJpY1BsYWNlbWVudCxcblx0XHRcdCBvZmZzZXQ/OiBudW1iZXIsXG5cdFx0XHQgdGhlbWU/OiBUaGVtZSxcblx0XHRcdCBjdXN0b21DbGFzcz86IHN0cmluZ1xuXHRcdCB9KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblxuXHRcdFx0bGV0IHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0cGxhY2VtZW50ID0gRmFicmljUGxhY2VtZW50LkJPVFRPTSxcblx0XHRcdFx0b2Zmc2V0ID0gMCxcblx0XHRcdFx0dGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRcdGN1c3RvbUNsYXNzID0gJyc7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wbGFjZW1lbnQpIHtcblx0XHRcdFx0cGxhY2VtZW50ID0gY29uZmlnLnBsYWNlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcub2Zmc2V0KSB7XG5cdFx0XHRcdG9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5jdXN0b21DbGFzcykge1xuXHRcdFx0XHRjdXN0b21DbGFzcyA9IGNvbmZpZy5jdXN0b21DbGFzcztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogdGhlbWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNldE9wZW5lZCh0cnVlKTtcblx0XHRcdHRoaXMuYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudCwgaW5qZWN0b3IsIGN1c3RvbUNsYXNzKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlLmdldElubGluZURpYWxvZ0NvcmRzKGVsZW1lbnQsIHBsYWNlbWVudCwgb2Zmc2V0KTtcblx0XHRcdHRoaXMuY2xvc2VPbkVzY0tleSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0XHR0aGlzLmRlc3Ryb3kkLm5leHQodW5kZWZpbmVkKTtcblx0XHR0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cdFx0dGhpcy5zZXRPcGVuZWQoZmFsc2UpO1xuXHR9XG5cblx0aXNPcGVuZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xuXHR9XG5cblx0b25PcGVuZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHByaXZhdGUgYXBwZW5kSW5saW5lRGlhbG9nVG9FbGVtZW50KGNvbXBvbmVudDogYW55LCBpbmplY3RvcjogSW5qZWN0b3IsIGN1c3RvbUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnQpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0aWYgKGN1c3RvbUNsYXNzKSB7XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcztcblx0XHR9XG5cblx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5saW5lRGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tRGlhbG9nRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbURpYWxvZ0VsZW1lbnQpO1xuXG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUlubGluZURpYWxvZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmlubGluZURpYWxvZ1JlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRPcGVuZWQob3BlbmVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XG5cdFx0dGhpcy5vcGVuZWQkLm5leHQodGhpcy5vcGVuZWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9uRXNjS2V5KCk6IHZvaWQge1xuXHRcdGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZG9jdW1lbnQsICdrZXl1cCcpO1xuXG5cdFx0Y2xvc2UkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChrZXkpID0+IGtleS5jb2RlID09PSAnRXNjYXBlJyksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuXHR9XG59XG4iXX0=