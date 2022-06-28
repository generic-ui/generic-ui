import { Injector } from '@angular/core';
export class TemplateFactory {
    constructor(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    getTemplates() {
        return this.templates;
    }
    destroy() {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    }
    createTemplatesComponent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        const injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    }
    generateMap() {
        this.generateMapKeys()
            .forEach((type) => {
            this.findAndSetTemplate(type);
        });
    }
    ;
    findAndSetTemplate(dt) {
        const template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9jb3JlLXJlYWQvdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTBDLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFNcEcsTUFBTSxPQUFnQixlQUFlO0lBTXBDLFlBQXVDLDRCQUFxQyxFQUNwRCx3QkFBa0Q7UUFEbkMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFTO1FBQ3BELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFMbEUsY0FBUyxHQUErQyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztRQUV6Ryx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBSWxELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFJRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDRixDQUFDO0lBRU8sd0JBQXdCO1FBRS9CLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRWxILE1BQU0sUUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sV0FBVztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFO2FBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQXlCLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVNLGtCQUFrQixDQUFDLEVBQXVCO1FBRWpELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZW1wbGF0ZUZhY3Rvcnk8VCBleHRlbmRzIFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXNDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbjogVHlwZTxUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGUgfCBDZWxsVmlldz47XG5cblx0Z2V0VGVtcGxhdGVzKCk6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVzO1xuXHR9XG5cblx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZXNDb21wb25lbnQpIHtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb24pO1xuXG5cdFx0Y29uc3QgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZU1hcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZU1hcCgpOiB2b2lkIHtcblx0XHR0aGlzLmdlbmVyYXRlTWFwS2V5cygpXG5cdFx0XHQuZm9yRWFjaCgodHlwZTogRGF0YVR5cGUgfCBDZWxsVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbmRBbmRTZXRUZW1wbGF0ZSh0eXBlKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgZmluZEFuZFNldFRlbXBsYXRlKGR0OiBEYXRhVHlwZSB8IENlbGxWaWV3KTogdm9pZCB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQ29tcG9uZW50Lmluc3RhbmNlLmdldFRlbXBsYXRlKGR0KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzLnNldChkdCwgdGVtcGxhdGUpO1xuXHR9XG5cbn1cbiJdfQ==