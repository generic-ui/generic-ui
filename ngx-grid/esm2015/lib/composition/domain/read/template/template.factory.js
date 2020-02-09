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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNcEcsTUFBTSxPQUFnQixlQUFlOzs7Ozs7SUFNcEMsWUFBdUMsNEJBQXFDLEVBQzdELHdCQUFrRDtRQUQxQixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQVM7UUFDN0QsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUx6RCxjQUFTLEdBQStDLElBQUksR0FBRyxFQUF5QyxDQUFDO1FBRXpHLHVCQUFrQixHQUFvQixJQUFJLENBQUM7UUFJbEQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRU8sd0JBQXdCOztjQUV6QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDOztjQUUzRyxRQUFRLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUU3RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFdBQVc7UUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNwQixPQUFPOzs7O1FBQUMsQ0FBQyxJQUF5QixFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVNLGtCQUFrQixDQUFDLEVBQXVCOztjQUUzQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBRWpFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUQ7Ozs7OztJQS9DQSxvQ0FBaUg7Ozs7O0lBRWpILDZDQUFtRDs7Ozs7SUFFN0IsdURBQXNEOzs7OztJQUNyRSxtREFBMEQ7Ozs7OztJQUlqRSw0REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZW1wbGF0ZUZhY3Rvcnk8VCBleHRlbmRzIFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXNDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbjogVHlwZTxUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGUgfCBDZWxsVmlldz47XG5cblx0Z2V0VGVtcGxhdGVzKCk6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVzO1xuXHR9XG5cblx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZXNDb21wb25lbnQpIHtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb24pO1xuXG5cdFx0Y29uc3QgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZU1hcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZU1hcCgpOiB2b2lkIHtcblx0XHR0aGlzLmdlbmVyYXRlTWFwS2V5cygpXG5cdFx0XHQuZm9yRWFjaCgodHlwZTogRGF0YVR5cGUgfCBDZWxsVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbmRBbmRTZXRUZW1wbGF0ZSh0eXBlKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgZmluZEFuZFNldFRlbXBsYXRlKGR0OiBEYXRhVHlwZSB8IENlbGxWaWV3KTogdm9pZCB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQ29tcG9uZW50Lmluc3RhbmNlLmdldFRlbXBsYXRlKGR0KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzLnNldChkdCwgdGVtcGxhdGUpO1xuXHR9XG5cbn1cbiJdfQ==