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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQXlDbkYsTUFBTSxDQUFOLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUN0QixtREFBTyxDQUFBO0lBQ1AsaURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7SUFDTixtREFBTyxDQUFBO0lBQ1AsNkNBQUksQ0FBQTtJQUNKLGlEQUFNLENBQUE7QUFDUCxDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxXQVlYO0FBWkQsV0FBWSxXQUFXO0lBQ3RCLDZDQUFJLENBQUE7SUFDSiw2Q0FBSSxDQUFBO0lBQ0osNkNBQUksQ0FBQTtJQUNKLCtDQUFLLENBQUE7SUFDTCw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLHFEQUFRLENBQUE7SUFDUixpREFBTSxDQUFBO0lBQ04sMkNBQUcsQ0FBQTtJQUNILGlFQUFjLENBQUE7SUFDZCwwREFBVSxDQUFBO0FBQ1gsQ0FBQyxFQVpXLFdBQVcsS0FBWCxXQUFXLFFBWXRCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUM1Qix5REFBSSxDQUFBO0lBQ0oseURBQUksQ0FBQTtJQUNKLDZEQUFNLENBQUE7SUFDTix5REFBSSxDQUFBO0FBQ0wsQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzVCLHlEQUFJLENBQUE7SUFDSix5REFBSSxDQUFBO0lBQ0osNkRBQU0sQ0FBQTtJQUNOLHlEQUFJLENBQUE7QUFDTCxDQUFDLEVBTFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUs1QjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQU1YO0FBTkQsV0FBWSxrQkFBa0I7SUFDN0IsMkRBQUksQ0FBQTtJQUNKLDJEQUFJLENBQUE7SUFDSiwrREFBTSxDQUFBO0lBQ04sMkRBQUksQ0FBQTtJQUNKLG1FQUFRLENBQUE7QUFDVCxDQUFDLEVBTlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU03QjtBQUVELE1BQU0sQ0FBTixJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDMUIscURBQUksQ0FBQTtJQUNKLHFEQUFJLENBQUE7SUFDSix5REFBTSxDQUFBO0lBQ04scURBQUksQ0FBQTtBQUNMLENBQUMsRUFMVyxlQUFlLEtBQWYsZUFBZSxRQUsxQjtBQW9CRCxNQUFNLENBQU4sSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ25CLDJDQUFNLENBQUE7SUFDTiwrQ0FBUSxDQUFBO0lBQ1IseUNBQUssQ0FBQTtJQUNMLHVDQUFJLENBQUE7SUFDSiw2Q0FBTyxDQUFBO0FBQ1IsQ0FBQyxFQU5XLFFBQVEsS0FBUixRQUFRLFFBTW5CO0FBRUQsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN6QixtREFBSSxDQUFBO0lBQ0osbURBQUksQ0FBQTtJQUNKLGlEQUFHLENBQUE7QUFDSixDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFrQkQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUMxQixxREFBSSxDQUFBO0lBQ0osbURBQUcsQ0FBQTtJQUNILHFEQUFJLENBQUE7QUFDTCxDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFnRkQsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMzQix5REFBSyxDQUFBO0lBQ0wsK0RBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRzNCO0FBRUQsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN6QixxREFBSyxDQUFBO0lBQ0wsdURBQU0sQ0FBQTtJQUNOLG1EQUFJLENBQUE7QUFDTCxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUF3Q0QsTUFBTSxDQUFOLElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUM5QiwyREFBRyxDQUFBO0lBQ0gscUVBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCO0FBRUQsTUFBTSxDQUFOLElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUM5QixpRUFBTSxDQUFBO0lBQ04scUVBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCO0FBMENELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLWNoYW5nZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL2RlZmF1bHQtdHJhbnNsYXRpb24nO1xuXG5leHBvcnQgdHlwZSBGaWVsZEFjY2Vzc29yID0gKGVsZW1lbnQ/OiBhbnkpID0+IGFueTtcbmV4cG9ydCB0eXBlIFZpZXdUZW1wbGF0ZUZ1bmN0aW9uID0gKGNlbGxWYWx1ZT86IGFueSwgaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBHdWlNdWx0aUNvbHVtbiB7XG5cblx0aGVhZGVyPzogc3RyaW5nIHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0Y29sdW1ucz86IEFycmF5PEd1aUNvbHVtbj47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0aGVhZGVyPzogc3RyaW5nIHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0d2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0YWxpZ24/OiBzdHJpbmcgfCBHdWlDb2x1bW5BbGlnbjtcblxuXHRzdW1tYXJpZXM/OiBHdWlDb2x1bW5TdW1tYXJpZXM7XG5cblx0c29ydGluZz86IGJvb2xlYW4gfCBHdWlDb2x1bW5Tb3J0aW5nO1xuXG5cdGNlbGxFZGl0aW5nPzogYm9vbGVhbiB8IEd1aUNvbHVtbkNlbGxFZGl0aW5nO1xuXG5cdGZvcm1hdHRlcj86IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGFueTtcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGFUeXBlIHtcblx0VU5LTk9XTixcblx0TlVNQkVSLFxuXHRTVFJJTkcsXG5cdEJPT0xFQU4sXG5cdERBVEUsXG5cdENVU1RPTVxufVxuXG5leHBvcnQgZW51bSBHdWlDZWxsVmlldyB7XG5cdFRFWFQsXG5cdENISVAsXG5cdExJTkssXG5cdElNQUdFLFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENIRUNLQk9YLFxuXHRDVVNUT00sXG5cdEJBUixcblx0UEVSQ0VOVEFHRV9CQVIsXG5cdFBFUkNFTlRBR0Vcbn1cblxuZXhwb3J0IGVudW0gR3VpTnVtYmVyQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVBcbn1cblxuZXhwb3J0IGVudW0gR3VpU3RyaW5nQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVBcbn1cblxuZXhwb3J0IGVudW0gR3VpQm9vbGVhbkNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQLFxuXHRDSEVDS0JPWFxufVxuXG5leHBvcnQgZW51bSBHdWlEYXRlQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlQYWdpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHBhZ2U/OiBudW1iZXI7XG5cblx0cGFnZVNpemU/OiBudW1iZXI7XG5cblx0cGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPjtcblxuXHRwYWdlclRvcD86IGJvb2xlYW47XG5cblx0cGFnZXJCb3R0b20/OiBib29sZWFuO1xuXG5cdGRpc3BsYXk/OiBzdHJpbmcgfCBHdWlQYWdpbmdEaXNwbGF5O1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVRoZW1lIHtcblx0RkFCUklDLFxuXHRNQVRFUklBTCxcblx0TElHSFQsXG5cdERBUkssXG5cdEdFTkVSSUNcbn1cblxuZXhwb3J0IGVudW0gR3VpUm93Q29sb3Jpbmcge1xuXHROT05FLFxuXHRFVkVOLFxuXHRPRERcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dTdHlsZSB7XG5cblx0c3R5bGU/OiBzdHJpbmc7XG5cblx0c3R5bGVGdW5jdGlvbj86IChzb3VyY2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93Q2xhc3Mge1xuXG5cdGNsYXNzPzogc3RyaW5nO1xuXG5cdGNsYXNzRnVuY3Rpb24/OiAoc291cmNlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcblxufVxuXG5leHBvcnQgZW51bSBHdWlTb3J0aW5nT3JkZXIge1xuXHROT05FLFxuXHRBU0MsXG5cdERFU0Ncbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRtdWx0aVNvcnRpbmc/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRmlsdGVyaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVF1aWNrRmlsdGVycyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWFyY2hpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGhpZ2hsaWdodGluZz86IGJvb2xlYW47XG5cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cblx0cGhyYXNlPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0b3A/OiBib29sZWFuO1xuXG5cdGJvdHRvbT86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5TdW1tYXJpZXMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHN1bW1hcmllc1R5cGVzPzogQXJyYXk8c3RyaW5nPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtblNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cblx0b3JkZXI/OiBHdWlTb3J0aW5nT3JkZXJcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbkNlbGxFZGl0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbk1lbnUge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHNvcnQ/OiBib29sZWFuO1xuXG5cdGZpbHRlcj86IGJvb2xlYW47XG5cblx0Y29sdW1uc01hbmFnZXI/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVBhZ2luZ0Rpc3BsYXkge1xuXHRCQVNJQyxcblx0QURWQU5DRURcbn1cblxuZXhwb3J0IGVudW0gR3VpQ29sdW1uQWxpZ24ge1xuXHRSSUdIVCxcblx0Q0VOVEVSLFxuXHRMRUZUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93RGV0YWlsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0ZW1wbGF0ZT86IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVRpdGxlUGFuZWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRlbXBsYXRlPzogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRm9vdGVyUGFuZWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuXG5cblx0dGVtcGxhdGU/OiBzdHJpbmcgfCAoKHRpdGxlOiBhbnkpID0+IHN0cmluZyk7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlJbmZvUGFuZWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGluZm9EaWFsb2c/OiBib29sZWFuO1xuXG5cdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbjtcblxuXHRzY2hlbWFNYW5hZ2VyPzogYm9vbGVhbjtcblxuXHRzb3VyY2VTaXplPzogYm9vbGVhblxuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd1NlbGVjdGlvblR5cGUge1xuXHRST1csXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd1NlbGVjdGlvbk1vZGUge1xuXHRTSU5HTEUsXG5cdE1VTFRJUExFXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93U2VsZWN0aW9uIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uVHlwZTtcblxuXHRtb2RlPzogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uTW9kZTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNlbGVjdGVkUm93IHtcblxuXHRzb3VyY2U/OiBhbnk7XG5cblx0aW5kZXg6IG51bWJlcjtcblxuXHRpdGVtSWQ6IGFueTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUxvY2FsaXphdGlvbiB7XG5cblx0dHJhbnNsYXRpb24/OiBHdWlUcmFuc2xhdGlvbjtcblxuXHR0cmFuc2xhdGlvblJlc29sdmVyPzogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDZWxsRWRpdCB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cm93RWRpdD86ICh2YWx1ZTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW47XG5cblx0Y2VsbEVkaXQ/OiAodmFsdWU6IGFueSwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuXG5cbn1cblxuZXhwb3J0IHR5cGUgR3VpVHJhbnNsYXRpb24gPSBUcmFuc2xhdGlvbkNoYW5nZTtcblxuZXhwb3J0IGNvbnN0IEd1aURlZmF1bHRUcmFuc2xhdGlvbiA9IGRlZmF1bHRUcmFuc2xhdGlvbjtcbiJdfQ==