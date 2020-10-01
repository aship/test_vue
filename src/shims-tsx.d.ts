// tsx用のshim
// Vue 3環境でエラーが発生する
// この環境では*.tsxファイルを使わないので無効化
// import Vue, { VNode } from 'vue'

// declare global {
//   namespace JSX {
//     // tslint:disable no-empty-interface
//     interface Element extends VNode {}
//     // tslint:disable no-empty-interface
//     interface ElementClass extends Vue {}
//     interface IntrinsicElements {
//       [elem: string]: any;
//     }
//   }
// }
