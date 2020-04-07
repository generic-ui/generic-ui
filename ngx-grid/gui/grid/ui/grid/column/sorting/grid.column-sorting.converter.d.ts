import { ColumnSortingConfig } from '../../../../../../lib/composition/domain/sort/column-sorting.config';
import { GuiColumnSorting } from '../../../../../../grid.index';
export declare class GridColumnSortingConverter {
    convert(sortingConfig: GuiColumnSorting): ColumnSortingConfig;
}
