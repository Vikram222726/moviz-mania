import React from "react";
import _ from "lodash";

export function Paginate(items, pageNumber, pageSize) {
  console.log(items);
  const startIdx = (pageNumber - 1) * pageSize;
  return _(items).slice(startIdx).take(pageSize).value();
}
