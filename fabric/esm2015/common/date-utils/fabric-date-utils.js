/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FabricDateUtils {
    /**
     * @param {?} firstDay
     * @param {?} secondDate
     * @return {?}
     */
    static areDatesSame(firstDay, secondDate) {
        return firstDay.getDate() === secondDate.getDate() &&
            firstDay.getMonth() === secondDate.getMonth() &&
            firstDay.getFullYear() === secondDate.getFullYear();
    }
    /**
     * @param {?} date
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    static isMonth(date, month, year) {
        return date.getMonth() === month &&
            date.getFullYear() === year;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJjb21tb24vZGF0ZS11dGlscy9mYWJyaWMtZGF0ZS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUUzQixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWMsRUFBRSxVQUFnQjtRQUNuRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2pELFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzdDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUs7WUFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQztJQUM5QixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmFicmljRGF0ZVV0aWxzIHtcblxuXHRzdGF0aWMgYXJlRGF0ZXNTYW1lKGZpcnN0RGF5OiBEYXRlLCBzZWNvbmREYXRlOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZpcnN0RGF5LmdldERhdGUoKSA9PT0gc2Vjb25kRGF0ZS5nZXREYXRlKCkgJiZcblx0XHRcdGZpcnN0RGF5LmdldE1vbnRoKCkgPT09IHNlY29uZERhdGUuZ2V0TW9udGgoKSAmJlxuXHRcdFx0Zmlyc3REYXkuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0c3RhdGljIGlzTW9udGgoZGF0ZTogRGF0ZSwgbW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggJiZcblx0XHRcdGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhcjtcblx0fVxufVxuIl19