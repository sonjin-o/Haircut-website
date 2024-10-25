import { dichvu_arr } from './data.js';
const hien1dichvu = (dv) => {
    return `<div class="dichvu" >
    <div class="dv-header">
      <img src="${dv.hinh}" class="card-img" alt="...">
    </div>
  <div class="dv-body">
    <div class="title">
      <h5>${dv.ten}</h5>
      <span class="price">${dv.gia}</span>
    </div>
  </div>
</div>`;
};
export const showlistdichvu = () => {
    const html_arr = dichvu_arr.map(hien1dichvu);
    return html_arr.join("");
};
import { mauhot_arr } from './data.js';
const hien1mauhot = (mh) => {
    return `<div class="anhmau" >
      <img src="${mh.hinh}" class="card-img" alt="...">
            </div>`;
};
export const showlistmauhot = () => {
    const html_arr = mauhot_arr.map(hien1mauhot);
    return html_arr.join("");
};
