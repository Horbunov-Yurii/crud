
import {getIceApi} from "./api/getIceApi";
import {createItemsMarkup} from "./createMarkup/createIceMarkup"

const listRef = document.querySelector(".js-list");

getIceApi().then((res) => listRef.innerHTML = createItemsMarkup(res));

