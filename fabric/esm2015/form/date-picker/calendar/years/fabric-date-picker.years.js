/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class FabricDatePickerYears {
    constructor() {
        this.year = new Date().getFullYear();
        this.inc = 10;
    }
    /**
     * @param {?} selectedYear
     * @return {?}
     */
    getYears(selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        /** @type {?} */
        let yearsRange = this.maxYear - this.minYear;
        /** @type {?} */
        let years = [];
        /** @type {?} */
        let rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    }
    /**
     * @return {?}
     */
    prevYearRange() {
        if (this.year > this.minYear) {
            this.year -= this.inc;
        }
        if (this.year > this.minYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    }
    /**
     * @return {?}
     */
    nextYearRange() {
        if (this.year < this.maxYear) {
            this.year += this.inc;
        }
        if (this.year < this.maxYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    }
    /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    createYearsPool(minYear, yearsRange, years) {
        for (let i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    }
    /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    divideYearsPool(years, rows) {
        for (let i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    }
    /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    createRowsForDisplay(rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (let i = 0; i < rows.length; i++) {
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
    }
}
FabricDatePickerYears.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUtTLFNBQUksR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLFFBQUcsR0FBVyxFQUFFLENBQUM7SUF1Rm5DLENBQUM7Ozs7O0lBckZBLFFBQVEsQ0FBQyxZQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDOztZQUU3QixVQUFVLEdBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsT0FBTzs7WUFDakQsS0FBSyxHQUFrQixFQUFFOztZQUN6QixJQUFJLEdBQXlCLEVBQUU7UUFFaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRTVFLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxD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RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JFO29CQUVELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckU7b0JBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0Y7YUFDRDtTQUNEO0lBQ0YsQ0FBQzs7O1lBM0ZELFVBQVU7Ozs7Ozs7SUFFViwrQ0FBNkM7Ozs7O0lBQzdDLHdDQUF3Qjs7Ozs7SUFDeEIsd0NBQXdCOzs7OztJQUN4QixxQ0FBZ0Q7Ozs7O0lBQ2hELG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJZZWFycyB7XG5cdHByaXZhdGUgcm93c0ZvckRpc3BsYXk6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuXHRwcml2YXRlIG1pblllYXI6IG51bWJlcjtcblx0cHJpdmF0ZSBtYXhZZWFyOiBudW1iZXI7XG5cdHByaXZhdGUgeWVhcjogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGluYzogbnVtYmVyID0gMTA7XG5cblx0Z2V0WWVhcnMoc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0dGhpcy5taW5ZZWFyID0gc2VsZWN0ZWRZZWFyIC0gNTA7XG5cdFx0dGhpcy5tYXhZZWFyID0gc2VsZWN0ZWRZZWFyICsgNTA7XG5cblx0XHRsZXQgeWVhcnNSYW5nZTogbnVtYmVyID10aGlzLm1heFllYXIgLXRoaXMubWluWWVhcixcblx0XHRcdHllYXJzOiBBcnJheTxudW1iZXI+ID0gW10sXG5cdFx0XHRyb3dzOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuXG5cdFx0eWVhcnMgPSB0aGlzLmNyZWF0ZVllYXJzUG9vbCh0aGlzLm1pblllYXIsIHllYXJzUmFuZ2UsIHllYXJzKTtcblxuXHRcdHJvd3MgPSB0aGlzLmRpdmlkZVllYXJzUG9vbCh5ZWFycywgcm93cyk7XG5cblx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheSA9IHRoaXMuY3JlYXRlUm93c0ZvckRpc3BsYXkocm93cywgc2VsZWN0ZWRZZWFyKTtcblxuXHR9XG5cblx0cHJldlllYXJSYW5nZSgpIHtcblx0XHRpZiAodGhpcy55ZWFyID4gdGhpcy5taW5ZZWFyKSB7XG5cdFx0XHR0aGlzLnllYXIgLT0gdGhpcy5pbmM7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMueWVhciA+IHRoaXMubWluWWVhcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0WWVhcnModGhpcy55ZWFyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXk7XG5cdFx0fVxuXG5cdH1cblxuXHRuZXh0WWVhclJhbmdlKCkge1xuXHRcdGlmICh0aGlzLnllYXIgPCB0aGlzLm1heFllYXIpIHtcblx0XHRcdHRoaXMueWVhciArPSB0aGlzLmluYztcblx0XHR9XG5cblx0XHRpZiAodGhpcy55ZWFyIDwgdGhpcy5tYXhZZWFyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRZZWFycyh0aGlzLnllYXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlWWVhcnNQb29sKG1pblllYXI6IG51bWJlciwgeWVhcnNSYW5nZTogbnVtYmVyLCB5ZWFyczogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHllYXJzUmFuZ2U7IGkrKykge1xuXHRcdFx0eWVhcnMucHVzaChtaW5ZZWFyICsgaSk7XG5cdFx0fVxuXHRcdHJldHVybiB5ZWFycztcblx0fVxuXG5cdHByaXZhdGUgZGl2aWRlWWVhcnNQb29sKHllYXJzOiBBcnJheTxudW1iZXI+LCByb3dzOiBBcnJheTxBcnJheTxudW1iZXI+Pik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHllYXJzLmxlbmd0aDsgaSArPSA1KSB7XG5cdFx0XHRyb3dzLnB1c2goeWVhcnMuc2xpY2UoaSwgaSArIDUpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJvd3M7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVJvd3NGb3JEaXNwbGF5KHJvd3M6IEFycmF5PEFycmF5PG51bWJlcj4+LCBzZWxlY3RlZFllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHRpZiAoc2VsZWN0ZWRZZWFyID49IHRoaXMubWluWWVhciB8fCBzZWxlY3RlZFllYXIgPD0gdGhpcy5tYXhZZWFyKSB7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdGlmIChyb3dzW2ldLmluZGV4T2Yoc2VsZWN0ZWRZZWFyKSA+IC0xKSB7XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSAtIDFdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaV0sIHJvd3NbaSArIDFdLCByb3dzW2kgKyAyXSwgcm93c1tpICsgM10sIHJvd3NbaSArIDRdXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSAtIDJdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl0sIHJvd3NbaSArIDNdXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSArIDFdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaSAtIDRdLCByb3dzW2kgLSAzXSwgcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJvd3NbaSArIDJdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW3Jvd3NbaSAtIDNdLCByb3dzW2kgLSAyXSwgcm93c1tpIC0gMV0sIHJvd3NbaV0sIHJvd3NbaSArIDFdXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheSA9IFtyb3dzW2kgLSAyXSwgcm93c1tpIC0gMV0sIHJvd3NbaV0sIHJvd3NbaSArIDFdLCByb3dzW2kgKyAyXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19