/*
 * List of class names that we
 * use throughout the library to
 * manipulate the DOM.
 */

interface ClassNameList {
  [key:string]: string,
};

const MODAL:string = 'sweet-alert';
const BUTTON:string = 'swal-button';

export const CLASS_NAMES: ClassNameList = {
  MODAL,
  OVERLAY: 'sweet-overlay',
  SHOW_MODAL: `${MODAL}--show`,

  MODAL_TITLE: `${MODAL}__title`,
  MODAL_TEXT: `${MODAL}__text`,
  ICON: 'sa-icon',

  BUTTON,
  CONFIRM_BUTTON: `${BUTTON}--confirm`,
  CANCEL_BUTTON: `${BUTTON}--cancel`,
};

/*
 * Get a DOM element from a class name:
 */
export const getNode = (className: string): Element => {
  const selector = `.${className}`;

  return document.querySelector(selector);
};

export default CLASS_NAMES;