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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEwQyxRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7OztBQU1wRyxNQUFNLE9BQWdCLGVBQWU7Ozs7OztJQU1wQyxZQUF1Qyw0QkFBcUMsRUFDcEQsd0JBQWtEO1FBRG5DLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBUztRQUNwRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTGxFLGNBQVMsR0FBK0MsSUFBSSxHQUFHLEVBQXlDLENBQUM7UUFFekcsdUJBQWtCLEdBQW9CLElBQUksQ0FBQztRQUlsRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7SUFFTyx3QkFBd0I7O2NBRXpCLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7O2NBRTNHLFFBQVEsR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFO2FBQ3BCLE9BQU87Ozs7UUFBQyxDQUFDLElBQXlCLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQzs7Ozs7O0lBRU0sa0JBQWtCLENBQUMsRUFBdUI7O2NBRTNDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFFakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FFRDs7Ozs7O0lBL0NBLG9DQUFpSDs7Ozs7SUFFakgsNkNBQW1EOzs7OztJQUU3Qix1REFBc0Q7Ozs7O0lBQ3JFLG1EQUFtRTs7Ozs7O0lBSTFFLDREQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRlbXBsYXRlRmFjdG9yeTxUIGV4dGVuZHMgVGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXM6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcblxuXHRwcml2YXRlIHRlbXBsYXRlc0NvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZXNDb21wb25lbnREZWZpbml0aW9uOiBUeXBlPFQ+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZXNDb21wb25lbnQoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxEYXRhVHlwZSB8IENlbGxWaWV3PjtcblxuXHRnZXRUZW1wbGF0ZXMoKTogTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZXM7XG5cdH1cblxuXHRkZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCkge1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbik7XG5cblx0XHRjb25zdCBpbmplY3RvcjogSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnM6IFtdIH0pO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cblx0XHR0aGlzLmdlbmVyYXRlTWFwKCk7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlTWFwKCk6IHZvaWQge1xuXHRcdHRoaXMuZ2VuZXJhdGVNYXBLZXlzKClcblx0XHRcdC5mb3JFYWNoKCh0eXBlOiBEYXRhVHlwZSB8IENlbGxWaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmluZEFuZFNldFRlbXBsYXRlKHR5cGUpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0cHJpdmF0ZSBmaW5kQW5kU2V0VGVtcGxhdGUoZHQ6IERhdGFUeXBlIHwgQ2VsbFZpZXcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNDb21wb25lbnQuaW5zdGFuY2UuZ2V0VGVtcGxhdGUoZHQpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2V0KGR0LCB0ZW1wbGF0ZSk7XG5cdH1cblxufVxuIl19