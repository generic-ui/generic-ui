/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { schemaGlobalId } from '../../../../../schema/core/api/schema.global-id';
import { structureGlobalId } from '../../../../../structure/core/api/structure.global-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFNMUYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXRDLFlBQTZCLG9CQUEwQyxFQUNuRCxrQkFBeUMsRUFDekMsd0JBQXFEO1FBRjVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDbkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUN6Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTZCO0lBQ3pFLENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBd0IsRUFBRSxXQUFrQyxjQUFjLEVBQUUsY0FBMkIsaUJBQWlCOztjQUMxSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxXQUFvQyxFQUFFLFdBQWtDLGNBQWM7O2NBRTlGLGlCQUFpQixHQUFnQixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV6RixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxZQUFxQixFQUFFLFdBQWtDLGNBQWM7UUFDdEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBdUIsRUFBRSxXQUFrQyxjQUFjO1FBQzFGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUVEOzs7Ozs7SUExQlksMERBQTJEOzs7OztJQUNwRSx3REFBMEQ7Ozs7O0lBQzFELDhEQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIH0gZnJvbSAnLi9jb2xvcmluZy9ndWkuZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyJztcblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEd1aUdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcikge1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NoZW1hVGhlbWUgPSB0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0KHRoZW1lKTtcblxuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VGhlbWUoc2NoZW1hVGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2NoZW1hUm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydChyb3dDb2xvcmluZyk7XG5cblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZCk7XG5cdH1cblxufVxuIl19