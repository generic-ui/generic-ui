/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    setTheme(theme, schemaId, structureId) {
        /** @type {?} */
        const schemaTheme = this.gridThemeConverter.convert(theme);
        this.schemaCommandInvoker.setTheme(schemaTheme, schemaId, structureId);
    }
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId) {
        /** @type {?} */
        const schemaRowColoring = this.gridRowColoringConverter.convert(rowColoring);
        this.schemaCommandInvoker.setRowColoring(schemaRowColoring, schemaId);
    }
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, schemaId);
    }
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFFdEMsWUFBNkIsb0JBQTBDLEVBQ25ELGtCQUF5QyxFQUN6Qyx3QkFBcUQ7UUFGNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUNuRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQ3pDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBNkI7SUFDekUsQ0FBQzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUF3QixFQUFFLFFBQStCLEVBQUUsV0FBd0I7O2NBQ3JGLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUUxRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQW9DLEVBQUUsUUFBK0I7O2NBRTdFLGlCQUFpQixHQUFnQixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV6RixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxZQUFxQixFQUFFLFFBQStCO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsUUFBK0I7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBRUQ7Ozs7OztJQTFCWSwwREFBMkQ7Ozs7O0lBQ3BFLHdEQUEwRDs7Ozs7SUFDMUQsOERBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4vZ3VpLmdyaWQudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB9IGZyb20gJy4vY29sb3JpbmcvZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlcic7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29udmVydGVyOiBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyOiBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIpIHtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NoZW1hVGhlbWUgPSB0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0KHRoZW1lKTtcblxuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VGhlbWUoc2NoZW1hVGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNjaGVtYVJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZyA9IHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyLmNvbnZlcnQocm93Q29sb3JpbmcpO1xuXG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgc2NoZW1hSWQpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZCk7XG5cdH1cblxufVxuIl19