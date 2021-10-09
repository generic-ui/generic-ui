/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GuiGridThemeCommandInvoker = /** @class */ (function () {
    function GuiGridThemeCommandInvoker(schemaCommandInvoker, gridThemeConverter, gridRowColoringConverter) {
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.gridThemeConverter = gridThemeConverter;
        this.gridRowColoringConverter = gridRowColoringConverter;
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setTheme = /**
     * @param {?} theme
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    function (theme, schemaId, structureId) {
        /** @type {?} */
        var schemaTheme = this.gridThemeConverter.convert(theme);
        this.schemaCommandInvoker.setTheme(schemaTheme, schemaId, structureId);
    };
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        /** @type {?} */
        var schemaRowColoring = this.gridRowColoringConverter.convert(rowColoring);
        this.schemaCommandInvoker.setRowColoring(schemaRowColoring, schemaId);
    };
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    function (verticalGrid, schemaId) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, schemaId);
    };
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    GuiGridThemeCommandInvoker.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQTtJQUVDLG9DQUE2QixvQkFBMEMsRUFDbkQsa0JBQXlDLEVBQ3pDLHdCQUFxRDtRQUY1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ25ELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUE2QjtJQUN6RSxDQUFDOzs7Ozs7O0lBRUQsNkNBQVE7Ozs7OztJQUFSLFVBQVMsS0FBd0IsRUFBRSxRQUErQixFQUFFLFdBQXdCOztZQUNyRixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELG1EQUFjOzs7OztJQUFkLFVBQWUsV0FBb0MsRUFBRSxRQUErQjs7WUFFN0UsaUJBQWlCLEdBQWdCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXpGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRUQsb0RBQWU7Ozs7O0lBQWYsVUFBZ0IsWUFBcUIsRUFBRSxRQUErQjtRQUNyRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxzREFBaUI7Ozs7O0lBQWpCLFVBQWtCLGNBQXVCLEVBQUUsUUFBK0I7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUYsaUNBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDOzs7Ozs7O0lBMUJZLDBEQUEyRDs7Ozs7SUFDcEUsd0RBQTBEOzs7OztJQUMxRCw4REFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi9ndWkuZ3JpZC50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIH0gZnJvbSAnLi9jb2xvcmluZy9ndWkuZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyJztcblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb252ZXJ0ZXI6IEd1aUdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlcikge1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRjb25zdCBzY2hlbWFUaGVtZSA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhlbWUpO1xuXG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZShzY2hlbWFUaGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2NoZW1hUm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydChyb3dDb2xvcmluZyk7XG5cblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCBzY2hlbWFJZCk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHNjaGVtYUlkKTtcblx0fVxuXG59XG4iXX0=