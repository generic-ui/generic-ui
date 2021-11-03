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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8seUJBQXlCO0lBcUJyQyxZQUFvQixVQUFtQixLQUFLLEVBQ2pDLE9BQWdCLElBQUksRUFDcEIsU0FBa0IsS0FBSyxFQUN2QixpQkFBMEIsS0FBSztRQUh0QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFUbEMsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUUxQixlQUFVLEdBQVcsUUFBUSxDQUFDO1FBRTlCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO0lBTXhDLENBQUM7SUF2QkQsTUFBTSxDQUFDLE9BQU87UUFDYixPQUFPLElBQUkseUJBQXlCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUF3QjtRQUN6QyxPQUFPLElBQUkseUJBQXlCLENBQ25DLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxjQUFjLENBQ3JCLENBQUM7SUFDSCxDQUFDO0lBY0QsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVE7UUFFUCxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsVUFBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFtQjtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXG5cdHN0YXRpYyBkZWZhdWx0KCk6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZygpO1xuXHR9XG5cblx0c3RhdGljIGZyb21Db25maWcoY29uZmlnOiBDb2x1bW5NZW51Q29uZmlnKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKFxuXHRcdFx0Y29uZmlnLmVuYWJsZWQsXG5cdFx0XHRjb25maWcuc29ydCxcblx0XHRcdGNvbmZpZy5maWx0ZXIsXG5cdFx0XHRjb25maWcuY29sdW1uc01hbmFnZXJcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBtYWluTWVudTogc3RyaW5nID0gJ01lbnUnO1xuXG5cdHByaXZhdGUgZmlsdGVyTWVudTogc3RyaW5nID0gJ0ZpbHRlcic7XG5cblx0cHJpdmF0ZSBjb2x1bW5zTWVudTogc3RyaW5nID0gJ0NvbHVtbnMnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRwcml2YXRlIHNvcnQ6IGJvb2xlYW4gPSB0cnVlLFxuXHRcdFx0XHRwcml2YXRlIGZpbHRlcjogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbHVtbnNNYW5hZ2VyOiBib29sZWFuID0gZmFsc2UpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmXG5cdFx0XHQodGhpcy5zb3J0IHx8IHRoaXMuZmlsdGVyIHx8IHRoaXMuY29sdW1uc01hbmFnZXIpO1xuXHR9XG5cblx0aXNNYWluRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0O1xuXHR9XG5cblx0aXNTb3J0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0O1xuXHR9XG5cblx0aXNGaWx0ZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcjtcblx0fVxuXG5cdGlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc01hbmFnZXI7XG5cdH1cblxuXHRnZXRNZW51cygpOiBBcnJheTxzdHJpbmc+IHtcblxuXHRcdGNvbnN0IG1lbnVzID0gW107XG5cblx0XHRpZiAodGhpcy5pc01haW5FbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRNYWluTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0ZpbHRlcmluZ0VuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldEZpbHRlck1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0Q29sdW1uTWVudSgpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVudXM7XG5cdH1cblxuXHRnZXRBY3RpdmVNZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVudXMoKVswXTtcblx0fVxuXG5cdGdldE1haW5NZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubWFpbk1lbnU7XG5cdH1cblxuXHRnZXRGaWx0ZXJNZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyTWVudTtcblx0fVxuXG5cdGdldENvbHVtbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWVudTtcblx0fVxuXG5cdHNldE1haW5NZW51KG1haW5NZW51OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLm1haW5NZW51ID0gbWFpbk1lbnU7XG5cdH1cblxuXHRzZXRGaWx0ZXJNZW51KGZpbHRlck1lbnU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWVudSA9IGZpbHRlck1lbnU7XG5cdH1cblxuXHRzZXRDb2x1bW5zTWVudShjb2x1bW5zTWVudTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb2x1bW5zTWVudSA9IGNvbHVtbnNNZW51O1xuXHR9XG5cbn1cbiJdfQ==