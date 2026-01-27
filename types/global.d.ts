// Declare jQuery and plugins
interface JQuery {
  owlCarousel(options?: any): JQuery;
  niceSelect(): JQuery;
  fancybox(options?: any): JQuery;
  bxslider(options?: any): JQuery;
  touchspin(options?: any): JQuery;
}

declare global {
  interface Window {
    $: JQuery;
    jQuery: JQuery;
  }
}

export {};