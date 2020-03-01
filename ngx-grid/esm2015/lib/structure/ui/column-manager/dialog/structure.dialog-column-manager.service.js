/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { StructureDialogColumnManagerComponent } from './structure.dialog-column-manager.component';
export class StructureDialogColumnManagerService {
    /**
     * @param {?} injector
     * @param {?} fabricDialogService
     */
    constructor(injector, fabricDialogService) {
        this.injector = injector;
        this.fabricDialogService = fabricDialogService;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    open(compositionId) {
        /** @type {?} */
        const injector = Injector.create({ parent: this.injector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.fabricDialogService.open(StructureDialogColumnManagerComponent, injector);
    }
}
StructureDialogColumnManagerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDialogColumnManagerService.ctorParameters = () => [
    { type: Injector },
    { type: FabricDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogColumnManagerService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUlwRyxNQUFNLE9BQU8sbUNBQW1DOzs7OztJQUUvQyxZQUFvQixRQUFrQixFQUMzQixtQkFBd0M7UUFEL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQ25ELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGFBQTRCOztjQUUxQixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTdILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBWkQsVUFBVTs7OztZQVJVLFFBQVE7WUFFcEIsbUJBQW1COzs7Ozs7O0lBU2YsdURBQTBCOzs7OztJQUNuQyxrRUFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSBmYWJyaWNEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSB7XG5cdH1cblxuXHRvcGVuKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcGFyZW50OiB0aGlzLmluamVjdG9yLCBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbXBvc2l0aW9uSWQsIHVzZVZhbHVlOiBjb21wb3NpdGlvbklkIH1dIH0pO1xuXG5cdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCwgaW5qZWN0b3IpO1xuXHR9XG5cbn1cbiJdfQ==