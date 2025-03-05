import ListView from "@/components/list/ListView";
import GridLayout from "@/components/layout/GridLayout";

import { Recipe } from "@/data/recipe";
import Filter from "@/components/form/Filter";
import Sort from "@/components/form/Sort";
import { useSelector } from "@/lib/store";

export default function Home() {
  const { listDetails, sortByTitle, filterByFave, searchText } = useSelector(
    (state) => state.recipe
  );
  const list = [...listDetails];

  // SEARCH
  const searchedList = list.filter(
    (x) => x.title.includes(searchText) || x.description.includes(searchText)
  );

  // SORTING
  const typeSort = sortByTitle == "asc" ? 1 : sortByTitle == "desc" ? -1 : 0;
  searchedList.sort((a, b) =>
    a.title && b.title ? (a.title > b.title ? 1 * typeSort : -1 * typeSort) : 0
  );

  // FILTER
  const filteredList =
    filterByFave && filterByFave.length > 0
      ? searchedList.filter((x) => filterByFave.includes(x.isFavorite))
      : searchedList;

  return (
    <GridLayout
      leftGrid={
        <div style={{ position: "relative", width: "calc(100% - 18px)" }}>
          <Sort />
          <Filter />
        </div>
      }
      rightGrid={<ListView list={filteredList as Array<Recipe>} />}
    />
  );
}
