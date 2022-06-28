import { Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricModal } from '../../common/modal/fabric-modal';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FabricDrawerService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        /** To prevent multiple timers **/
        this.inProgress = false;
    }
    getComponent() {
        return FabricDrawerComponent;
    }
    open(config) {
        if (event) {
            event.stopPropagation();
        }
        if (this.isComponentCreated() && config?.preventReopeningDrawer) {
            return;
        }
        if (this.isComponentCreated() && !this.inProgress && !config?.preventReopeningDrawer) {
            this.waitAndCreateNewDrawer(config);
        }
        else {
            this.createDrawer(config);
        }
    }
    close() {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.visible = false;
            componentRef.instance.detectChanges();
            timer(300)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(() => {
                this.removeComponent();
                this.inProgress = false;
            });
        }
    }
    createDrawer(config) {
        if (this.isComponentCreated()) {
            this.removeComponent();
        }
        let theme = Theme.FABRIC, parentInjector = this.getInjector();
        if (config && config.theme) {
            theme = config.theme;
        }
        if (config && config.injector) {
            parentInjector = config.injector;
        }
        const injector = Injector.create({
            providers: [{
                    provide: themeToken,
                    useValue: theme
                }],
            parent: parentInjector
        });
        this.createAndAppend({
            injector: injector,
            afterCompCreation: () => this.applyInstanceVars(config),
            appendToElement: config?.appendToElement
        });
        this.closeOnEscKey();
    }
    waitAndCreateNewDrawer(config) {
        this.inProgress = true;
        this.close();
        timer(400)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.createDrawer(config);
        });
    }
    applyInstanceVars(config) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            if (config?.width) {
                componentRef.instance.width = config.width;
            }
            if (config?.closeOnClickOutside) {
                componentRef.instance.closeOnClickOutside = config.closeOnClickOutside;
            }
            componentRef.instance.dialogNestedComponent = config?.component;
            componentRef.instance.isFixed = !config?.appendToElement;
        }
    }
    closeOnEscKey() {
        this.onCloseOnEsc()
            .subscribe(() => this.close());
    }
}
FabricDrawerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricDrawerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RyYXdlci9mYWJyaWMtZHJhd2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwRCxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUkzQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsV0FBa0M7SUFLMUUsWUFBWSx3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBQ2pDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBUHJFLGtDQUFrQztRQUNsQyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBTzVCLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQTBCO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUs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RSxtQkFBbUIsRUFBRTtnQkFDaEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDdkU7WUFFRCxZQUFZLENBQUMsUUFBUSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sRUFBRSxTQUFTLENBQUM7WUFDaEUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDO1NBQ3pEO0lBQ0YsQ0FBQztJQUVPLGFBQWE7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRTthQUNqQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0hBaEhXLG1CQUFtQixnSEFRcEIsUUFBUTtvSEFSUCxtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBU04sTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwnO1xuaW1wb3J0IHsgRmFicmljRHJhd2VyQ29uZmlnIH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLmNvbmZpZyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlclNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNEcmF3ZXJDb21wb25lbnQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHQvKiogVG8gcHJldmVudCBtdWx0aXBsZSB0aW1lcnMgKiovXG5cdGluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0YXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmLCBpbmplY3RvciwgZG9jdW1lbnQpO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KCk6IFR5cGU8RmFicmljRHJhd2VyQ29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY0RyYXdlckNvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4oY29uZmlnOiBGYWJyaWNEcmF3ZXJDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ29tcG9uZW50Q3JlYXRlZCgpICYmIGNvbmZpZz8ucHJldmVudFJlb3BlbmluZ0RyYXdlcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ29tcG9uZW50Q3JlYXRlZCgpICYmICF0aGlzLmluUHJvZ3Jlc3MgJiYgIWNvbmZpZz8ucHJldmVudFJlb3BlbmluZ0RyYXdlcikge1xuXHRcdFx0dGhpcy53YWl0QW5kQ3JlYXRlTmV3RHJhd2VyKGNvbmZpZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3JlYXRlRHJhd2VyKGNvbmZpZyk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb21wb25lbnRDcmVhdGVkKCkpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkgYXMgQ29tcG9uZW50UmVmPEZhYnJpY0RyYXdlckNvbXBvbmVudD47XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdFx0dGltZXIoMzAwKVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURyYXdlcihjb25maWc6IEZhYnJpY0RyYXdlckNvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wb25lbnRDcmVhdGVkKCkpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0fVxuXG5cdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0cGFyZW50SW5qZWN0b3IgPSB0aGlzLmdldEluamVjdG9yKCk7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0dGhlbWUgPSBjb25maWcudGhlbWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHR9XSxcblx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKHtcblx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdGFmdGVyQ29tcENyZWF0aW9uOiAoKSA9PiB0aGlzLmFwcGx5SW5zdGFuY2VWYXJzKGNvbmZpZyksXG5cdFx0XHRhcHBlbmRUb0VsZW1lbnQ6IGNvbmZpZz8uYXBwZW5kVG9FbGVtZW50XG5cdFx0fSk7XG5cdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdH1cblxuXHRwcml2YXRlIHdhaXRBbmRDcmVhdGVOZXdEcmF3ZXIoY29uZmlnOiBGYWJyaWNEcmF3ZXJDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdHRoaXMuY2xvc2UoKTtcblxuXHRcdHRpbWVyKDQwMClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jcmVhdGVEcmF3ZXIoY29uZmlnKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBseUluc3RhbmNlVmFycyhjb25maWc6IEZhYnJpY0RyYXdlckNvbmZpZyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29tcG9uZW50Q3JlYXRlZCgpKSB7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmdldENvbXBvbmVudFJlZigpIGFzIENvbXBvbmVudFJlZjxGYWJyaWNEcmF3ZXJDb21wb25lbnQ+O1xuXHRcdFx0aWYgKGNvbmZpZz8ud2lkdGgpIHtcblx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLndpZHRoID0gY29uZmlnLndpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnPy5jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG5cdFx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gY29uZmlnLmNsb3NlT25DbGlja091dHNpZGU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb25maWc/LmNvbXBvbmVudDtcblx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5pc0ZpeGVkID0gIWNvbmZpZz8uYXBwZW5kVG9FbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2xvc2VPbkVzYygpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cbn1cbiJdfQ==