import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
import { FabricDialogComponent } from './fabric-dialog.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricModal } from '../../common/modal/fabric-modal';
export class FabricDialogService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    getComponent() {
        return FabricDialogComponent;
    }
    open(config) {
        if (this.getComponentRef()) {
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
        if (this.getComponentRef()) {
            this.getComponentInstance().visible = false;
            this.getComponentInstance().detectChanges();
            timer(400)
                .pipe(this.takeUntil())
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
        this.getComponentInstance().dialogNestedComponent = config.component;
        this.getComponentInstance().width = config === null || config === void 0 ? void 0 : config.width;
        this.getComponentInstance().height = config === null || config === void 0 ? void 0 : config.height;
        this.getComponentInstance().setTransformOrigin(event);
    }
}
FabricDialogService.decorators = [
    { type: Injectable }
];
FabricDialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RpYWxvZy9mYWJyaWMtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUs5RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsV0FBa0M7SUFFMUUsWUFBWSx3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBQ2pDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQTBCO1FBRTlCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzNCLE9BQU87U0FDUDtRQUVELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQ3ZCLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMzQixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNyQjtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDOUIsY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDakM7UUFFRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxVQUFVO29CQUNuQixRQUFRLEVBQUUsS0FBSztpQkFDZixDQUFDO1lBQ0YsTUFBTSxFQUFFLGNBQWM7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNwQixpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO1lBQzVELFFBQVE7U0FDUixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTVDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEIsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNGLENBQUM7SUFFTyxhQUFhO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDakIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxNQUEwQjtRQUN4RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQXJFRCxVQUFVOzs7WUFYYyx3QkFBd0I7WUFBeEMsY0FBYztZQUFnRCxRQUFROzRDQWlCMUUsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dTZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljRGlhbG9nQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY0RpYWxvZ0NvbXBvbmVudD4ge1xuXHRcdHJldHVybiBGYWJyaWNEaWFsb2dDb21wb25lbnQ7XG5cdH1cblxuXHRvcGVuKGNvbmZpZzogRmFicmljRGlhbG9nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5nZXRDb21wb25lbnRSZWYoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5nZXRJbmplY3RvcigpO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0fV0sXG5cdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLmNyZWF0ZUFuZEFwcGVuZCh7XG5cdFx0XHRhZnRlckNvbXBDcmVhdGlvbjogKCkgPT4gdGhpcy5hZnRlckNvbXBvbmVudENyZWF0aW9uKGNvbmZpZyksXG5cdFx0XHRpbmplY3RvclxuXHRcdH0pO1xuXHRcdHRoaXMuY2xvc2VPbkVzY0tleSgpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkpIHtcblx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50SW5zdGFuY2UoKS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR0aGlzLmdldENvbXBvbmVudEluc3RhbmNlKCkuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0XHR0aW1lcig0MDApXG5cdFx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2xvc2VPbkVzY0tleSgpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2xvc2VPbkVzYygpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGFmdGVyQ29tcG9uZW50Q3JlYXRpb24oY29uZmlnOiBGYWJyaWNEaWFsb2dDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmdldENvbXBvbmVudEluc3RhbmNlKCkuZGlhbG9nTmVzdGVkQ29tcG9uZW50ID0gY29uZmlnLmNvbXBvbmVudDtcblx0XHR0aGlzLmdldENvbXBvbmVudEluc3RhbmNlKCkud2lkdGggPSBjb25maWc/LndpZHRoO1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50SW5zdGFuY2UoKS5oZWlnaHQgPSBjb25maWc/LmhlaWdodDtcblx0XHR0aGlzLmdldENvbXBvbmVudEluc3RhbmNlKCkuc2V0VHJhbnNmb3JtT3JpZ2luKGV2ZW50KTtcblx0fVxufVxuIl19