import { defaultTranslation } from '../../../../l10n/core/api/default-translation';
export var GuiDataType;
(function (GuiDataType) {
    GuiDataType[GuiDataType["UNKNOWN"] = 0] = "UNKNOWN";
    GuiDataType[GuiDataType["NUMBER"] = 1] = "NUMBER";
    GuiDataType[GuiDataType["STRING"] = 2] = "STRING";
    GuiDataType[GuiDataType["BOOLEAN"] = 3] = "BOOLEAN";
    GuiDataType[GuiDataType["DATE"] = 4] = "DATE";
    GuiDataType[GuiDataType["CUSTOM"] = 5] = "CUSTOM";
})(GuiDataType || (GuiDataType = {}));
export var GuiCellView;
(function (GuiCellView) {
    GuiCellView[GuiCellView["TEXT"] = 0] = "TEXT";
    GuiCellView[GuiCellView["CHIP"] = 1] = "CHIP";
    GuiCellView[GuiCellView["LINK"] = 2] = "LINK";
    GuiCellView[GuiCellView["IMAGE"] = 3] = "IMAGE";
    GuiCellView[GuiCellView["BOLD"] = 4] = "BOLD";
    GuiCellView[GuiCellView["ITALIC"] = 5] = "ITALIC";
    GuiCellView[GuiCellView["CHECKBOX"] = 6] = "CHECKBOX";
    GuiCellView[GuiCellView["CUSTOM"] = 7] = "CUSTOM";
    GuiCellView[GuiCellView["BAR"] = 8] = "BAR";
    GuiCellView[GuiCellView["PERCENTAGE_BAR"] = 9] = "PERCENTAGE_BAR";
    GuiCellView[GuiCellView["PERCENTAGE"] = 10] = "PERCENTAGE";
})(GuiCellView || (GuiCellView = {}));
export var GuiNumberCellView;
(function (GuiNumberCellView) {
    GuiNumberCellView[GuiNumberCellView["TEXT"] = 0] = "TEXT";
    GuiNumberCellView[GuiNumberCellView["BOLD"] = 1] = "BOLD";
    GuiNumberCellView[GuiNumberCellView["ITALIC"] = 2] = "ITALIC";
    GuiNumberCellView[GuiNumberCellView["CHIP"] = 3] = "CHIP";
})(GuiNumberCellView || (GuiNumberCellView = {}));
export var GuiStringCellView;
(function (GuiStringCellView) {
    GuiStringCellView[GuiStringCellView["TEXT"] = 0] = "TEXT";
    GuiStringCellView[GuiStringCellView["BOLD"] = 1] = "BOLD";
    GuiStringCellView[GuiStringCellView["ITALIC"] = 2] = "ITALIC";
    GuiStringCellView[GuiStringCellView["CHIP"] = 3] = "CHIP";
})(GuiStringCellView || (GuiStringCellView = {}));
export var GuiBooleanCellView;
(function (GuiBooleanCellView) {
    GuiBooleanCellView[GuiBooleanCellView["TEXT"] = 0] = "TEXT";
    GuiBooleanCellView[GuiBooleanCellView["BOLD"] = 1] = "BOLD";
    GuiBooleanCellView[GuiBooleanCellView["ITALIC"] = 2] = "ITALIC";
    GuiBooleanCellView[GuiBooleanCellView["CHIP"] = 3] = "CHIP";
    GuiBooleanCellView[GuiBooleanCellView["CHECKBOX"] = 4] = "CHECKBOX";
})(GuiBooleanCellView || (GuiBooleanCellView = {}));
export var GuiDateCellView;
(function (GuiDateCellView) {
    GuiDateCellView[GuiDateCellView["TEXT"] = 0] = "TEXT";
    GuiDateCellView[GuiDateCellView["BOLD"] = 1] = "BOLD";
    GuiDateCellView[GuiDateCellView["ITALIC"] = 2] = "ITALIC";
    GuiDateCellView[GuiDateCellView["CHIP"] = 3] = "CHIP";
})(GuiDateCellView || (GuiDateCellView = {}));
export var GuiTheme;
(function (GuiTheme) {
    GuiTheme[GuiTheme["FABRIC"] = 0] = "FABRIC";
    GuiTheme[GuiTheme["MATERIAL"] = 1] = "MATERIAL";
    GuiTheme[GuiTheme["LIGHT"] = 2] = "LIGHT";
    GuiTheme[GuiTheme["DARK"] = 3] = "DARK";
    GuiTheme[GuiTheme["GENERIC"] = 4] = "GENERIC";
})(GuiTheme || (GuiTheme = {}));
export var GuiRowColoring;
(function (GuiRowColoring) {
    GuiRowColoring[GuiRowColoring["NONE"] = 0] = "NONE";
    GuiRowColoring[GuiRowColoring["EVEN"] = 1] = "EVEN";
    GuiRowColoring[GuiRowColoring["ODD"] = 2] = "ODD";
})(GuiRowColoring || (GuiRowColoring = {}));
export var GuiSortingOrder;
(function (GuiSortingOrder) {
    GuiSortingOrder[GuiSortingOrder["NONE"] = 0] = "NONE";
    GuiSortingOrder[GuiSortingOrder["ASC"] = 1] = "ASC";
    GuiSortingOrder[GuiSortingOrder["DESC"] = 2] = "DESC";
})(GuiSortingOrder || (GuiSortingOrder = {}));
export var GuiPagingDisplay;
(function (GuiPagingDisplay) {
    GuiPagingDisplay[GuiPagingDisplay["BASIC"] = 0] = "BASIC";
    GuiPagingDisplay[GuiPagingDisplay["ADVANCED"] = 1] = "ADVANCED";
})(GuiPagingDisplay || (GuiPagingDisplay = {}));
export var GuiColumnAlign;
(function (GuiColumnAlign) {
    GuiColumnAlign[GuiColumnAlign["RIGHT"] = 0] = "RIGHT";
    GuiColumnAlign[GuiColumnAlign["CENTER"] = 1] = "CENTER";
    GuiColumnAlign[GuiColumnAlign["LEFT"] = 2] = "LEFT";
})(GuiColumnAlign || (GuiColumnAlign = {}));
export var GuiRowSelectionType;
(function (GuiRowSelectionType) {
    GuiRowSelectionType[GuiRowSelectionType["ROW"] = 0] = "ROW";
    GuiRowSelectionType[GuiRowSelectionType["CHECKBOX"] = 1] = "CHECKBOX";
})(GuiRowSelectionType || (GuiRowSelectionType = {}));
export var GuiRowSelectionMode;
(function (GuiRowSelectionMode) {
    GuiRowSelectionMode[GuiRowSelectionMode["SINGLE"] = 0] = "SINGLE";
    GuiRowSelectionMode[GuiRowSelectionMode["MULTIPLE"] = 1] = "MULTIPLE";
})(GuiRowSelectionMode || (GuiRowSelectionMode = {}));
export const GuiDefaultTranslation = defaultTranslation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQStDbkYsTUFBTSxDQUFOLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUN0QixtREFBTyxDQUFBO0lBQ1AsaURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7SUFDTixtREFBTyxDQUFBO0lBQ1AsNkNBQUksQ0FBQTtJQUNKLGlEQUFNLENBQUE7QUFDUCxDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxXQVlYO0FBWkQsV0FBWSxXQUFXO0lBQ3RCLDZDQUFJLENBQUE7SUFDSiw2Q0FBSSxDQUFBO0lBQ0osNkNBQUksQ0FBQTtJQUNKLCtDQUFLLENBQUE7SUFDTCw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLHFEQUFRLENBQUE7SUFDUixpREFBTSxDQUFBO0lBQ04sMkNBQUcsQ0FBQTtJQUNILGlFQUFjLENBQUE7SUFDZCwwREFBVSxDQUFBO0FBQ1gsQ0FBQyxFQVpXLFdBQVcsS0FBWCxXQUFXLFFBWXRCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUM1Qix5REFBSSxDQUFBO0lBQ0oseURBQUksQ0FBQTtJQUNKLDZEQUFNLENBQUE7SUFDTix5REFBSSxDQUFBO0FBQ0wsQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzVCLHlEQUFJLENBQUE7SUFDSix5REFBSSxDQUFBO0lBQ0osNkRBQU0sQ0FBQTtJQUNOLHlEQUFJLENBQUE7QUFDTCxDQUFDLEVBTFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUs1QjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQU1YO0FBTkQsV0FBWSxrQkFBa0I7SUFDN0IsMkRBQUksQ0FBQTtJQUNKLDJEQUFJLENBQUE7SUFDSiwrREFBTSxDQUFBO0lBQ04sMkRBQUksQ0FBQTtJQUNKLG1FQUFRLENBQUE7QUFDVCxDQUFDLEVBTlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU03QjtBQUVELE1BQU0sQ0FBTixJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDMUIscURBQUksQ0FBQTtJQUNKLHFEQUFJLENBQUE7SUFDSix5REFBTSxDQUFBO0lBQ04scURBQUksQ0FBQTtBQUNMLENBQUMsRUFMVyxlQUFlLEtBQWYsZUFBZSxRQUsxQjtBQW9CRCxNQUFNLENBQU4sSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ25CLDJDQUFNLENBQUE7SUFDTiwrQ0FBUSxDQUFBO0lBQ1IseUNBQUssQ0FBQTtJQUNMLHVDQUFJLENBQUE7SUFDSiw2Q0FBTyxDQUFBO0FBQ1IsQ0FBQyxFQU5XLFFBQVEsS0FBUixRQUFRLFFBTW5CO0FBRUQsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN6QixtREFBSSxDQUFBO0lBQ0osbURBQUksQ0FBQTtJQUNKLGlEQUFHLENBQUE7QUFDSixDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFrQkQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUMxQixxREFBSSxDQUFBO0lBQ0osbURBQUcsQ0FBQTtJQUNILHFEQUFJLENBQUE7QUFDTCxDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFnRkQsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMzQix5REFBSyxDQUFBO0lBQ0wsK0RBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRzNCO0FBRUQsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN6QixxREFBSyxDQUFBO0lBQ0wsdURBQU0sQ0FBQTtJQUNOLG1EQUFJLENBQUE7QUFDTCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUF3Q0QsTUFBTSxDQUFOLElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUM5QiwyREFBRyxDQUFBO0lBQ0gscUVBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCO0FBRUQsTUFBTSxDQUFOLElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUM5QixpRUFBTSxDQUFBO0lBQ04scUVBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCO0FBMENELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLWNoYW5nZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL2RlZmF1bHQtdHJhbnNsYXRpb24nO1xuXG5leHBvcnQgdHlwZSBGaWVsZEFjY2Vzc29yID0gKGVsZW1lbnQ/OiBhbnkpID0+IGFueTtcbmV4cG9ydCB0eXBlIFZpZXdUZW1wbGF0ZUZ1bmN0aW9uID0gKGNlbGxWYWx1ZT86IGFueSwgaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBHdWlNdWx0aUNvbHVtbiB7XG5cblx0aGVhZGVyPzogc3RyaW5nIHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0Y29sdW1ucz86IEFycmF5PEd1aUNvbHVtbj47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdG5hbWU/OiBzdHJpbmc7XG5cblx0ZmllbGQ/OiBzdHJpbmcgfCBGaWVsZEFjY2Vzc29yO1xuXG5cdHR5cGU/OiBzdHJpbmcgfCBHdWlEYXRhVHlwZTtcblxuXHR2aWV3Pzogc3RyaW5nIHwgR3VpQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbjtcblxuXHRoZWFkZXI/OiBzdHJpbmcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbjtcblxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRhbGlnbj86IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduO1xuXG5cdHN1bW1hcmllcz86IEd1aUNvbHVtblN1bW1hcmllcztcblxuXHRzb3J0aW5nPzogYm9vbGVhbiB8IEd1aUNvbHVtblNvcnRpbmc7XG5cblx0Y2VsbEVkaXRpbmc/OiBib29sZWFuIHwgR3VpQ29sdW1uQ2VsbEVkaXRpbmc7XG5cblx0Zm9ybWF0dGVyPzogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYW55O1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cblx0Y3NzQ2xhc3Nlcz86IHN0cmluZztcblxuXHRzdHlsZXM/OiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0YVR5cGUge1xuXHRVTktOT1dOLFxuXHROVU1CRVIsXG5cdFNUUklORyxcblx0Qk9PTEVBTixcblx0REFURSxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Q0hJUCxcblx0TElOSyxcblx0SU1BR0UsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hFQ0tCT1gsXG5cdENVU1RPTSxcblx0QkFSLFxuXHRQRVJDRU5UQUdFX0JBUixcblx0UEVSQ0VOVEFHRVxufVxuXG5leHBvcnQgZW51bSBHdWlOdW1iZXJDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlTdHJpbmdDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlCb29sZWFuQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVAsXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGVDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVBhZ2luZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cGFnZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+O1xuXG5cdHBhZ2VyVG9wPzogYm9vbGVhbjtcblxuXHRwYWdlckJvdHRvbT86IGJvb2xlYW47XG5cblx0ZGlzcGxheT86IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpVGhlbWUge1xuXHRGQUJSSUMsXG5cdE1BVEVSSUFMLFxuXHRMSUdIVCxcblx0REFSSyxcblx0R0VORVJJQ1xufVxuXG5leHBvcnQgZW51bSBHdWlSb3dDb2xvcmluZyB7XG5cdE5PTkUsXG5cdEVWRU4sXG5cdE9ERFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd1N0eWxlIHtcblxuXHRzdHlsZT86IHN0cmluZztcblxuXHRzdHlsZUZ1bmN0aW9uPzogKHNvdXJjZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dDbGFzcyB7XG5cblx0Y2xhc3M/OiBzdHJpbmc7XG5cblx0Y2xhc3NGdW5jdGlvbj86IChzb3VyY2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVNvcnRpbmdPcmRlciB7XG5cdE5PTkUsXG5cdEFTQyxcblx0REVTQ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdG11bHRpU29ydGluZz86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlGaWx0ZXJpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUXVpY2tGaWx0ZXJzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNlYXJjaGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0aGlnaGxpZ2h0aW5nPzogYm9vbGVhbjtcblxuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblxuXHRwaHJhc2U/OiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTdW1tYXJpZXMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRvcD86IGJvb2xlYW47XG5cblx0Ym90dG9tPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtblN1bW1hcmllcyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0c3VtbWFyaWVzVHlwZXM/OiBBcnJheTxzdHJpbmc+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uU29ydGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0bWF0Y2hlcj86IChpdGVtOiBhbnkpID0+IGFueTtcblxuXHRvcmRlcj86IEd1aVNvcnRpbmdPcmRlclxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uQ2VsbEVkaXRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uTWVudSB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0c29ydD86IGJvb2xlYW47XG5cblx0ZmlsdGVyPzogYm9vbGVhbjtcblxuXHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpUGFnaW5nRGlzcGxheSB7XG5cdEJBU0lDLFxuXHRBRFZBTkNFRFxufVxuXG5leHBvcnQgZW51bSBHdWlDb2x1bW5BbGlnbiB7XG5cdFJJR0hULFxuXHRDRU5URVIsXG5cdExFRlRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dEZXRhaWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRlbXBsYXRlPzogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpVGl0bGVQYW5lbCB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dGVtcGxhdGU/OiBzdHJpbmcgfCAoKHRpdGxlOiBhbnkpID0+IHN0cmluZyk7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlGb290ZXJQYW5lbCB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW5cblxuXHR0ZW1wbGF0ZT86IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUluZm9QYW5lbCB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0aW5mb0RpYWxvZz86IGJvb2xlYW47XG5cblx0Y29sdW1uc01hbmFnZXI/OiBib29sZWFuO1xuXG5cdHNjaGVtYU1hbmFnZXI/OiBib29sZWFuO1xuXG5cdHNvdXJjZVNpemU/OiBib29sZWFuXG5cbn1cblxuZXhwb3J0IGVudW0gR3VpUm93U2VsZWN0aW9uVHlwZSB7XG5cdFJPVyxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gR3VpUm93U2VsZWN0aW9uTW9kZSB7XG5cdFNJTkdMRSxcblx0TVVMVElQTEVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dTZWxlY3Rpb24ge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHR5cGU/OiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25UeXBlO1xuXG5cdG1vZGU/OiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25Nb2RlO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU2VsZWN0ZWRSb3cge1xuXG5cdHNvdXJjZT86IGFueTtcblxuXHRpbmRleDogbnVtYmVyO1xuXG5cdGl0ZW1JZDogYW55O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpTG9jYWxpemF0aW9uIHtcblxuXHR0cmFuc2xhdGlvbj86IEd1aVRyYW5zbGF0aW9uO1xuXG5cdHRyYW5zbGF0aW9uUmVzb2x2ZXI/OiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNlbGxFZGl0IHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRyb3dFZGl0PzogKHZhbHVlOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbjtcblxuXHRjZWxsRWRpdD86ICh2YWx1ZTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW5cblxufVxuXG5leHBvcnQgdHlwZSBHdWlUcmFuc2xhdGlvbiA9IFRyYW5zbGF0aW9uQ2hhbmdlO1xuXG5leHBvcnQgY29uc3QgR3VpRGVmYXVsdFRyYW5zbGF0aW9uID0gZGVmYXVsdFRyYW5zbGF0aW9uO1xuIl19