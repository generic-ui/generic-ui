/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FabricDatePickerYears = /** @class */ (function () {
    function FabricDatePickerYears() {
        this.year = new Date().getFullYear();
        this.inc = 10;
    }
    /**
     * @param {?} selectedYear
     * @return {?}
     */
    FabricDatePickerYears.prototype.getYears = /**
     * @param {?} selectedYear
     * @return {?}
     */
    function (selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        /** @type {?} */
        var yearsRange = this.maxYear - this.minYear;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.prevYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year > this.minYear) {
            this.year -= this.inc;
        }
        if (this.year > this.minYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.nextYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year < this.maxYear) {
            this.year += this.inc;
        }
        if (this.year < this.maxYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    FabricDatePickerYears.prototype.createYearsPool = /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    function (minYear, yearsRange, years) {
        for (var i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    };
    /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    FabricDatePickerYears.prototype.divideYearsPool = /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    function (years, rows) {
        for (var i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    };
    /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    FabricDatePickerYears.prototype.createRowsForDisplay = /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    function (rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].indexOf(selectedYear) > -1) {
                    if (!rows[i - 1]) {
                        return [rows[i], rows[i + 1], rows[i + 2], rows[i + 3], rows[i + 4]];
                    }
                    if (!rows[i - 2]) {
                        return [rows[i - 1], rows[i], rows[i + 1], rows[i + 2], rows[i + 3]];
                    }
                    if (!rows[i + 1]) {
                        return [rows[i - 4], rows[i - 3], rows[i - 2], rows[i - 1], rows[i]];
                    }
                    if (!rows[i + 2]) {
                        return [rows[i - 3], rows[i - 2], rows[i - 1], rows[i], rows[i + 1]];
                    }
                    return this.rowsForDisplay = [rows[i - 2], rows[i - 1], rows[i], rows[i + 1], rows[i + 2]];
                }
            }
        }
    };
    FabricDatePickerYears.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerYears;
}());
export { FabricDatePickerYears };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.rowsForDisplay;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.minYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.maxYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.year;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.inc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQUtTLFNBQUksR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLFFBQUcsR0FBVyxFQUFFLENBQUM7SUF1Rm5DLENBQUM7Ozs7O0lBckZBLHdDQUFROzs7O0lBQVIsVUFBUyxZQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDOztZQUU3QixVQUFVLEdBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsT0FBTzs7WUFDakQsS0FBSyxHQUFrQixFQUFFOztZQUN6QixJQUFJLEdBQXlCLEVBQUU7UUFFaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRTVFLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENB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QUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyRTtvQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JFO29CQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNGO2FBQ0Q7U0FDRDtJQUNGLENBQUM7O2dCQTNGRCxVQUFVOztJQTZGWCw0QkFBQztDQUFBLEFBN0ZELElBNkZDO1NBNUZZLHFCQUFxQjs7Ozs7O0lBQ2pDLCtDQUE2Qzs7Ozs7SUFDN0Msd0NBQXdCOzs7OztJQUN4Qix3Q0FBd0I7Ozs7O0lBQ3hCLHFDQUFnRDs7Ozs7SUFDaEQsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzIHtcblx0cHJpdmF0ZSByb3dzRm9yRGlzcGxheTogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cdHByaXZhdGUgbWluWWVhcjogbnVtYmVyO1xuXHRwcml2YXRlIG1heFllYXI6IG51bWJlcjtcblx0cHJpdmF0ZSB5ZWFyOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgaW5jOiBudW1iZXIgPSAxMDtcblxuXHRnZXRZZWFycyhzZWxlY3RlZFllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHR0aGlzLm1pblllYXIgPSBzZWxlY3RlZFllYXIgLSA1MDtcblx0XHR0aGlzLm1heFllYXIgPSBzZWxlY3RlZFllYXIgKyA1MDtcblxuXHRcdGxldCB5ZWFyc1JhbmdlOiBudW1iZXIgPXRoaXMubWF4WWVhciAtdGhpcy5taW5ZZWFyLFxuXHRcdFx0eWVhcnM6IEFycmF5PG51bWJlcj4gPSBbXSxcblx0XHRcdHJvd3M6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG5cblx0XHR5ZWFycyA9IHRoaXMuY3JlYXRlWWVhcnNQb29sKHRoaXMubWluWWVhciwgeWVhcnNSYW5nZSwgeWVhcnMpO1xuXG5cdFx0cm93cyA9IHRoaXMuZGl2aWRlWWVhcnNQb29sKHllYXJzLCByb3dzKTtcblxuXHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5ID0gdGhpcy5jcmVhdGVSb3dzRm9yRGlzcGxheShyb3dzLCBzZWxlY3RlZFllYXIpO1xuXG5cdH1cblxuXHRwcmV2WWVhclJhbmdlKCkge1xuXHRcdGlmICh0aGlzLnllYXIgPiB0aGlzLm1pblllYXIpIHtcblx0XHRcdHRoaXMueWVhciAtPSB0aGlzLmluYztcblx0XHR9XG5cblx0XHRpZiAodGhpcy55ZWFyID4gdGhpcy5taW5ZZWFyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRZZWFycyh0aGlzLnllYXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheTtcblx0XHR9XG5cblx0fVxuXG5cdG5leHRZZWFyUmFuZ2UoKSB7XG5cdFx0aWYgKHRoaXMueWVhciA8IHRoaXMubWF4WWVhcikge1xuXHRcdFx0dGhpcy55ZWFyICs9IHRoaXMuaW5jO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnllYXIgPCB0aGlzLm1heFllYXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFllYXJzKHRoaXMueWVhcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5O1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVZZWFyc1Bvb2wobWluWWVhcjogbnVtYmVyLCB5ZWFyc1JhbmdlOiBudW1iZXIsIHllYXJzOiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0geWVhcnNSYW5nZTsgaSsrKSB7XG5cdFx0XHR5ZWFycy5wdXNoKG1pblllYXIgKyBpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHllYXJzO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXZpZGVZZWFyc1Bvb2woeWVhcnM6IEFycmF5PG51bWJlcj4sIHJvd3M6IEFycmF5PEFycmF5PG51bWJlcj4+KTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpICs9IDUpIHtcblx0XHRcdHJvd3MucHVzaCh5ZWFycy5zbGljZShpLCBpICsgNSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcm93cztcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUm93c0ZvckRpc3BsYXkocm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4sIHNlbGVjdGVkWWVhcjogbnVtYmVyKTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdGlmIChzZWxlY3RlZFllYXIgPj0gdGhpcy5taW5ZZWFyIHx8IHNlbGVjdGVkWWVhciA8PSB0aGlzLm1heFllYXIpIHtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdFx0aWYgKHJvd3NbaV0uaW5kZXhPZihzZWxlY3RlZFllYXIpID4gLTEpIHtcblxuXHRcdFx0XHRcdGlmICghcm93c1tpIC0gMV0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdLCByb3dzW2kgKyAzXSwgcm93c1tpICsgNF1dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcm93c1tpIC0gMl0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpIC0gMV0sIHJvd3NbaV0sIHJvd3NbaSArIDFdLCByb3dzW2kgKyAyXSwgcm93c1tpICsgM11dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcm93c1tpICsgMV0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpIC0gNF0sIHJvd3NbaSAtIDNdLCByb3dzW2kgLSAyXSwgcm93c1tpIC0gMV0sIHJvd3NbaV1dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcm93c1tpICsgMl0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpIC0gM10sIHJvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV1dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5ID0gW3Jvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=