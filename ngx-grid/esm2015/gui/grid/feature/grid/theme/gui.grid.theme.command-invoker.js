/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { schemaGlobalId } from '../../../../../schema/domain-api/read/schema.global-id';
import { structureGlobalId } from '../../../../../structure/core/domain-api/structure.global-id';
export class GuiGridThemeCommandInvoker {
    /**
     * @param {?} schemaCommandInvoker
     * @param {?} gridThemeConverter
     * @param {?} gridRowColoringConverter
     */
    constructor(schemaCommandInvoker, gridThemeConverter, gridRowColoringConverter) {
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.gridThemeConverter = gridThemeConverter;
        this.gridRowColoringConverter = gridRowColoringConverter;
    }
    /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    setTheme(theme, schemaId = schemaGlobalId, structureId = structureGlobalId) {
        /** @type {?} */
        const schemaTheme = this.gridThemeConverter.convert(theme);
        this.schemaCommandInvoker.setTheme(schemaTheme, schemaId, structureId);
    }
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId = schemaGlobalId) {
        /** @type {?} */
        const schemaRowColoring = this.gridRowColoringConverter.convert(rowColoring);
        this.schemaCommandInvoker.setRowColoring(schemaRowColoring, schemaId);
    }
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId = schemaGlobalId) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, schemaId);
    }
    /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId = schemaGlobalId) {
        this.schemaCommandInvoker.setHorizontalGrid(horizontalGrid, schemaId);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridThemeCommandInvoker.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridThemeCommandInvoker.prototype.gridThemeConverter;
    /**
     * @type {?}
     * @private
     */
    GuiGridThemeCommandInvoker.prototype.gridRowColoringConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFNakcsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXRDLFlBQTZCLG9CQUEwQyxFQUNuRCxrQkFBeUMsRUFDekMsd0JBQXFEO1FBRjVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDbkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUN6Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTZCO0lBQ3pFLENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBd0IsRUFBRSxXQUFrQyxjQUFjLEVBQUUsY0FBMkIsaUJBQWlCOztjQUMxSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxXQUFvQyxFQUFFLFdBQWtDLGNBQWM7O2NBRTlGLGlCQUFpQixHQUFnQixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV6RixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxZQUFxQixFQUFFLFdBQWtDLGNBQWM7UUFDdEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBdUIsRUFBRSxXQUFrQyxjQUFjO1FBQzFGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUVEOzs7Ozs7SUExQlksMERBQTJEOzs7OztJQUNwRSx3REFBMEQ7Ozs7O0lBQzFELDhEQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL2d1aS5ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuXG5leHBvcnQgY2xhc3MgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbnZlcnRlcjogR3VpR3JpZFRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcjogR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyKSB7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRjb25zdCBzY2hlbWFUaGVtZSA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhlbWUpO1xuXG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZShzY2hlbWFUaGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWFSb3dDb2xvcmluZzogUm93Q29sb3JpbmcgPSB0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlci5jb252ZXJ0KHJvd0NvbG9yaW5nKTtcblxuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0Um93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcsIHNjaGVtYUlkKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgc2NoZW1hSWQpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHNjaGVtYUlkKTtcblx0fVxuXG59XG4iXX0=