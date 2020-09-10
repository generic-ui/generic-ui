/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector } from '@angular/core';
/**
 * @abstract
 * @template T
 */
export class TemplateFactory {
    /**
     * @protected
     * @param {?} templatesComponentDefinition
     * @param {?} componentFactoryResolver
     */
    constructor(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    /**
     * @return {?}
     */
    getTemplates() {
        return this.templates;
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createTemplatesComponent() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        /** @type {?} */
        const injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    }
    /**
     * @private
     * @return {?}
     */
    generateMap() {
        this.generateMapKeys()
            .forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.findAndSetTemplate(type);
        }));
    }
    ;
    /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    findAndSetTemplate(dt) {
        /** @type {?} */
        const template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templates;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponent;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponentDefinition;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.componentFactoryResolver;
    /* Skipping unhandled member: ;*/
    /**
     * @abstract
     * @return {?}
     */
    TemplateFactory.prototype.generateMapKeys = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNcEcsTUFBTSxPQUFnQixlQUFlOzs7Ozs7SUFNcEMsWUFBdUMsNEJBQXFDLEVBQ3BELHdCQUFrRDtRQURuQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQVM7UUFDcEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUxsRSxjQUFTLEdBQStDLElBQUksR0FBRyxFQUF5QyxDQUFDO1FBRXpHLHVCQUFrQixHQUFvQixJQUFJLENBQUM7UUFJbEQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRU8sd0JBQXdCOztjQUV6QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDOztjQUUzRyxRQUFRLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUU3RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFdBQVc7UUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNwQixPQUFPOzs7O1FBQUMsQ0FBQyxJQUF5QixFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVNLGtCQUFrQixDQUFDLEVBQXVCOztjQUUzQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBRWpFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUQ7Ozs7OztJQS9DQSxvQ0FBaUg7Ozs7O0lBRWpILDZDQUFtRDs7Ozs7SUFFN0IsdURBQXNEOzs7OztJQUNyRSxtREFBbUU7Ozs7OztJQUkxRSw0REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRlbXBsYXRlRmFjdG9yeTxUIGV4dGVuZHMgVGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXM6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcblxuXHRwcml2YXRlIHRlbXBsYXRlc0NvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZXNDb21wb25lbnREZWZpbml0aW9uOiBUeXBlPFQ+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZXNDb21wb25lbnQoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxEYXRhVHlwZSB8IENlbGxWaWV3PjtcblxuXHRnZXRUZW1wbGF0ZXMoKTogTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZXM7XG5cdH1cblxuXHRkZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCkge1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbik7XG5cblx0XHRjb25zdCBpbmplY3RvcjogSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnM6IFtdIH0pO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cblx0XHR0aGlzLmdlbmVyYXRlTWFwKCk7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlTWFwKCk6IHZvaWQge1xuXHRcdHRoaXMuZ2VuZXJhdGVNYXBLZXlzKClcblx0XHRcdC5mb3JFYWNoKCh0eXBlOiBEYXRhVHlwZSB8IENlbGxWaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmluZEFuZFNldFRlbXBsYXRlKHR5cGUpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0cHJpdmF0ZSBmaW5kQW5kU2V0VGVtcGxhdGUoZHQ6IERhdGFUeXBlIHwgQ2VsbFZpZXcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNDb21wb25lbnQuaW5zdGFuY2UuZ2V0VGVtcGxhdGUoZHQpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2V0KGR0LCB0ZW1wbGF0ZSk7XG5cdH1cblxufVxuIl19