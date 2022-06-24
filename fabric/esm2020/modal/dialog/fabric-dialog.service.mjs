import { Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
import { FabricDialogComponent } from './fabric-dialog.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricModal } from '../../common/modal/fabric-modal';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FabricDialogService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    getComponent() {
        return FabricDialogComponent;
    }
    open(config) {
        if (this.isComponentCreated()) {
            return;
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
            afterCompCreation: () => this.afterComponentCreation(config),
            injector
        });
        this.closeOnEscKey();
    }
    close() {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.visible = false;
            componentRef.instance.detectChanges();
            timer(400)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(() => {
                this.removeComponent();
            });
        }
    }
    closeOnEscKey() {
        this.onCloseOnEsc()
            .subscribe(() => this.close());
    }
    afterComponentCreation(config) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.dialogNestedComponent = config.component;
            if (config?.width) {
                componentRef.instance.width = config.width;
            }
            if (config?.height) {
                componentRef.instance.height = config.height;
            }
            componentRef.instance.setTransformOrigin(event);
        }
    }
}
FabricDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RpYWxvZy9mYWJyaWMtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwRCxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxXQUFrQztJQUUxRSxZQUFZLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBMEI7UUFFOUIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM5QixPQUFPO1NBQ1A7UUFFRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUN2QixjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDM0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDckI7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzlCLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBRUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsUUFBUSxFQUFFLEtBQUs7aUJBQ2YsQ0FBQztZQUNGLE1BQU0sRUFBRSxjQUFjO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUM7WUFDcEIsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztZQUM1RCxRQUFRO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUF5QyxDQUFBO1lBQ2xGLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN0QyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXRDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDRixDQUFDO0lBRU8sYUFBYTtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ2pCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sc0JBQXNCLENBQUMsTUFBMEI7UUFDeEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUF5QyxDQUFBO1lBQ2xGLFlBQVksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUUvRCxJQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQ2xCLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDM0M7WUFDRCxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUU7Z0JBQ25CLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDN0M7WUFFRCxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7aUhBOUVXLG1CQUFtQixnSEFLcEIsUUFBUTtxSEFMUCxtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBTU4sTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5jb25maWcnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dTZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljRGlhbG9nQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY0RpYWxvZ0NvbXBvbmVudD4ge1xuXHRcdHJldHVybiBGYWJyaWNEaWFsb2dDb21wb25lbnQ7XG5cdH1cblxuXHRvcGVuKGNvbmZpZzogRmFicmljRGlhbG9nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBvbmVudENyZWF0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5nZXRJbmplY3RvcigpO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0fV0sXG5cdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLmNyZWF0ZUFuZEFwcGVuZCh7XG5cdFx0XHRhZnRlckNvbXBDcmVhdGlvbjogKCkgPT4gdGhpcy5hZnRlckNvbXBvbmVudENyZWF0aW9uKGNvbmZpZyksXG5cdFx0XHRpbmplY3RvclxuXHRcdH0pO1xuXHRcdHRoaXMuY2xvc2VPbkVzY0tleSgpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb21wb25lbnRDcmVhdGVkKCkpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkgYXMgQ29tcG9uZW50UmVmPEZhYnJpY0RpYWxvZ0NvbXBvbmVudD5cblx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0XHR0aW1lcig0MDApXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2xvc2VPbkVzYygpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGFmdGVyQ29tcG9uZW50Q3JlYXRpb24oY29uZmlnOiBGYWJyaWNEaWFsb2dDb25maWcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbXBvbmVudENyZWF0ZWQoKSkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5nZXRDb21wb25lbnRSZWYoKSBhcyBDb21wb25lbnRSZWY8RmFicmljRGlhbG9nQ29tcG9uZW50PlxuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbmZpZy5jb21wb25lbnQ7XG5cblx0XHRcdGlmIChjb25maWc/LndpZHRoKSB7XG5cdFx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS53aWR0aCA9IGNvbmZpZy53aWR0aDtcblx0XHRcdH1cblx0XHRcdGlmIChjb25maWc/LmhlaWdodCkge1xuXHRcdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcblx0XHRcdH1cblxuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLnNldFRyYW5zZm9ybU9yaWdpbihldmVudCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=