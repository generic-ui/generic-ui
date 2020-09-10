/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { schemaGlobalId } from '../../../../../schema/domain-api/read/schema.global-id';
import { structureGlobalId } from '../../../../../structure/core/domain-api/structure.global-id';
var GuiGridThemeCommandInvoker = /** @class */ (function () {
    function GuiGridThemeCommandInvoker(schemaCommandInvoker, gridThemeConverter, gridRowColoringConverter) {
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
    GuiGridThemeCommandInvoker.prototype.setTheme = /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, schemaId, structureId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        if (structureId === void 0) { structureId = structureGlobalId; }
        /** @type {?} */
        var schemaTheme = this.gridThemeConverter.convert(theme);
        this.schemaCommandInvoker.setTheme(schemaTheme, schemaId, structureId);
    };
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        /** @type {?} */
        var schemaRowColoring = this.gridRowColoringConverter.convert(rowColoring);
        this.schemaCommandInvoker.setRowColoring(schemaRowColoring, schemaId);
    };
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (verticalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, schemaId);
    };
    /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaCommandInvoker.setHorizontalGrid(horizontalGrid, schemaId);
    };
    return GuiGridThemeCommandInvoker;
}());
export { GuiGridThemeCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFNakc7SUFFQyxvQ0FBNkIsb0JBQTBDLEVBQ25ELGtCQUF5QyxFQUN6Qyx3QkFBcUQ7UUFGNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUNuRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQ3pDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBNkI7SUFDekUsQ0FBQzs7Ozs7OztJQUVELDZDQUFROzs7Ozs7SUFBUixVQUFTLEtBQXdCLEVBQUUsUUFBZ0QsRUFBRSxXQUE0QztRQUE5Rix5QkFBQSxFQUFBLHlCQUFnRDtRQUFFLDRCQUFBLEVBQUEsK0JBQTRDOztZQUMxSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELG1EQUFjOzs7OztJQUFkLFVBQWUsV0FBb0MsRUFBRSxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDs7WUFFOUYsaUJBQWlCLEdBQWdCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXpGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRUQsb0RBQWU7Ozs7O0lBQWYsVUFBZ0IsWUFBcUIsRUFBRSxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUN0RixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxzREFBaUI7Ozs7O0lBQWpCLFVBQWtCLGNBQXVCLEVBQUUsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDMUYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUYsaUNBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDOzs7Ozs7O0lBMUJZLDBEQUEyRDs7Ozs7SUFDcEUsd0RBQTBEOzs7OztJQUMxRCw4REFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIH0gZnJvbSAnLi9jb2xvcmluZy9ndWkuZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyJztcblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEd1aUdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcikge1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NoZW1hVGhlbWUgPSB0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0KHRoZW1lKTtcblxuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VGhlbWUoc2NoZW1hVGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2NoZW1hUm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydChyb3dDb2xvcmluZyk7XG5cblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZCk7XG5cdH1cblxufVxuIl19