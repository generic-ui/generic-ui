import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricModal } from '../../common/modal/fabric-modal';
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
        if (this.getComponentRef() && (config === null || config === void 0 ? void 0 : config.preventReopeningDrawer)) {
            return;
        }
        if (this.getComponentRef() && !this.inProgress && !(config === null || config === void 0 ? void 0 : config.preventReopeningDrawer)) {
            this.waitAndCreateNewDrawer(config);
        }
        else {
            this.createDrawer(config);
        }
    }
    close() {
        if (this.getComponentRef()) {
            this.getComponentInstance().visible = false;
            this.getComponentInstance().detectChanges();
            timer(300)
                .pipe(this.takeUntil())
                .subscribe(() => {
                this.removeComponent();
                this.inProgress = false;
            });
        }
    }
    createDrawer(config) {
        if (this.getComponentRef()) {
            this.removeComponent();
        }
        let theme = Theme.FABRIC, parentInjector = this.getInjector(), closeOnClickOutside = false;
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
        this.createAndAppend({
            injector: injector,
            afterCompCreation: () => this.applyInstanceVars(config),
            appendToElement: config === null || config === void 0 ? void 0 : config.appendToElement
        });
        this.closeOnEscKey();
    }
    waitAndCreateNewDrawer(config) {
        this.inProgress = true;
        this.close();
        timer(400)
            .pipe(this.takeUntil())
            .subscribe(() => {
            this.createDrawer(config);
        });
    }
    applyInstanceVars(config) {
        this.getComponentInstance().width = config === null || config === void 0 ? void 0 : config.width;
        this.getComponentInstance().dialogNestedComponent = config === null || config === void 0 ? void 0 : config.component;
        this.getComponentInstance().closeOnClickOutside = config === null || config === void 0 ? void 0 : config.closeOnClickOutside;
        this.getComponentInstance().isFixed = !(config === null || config === void 0 ? void 0 : config.appendToElement);
    }
    closeOnEscKey() {
        this.onCloseOnEsc()
            .subscribe(() => this.close());
    }
    getComponentInstance() {
        return this.getComponentRef().instance;
    }
}
FabricDrawerService.decorators = [
    { type: Injectable }
];
FabricDrawerService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RyYXdlci9mYWJyaWMtZHJhd2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFLOUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQWtDO0lBSzFFLFlBQVksd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUNqQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQVByRSxrQ0FBa0M7UUFDbEMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQU81QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksQ0FBQyxNQUEwQjtRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNWLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFO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QUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxTQUFTLENBQUM7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLG1CQUFtQixDQUFDO1FBQzlFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsQ0FBQSxDQUFDO0lBQ2hFLENBQUM7SUFFTyxhQUFhO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDakIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxvQkFBb0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3hDLENBQUM7OztZQWpIRCxVQUFVOzs7WUFYYyx3QkFBd0I7WUFBeEMsY0FBYztZQUFnRCxRQUFROzRDQW9CMUUsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwnO1xuaW1wb3J0IHsgRmFicmljRHJhd2VyQ29uZmlnIH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlclNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNEcmF3ZXJDb21wb25lbnQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHQvKiogVG8gcHJldmVudCBtdWx0aXBsZSB0aW1lcnMgKiovXG5cdGluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0YXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmLCBpbmplY3RvciwgZG9jdW1lbnQpO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KCk6IFR5cGU8RmFicmljRHJhd2VyQ29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY0RyYXdlckNvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4oY29uZmlnOiBGYWJyaWNEcmF3ZXJDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmdldENvbXBvbmVudFJlZigpICYmIGNvbmZpZz8ucHJldmVudFJlb3BlbmluZ0RyYXdlcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmdldENvbXBvbmVudFJlZigpICYmICF0aGlzLmluUHJvZ3Jlc3MgJiYgIWNvbmZpZz8ucHJldmVudFJlb3BlbmluZ0RyYXdlcikge1xuXHRcdFx0dGhpcy53YWl0QW5kQ3JlYXRlTmV3RHJhd2VyKGNvbmZpZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3JlYXRlRHJhd2VyKGNvbmZpZyk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkpIHtcblx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50SW5zdGFuY2UoKS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR0aGlzLmdldENvbXBvbmVudEluc3RhbmNlKCkuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0XHR0aW1lcigzMDApXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0dGhpcy5pblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRHJhd2VyKGNvbmZpZzogRmFicmljRHJhd2VyQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5nZXRDb21wb25lbnRSZWYoKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0XHR9XG5cblx0XHRsZXQgdGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuZ2V0SW5qZWN0b3IoKSxcblx0XHRcdGNsb3NlT25DbGlja091dHNpZGUgPSBmYWxzZTtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5pbmplY3Rvcikge1xuXHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuXHRcdFx0Y2xvc2VPbkNsaWNrT3V0c2lkZSA9IGNvbmZpZy5jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHR9XSxcblx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKHtcblx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdGFmdGVyQ29tcENyZWF0aW9uOiAoKSA9PiB0aGlzLmFwcGx5SW5zdGFuY2VWYXJzKGNvbmZpZyksXG5cdFx0XHRhcHBlbmRUb0VsZW1lbnQ6IGNvbmZpZz8uYXBwZW5kVG9FbGVtZW50XG5cdFx0fSk7XG5cdFx0dGhpcy5jbG9zZU9uRXNjS2V5KCk7XG5cdH1cblxuXHRwcml2YXRlIHdhaXRBbmRDcmVhdGVOZXdEcmF3ZXIoY29uZmlnOiBGYWJyaWNEcmF3ZXJDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdHRoaXMuY2xvc2UoKTtcblxuXHRcdHRpbWVyKDQwMClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jcmVhdGVEcmF3ZXIoY29uZmlnKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBseUluc3RhbmNlVmFycyhjb25maWc6IEZhYnJpY0RyYXdlckNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50SW5zdGFuY2UoKS53aWR0aCA9IGNvbmZpZz8ud2lkdGg7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRJbnN0YW5jZSgpLmRpYWxvZ05lc3RlZENvbXBvbmVudCA9IGNvbmZpZz8uY29tcG9uZW50O1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50SW5zdGFuY2UoKS5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gY29uZmlnPy5jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50SW5zdGFuY2UoKS5pc0ZpeGVkID0gIWNvbmZpZz8uYXBwZW5kVG9FbGVtZW50O1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZU9uRXNjS2V5KCk6IHZvaWQge1xuXHRcdHRoaXMub25DbG9zZU9uRXNjKClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q29tcG9uZW50SW5zdGFuY2UoKTogRmFicmljRHJhd2VyQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZTtcblx0fVxufVxuIl19