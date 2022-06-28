export class StructureColumnMenuConfig {
    constructor(enabled = false, sort = true, filter = false, columnsManager = false) {
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
        this.mainMenu = 'Menu';
        this.filterMenu = 'Filter';
        this.columnsMenu = 'Columns';
    }
    static default() {
        return new StructureColumnMenuConfig();
    }
    static fromConfig(config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    }
    isEnabled() {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    }
    isMainEnabled() {
        return this.sort;
    }
    isSortingEnabled() {
        return this.sort;
    }
    isFilteringEnabled() {
        return this.filter;
    }
    isColumnManagerEnabled() {
        return this.columnsManager;
    }
    getMenus() {
        const menus = [];
        if (this.isMainEnabled()) {
            menus.push(this.getMainMenu());
        }
        if (this.isFilteringEnabled()) {
            menus.push(this.getFilterMenu());
        }
        if (this.isColumnManagerEnabled()) {
            menus.push(this.getColumnMenu());
        }
        return menus;
    }
    getActiveMenu() {
        return this.getMenus()[0];
    }
    getMainMenu() {
        return this.mainMenu;
    }
    getFilterMenu() {
        return this.filterMenu;
    }
    getColumnMenu() {
        return this.columnsMenu;
    }
    setMainMenu(mainMenu) {
        this.mainMenu = mainMenu;
    }
    setFilterMenu(filterMenu) {
        this.filterMenu = filterMenu;
    }
    setColumnsMenu(columnsMenu) {
        this.columnsMenu = columnsMenu;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8seUJBQXlCO0lBUXJDLFlBQW9CLFVBQW1CLEtBQUssRUFDakMsT0FBZ0IsSUFBSSxFQUNwQixTQUFrQixLQUFLLEVBQ3ZCLGlCQUEwQixLQUFLO1FBSHRCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQVRsQyxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRTFCLGVBQVUsR0FBVyxRQUFRLENBQUM7UUFFOUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7SUFNeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ2IsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBd0I7UUFDekMsT0FBTyxJQUFJLHlCQUF5QixDQUNuQyxNQUFNLENBQUMsT0FBTyxFQUNkLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsY0FBYyxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRO1FBRVAsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL2FwaS9jb25maWcvY29sdW1uLW1lbnUtY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXG5cdHByaXZhdGUgbWFpbk1lbnU6IHN0cmluZyA9ICdNZW51JztcblxuXHRwcml2YXRlIGZpbHRlck1lbnU6IHN0cmluZyA9ICdGaWx0ZXInO1xuXG5cdHByaXZhdGUgY29sdW1uc01lbnU6IHN0cmluZyA9ICdDb2x1bW5zJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3J0OiBib29sZWFuID0gdHJ1ZSxcblx0XHRcdFx0cHJpdmF0ZSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBjb2x1bW5zTWFuYWdlcjogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdCgpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoKTtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQ29uZmlnKGNvbmZpZzogQ29sdW1uTWVudUNvbmZpZyk6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyhcblx0XHRcdGNvbmZpZy5lbmFibGVkLFxuXHRcdFx0Y29uZmlnLnNvcnQsXG5cdFx0XHRjb25maWcuZmlsdGVyLFxuXHRcdFx0Y29uZmlnLmNvbHVtbnNNYW5hZ2VyXG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmXG5cdFx0XHQodGhpcy5zb3J0IHx8IHRoaXMuZmlsdGVyIHx8IHRoaXMuY29sdW1uc01hbmFnZXIpO1xuXHR9XG5cblx0aXNNYWluRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0O1xuXHR9XG5cblx0aXNTb3J0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0O1xuXHR9XG5cblx0aXNGaWx0ZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcjtcblx0fVxuXG5cdGlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc01hbmFnZXI7XG5cdH1cblxuXHRnZXRNZW51cygpOiBBcnJheTxzdHJpbmc+IHtcblxuXHRcdGNvbnN0IG1lbnVzID0gW107XG5cblx0XHRpZiAodGhpcy5pc01haW5FbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRNYWluTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0ZpbHRlcmluZ0VuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldEZpbHRlck1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0Q29sdW1uTWVudSgpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVudXM7XG5cdH1cblxuXHRnZXRBY3RpdmVNZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVudXMoKVswXTtcblx0fVxuXG5cdGdldE1haW5NZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubWFpbk1lbnU7XG5cdH1cblxuXHRnZXRGaWx0ZXJNZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyTWVudTtcblx0fVxuXG5cdGdldENvbHVtbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWVudTtcblx0fVxuXG5cdHNldE1haW5NZW51KG1haW5NZW51OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLm1haW5NZW51ID0gbWFpbk1lbnU7XG5cdH1cblxuXHRzZXRGaWx0ZXJNZW51KGZpbHRlck1lbnU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWVudSA9IGZpbHRlck1lbnU7XG5cdH1cblxuXHRzZXRDb2x1bW5zTWVudShjb2x1bW5zTWVudTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zTWVudSA9IGNvbHVtbnNNZW51O1xuXHR9XG5cbn1cbiJdfQ==