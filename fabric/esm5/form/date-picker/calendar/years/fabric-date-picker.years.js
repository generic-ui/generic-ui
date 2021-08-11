/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FabricDatePickerYears = /** @class */ (function () {
    function FabricDatePickerYears() {
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
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerYears.prototype.prevYearRange = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (!this.selectedYear) {
            this.selectedYear = year;
        }
        if (this.selectedYear > this.minYear) {
            this.selectedYear -= this.inc;
        }
        if (this.selectedYear > this.minYear) {
            return this.getYears(this.selectedYear);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerYears.prototype.nextYearRange = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (!this.selectedYear) {
            this.selectedYear = year;
        }
        if (this.selectedYear < this.maxYear) {
            this.selectedYear += this.inc;
        }
        if (this.selectedYear < this.maxYear) {
            return this.getYears(this.selectedYear);
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
    FabricDatePickerYears.prototype.selectedYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.inc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQVdrQixRQUFHLEdBQVcsRUFBRSxDQUFDO0lBZ0duQyxDQUFDOzs7OztJQTlGQSx3Q0FBUTs7OztJQUFSLFVBQVMsWUFBb0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7WUFFN0IsVUFBVSxHQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87O1lBQ25ELEtBQUssR0FBa0IsRUFBRTs7WUFDekIsSUFBSSxHQUF5QixFQUFFO1FBRWhDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlELElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELDZDQUFhOzs7O0lBQWIsVUFBYyxJQUFZO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFD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QUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJZZWFycyB7XG5cblx0cHJpdmF0ZSByb3dzRm9yRGlzcGxheTogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cblx0cHJpdmF0ZSBtaW5ZZWFyOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBtYXhZZWFyOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFllYXI6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGluYzogbnVtYmVyID0gMTA7XG5cblx0Z2V0WWVhcnMoc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0dGhpcy5taW5ZZWFyID0gc2VsZWN0ZWRZZWFyIC0gNTA7XG5cdFx0dGhpcy5tYXhZZWFyID0gc2VsZWN0ZWRZZWFyICsgNTA7XG5cblx0XHRsZXQgeWVhcnNSYW5nZTogbnVtYmVyID0gdGhpcy5tYXhZZWFyIC0gdGhpcy5taW5ZZWFyLFxuXHRcdFx0eWVhcnM6IEFycmF5PG51bWJlcj4gPSBbXSxcblx0XHRcdHJvd3M6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG5cblx0XHR5ZWFycyA9IHRoaXMuY3JlYXRlWWVhcnNQb29sKHRoaXMubWluWWVhciwgeWVhcnNSYW5nZSwgeWVhcnMpO1xuXG5cdFx0cm93cyA9IHRoaXMuZGl2aWRlWWVhcnNQb29sKHllYXJzLCByb3dzKTtcblxuXHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5ID0gdGhpcy5jcmVhdGVSb3dzRm9yRGlzcGxheShyb3dzLCBzZWxlY3RlZFllYXIpO1xuXHR9XG5cblx0cHJldlllYXJSYW5nZSh5ZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cblx0XHRpZiAoIXRoaXMuc2VsZWN0ZWRZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHllYXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRZZWFyID4gdGhpcy5taW5ZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciAtPSB0aGlzLmluYztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZFllYXIgPiB0aGlzLm1pblllYXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFllYXJzKHRoaXMuc2VsZWN0ZWRZZWFyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXk7XG5cdFx0fVxuXG5cdH1cblxuXHRuZXh0WWVhclJhbmdlKHllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblxuXHRcdGlmICghdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0geWVhcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZFllYXIgPCB0aGlzLm1heFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyICs9IHRoaXMuaW5jO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkWWVhciA8IHRoaXMubWF4WWVhcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0WWVhcnModGhpcy5zZWxlY3RlZFllYXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlWWVhcnNQb29sKG1pblllYXI6IG51bWJlciwgeWVhcnNSYW5nZTogbnVtYmVyLCB5ZWFyczogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHllYXJzUmFuZ2U7IGkrKykge1xuXHRcdFx0eWVhcnMucHVzaChtaW5ZZWFyICsgaSk7XG5cdFx0fVxuXHRcdHJldHVybiB5ZWFycztcblx0fVxuXG5cdHByaXZhdGUgZGl2aWRlWWVhcnNQb29sKHllYXJzOiBBcnJheTxudW1iZXI+LCByb3dzOiBBcnJheTxBcnJheTxudW1iZXI+Pik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHllYXJzLmxlbmd0aDsgaSArPSA1KSB7XG5cdFx0XHRyb3dzLnB1c2goeWVhcnMuc2xpY2UoaSwgaSArIDUpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJvd3M7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVJvd3NGb3JEaXNwbGF5KHJvd3M6IEFycmF5PEFycmF5PG51bWJlcj4+LCBzZWxlY3RlZFllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHRpZiAoc2VsZWN0ZWRZZWFyID49IHRoaXMubWluWWVhciB8fCBzZWxlY3RlZFllYXIgPD0gdGhpcy5tYXhZZWFyKSB7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdGlmIChyb3dzW2ldLmluZGV4T2Yoc2VsZWN0ZWRZZWFyKSA+IC0xKSB7XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSAtIDFdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaV0sIHJvd3NbaSArIDFdLCByb3dzW2kgKyAyXSwgcm93c1tpICsgM10sIHJvd3NbaSArIDRdXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSAtIDJdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl0sIHJvd3NbaSArIDNdXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSArIDFdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaSAtIDRdLCByb3dzW2kgLSAzXSwgcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSArIDJdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaSAtIDNdLCByb3dzW2kgLSAyXSwgcm93c1tpIC0gMV0sIHJvd3NbaV0sIHJvd3NbaSArIDFdXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheSA9IFtyb3dzW2kgLSAyXSwgcm93c1tpIC0gMV0sIHJvd3NbaV0sIHJvd3NbaSArIDFdLCByb3dzW2kgKyAyXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19