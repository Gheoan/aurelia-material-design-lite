'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PointingDevice = function PointingDevice() {
  _classCallCheck(this, PointingDevice);
};

exports.PointingDevice = PointingDevice;

function set(property, mediaQueryListEvent) {
  var matches = mediaQueryListEvent.matches;
  var media = mediaQueryListEvent.media;

  if (matches) {
    PointingDevice[property] = media.substring(media.indexOf(':') + 1, media.lastIndexOf(')'));
  }
}

function init(mediaQueryLists, property) {
  mediaQueryLists.forEach(function (mediaQueryList) {
    set(property, mediaQueryList);

    mediaQueryList.addListener(function (mediaQueryListEvent) {
      return set(property, mediaQueryListEvent);
    });
  });
}

var match = window.matchMedia;
new Map([['pointer', [match('(pointer:none)'), match('(pointer:coarse)'), match('(pointer:fine)')]], ['hover', [match('(hover:none)'), match('(hover:on-demand)'), match('(hover:hover)')]], ['anyPointer', [match('(any-pointer:none)'), match('(any-pointer:coarse)'), match('(any-pointer:fine)')]], ['anyHover', [match('(any-hover:none)'), match('(any-hover:on-demand)'), match('(any-hover:hover)')]]]).forEach(init);