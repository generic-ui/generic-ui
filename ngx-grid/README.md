# <a href='https://generic-ui.com' >Generic UI - Grid for Angular</a>
## Grid component

**Generic UI Grid** is one of the best free <a href="https://generic-ui.com">angular grid library</a>.
 It offers many built-in features that work out of the box:
  editing, sorting, pagination, theming, summaries, column configuration, and many more.
   Performance is the main focus point, grid is able to present huge sets of data up to 1 000 000 rows.
    It greatly integrates with the best <a href="https://angular.io">javascript framework there is Angular</a>.
     All of that makes this library a great free to use **Angular data
  table
  plugin**.

![demo](https://generic-ui.com/assets/example/grid.png)

## Quick Example
Generic UI is easy to use, all you need to do is specify columns and source. Below is simple use of our grid with three columns and three items.

![demo](https://generic-ui.com/assets/images/grid-basic.png)

The creation of an gui-grid will be done in these simple steps:

### Setup template
Specify columns and source in grid component
Include GuiGridModule
Setup template
Add code below to you html template. Notice that `<gui-grid>` has two input `[columns]` and `[source]`. These will help you specify the shape of the grid and the data you wish to bind.

**app.component.html:**
```
<gui-grid [columns]="columns"
	  [source]="source">
</gui-grid>
```

### Specify columns and source
Now write a variable inside `app.component.ts` named as columns, with it we will create column headers. In this example we are using two attributes:

* header represents displayed header name,
* field binds data from source.

You can find more column options in a columns section

**app.component.ts:**
```
columns: Array<GuiColumn> = [{
    header: 'Name',
    field: 'name'
}, {
    header: 'Type',
    field: 'type'
}, {
    header: 'Price',
    field: 'price'
}];
```


We got columns specified, now we need to bind it with source.
Create new variable called source in `app.component.ts` and copy code below.
 Inside source are three items each has three values: `name`, `type`, `price`. These values are names of our columns fields.

**app.component.ts**
```
source: Array<any> = [{
    name: 'T-shirt',
    type: 'clothes',
    price: '15$'
}, {
    name: 'Shoes',
    type: 'footwear',
    price: '100$'
}, {
    name: 'Ball cap',
    type: 'headgear',
    price: '50$'
}];
```

### Include GuiGridModule
The only thing that is left is to include `GridModule` in `app.module.ts` and we are done.

**app.module.ts**
```
import { GuiGridModule } from '@generic-ui/ngx-grid';

@NgModule({
	imports: [
		GuiGridModule
	]
})
export class BasicModule {
}
```

## Installation
First you need to install *@generic-ui/ngx-grid* package with all it's peer dependencies.


Npm installation:
```Bash
npm install @generic-ui/ngx-grid element-resize-detector@1.1.14
```


Yarn installation:
```Bash
yarn add @generic-ui/ngx-grid element-resize-detector@1.1.14
```

Make sure that you use **Angular** in version at least 6.1.10 and Rxjs in version greater than 6.0.0.

## Grid API

In this section you can find list of Inputs and Outputs that configures gui-grid.

In order to build the grid you need to have data source specified and defined columns. Source and columns need to work together, therefor columns have to be bound with data source. The basic section got an easy guide how to do it.

Generic UI is completely editable. You can specify:

* width and height,
* different theme like: Fabric, Material, Light, Dark,
* header placed at the top and/or bottom of the grid,
* disabled or enabled vertical and horizontal lines,
* rows color,
* loading indicator.

Generic UI also provides the output options that posts information anytime when:

* page changes,
* page size changes,
* grid row is selected.

## Contact

Feel free to contact us with any questions or issues, as FAQ will be published in the near future. 
We will really appreciate it you letting us know how do you use
 this angular grid library. If you find any bug, let us know about it through <a href="https://github.com/generic-ui/generic-ui/issues">Report an issue</a>.

## License:
Code released under <a href='https://github.com/generic-ui/generic-ui/blob/master/grid/LICENSE' >the MIT license</a>.
