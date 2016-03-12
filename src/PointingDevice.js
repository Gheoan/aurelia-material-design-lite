/**
 * Wrapper for Media Queries Level 4: Interaction Media Features
 */
export class PointingDevice {
  static pointer: string;
  static hover: string;
  static anyPointer: string;
  static anyHover: string;
}

function set(property: string, mediaQueryListEvent: MediaQueryList) {
  const { matches, media } = mediaQueryListEvent;
  // only set if the media query matches
  if (matches) {
    PointingDevice[property] = media.substring(media.indexOf(':') + 1, media.lastIndexOf(')'));
  }
}

function init(mediaQueryLists: MediaQueryList[], property: string) {
  mediaQueryLists.forEach((mediaQueryList: MediaQueryList) => {
    // set the initial value
    set(property, mediaQueryList);

    // listen the media query, and set the value on change
    mediaQueryList.addListener((mediaQueryListEvent) => set(property, mediaQueryListEvent));
  });
}

const match = window.matchMedia;
new Map([
  [
    'pointer',
    [
      match('(pointer:none)'),
      match('(pointer:coarse)'),
      match('(pointer:fine)'),
    ],
  ],
  [
    'hover',
    [
      match('(hover:none)'),
      match('(hover:on-demand)'),
      match('(hover:hover)'),
    ],
  ],
  [
    'anyPointer',
    [
      match('(any-pointer:none)'),
      match('(any-pointer:coarse)'),
      match('(any-pointer:fine)'),
    ],
  ],
  [
    'anyHover',
    [
      match('(any-hover:none)'),
      match('(any-hover:on-demand)'),
      match('(any-hover:hover)'),
    ],
  ],
]).forEach(init);
