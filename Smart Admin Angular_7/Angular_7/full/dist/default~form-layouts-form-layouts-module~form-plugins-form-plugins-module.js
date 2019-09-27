(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-layouts-form-layouts-module~form-plugins-form-plugins-module"],{

/***/ "./node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Bootstrap Colorpicker v2.5.2
 * https://itsjavi.com/bootstrap-colorpicker/
 *
 * Originally written by (c) 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 *
 */

(function(root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(jq) {
      return (factory(jq));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function($) {
  'use strict';
  /**
   * Color manipulation helper class
   *
   * @param {Object|String} [val]
   * @param {Object} [predefinedColors]
   * @param {String|null} [fallbackColor]
   * @param {String|null} [fallbackFormat]
   * @param {Boolean} [hexNumberSignPrefix]
   * @constructor
   */
  var Color = function(
    val, predefinedColors, fallbackColor, fallbackFormat, hexNumberSignPrefix) {
    this.fallbackValue = fallbackColor ?
      (
        fallbackColor && (typeof fallbackColor.h !== 'undefined') ?
        fallbackColor :
        this.value = {
          h: 0,
          s: 0,
          b: 0,
          a: 1
        }
      ) :
      null;

    this.fallbackFormat = fallbackFormat ? fallbackFormat : 'rgba';

    this.hexNumberSignPrefix = hexNumberSignPrefix === true;

    this.value = this.fallbackValue;

    this.origFormat = null; // original string format

    this.predefinedColors = predefinedColors ? predefinedColors : {};

    // We don't want to share aliases across instances so we extend new object
    this.colors = $.extend({}, Color.webColors, this.predefinedColors);

    if (val) {
      if (typeof val.h !== 'undefined') {
        this.value = val;
      } else {
        this.setColor(String(val));
      }
    }

    if (!this.value) {
      // Initial value is always black if no arguments are passed or val is empty
      this.value = {
        h: 0,
        s: 0,
        b: 0,
        a: 1
      };
    }
  };

  Color.webColors = { // 140 predefined colors from the HTML Colors spec
    "aliceblue": "f0f8ff",
    "antiquewhite": "faebd7",
    "aqua": "00ffff",
    "aquamarine": "7fffd4",
    "azure": "f0ffff",
    "beige": "f5f5dc",
    "bisque": "ffe4c4",
    "black": "000000",
    "blanchedalmond": "ffebcd",
    "blue": "0000ff",
    "blueviolet": "8a2be2",
    "brown": "a52a2a",
    "burlywood": "deb887",
    "cadetblue": "5f9ea0",
    "chartreuse": "7fff00",
    "chocolate": "d2691e",
    "coral": "ff7f50",
    "cornflowerblue": "6495ed",
    "cornsilk": "fff8dc",
    "crimson": "dc143c",
    "cyan": "00ffff",
    "darkblue": "00008b",
    "darkcyan": "008b8b",
    "darkgoldenrod": "b8860b",
    "darkgray": "a9a9a9",
    "darkgreen": "006400",
    "darkkhaki": "bdb76b",
    "darkmagenta": "8b008b",
    "darkolivegreen": "556b2f",
    "darkorange": "ff8c00",
    "darkorchid": "9932cc",
    "darkred": "8b0000",
    "darksalmon": "e9967a",
    "darkseagreen": "8fbc8f",
    "darkslateblue": "483d8b",
    "darkslategray": "2f4f4f",
    "darkturquoise": "00ced1",
    "darkviolet": "9400d3",
    "deeppink": "ff1493",
    "deepskyblue": "00bfff",
    "dimgray": "696969",
    "dodgerblue": "1e90ff",
    "firebrick": "b22222",
    "floralwhite": "fffaf0",
    "forestgreen": "228b22",
    "fuchsia": "ff00ff",
    "gainsboro": "dcdcdc",
    "ghostwhite": "f8f8ff",
    "gold": "ffd700",
    "goldenrod": "daa520",
    "gray": "808080",
    "green": "008000",
    "greenyellow": "adff2f",
    "honeydew": "f0fff0",
    "hotpink": "ff69b4",
    "indianred": "cd5c5c",
    "indigo": "4b0082",
    "ivory": "fffff0",
    "khaki": "f0e68c",
    "lavender": "e6e6fa",
    "lavenderblush": "fff0f5",
    "lawngreen": "7cfc00",
    "lemonchiffon": "fffacd",
    "lightblue": "add8e6",
    "lightcoral": "f08080",
    "lightcyan": "e0ffff",
    "lightgoldenrodyellow": "fafad2",
    "lightgrey": "d3d3d3",
    "lightgreen": "90ee90",
    "lightpink": "ffb6c1",
    "lightsalmon": "ffa07a",
    "lightseagreen": "20b2aa",
    "lightskyblue": "87cefa",
    "lightslategray": "778899",
    "lightsteelblue": "b0c4de",
    "lightyellow": "ffffe0",
    "lime": "00ff00",
    "limegreen": "32cd32",
    "linen": "faf0e6",
    "magenta": "ff00ff",
    "maroon": "800000",
    "mediumaquamarine": "66cdaa",
    "mediumblue": "0000cd",
    "mediumorchid": "ba55d3",
    "mediumpurple": "9370d8",
    "mediumseagreen": "3cb371",
    "mediumslateblue": "7b68ee",
    "mediumspringgreen": "00fa9a",
    "mediumturquoise": "48d1cc",
    "mediumvioletred": "c71585",
    "midnightblue": "191970",
    "mintcream": "f5fffa",
    "mistyrose": "ffe4e1",
    "moccasin": "ffe4b5",
    "navajowhite": "ffdead",
    "navy": "000080",
    "oldlace": "fdf5e6",
    "olive": "808000",
    "olivedrab": "6b8e23",
    "orange": "ffa500",
    "orangered": "ff4500",
    "orchid": "da70d6",
    "palegoldenrod": "eee8aa",
    "palegreen": "98fb98",
    "paleturquoise": "afeeee",
    "palevioletred": "d87093",
    "papayawhip": "ffefd5",
    "peachpuff": "ffdab9",
    "peru": "cd853f",
    "pink": "ffc0cb",
    "plum": "dda0dd",
    "powderblue": "b0e0e6",
    "purple": "800080",
    "red": "ff0000",
    "rosybrown": "bc8f8f",
    "royalblue": "4169e1",
    "saddlebrown": "8b4513",
    "salmon": "fa8072",
    "sandybrown": "f4a460",
    "seagreen": "2e8b57",
    "seashell": "fff5ee",
    "sienna": "a0522d",
    "silver": "c0c0c0",
    "skyblue": "87ceeb",
    "slateblue": "6a5acd",
    "slategray": "708090",
    "snow": "fffafa",
    "springgreen": "00ff7f",
    "steelblue": "4682b4",
    "tan": "d2b48c",
    "teal": "008080",
    "thistle": "d8bfd8",
    "tomato": "ff6347",
    "turquoise": "40e0d0",
    "violet": "ee82ee",
    "wheat": "f5deb3",
    "white": "ffffff",
    "whitesmoke": "f5f5f5",
    "yellow": "ffff00",
    "yellowgreen": "9acd32",
    "transparent": "transparent"
  };

  Color.prototype = {
    constructor: Color,
    colors: {}, // merged web and predefined colors
    predefinedColors: {},
    /**
     * @return {Object}
     */
    getValue: function() {
      return this.value;
    },
    /**
     * @param {Object} val
     */
    setValue: function(val) {
      this.value = val;
    },
    _sanitizeNumber: function(val) {
      if (typeof val === 'number') {
        return val;
      }
      if (isNaN(val) || (val === null) || (val === '') || (val === undefined)) {
        return 1;
      }
      if (val === '') {
        return 0;
      }
      if (typeof val.toLowerCase !== 'undefined') {
        if (val.match(/^\./)) {
          val = "0" + val;
        }
        return Math.ceil(parseFloat(val) * 100) / 100;
      }
      return 1;
    },
    isTransparent: function(strVal) {
      if (!strVal || !(typeof strVal === 'string' || strVal instanceof String)) {
        return false;
      }
      strVal = strVal.toLowerCase().trim();
      return (strVal === 'transparent') || (strVal.match(/#?00000000/)) || (strVal.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/));
    },
    rgbaIsTransparent: function(rgba) {
      return ((rgba.r === 0) && (rgba.g === 0) && (rgba.b === 0) && (rgba.a === 0));
    },
    // parse a string to HSB
    /**
     * @protected
     * @param {String} strVal
     * @returns {boolean} Returns true if it could be parsed, false otherwise
     */
    setColor: function(strVal) {
      strVal = strVal.toLowerCase().trim();
      if (strVal) {
        if (this.isTransparent(strVal)) {
          this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 0
          };
          return true;
        } else {
          var parsedColor = this.parse(strVal);
          if (parsedColor) {
            this.value = this.value = {
              h: parsedColor.h,
              s: parsedColor.s,
              b: parsedColor.b,
              a: parsedColor.a
            };
            if (!this.origFormat) {
              this.origFormat = parsedColor.format;
            }
          } else if (this.fallbackValue) {
            // if parser fails, defaults to fallbackValue if defined, otherwise the value won't be changed
            this.value = this.fallbackValue;
          }
        }
      }
      return false;
    },
    setHue: function(h) {
      this.value.h = 1 - h;
    },
    setSaturation: function(s) {
      this.value.s = s;
    },
    setBrightness: function(b) {
      this.value.b = 1 - b;
    },
    setAlpha: function(a) {
      this.value.a = Math.round((parseInt((1 - a) * 100, 10) / 100) * 100) / 100;
    },
    toRGB: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = b * s;
      X = C * (1 - Math.abs(h % 2 - 1));
      R = G = B = b - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];

      return {
        r: Math.round(R * 255),
        g: Math.round(G * 255),
        b: Math.round(B * 255),
        a: a
      };
    },
    toHex: function(ignoreFormat, h, s, b, a) {
      if (arguments.length <= 1) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      var prefix = '#';
      var rgb = this.toRGB(h, s, b, a);

      if (this.rgbaIsTransparent(rgb)) {
        return 'transparent';
      }

      if (!ignoreFormat) {
        prefix = (this.hexNumberSignPrefix ? '#' : '');
      }

      var hexStr = prefix + (
          (1 << 24) +
          (parseInt(rgb.r) << 16) +
          (parseInt(rgb.g) << 8) +
          parseInt(rgb.b))
        .toString(16)
        .slice(1);

      return hexStr;
    },
    toHSL: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      var H = h,
        L = (2 - s) * b,
        S = s * b;
      if (L > 0 && L <= 1) {
        S /= L;
      } else {
        S /= 2 - L;
      }
      L /= 2;
      if (S > 1) {
        S = 1;
      }
      return {
        h: isNaN(H) ? 0 : H,
        s: isNaN(S) ? 0 : S,
        l: isNaN(L) ? 0 : L,
        a: isNaN(a) ? 0 : a
      };
    },
    toAlias: function(r, g, b, a) {
      var c, rgb = (arguments.length === 0) ? this.toHex(true) : this.toHex(true, r, g, b, a);

      // support predef. colors in non-hex format too, as defined in the alias itself
      var original = this.origFormat === 'alias' ? rgb : this.toString(false, this.origFormat);

      for (var alias in this.colors) {
        c = this.colors[alias].toLowerCase().trim();
        if ((c === rgb) || (c === original)) {
          return alias;
        }
      }
      return false;
    },
    RGBtoHSB: function(r, g, b, a) {
      r /= 255;
      g /= 255;
      b /= 255;

      var H, S, V, C;
      V = Math.max(r, g, b);
      C = V - Math.min(r, g, b);
      H = (C === 0 ? null :
        V === r ? (g - b) / C :
        V === g ? (b - r) / C + 2 :
        (r - g) / C + 4
      );
      H = ((H + 360) % 6) * 60 / 360;
      S = C === 0 ? 0 : C / V;
      return {
        h: this._sanitizeNumber(H),
        s: S,
        b: V,
        a: this._sanitizeNumber(a)
      };
    },
    HueToRGB: function(p, q, h) {
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
      if ((h * 6) < 1) {
        return p + (q - p) * h * 6;
      } else if ((h * 2) < 1) {
        return q;
      } else if ((h * 3) < 2) {
        return p + (q - p) * ((2 / 3) - h) * 6;
      } else {
        return p;
      }
    },
    HSLtoRGB: function(h, s, l, a) {
      if (s < 0) {
        s = 0;
      }
      var q;
      if (l <= 0.5) {
        q = l * (1 + s);
      } else {
        q = l + s - (l * s);
      }

      var p = 2 * l - q;

      var tr = h + (1 / 3);
      var tg = h;
      var tb = h - (1 / 3);

      var r = Math.round(this.HueToRGB(p, q, tr) * 255);
      var g = Math.round(this.HueToRGB(p, q, tg) * 255);
      var b = Math.round(this.HueToRGB(p, q, tb) * 255);
      return [r, g, b, this._sanitizeNumber(a)];
    },
    /**
     * @param {String} strVal
     * @returns {Object} Object containing h,s,b,a,format properties or FALSE if failed to parse
     */
    parse: function(strVal) {
      if (arguments.length === 0) {
        return false;
      }

      var that = this,
        result = false,
        isAlias = (typeof this.colors[strVal] !== 'undefined'),
        values, format;

      if (isAlias) {
        strVal = this.colors[strVal].toLowerCase().trim();
      }

      $.each(this.stringParsers, function(i, parser) {
        var match = parser.re.exec(strVal);
        values = match && parser.parse.apply(that, [match]);
        if (values) {
          result = {};
          format = (isAlias ? 'alias' : (parser.format ? parser.format : that.getValidFallbackFormat()));
          if (format.match(/hsla?/)) {
            result = that.RGBtoHSB.apply(that, that.HSLtoRGB.apply(that, values));
          } else {
            result = that.RGBtoHSB.apply(that, values);
          }
          if (result instanceof Object) {
            result.format = format;
          }
          return false; // stop iterating
        }
        return true;
      });
      return result;
    },
    getValidFallbackFormat: function() {
      var formats = [
        'rgba', 'rgb', 'hex', 'hsla', 'hsl'
      ];
      if (this.origFormat && (formats.indexOf(this.origFormat) !== -1)) {
        return this.origFormat;
      }
      if (this.fallbackFormat && (formats.indexOf(this.fallbackFormat) !== -1)) {
        return this.fallbackFormat;
      }

      return 'rgba'; // By default, return a format that will not lose the alpha info
    },
    /**
     *
     * @param {string} [format] (default: rgba)
     * @param {boolean} [translateAlias] Return real color for pre-defined (non-standard) aliases (default: false)
     * @param {boolean} [forceRawValue] Forces hashtag prefix when getting hex color (default: false)
     * @returns {String}
     */
    toString: function(forceRawValue, format, translateAlias) {
      format = format || this.origFormat || this.fallbackFormat;
      translateAlias = translateAlias || false;

      var c = false;

      switch (format) {
        case 'rgb':
          {
            c = this.toRGB();
            if (this.rgbaIsTransparent(c)) {
              return 'transparent';
            }
            return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
          }
          break;
        case 'rgba':
          {
            c = this.toRGB();
            return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
          }
          break;
        case 'hsl':
          {
            c = this.toHSL();
            return 'hsl(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%)';
          }
          break;
        case 'hsla':
          {
            c = this.toHSL();
            return 'hsla(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%,' + c.a + ')';
          }
          break;
        case 'hex':
          {
            return this.toHex(forceRawValue);
          }
          break;
        case 'alias':
          {
            c = this.toAlias();

            if (c === false) {
              return this.toString(forceRawValue, this.getValidFallbackFormat());
            }

            if (translateAlias && !(c in Color.webColors) && (c in this.predefinedColors)) {
              return this.predefinedColors[c];
            }

            return c;
          }
        default:
          {
            return c;
          }
          break;
      }
    },
    // a set of RE's that can match strings and generate color tuples.
    // from John Resig color plugin
    // https://github.com/jquery/jquery-color/
    stringParsers: [{
      re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          1
        ];
      }
    }, {
      re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          1
        ];
      }
    }, {
      re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'hsl',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'hsla',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1], 16),
          parseInt(execResult[2], 16),
          parseInt(execResult[3], 16),
          1
        ];
      }
    }, {
      re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1] + execResult[1], 16),
          parseInt(execResult[2] + execResult[2], 16),
          parseInt(execResult[3] + execResult[3], 16),
          1
        ];
      }
    }],
    colorNameToHex: function(name) {
      if (typeof this.colors[name.toLowerCase()] !== 'undefined') {
        return this.colors[name.toLowerCase()];
      }
      return false;
    }
  };

  /*
   * Default plugin options
   */
  var defaults = {
    horizontal: false, // horizontal mode layout ?
    inline: false, //forces to show the colorpicker as an inline element
    color: false, //forces a color
    format: false, //forces a format
    input: 'input', // children input selector
    container: false, // container selector
    component: '.add-on, .input-group-addon', // children component selector
    fallbackColor: false, // fallback color value. null = keeps current color.
    fallbackFormat: 'hex', // fallback color format
    hexNumberSignPrefix: true, // put a '#' (number sign) before hex strings
    sliders: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setHue'
      },
      alpha: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setAlpha'
      }
    },
    slidersHorz: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setHue',
        callTop: false
      },
      alpha: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setAlpha',
        callTop: false
      }
    },
    template: '<div class="colorpicker dropdown-menu">' +
      '<div class="colorpicker-saturation"><i><b></b></i></div>' +
      '<div class="colorpicker-hue"><i></i></div>' +
      '<div class="colorpicker-alpha"><i></i></div>' +
      '<div class="colorpicker-color"><div /></div>' +
      '<div class="colorpicker-selectors"></div>' +
      '</div>',
    align: 'right',
    customClass: null, // custom class added to the colorpicker element
    colorSelectors: null // custom color aliases
  };

  /**
   * Colorpicker component class
   *
   * @param {Object|String} element
   * @param {Object} options
   * @constructor
   */
  var Colorpicker = function(element, options) {
    this.element = $(element).addClass('colorpicker-element');
    this.options = $.extend(true, {}, defaults, this.element.data(), options);
    this.component = this.options.component;
    this.component = (this.component !== false) ? this.element.find(this.component) : false;
    if (this.component && (this.component.length === 0)) {
      this.component = false;
    }
    this.container = (this.options.container === true) ? this.element : this.options.container;
    this.container = (this.container !== false) ? $(this.container) : false;

    // Is the element an input? Should we search inside for any input?
    this.input = this.element.is('input') ? this.element : (this.options.input ?
      this.element.find(this.options.input) : false);
    if (this.input && (this.input.length === 0)) {
      this.input = false;
    }
    // Set HSB color
    this.color = this.createColor(this.options.color !== false ? this.options.color : this.getValue());

    this.format = this.options.format !== false ? this.options.format : this.color.origFormat;

    if (this.options.color !== false) {
      this.updateInput(this.color);
      this.updateData(this.color);
    }

    this.disabled = false;

    // Setup picker
    var $picker = this.picker = $(this.options.template);
    if (this.options.customClass) {
      $picker.addClass(this.options.customClass);
    }
    if (this.options.inline) {
      $picker.addClass('colorpicker-inline colorpicker-visible');
    } else {
      $picker.addClass('colorpicker-hidden');
    }
    if (this.options.horizontal) {
      $picker.addClass('colorpicker-horizontal');
    }
    if (
      (['rgba', 'hsla', 'alias'].indexOf(this.format) !== -1) ||
      this.options.format === false ||
      this.getValue() === 'transparent'
    ) {
      $picker.addClass('colorpicker-with-alpha');
    }
    if (this.options.align === 'right') {
      $picker.addClass('colorpicker-right');
    }
    if (this.options.inline === true) {
      $picker.addClass('colorpicker-no-arrow');
    }
    if (this.options.colorSelectors) {
      var colorpicker = this,
        selectorsContainer = colorpicker.picker.find('.colorpicker-selectors');

      if (selectorsContainer.length > 0) {
        $.each(this.options.colorSelectors, function(name, color) {
          var $btn = $('<i />')
            .addClass('colorpicker-selectors-color')
            .css('background-color', color)
            .data('class', name).data('alias', name);

          $btn.on('mousedown.colorpicker touchstart.colorpicker', function(event) {
            event.preventDefault();
            colorpicker.setValue(
              colorpicker.format === 'alias' ? $(this).data('alias') : $(this).css('background-color')
            );
          });
          selectorsContainer.append($btn);
        });
        selectorsContainer.show().addClass('colorpicker-visible');
      }
    }

    // Prevent closing the colorpicker when clicking on itself
    $picker.on('mousedown.colorpicker touchstart.colorpicker', $.proxy(function(e) {
      if (e.target === e.currentTarget) {
        e.preventDefault();
      }
    }, this));

    // Bind click/tap events on the sliders
    $picker.find('.colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha')
      .on('mousedown.colorpicker touchstart.colorpicker', $.proxy(this.mousedown, this));

    $picker.appendTo(this.container ? this.container : $('body'));

    // Bind other events
    if (this.input !== false) {
      this.input.on({
        'keyup.colorpicker': $.proxy(this.keyup, this)
      });
      this.input.on({
        'change.colorpicker': $.proxy(this.change, this)
      });
      if (this.component === false) {
        this.element.on({
          'focus.colorpicker': $.proxy(this.show, this)
        });
      }
      if (this.options.inline === false) {
        this.element.on({
          'focusout.colorpicker': $.proxy(this.hide, this)
        });
      }
    }

    if (this.component !== false) {
      this.component.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    if ((this.input === false) && (this.component === false)) {
      this.element.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    // for HTML5 input[type='color']
    if ((this.input !== false) && (this.component !== false) && (this.input.attr('type') === 'color')) {

      this.input.on({
        'click.colorpicker': $.proxy(this.show, this),
        'focus.colorpicker': $.proxy(this.show, this)
      });
    }
    this.update();

    $($.proxy(function() {
      this.element.trigger('create');
    }, this));
  };

  Colorpicker.Color = Color;

  Colorpicker.prototype = {
    constructor: Colorpicker,
    destroy: function() {
      this.picker.remove();
      this.element.removeData('colorpicker', 'color').off('.colorpicker');
      if (this.input !== false) {
        this.input.off('.colorpicker');
      }
      if (this.component !== false) {
        this.component.off('.colorpicker');
      }
      this.element.removeClass('colorpicker-element');
      this.element.trigger({
        type: 'destroy'
      });
    },
    reposition: function() {
      if (this.options.inline !== false || this.options.container) {
        return false;
      }
      var type = this.container && this.container[0] !== window.document.body ? 'position' : 'offset';
      var element = this.component || this.element;
      var offset = element[type]();
      if (this.options.align === 'right') {
        offset.left -= this.picker.outerWidth() - element.outerWidth();
      }
      this.picker.css({
        top: offset.top + element.outerHeight(),
        left: offset.left
      });
    },
    show: function(e) {
      if (this.isDisabled()) {
        // Don't show the widget if it's disabled (the input)
        return;
      }
      this.picker.addClass('colorpicker-visible').removeClass('colorpicker-hidden');
      this.reposition();
      $(window).on('resize.colorpicker', $.proxy(this.reposition, this));
      if (e && (!this.hasInput() || this.input.attr('type') === 'color')) {
        if (e.stopPropagation && e.preventDefault) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      if ((this.component || !this.input) && (this.options.inline === false)) {
        $(window.document).on({
          'mousedown.colorpicker': $.proxy(this.hide, this)
        });
      }
      this.element.trigger({
        type: 'showPicker',
        color: this.color
      });
    },
    hide: function(e) {
      if ((typeof e !== 'undefined') && e.target) {
        // Prevent hide if triggered by an event and an element inside the colorpicker has been clicked/touched
        if (
          $(e.currentTarget).parents('.colorpicker').length > 0 ||
          $(e.target).parents('.colorpicker').length > 0
        ) {
          return false;
        }
      }
      this.picker.addClass('colorpicker-hidden').removeClass('colorpicker-visible');
      $(window).off('resize.colorpicker', this.reposition);
      $(window.document).off({
        'mousedown.colorpicker': this.hide
      });
      this.update();
      this.element.trigger({
        type: 'hidePicker',
        color: this.color
      });
    },
    updateData: function(val) {
      val = val || this.color.toString(false, this.format);
      this.element.data('color', val);
      return val;
    },
    updateInput: function(val) {
      val = val || this.color.toString(false, this.format);
      if (this.input !== false) {
        this.input.prop('value', val);
        this.input.trigger('change');
      }
      return val;
    },
    updatePicker: function(val) {
      if (typeof val !== 'undefined') {
        this.color = this.createColor(val);
      }
      var sl = (this.options.horizontal === false) ? this.options.sliders : this.options.slidersHorz;
      var icns = this.picker.find('i');
      if (icns.length === 0) {
        return;
      }
      if (this.options.horizontal === false) {
        sl = this.options.sliders;
        icns.eq(1).css('top', sl.hue.maxTop * (1 - this.color.value.h)).end()
          .eq(2).css('top', sl.alpha.maxTop * (1 - this.color.value.a));
      } else {
        sl = this.options.slidersHorz;
        icns.eq(1).css('left', sl.hue.maxLeft * (1 - this.color.value.h)).end()
          .eq(2).css('left', sl.alpha.maxLeft * (1 - this.color.value.a));
      }
      icns.eq(0).css({
        'top': sl.saturation.maxTop - this.color.value.b * sl.saturation.maxTop,
        'left': this.color.value.s * sl.saturation.maxLeft
      });

      this.picker.find('.colorpicker-saturation')
        .css('backgroundColor', this.color.toHex(true, this.color.value.h, 1, 1, 1));

      this.picker.find('.colorpicker-alpha')
        .css('backgroundColor', this.color.toHex(true));

      this.picker.find('.colorpicker-color, .colorpicker-color div')
        .css('backgroundColor', this.color.toString(true, this.format));

      return val;
    },
    updateComponent: function(val) {
      var color;

      if (typeof val !== 'undefined') {
        color = this.createColor(val);
      } else {
        color = this.color;
      }

      if (this.component !== false) {
        var icn = this.component.find('i').eq(0);
        if (icn.length > 0) {
          icn.css({
            'backgroundColor': color.toString(true, this.format)
          });
        } else {
          this.component.css({
            'backgroundColor': color.toString(true, this.format)
          });
        }
      }

      return color.toString(false, this.format);
    },
    update: function(force) {
      var val;
      if ((this.getValue(false) !== false) || (force === true)) {
        // Update input/data only if the current value is not empty
        val = this.updateComponent();
        this.updateInput(val);
        this.updateData(val);
        this.updatePicker(); // only update picker if value is not empty
      }
      return val;

    },
    setValue: function(val) { // set color manually
      this.color = this.createColor(val);
      this.update(true);
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: val
      });
    },
    /**
     * Creates a new color using the instance options
     * @protected
     * @param {String} val
     * @returns {Color}
     */
    createColor: function(val) {
      return new Color(
        val ? val : null,
        this.options.colorSelectors,
        this.options.fallbackColor ? this.options.fallbackColor : this.color,
        this.options.fallbackFormat,
        this.options.hexNumberSignPrefix
      );
    },
    getValue: function(defaultValue) {
      defaultValue = (typeof defaultValue === 'undefined') ? this.options.fallbackColor : defaultValue;
      var val;
      if (this.hasInput()) {
        val = this.input.val();
      } else {
        val = this.element.data('color');
      }
      if ((val === undefined) || (val === '') || (val === null)) {
        // if not defined or empty, return default
        val = defaultValue;
      }
      return val;
    },
    hasInput: function() {
      return (this.input !== false);
    },
    isDisabled: function() {
      return this.disabled;
    },
    disable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', true);
      }
      this.disabled = true;
      this.element.trigger({
        type: 'disable',
        color: this.color,
        value: this.getValue()
      });
      return true;
    },
    enable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', false);
      }
      this.disabled = false;
      this.element.trigger({
        type: 'enable',
        color: this.color,
        value: this.getValue()
      });
      return true;
    },
    currentSlider: null,
    mousePointer: {
      left: 0,
      top: 0
    },
    mousedown: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();

      var target = $(e.target);

      //detect the slider and set the limits and callbacks
      var zone = target.closest('div');
      var sl = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
      if (!zone.is('.colorpicker')) {
        if (zone.is('.colorpicker-saturation')) {
          this.currentSlider = $.extend({}, sl.saturation);
        } else if (zone.is('.colorpicker-hue')) {
          this.currentSlider = $.extend({}, sl.hue);
        } else if (zone.is('.colorpicker-alpha')) {
          this.currentSlider = $.extend({}, sl.alpha);
        } else {
          return false;
        }
        var offset = zone.offset();
        //reference to guide's style
        this.currentSlider.guide = zone.find('i')[0].style;
        this.currentSlider.left = e.pageX - offset.left;
        this.currentSlider.top = e.pageY - offset.top;
        this.mousePointer = {
          left: e.pageX,
          top: e.pageY
        };
        //trigger mousemove to move the guide to the current position
        $(window.document).on({
          'mousemove.colorpicker': $.proxy(this.mousemove, this),
          'touchmove.colorpicker': $.proxy(this.mousemove, this),
          'mouseup.colorpicker': $.proxy(this.mouseup, this),
          'touchend.colorpicker': $.proxy(this.mouseup, this)
        }).trigger('mousemove');
      }
      return false;
    },
    mousemove: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();
      var left = Math.max(
        0,
        Math.min(
          this.currentSlider.maxLeft,
          this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left)
        )
      );
      var top = Math.max(
        0,
        Math.min(
          this.currentSlider.maxTop,
          this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)
        )
      );
      this.currentSlider.guide.left = left + 'px';
      this.currentSlider.guide.top = top + 'px';
      if (this.currentSlider.callLeft) {
        this.color[this.currentSlider.callLeft].call(this.color, left / this.currentSlider.maxLeft);
      }
      if (this.currentSlider.callTop) {
        this.color[this.currentSlider.callTop].call(this.color, top / this.currentSlider.maxTop);
      }
      // Change format dynamically
      // Only occurs if user choose the dynamic format by
      // setting option format to false
      if (
        this.options.format === false &&
        (this.currentSlider.callTop === 'setAlpha' ||
          this.currentSlider.callLeft === 'setAlpha')
      ) {

        // Converting from hex / rgb to rgba
        if (this.color.value.a !== 1) {
          this.format = 'rgba';
          this.color.origFormat = 'rgba';
        }

        // Converting from rgba to hex
        else {
          this.format = 'hex';
          this.color.origFormat = 'hex';
        }
      }
      this.update(true);

      this.element.trigger({
        type: 'changeColor',
        color: this.color
      });
      return false;
    },
    mouseup: function(e) {
      e.stopPropagation();
      e.preventDefault();
      $(window.document).off({
        'mousemove.colorpicker': this.mousemove,
        'touchmove.colorpicker': this.mousemove,
        'mouseup.colorpicker': this.mouseup,
        'touchend.colorpicker': this.mouseup
      });
      return false;
    },
    change: function(e) {
      this.keyup(e);
    },
    keyup: function(e) {
      if ((e.keyCode === 38)) {
        if (this.color.value.a < 1) {
          this.color.value.a = Math.round((this.color.value.a + 0.01) * 100) / 100;
        }
        this.update(true);
      } else if ((e.keyCode === 40)) {
        if (this.color.value.a > 0) {
          this.color.value.a = Math.round((this.color.value.a - 0.01) * 100) / 100;
        }
        this.update(true);
      } else {
        this.color = this.createColor(this.input.val());
        // Change format dynamically
        // Only occurs if user choose the dynamic format by
        // setting option format to false
        if (this.color.origFormat && this.options.format === false) {
          this.format = this.color.origFormat;
        }
        if (this.getValue(false) !== false) {
          this.updateData();
          this.updateComponent();
          this.updatePicker();
        }
      }
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: this.input.val()
      });
    }
  };

  $.colorpicker = Colorpicker;

  $.fn.colorpicker = function(option) {
    var apiArgs = Array.prototype.slice.call(arguments, 1),
      isSingleElement = (this.length === 1),
      returnValue = null;

    var $jq = this.each(function() {
      var $this = $(this),
        inst = $this.data('colorpicker'),
        options = ((typeof option === 'object') ? option : {});

      if (!inst) {
        inst = new Colorpicker(this, options);
        $this.data('colorpicker', inst);
      }

      if (typeof option === 'string') {
        if ($.isFunction(inst[option])) {
          returnValue = inst[option].apply(inst, apiArgs);
        } else { // its a property ?
          if (apiArgs.length) {
            // set property
            inst[option] = apiArgs[0];
          }
          returnValue = inst[option];
        }
      } else {
        returnValue = $this;
      }
    });
    return isSingleElement ? returnValue : $jq;
  };

  $.fn.colorpicker.constructor = Colorpicker;

}));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n *  Bootstrap Duallistbox - v3.0.6\n *  A responsive dual listbox widget optimized for Twitter Bootstrap. It works on all modern browsers and on touch devices.\n *  http://www.virtuosoft.eu/code/bootstrap-duallistbox/\n *\n *  Made by István Ujj-Mészáros\n *  Under Apache License v2.0 License\n */\n!function(a,b,c,d){function e(b,c){this.element=a(b),this.settings=a.extend({},w,c),this._defaults=w,this._name=v,this.init()}function f(a){a.element.trigger(\"change\")}function g(b){b.element.find(\"option\").each(function(c,d){var e=a(d);\"undefined\"==typeof e.data(\"original-index\")&&e.data(\"original-index\",b.elementCount++),\"undefined\"==typeof e.data(\"_selected\")&&e.data(\"_selected\",!1)})}function h(b,c,d){b.element.find(\"option\").each(function(e,f){var g=a(f);g.data(\"original-index\")===c&&(g.prop(\"selected\",d),d?(g.attr(\"data-sortindex\",b.sortIndex),b.sortIndex++):g.removeAttr(\"data-sortindex\"))})}function i(a,b){return a.replace(/\\{(\\d+)\\}/g,function(a,c){return\"undefined\"!=typeof b[c]?b[c]:a})}function j(a){if(a.settings.infoText){var b=a.elements.select1.find(\"option\").length,c=a.elements.select2.find(\"option\").length,d=a.element.find(\"option\").length-a.selectedElements,e=a.selectedElements,f=\"\";f=0===d?a.settings.infoTextEmpty:b===d?i(a.settings.infoText,[b,d]):i(a.settings.infoTextFiltered,[b,d]),a.elements.info1.html(f),a.elements.box1.toggleClass(\"filtered\",!(b===d||0===d)),f=0===e?a.settings.infoTextEmpty:c===e?i(a.settings.infoText,[c,e]):i(a.settings.infoTextFiltered,[c,e]),a.elements.info2.html(f),a.elements.box2.toggleClass(\"filtered\",!(c===e||0===e))}}function k(b){b.selectedElements=0,b.elements.select1.empty(),b.elements.select2.empty(),b.element.find(\"option\").each(function(c,d){var e=a(d);e.prop(\"selected\")?(b.selectedElements++,b.elements.select2.append(e.clone(!0).prop(\"selected\",e.data(\"_selected\")))):b.elements.select1.append(e.clone(!0).prop(\"selected\",e.data(\"_selected\")))}),b.settings.showFilterInputs&&(l(b,1),l(b,2)),j(b)}function l(b,c){if(b.settings.showFilterInputs){m(b,c),b.elements[\"select\"+c].empty().scrollTop(0);var d=new RegExp(a.trim(b.elements[\"filterInput\"+c].val()),\"gi\"),e=b.element.find(\"option\"),f=b.element;f=1===c?e.not(\":selected\"):f.find(\"option:selected\"),f.each(function(f,g){var h=a(g),i=!0;(g.text.match(d)||b.settings.filterOnValues&&h.attr(\"value\").match(d))&&(i=!1,b.elements[\"select\"+c].append(h.clone(!0).prop(\"selected\",h.data(\"_selected\")))),e.eq(h.data(\"original-index\")).data(\"filtered\"+c,i)}),j(b)}}function m(b,c){var d=b.element.find(\"option\");b.elements[\"select\"+c].find(\"option\").each(function(b,c){var e=a(c);d.eq(e.data(\"original-index\")).data(\"_selected\",e.prop(\"selected\"))})}function n(a){var b=a.children(\"option\");b.sort(function(a,b){var c=parseInt(a.getAttribute(\"data-sortindex\")),d=parseInt(b.getAttribute(\"data-sortindex\"));return c>d?1:d>c?-1:0}),b.detach().appendTo(a)}function o(b){b.find(\"option\").sort(function(b,c){return a(b).data(\"original-index\")>a(c).data(\"original-index\")?1:-1}).appendTo(b)}function p(a){a.elements.select1.find(\"option\").each(function(){a.element.find(\"option\").data(\"_selected\",!1)})}function q(b){\"all\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?\"moved\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,1):(m(b,1),m(b,2)),b.elements.select1.find(\"option:selected\").each(function(c,d){var e=a(d);e.data(\"filtered1\")||h(b,e.data(\"original-index\"),!0)}),k(b),f(b),b.settings.sortByInputOrder?n(b.elements.select2):o(b.elements.select2)}function r(b){\"all\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?\"moved\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,2):(m(b,1),m(b,2)),b.elements.select2.find(\"option:selected\").each(function(c,d){var e=a(d);e.data(\"filtered2\")||h(b,e.data(\"original-index\"),!1)}),k(b),f(b),o(b.elements.select1),b.settings.sortByInputOrder&&n(b.elements.select2)}function s(b){\"all\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?\"moved\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,1):(m(b,1),m(b,2)),b.element.find(\"option\").each(function(c,d){var e=a(d);e.data(\"filtered1\")||(e.prop(\"selected\",!0),e.attr(\"data-sortindex\",b.sortIndex),b.sortIndex++)}),k(b),f(b)}function t(b){\"all\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect?\"moved\"!==b.settings.preserveSelectionOnMove||b.settings.moveOnSelect||m(b,2):(m(b,1),m(b,2)),b.element.find(\"option\").each(function(b,c){var d=a(c);d.data(\"filtered2\")||(d.prop(\"selected\",!1),d.removeAttr(\"data-sortindex\"))}),k(b),f(b)}function u(a){a.elements.form.submit(function(b){a.elements.filterInput1.is(\":focus\")?(b.preventDefault(),a.elements.filterInput1.focusout()):a.elements.filterInput2.is(\":focus\")&&(b.preventDefault(),a.elements.filterInput2.focusout())}),a.element.on(\"bootstrapDualListbox.refresh\",function(b,c){a.refresh(c)}),a.elements.filterClear1.on(\"click\",function(){a.setNonSelectedFilter(\"\",!0)}),a.elements.filterClear2.on(\"click\",function(){a.setSelectedFilter(\"\",!0)}),a.settings.eventMoveOverride===!1&&a.elements.moveButton.on(\"click\",function(){q(a)}),a.settings.eventMoveAllOverride===!1&&a.elements.moveAllButton.on(\"click\",function(){s(a)}),a.settings.eventRemoveOverride===!1&&a.elements.removeButton.on(\"click\",function(){r(a)}),a.settings.eventRemoveAllOverride===!1&&a.elements.removeAllButton.on(\"click\",function(){t(a)}),a.elements.filterInput1.on(\"change keyup\",function(){l(a,1)}),a.elements.filterInput2.on(\"change keyup\",function(){l(a,2)})}var v=\"bootstrapDualListbox\",w={bootstrap2Compatible:!1,filterTextClear:\"show all\",filterPlaceHolder:\"Filter\",moveSelectedLabel:\"Move selected\",moveAllLabel:\"Move all\",removeSelectedLabel:\"Remove selected\",removeAllLabel:\"Remove all\",moveOnSelect:!0,preserveSelectionOnMove:!1,selectedListLabel:!1,nonSelectedListLabel:!1,helperSelectNamePostfix:\"_helper\",selectorMinimalHeight:100,showFilterInputs:!0,nonSelectedFilter:\"\",selectedFilter:\"\",infoText:\"Showing all {0}\",infoTextFiltered:'<span class=\"label label-warning\">Filtered</span> {0} from {1}',infoTextEmpty:\"Empty list\",filterOnValues:!1,sortByInputOrder:!1,eventMoveOverride:!1,eventMoveAllOverride:!1,eventRemoveOverride:!1,eventRemoveAllOverride:!1},x=/android/i.test(navigator.userAgent.toLowerCase());e.prototype={init:function(){this.container=a('<div class=\"bootstrap-duallistbox-container\"> <div class=\"box1\">   <label></label>   <span class=\"info-container\">     <span class=\"info\"></span>     <button type=\"button\" class=\"btn clear1 pull-right\"></button>   </span>   <input class=\"filter\" type=\"text\">   <div class=\"btn-group buttons\">     <button type=\"button\" class=\"btn moveall\">       <i></i>       <i></i>     </button>     <button type=\"button\" class=\"btn move\">       <i></i>     </button>   </div>   <select multiple=\"multiple\"></select> </div> <div class=\"box2\">   <label></label>   <span class=\"info-container\">     <span class=\"info\"></span>     <button type=\"button\" class=\"btn clear2 pull-right\"></button>   </span>   <input class=\"filter\" type=\"text\">   <div class=\"btn-group buttons\">     <button type=\"button\" class=\"btn remove\">       <i></i>     </button>     <button type=\"button\" class=\"btn removeall\">       <i></i>       <i></i>     </button>   </div>   <select multiple=\"multiple\"></select> </div></div>').insertBefore(this.element),this.elements={originalSelect:this.element,box1:a(\".box1\",this.container),box2:a(\".box2\",this.container),filterInput1:a(\".box1 .filter\",this.container),filterInput2:a(\".box2 .filter\",this.container),filterClear1:a(\".box1 .clear1\",this.container),filterClear2:a(\".box2 .clear2\",this.container),label1:a(\".box1 > label\",this.container),label2:a(\".box2 > label\",this.container),info1:a(\".box1 .info\",this.container),info2:a(\".box2 .info\",this.container),select1:a(\".box1 select\",this.container),select2:a(\".box2 select\",this.container),moveButton:a(\".box1 .move\",this.container),removeButton:a(\".box2 .remove\",this.container),moveAllButton:a(\".box1 .moveall\",this.container),removeAllButton:a(\".box2 .removeall\",this.container),form:a(a(\".box1 .filter\",this.container)[0].form)},this.originalSelectName=this.element.attr(\"name\")||\"\";var b=\"bootstrap-duallistbox-nonselected-list_\"+this.originalSelectName,c=\"bootstrap-duallistbox-selected-list_\"+this.originalSelectName;return this.elements.select1.attr(\"id\",b),this.elements.select2.attr(\"id\",c),this.elements.label1.attr(\"for\",b),this.elements.label2.attr(\"for\",c),this.selectedElements=0,this.sortIndex=0,this.elementCount=0,this.setBootstrap2Compatible(this.settings.bootstrap2Compatible),this.setFilterTextClear(this.settings.filterTextClear),this.setFilterPlaceHolder(this.settings.filterPlaceHolder),this.setMoveSelectedLabel(this.settings.moveSelectedLabel),this.setMoveAllLabel(this.settings.moveAllLabel),this.setRemoveSelectedLabel(this.settings.removeSelectedLabel),this.setRemoveAllLabel(this.settings.removeAllLabel),this.setMoveOnSelect(this.settings.moveOnSelect),this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove),this.setSelectedListLabel(this.settings.selectedListLabel),this.setNonSelectedListLabel(this.settings.nonSelectedListLabel),this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix),this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight),g(this),this.setShowFilterInputs(this.settings.showFilterInputs),this.setNonSelectedFilter(this.settings.nonSelectedFilter),this.setSelectedFilter(this.settings.selectedFilter),this.setInfoText(this.settings.infoText),this.setInfoTextFiltered(this.settings.infoTextFiltered),this.setInfoTextEmpty(this.settings.infoTextEmpty),this.setFilterOnValues(this.settings.filterOnValues),this.setSortByInputOrder(this.settings.sortByInputOrder),this.setEventMoveOverride(this.settings.eventMoveOverride),this.setEventMoveAllOverride(this.settings.eventMoveAllOverride),this.setEventRemoveOverride(this.settings.eventRemoveOverride),this.setEventRemoveAllOverride(this.settings.eventRemoveAllOverride),this.element.hide(),u(this),k(this),this.element},setBootstrap2Compatible:function(a,b){return this.settings.bootstrap2Compatible=a,a?(this.container.removeClass(\"row\").addClass(\"row-fluid bs2compatible\"),this.container.find(\".box1, .box2\").removeClass(\"col-md-6\").addClass(\"span6\"),this.container.find(\".clear1, .clear2\").removeClass(\"btn-default btn-xs\").addClass(\"btn-mini\"),this.container.find(\"input, select\").removeClass(\"form-control\"),this.container.find(\".btn\").removeClass(\"btn-default\"),this.container.find(\".moveall > i, .move > i\").removeClass(\"glyphicon glyphicon-arrow-right\").addClass(\"icon-arrow-right\"),this.container.find(\".removeall > i, .remove > i\").removeClass(\"glyphicon glyphicon-arrow-left\").addClass(\"icon-arrow-left\")):(this.container.removeClass(\"row-fluid bs2compatible\").addClass(\"row\"),this.container.find(\".box1, .box2\").removeClass(\"span6\").addClass(\"col-md-6\"),this.container.find(\".clear1, .clear2\").removeClass(\"btn-mini\").addClass(\"btn-default btn-xs\"),this.container.find(\"input, select\").addClass(\"form-control\"),this.container.find(\".btn\").addClass(\"btn-default\"),this.container.find(\".moveall > i, .move > i\").removeClass(\"icon-arrow-right\").addClass(\"glyphicon glyphicon-arrow-right\"),this.container.find(\".removeall > i, .remove > i\").removeClass(\"icon-arrow-left\").addClass(\"glyphicon glyphicon-arrow-left\")),b&&k(this),this.element},setFilterTextClear:function(a,b){return this.settings.filterTextClear=a,this.elements.filterClear1.html(a),this.elements.filterClear2.html(a),b&&k(this),this.element},setFilterPlaceHolder:function(a,b){return this.settings.filterPlaceHolder=a,this.elements.filterInput1.attr(\"placeholder\",a),this.elements.filterInput2.attr(\"placeholder\",a),b&&k(this),this.element},setMoveSelectedLabel:function(a,b){return this.settings.moveSelectedLabel=a,this.elements.moveButton.attr(\"title\",a),b&&k(this),this.element},setMoveAllLabel:function(a,b){return this.settings.moveAllLabel=a,this.elements.moveAllButton.attr(\"title\",a),b&&k(this),this.element},setRemoveSelectedLabel:function(a,b){return this.settings.removeSelectedLabel=a,this.elements.removeButton.attr(\"title\",a),b&&k(this),this.element},setRemoveAllLabel:function(a,b){return this.settings.removeAllLabel=a,this.elements.removeAllButton.attr(\"title\",a),b&&k(this),this.element},setMoveOnSelect:function(a,b){if(x&&(a=!0),this.settings.moveOnSelect=a,this.settings.moveOnSelect){this.container.addClass(\"moveonselect\");var c=this;this.elements.select1.on(\"change\",function(){q(c)}),this.elements.select2.on(\"change\",function(){r(c)})}else this.container.removeClass(\"moveonselect\"),this.elements.select1.off(\"change\"),this.elements.select2.off(\"change\");return b&&k(this),this.element},setPreserveSelectionOnMove:function(a,b){return x&&(a=!1),this.settings.preserveSelectionOnMove=a,b&&k(this),this.element},setSelectedListLabel:function(a,b){return this.settings.selectedListLabel=a,a?this.elements.label2.show().html(a):this.elements.label2.hide().html(a),b&&k(this),this.element},setNonSelectedListLabel:function(a,b){return this.settings.nonSelectedListLabel=a,a?this.elements.label1.show().html(a):this.elements.label1.hide().html(a),b&&k(this),this.element},setHelperSelectNamePostfix:function(a,b){return this.settings.helperSelectNamePostfix=a,a?(this.elements.select1.attr(\"name\",this.originalSelectName+a+\"1\"),this.elements.select2.attr(\"name\",this.originalSelectName+a+\"2\")):(this.elements.select1.removeAttr(\"name\"),this.elements.select2.removeAttr(\"name\")),b&&k(this),this.element},setSelectOrMinimalHeight:function(a,b){this.settings.selectorMinimalHeight=a;var c=this.element.height();return this.element.height()<a&&(c=a),this.elements.select1.height(c),this.elements.select2.height(c),b&&k(this),this.element},setShowFilterInputs:function(a,b){return a?(this.elements.filterInput1.show(),this.elements.filterInput2.show()):(this.setNonSelectedFilter(\"\"),this.setSelectedFilter(\"\"),k(this),this.elements.filterInput1.hide(),this.elements.filterInput2.hide()),this.settings.showFilterInputs=a,b&&k(this),this.element},setNonSelectedFilter:function(a,b){return this.settings.showFilterInputs?(this.settings.nonSelectedFilter=a,this.elements.filterInput1.val(a),b&&k(this),this.element):void 0},setSelectedFilter:function(a,b){return this.settings.showFilterInputs?(this.settings.selectedFilter=a,this.elements.filterInput2.val(a),b&&k(this),this.element):void 0},setInfoText:function(a,b){return this.settings.infoText=a,b&&k(this),this.element},setInfoTextFiltered:function(a,b){return this.settings.infoTextFiltered=a,b&&k(this),this.element},setInfoTextEmpty:function(a,b){return this.settings.infoTextEmpty=a,b&&k(this),this.element},setFilterOnValues:function(a,b){return this.settings.filterOnValues=a,b&&k(this),this.element},setSortByInputOrder:function(a,b){return this.settings.sortByInputOrder=a,b&&k(this),this.element},setEventMoveOverride:function(a,b){return this.settings.eventMoveOverride=a,b&&k(this),this.element},setEventMoveAllOverride:function(a,b){return this.settings.eventMoveAllOverride=a,b&&k(this),this.element},setEventRemoveOverride:function(a,b){return this.settings.eventRemoveOverride=a,b&&k(this),this.element},setEventRemoveAllOverride:function(a,b){return this.settings.eventRemoveAllOverride=a,b&&k(this),this.element},getContainer:function(){return this.container},refresh:function(a){g(this),a?p(this):(m(this,1),m(this,2)),k(this)},destroy:function(){return this.container.remove(),this.element.show(),a.data(this,\"plugin_\"+v,null),this.element}},a.fn[v]=function(b){var c=arguments;if(b===d||\"object\"==typeof b)return this.each(function(){a(this).is(\"select\")?a.data(this,\"plugin_\"+v)||a.data(this,\"plugin_\"+v,new e(this,b)):a(this).find(\"select\").each(function(c,d){a(d).bootstrapDualListbox(b)})});if(\"string\"==typeof b&&\"_\"!==b[0]&&\"init\"!==b){var f;return this.each(function(){var d=a.data(this,\"plugin_\"+v);d instanceof e&&\"function\"==typeof d[b]&&(f=d[b].apply(d,Array.prototype.slice.call(c,1)))}),f!==d?f:this}}}(jQuery,window,document);"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// Ion.RangeSlider | version 2.2.0 | https://github.com/IonDen/ion.rangeSlider\r\n;(function(f){\"function\"===typeof define&&define.amd?define([\"jquery\"],function(n){return f(n,document,window,navigator)}):\"object\"===typeof exports?f(require(\"jquery\"),document,window,navigator):f(jQuery,document,window,navigator)})(function(f,n,k,r,p){var t=0,m=function(){var a=r.userAgent,b=/msie\\s\\d+/i;return 0<a.search(b)&&(a=b.exec(a).toString(),a=a.split(\" \")[1],9>a)?(f(\"html\").addClass(\"lt-ie9\"),!0):!1}();Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,d=[].slice;if(\"function\"!=\r\ntypeof b)throw new TypeError;var c=d.call(arguments,1),e=function(){if(this instanceof e){var g=function(){};g.prototype=b.prototype;var g=new g,l=b.apply(g,c.concat(d.call(arguments)));return Object(l)===l?l:g}return b.apply(a,c.concat(d.call(arguments)))};return e});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(null==this)throw new TypeError('\"this\" is null or not defined');var d=Object(this),c=d.length>>>0;if(0===c)return-1;var e=+b||0;Infinity===Math.abs(e)&&(e=0);if(e>=c)return-1;\r\nfor(e=Math.max(0<=e?e:c-Math.abs(e),0);e<c;){if(e in d&&d[e]===a)return e;e++}return-1});var q=function(a,b,d){this.VERSION=\"2.2.0\";this.input=a;this.plugin_count=d;this.old_to=this.old_from=this.update_tm=this.calc_count=this.current_plugin=0;this.raf_id=this.old_min_interval=null;this.no_diapason=this.force_redraw=this.dragging=!1;this.has_tab_index=!0;this.is_update=this.is_key=!1;this.is_start=!0;this.is_click=this.is_resize=this.is_active=this.is_finish=!1;b=b||{};this.$cache={win:f(k),body:f(n.body),\r\ninput:f(a),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]};this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]};\r\nthis.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var c=this.$cache.input;a=c.prop(\"value\");var e;d={type:\"single\",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:\" \",prettify:null,force_edges:!1,\r\nkeyboard:!0,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:\"\",postfix:\"\",max_postfix:\"\",decorate_both:!0,values_separator:\" \\u2014 \",input_values_separator:\";\",disable:!1,block:!1,extra_classes:\"\",scope:null,onStart:null,onChange:null,onFinish:null,onUpdate:null};\"INPUT\"!==c[0].nodeName&&console&&console.warn&&console.warn(\"Base element should be <input>!\",c[0]);c={type:c.data(\"type\"),min:c.data(\"min\"),max:c.data(\"max\"),from:c.data(\"from\"),to:c.data(\"to\"),step:c.data(\"step\"),\r\nmin_interval:c.data(\"minInterval\"),max_interval:c.data(\"maxInterval\"),drag_interval:c.data(\"dragInterval\"),values:c.data(\"values\"),from_fixed:c.data(\"fromFixed\"),from_min:c.data(\"fromMin\"),from_max:c.data(\"fromMax\"),from_shadow:c.data(\"fromShadow\"),to_fixed:c.data(\"toFixed\"),to_min:c.data(\"toMin\"),to_max:c.data(\"toMax\"),to_shadow:c.data(\"toShadow\"),prettify_enabled:c.data(\"prettifyEnabled\"),prettify_separator:c.data(\"prettifySeparator\"),force_edges:c.data(\"forceEdges\"),keyboard:c.data(\"keyboard\"),\r\ngrid:c.data(\"grid\"),grid_margin:c.data(\"gridMargin\"),grid_num:c.data(\"gridNum\"),grid_snap:c.data(\"gridSnap\"),hide_min_max:c.data(\"hideMinMax\"),hide_from_to:c.data(\"hideFromTo\"),prefix:c.data(\"prefix\"),postfix:c.data(\"postfix\"),max_postfix:c.data(\"maxPostfix\"),decorate_both:c.data(\"decorateBoth\"),values_separator:c.data(\"valuesSeparator\"),input_values_separator:c.data(\"inputValuesSeparator\"),disable:c.data(\"disable\"),block:c.data(\"block\"),extra_classes:c.data(\"extraClasses\")};c.values=c.values&&c.values.split(\",\");\r\nfor(e in c)c.hasOwnProperty(e)&&(c[e]!==p&&\"\"!==c[e]||delete c[e]);a!==p&&\"\"!==a&&(a=a.split(c.input_values_separator||b.input_values_separator||\";\"),a[0]&&a[0]==+a[0]&&(a[0]=+a[0]),a[1]&&a[1]==+a[1]&&(a[1]=+a[1]),b&&b.values&&b.values.length?(d.from=a[0]&&b.values.indexOf(a[0]),d.to=a[1]&&b.values.indexOf(a[1])):(d.from=a[0]&&+a[0],d.to=a[1]&&+a[1]));f.extend(d,b);f.extend(d,c);this.options=d;this.update_check={};this.validate();this.result={input:this.$cache.input,slider:null,min:this.options.min,\r\nmax:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null};this.init()};q.prototype={init:function(a){this.no_diapason=!1;this.coords.p_step=this.convertToPercent(this.options.step,!0);this.target=\"base\";this.toggleInput();this.append();this.setMinMax();a?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart());this.updateScene()},append:function(){this.$cache.input.before('<span class=\"irs js-irs-'+\r\nthis.plugin_count+\" \"+this.options.extra_classes+'\"></span>');this.$cache.input.prop(\"readonly\",!0);this.$cache.cont=this.$cache.input.prev();this.result.slider=this.$cache.cont;this.$cache.cont.html('<span class=\"irs\"><span class=\"irs-line\" tabindex=\"0\"><span class=\"irs-line-left\"></span><span class=\"irs-line-mid\"></span><span class=\"irs-line-right\"></span></span><span class=\"irs-min\">0</span><span class=\"irs-max\">1</span><span class=\"irs-from\">0</span><span class=\"irs-to\">0</span><span class=\"irs-single\">0</span></span><span class=\"irs-grid\"></span><span class=\"irs-bar\"></span>');\r\nthis.$cache.rs=this.$cache.cont.find(\".irs\");this.$cache.min=this.$cache.cont.find(\".irs-min\");this.$cache.max=this.$cache.cont.find(\".irs-max\");this.$cache.from=this.$cache.cont.find(\".irs-from\");this.$cache.to=this.$cache.cont.find(\".irs-to\");this.$cache.single=this.$cache.cont.find(\".irs-single\");this.$cache.bar=this.$cache.cont.find(\".irs-bar\");this.$cache.line=this.$cache.cont.find(\".irs-line\");this.$cache.grid=this.$cache.cont.find(\".irs-grid\");\"single\"===this.options.type?(this.$cache.cont.append('<span class=\"irs-bar-edge\"></span><span class=\"irs-shadow shadow-single\"></span><span class=\"irs-slider single\"></span>'),\r\nthis.$cache.edge=this.$cache.cont.find(\".irs-bar-edge\"),this.$cache.s_single=this.$cache.cont.find(\".single\"),this.$cache.from[0].style.visibility=\"hidden\",this.$cache.to[0].style.visibility=\"hidden\",this.$cache.shad_single=this.$cache.cont.find(\".shadow-single\")):(this.$cache.cont.append('<span class=\"irs-shadow shadow-from\"></span><span class=\"irs-shadow shadow-to\"></span><span class=\"irs-slider from\"></span><span class=\"irs-slider to\"></span>'),this.$cache.s_from=this.$cache.cont.find(\".from\"),\r\nthis.$cache.s_to=this.$cache.cont.find(\".to\"),this.$cache.shad_from=this.$cache.cont.find(\".shadow-from\"),this.$cache.shad_to=this.$cache.cont.find(\".shadow-to\"),this.setTopHandler());this.options.hide_from_to&&(this.$cache.from[0].style.display=\"none\",this.$cache.to[0].style.display=\"none\",this.$cache.single[0].style.display=\"none\");this.appendGrid();this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.input[0].disabled=!1,this.removeDisableMask(),this.bindEvents());\r\nthis.options.disable||(this.options.block?this.appendDisableMask():this.removeDisableMask());this.options.drag_interval&&(this.$cache.bar[0].style.cursor=\"ew-resize\")},setTopHandler:function(){var a=this.options.max,b=this.options.to;this.options.from>this.options.min&&b===a?this.$cache.s_from.addClass(\"type_last\"):b<a&&this.$cache.s_to.addClass(\"type_last\")},changeLevel:function(a){switch(a){case \"single\":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake);this.$cache.s_single.addClass(\"state_hover\");\r\nbreak;case \"from\":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake);this.$cache.s_from.addClass(\"state_hover\");this.$cache.s_from.addClass(\"type_last\");this.$cache.s_to.removeClass(\"type_last\");break;case \"to\":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake);this.$cache.s_to.addClass(\"state_hover\");this.$cache.s_to.addClass(\"type_last\");this.$cache.s_from.removeClass(\"type_last\");break;case \"both\":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-\r\nthis.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass(\"type_last\"),this.$cache.s_from.removeClass(\"type_last\")}},appendDisableMask:function(){this.$cache.cont.append('<span class=\"irs-disable-mask\"></span>');this.$cache.cont.addClass(\"irs-disabled\")},removeDisableMask:function(){this.$cache.cont.remove(\".irs-disable-mask\");this.$cache.cont.removeClass(\"irs-disabled\")},remove:function(){this.$cache.cont.remove();this.$cache.cont=\r\nnull;this.$cache.line.off(\"keydown.irs_\"+this.plugin_count);this.$cache.body.off(\"touchmove.irs_\"+this.plugin_count);this.$cache.body.off(\"mousemove.irs_\"+this.plugin_count);this.$cache.win.off(\"touchend.irs_\"+this.plugin_count);this.$cache.win.off(\"mouseup.irs_\"+this.plugin_count);m&&(this.$cache.body.off(\"mouseup.irs_\"+this.plugin_count),this.$cache.body.off(\"mouseleave.irs_\"+this.plugin_count));this.$cache.grid_labels=[];this.coords.big=[];this.coords.big_w=[];this.coords.big_p=[];this.coords.big_x=\r\n[];cancelAnimationFrame(this.raf_id)},bindEvents:function(){if(!this.no_diapason){this.$cache.body.on(\"touchmove.irs_\"+this.plugin_count,this.pointerMove.bind(this));this.$cache.body.on(\"mousemove.irs_\"+this.plugin_count,this.pointerMove.bind(this));this.$cache.win.on(\"touchend.irs_\"+this.plugin_count,this.pointerUp.bind(this));this.$cache.win.on(\"mouseup.irs_\"+this.plugin_count,this.pointerUp.bind(this));this.$cache.line.on(\"touchstart.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\"));\r\nthis.$cache.line.on(\"mousedown.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\"));this.$cache.line.on(\"focus.irs_\"+this.plugin_count,this.pointerFocus.bind(this));this.options.drag_interval&&\"double\"===this.options.type?(this.$cache.bar.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"both\")),this.$cache.bar.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"both\"))):(this.$cache.bar.on(\"touchstart.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\")),\r\nthis.$cache.bar.on(\"mousedown.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\")));\"single\"===this.options.type?(this.$cache.single.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"single\")),this.$cache.s_single.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"single\")),this.$cache.shad_single.on(\"touchstart.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\")),this.$cache.single.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\r\n\"single\")),this.$cache.s_single.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"single\")),this.$cache.edge.on(\"mousedown.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\")),this.$cache.shad_single.on(\"mousedown.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\"))):(this.$cache.single.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on(\"touchstart.irs_\"+\r\nthis.plugin_count,this.pointerDown.bind(this,\"from\")),this.$cache.s_from.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"from\")),this.$cache.to.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"to\")),this.$cache.s_to.on(\"touchstart.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"to\")),this.$cache.shad_from.on(\"touchstart.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\")),this.$cache.shad_to.on(\"touchstart.irs_\"+this.plugin_count,this.pointerClick.bind(this,\r\n\"click\")),this.$cache.from.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"from\")),this.$cache.s_from.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"from\")),this.$cache.to.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"to\")),this.$cache.s_to.on(\"mousedown.irs_\"+this.plugin_count,this.pointerDown.bind(this,\"to\")),this.$cache.shad_from.on(\"mousedown.irs_\"+this.plugin_count,this.pointerClick.bind(this,\"click\")),this.$cache.shad_to.on(\"mousedown.irs_\"+\r\nthis.plugin_count,this.pointerClick.bind(this,\"click\")));if(this.options.keyboard)this.$cache.line.on(\"keydown.irs_\"+this.plugin_count,this.key.bind(this,\"keyboard\"));m&&(this.$cache.body.on(\"mouseup.irs_\"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on(\"mouseleave.irs_\"+this.plugin_count,this.pointerUp.bind(this)))}},pointerFocus:function(a){if(!this.target){var b=\"single\"===this.options.type?this.$cache.single:this.$cache.from;a=b.offset().left;a+=b.width()/2-1;this.pointerClick(\"single\",\r\n{preventDefault:function(){},pageX:a})}},pointerMove:function(a){this.dragging&&(this.coords.x_pointer=(a.pageX||a.originalEvent.touches&&a.originalEvent.touches[0].pageX)-this.coords.x_gap,this.calc())},pointerUp:function(a){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(\".state_hover\").removeClass(\"state_hover\"),this.force_redraw=!0,m&&f(\"*\").prop(\"unselectable\",!1),this.updateScene(),this.restoreOriginalMinInterval(),(f.contains(this.$cache.cont[0],\r\na.target)||this.dragging)&&this.callOnFinish(),this.dragging=!1)},pointerDown:function(a,b){b.preventDefault();var d=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&(\"both\"===a&&this.setTempMinInterval(),a||(a=this.target||\"from\"),this.current_plugin=this.plugin_count,this.target=a,this.dragging=this.is_active=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=d-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(a),m&&f(\"*\").prop(\"unselectable\",\r\n!0),this.$cache.line.trigger(\"focus\"),this.updateScene())},pointerClick:function(a,b){b.preventDefault();var d=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&(this.current_plugin=this.plugin_count,this.target=a,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(d-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger(\"focus\"))},key:function(a,b){if(!(this.current_plugin!==this.plugin_count||b.altKey||\r\nb.ctrlKey||b.shiftKey||b.metaKey)){switch(b.which){case 83:case 65:case 40:case 37:b.preventDefault();this.moveByKey(!1);break;case 87:case 68:case 38:case 39:b.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(a){var b=this.coords.p_pointer,d=(this.options.max-this.options.min)/100,d=this.options.step/d;this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*(a?b+d:b-d));this.is_key=!0;this.calc()},setMinMax:function(){if(this.options)if(this.options.hide_min_max)this.$cache.min[0].style.display=\r\n\"none\",this.$cache.max[0].style.display=\"none\";else{if(this.options.values.length)this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else{var a=this._prettify(this.options.min),b=this._prettify(this.options.max);this.result.min_pretty=a;this.result.max_pretty=b;this.$cache.min.html(this.decorate(a,this.options.min));this.$cache.max.html(this.decorate(b,this.options.max))}this.labels.w_min=this.$cache.min.outerWidth(!1);\r\nthis.labels.w_max=this.$cache.max.outerWidth(!1)}},setTempMinInterval:function(){var a=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval);this.options.min_interval=a},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(a){if(this.options){this.calc_count++;if(10===this.calc_count||a)this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),\r\nthis.calcHandlePercent();if(this.coords.w_rs){this.calcPointerPercent();a=this.getHandleX();\"both\"===this.target&&(this.coords.p_gap=0,a=this.getHandleX());\"click\"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,a=this.getHandleX(),this.target=this.options.drag_interval?\"both_one\":this.chooseHandle(a));switch(this.target){case \"base\":var b=(this.options.max-this.options.min)/100;a=(this.result.from-this.options.min)/b;b=(this.result.to-this.options.min)/b;this.coords.p_single_real=this.toFixed(a);\r\nthis.coords.p_from_real=this.toFixed(a);this.coords.p_to_real=this.toFixed(b);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);this.coords.p_from_fake=\r\nthis.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);this.target=null;break;case \"single\":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(a);this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);\r\nbreak;case \"from\":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(a);this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real);this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,\"from\");this.coords.p_from_real=\r\nthis.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,\"from\");this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case \"to\":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(a);this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);\r\nthis.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,\"to\");this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,\"to\");this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case \"both\":if(this.options.from_fixed||this.options.to_fixed)break;a=this.toFixed(a+.001*this.coords.p_handle);this.coords.p_from_real=this.convertToRealPercent(a)-this.coords.p_gap_left;this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real);\r\nthis.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,\"from\");this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real=this.convertToRealPercent(a)+this.coords.p_gap_right;this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,\r\nthis.options.to_max);this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,\"to\");this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case \"both_one\":if(!this.options.from_fixed&&!this.options.to_fixed){var d=this.convertToRealPercent(a);a=this.result.to_percent-this.result.from_percent;var c=a/2,b=d-c,d=d+c;0>b&&(b=0,d=b+a);100<d&&(d=100,b=d-a);this.coords.p_from_real=this.calcWithStep(b);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,\r\nthis.options.from_min,this.options.from_max);this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real=this.calcWithStep(d);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}}\"single\"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,\r\nthis.result.from=this.convertToValue(this.coords.p_single_real),this.result.from_pretty=this._prettify(this.result.from),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.from_pretty=\r\nthis._prettify(this.result.from),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.result.to_pretty=this._prettify(this.result.to),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to]));this.calcMinMax();this.calcLabels()}}},calcPointerPercent:function(){this.coords.w_rs?(0>this.coords.x_pointer||isNaN(this.coords.x_pointer)?this.coords.x_pointer=\r\n0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(a){return a/(100-this.coords.p_handle)*100},convertToFakePercent:function(a){return a/100*(100-this.coords.p_handle)},getHandleX:function(){var a=100-this.coords.p_handle,b=this.toFixed(this.coords.p_pointer-this.coords.p_gap);0>b?b=0:b>a&&(b=a);return b},calcHandlePercent:function(){this.coords.w_handle=\r\n\"single\"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1);this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(a){return\"single\"===this.options.type?\"single\":a>=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2?this.options.to_fixed?\"from\":\"to\":this.options.from_fixed?\"to\":\"from\"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=\r\nthis.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&(\"single\"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=\r\nthis.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=\r\nthis.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&\r\n(cancelAnimationFrame(this.raf_id),this.raf_id=null);clearTimeout(this.update_tm);this.update_tm=null;this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1);if(this.coords.w_rs){this.coords.w_rs!==this.coords.w_rs_old&&(this.target=\"base\",this.is_resize=!0);if(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)this.setMinMax(),\r\nthis.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow();if(this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)){if(this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key){this.drawLabels();this.$cache.bar[0].style.left=this.coords.p_bar_x+\"%\";this.$cache.bar[0].style.width=this.coords.p_bar_w+\"%\";if(\"single\"===this.options.type)this.$cache.s_single[0].style.left=\r\nthis.coords.p_single_fake+\"%\";else{this.$cache.s_from[0].style.left=this.coords.p_from_fake+\"%\";this.$cache.s_to[0].style.left=this.coords.p_to_fake+\"%\";if(this.old_from!==this.result.from||this.force_redraw)this.$cache.from[0].style.left=this.labels.p_from_left+\"%\";if(this.old_to!==this.result.to||this.force_redraw)this.$cache.to[0].style.left=this.labels.p_to_left+\"%\"}this.$cache.single[0].style.left=this.labels.p_single_left+\"%\";this.writeToInput();this.old_from===this.result.from&&this.old_to===\r\nthis.result.to||this.is_start||(this.$cache.input.trigger(\"change\"),this.$cache.input.trigger(\"input\"));this.old_from=this.result.from;this.old_to=this.result.to;this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange();if(this.is_key||this.is_click)this.is_click=this.is_key=!1,this.callOnFinish();this.is_finish=this.is_resize=this.is_update=!1}this.force_redraw=this.is_click=this.is_key=this.is_start=!1}}},drawLabels:function(){if(this.options){var a=this.options.values.length,\r\nb=this.options.p_values;if(!this.options.hide_from_to)if(\"single\"===this.options.type){if(a)a=this.decorate(b[this.result.from]);else{var d=this._prettify(this.result.from);a=this.decorate(d,this.result.from)}this.$cache.single.html(a);this.calcLabels();this.$cache.min[0].style.visibility=this.labels.p_single_left<this.labels.p_min+1?\"hidden\":\"visible\";this.$cache.max[0].style.visibility=this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?\"hidden\":\"visible\"}else{a?(this.options.decorate_both?\r\n(a=this.decorate(b[this.result.from]),a+=this.options.values_separator,a+=this.decorate(b[this.result.to])):a=this.decorate(b[this.result.from]+this.options.values_separator+b[this.result.to]),d=this.decorate(b[this.result.from]),b=this.decorate(b[this.result.to])):(d=this._prettify(this.result.from),b=this._prettify(this.result.to),this.options.decorate_both?(a=this.decorate(d,this.result.from),a+=this.options.values_separator,a+=this.decorate(b,this.result.to)):a=this.decorate(d+this.options.values_separator+\r\nb,this.result.to),d=this.decorate(d,this.result.from),b=this.decorate(b,this.result.to));this.$cache.single.html(a);this.$cache.from.html(d);this.$cache.to.html(b);this.calcLabels();a=Math.min(this.labels.p_single_left,this.labels.p_from_left);d=this.labels.p_single_left+this.labels.p_single_fake;var b=this.labels.p_to_left+this.labels.p_to_fake,c=Math.max(d,b);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility=\"hidden\",this.$cache.to[0].style.visibility=\r\n\"hidden\",this.$cache.single[0].style.visibility=\"visible\",this.result.from===this.result.to?(\"from\"===this.target?this.$cache.from[0].style.visibility=\"visible\":\"to\"===this.target?this.$cache.to[0].style.visibility=\"visible\":this.target||(this.$cache.from[0].style.visibility=\"visible\"),this.$cache.single[0].style.visibility=\"hidden\",c=b):(this.$cache.from[0].style.visibility=\"hidden\",this.$cache.to[0].style.visibility=\"hidden\",this.$cache.single[0].style.visibility=\"visible\",c=Math.max(d,b))):(this.$cache.from[0].style.visibility=\r\n\"visible\",this.$cache.to[0].style.visibility=\"visible\",this.$cache.single[0].style.visibility=\"hidden\");this.$cache.min[0].style.visibility=a<this.labels.p_min+1?\"hidden\":\"visible\";this.$cache.max[0].style.visibility=c>100-this.labels.p_max-1?\"hidden\":\"visible\"}}},drawShadow:function(){var a=this.options,b=this.$cache,d=\"number\"===typeof a.from_min&&!isNaN(a.from_min),c=\"number\"===typeof a.from_max&&!isNaN(a.from_max),e=\"number\"===typeof a.to_min&&!isNaN(a.to_min),g=\"number\"===typeof a.to_max&&!isNaN(a.to_max);\r\n\"single\"===a.type?a.from_shadow&&(d||c)?(d=this.convertToPercent(d?a.from_min:a.min),c=this.convertToPercent(c?a.from_max:a.max)-d,d=this.toFixed(d-this.coords.p_handle/100*d),c=this.toFixed(c-this.coords.p_handle/100*c),d+=this.coords.p_handle/2,b.shad_single[0].style.display=\"block\",b.shad_single[0].style.left=d+\"%\",b.shad_single[0].style.width=c+\"%\"):b.shad_single[0].style.display=\"none\":(a.from_shadow&&(d||c)?(d=this.convertToPercent(d?a.from_min:a.min),c=this.convertToPercent(c?a.from_max:a.max)-\r\nd,d=this.toFixed(d-this.coords.p_handle/100*d),c=this.toFixed(c-this.coords.p_handle/100*c),d+=this.coords.p_handle/2,b.shad_from[0].style.display=\"block\",b.shad_from[0].style.left=d+\"%\",b.shad_from[0].style.width=c+\"%\"):b.shad_from[0].style.display=\"none\",a.to_shadow&&(e||g)?(e=this.convertToPercent(e?a.to_min:a.min),a=this.convertToPercent(g?a.to_max:a.max)-e,e=this.toFixed(e-this.coords.p_handle/100*e),a=this.toFixed(a-this.coords.p_handle/100*a),e+=this.coords.p_handle/2,b.shad_to[0].style.display=\r\n\"block\",b.shad_to[0].style.left=e+\"%\",b.shad_to[0].style.width=a+\"%\"):b.shad_to[0].style.display=\"none\")},writeToInput:function(){\"single\"===this.options.type?(this.options.values.length?this.$cache.input.prop(\"value\",this.result.from_value):this.$cache.input.prop(\"value\",this.result.from),this.$cache.input.data(\"from\",this.result.from)):(this.options.values.length?this.$cache.input.prop(\"value\",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop(\"value\",\r\nthis.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data(\"from\",this.result.from),this.$cache.input.data(\"to\",this.result.to))},callOnStart:function(){this.writeToInput();if(this.options.onStart&&\"function\"===typeof this.options.onStart)if(this.options.scope)this.options.onStart.call(this.options.scope,this.result);else this.options.onStart(this.result)},callOnChange:function(){this.writeToInput();if(this.options.onChange&&\"function\"===typeof this.options.onChange)if(this.options.scope)this.options.onChange.call(this.options.scope,\r\nthis.result);else this.options.onChange(this.result)},callOnFinish:function(){this.writeToInput();if(this.options.onFinish&&\"function\"===typeof this.options.onFinish)if(this.options.scope)this.options.onFinish.call(this.options.scope,this.result);else this.options.onFinish(this.result)},callOnUpdate:function(){this.writeToInput();if(this.options.onUpdate&&\"function\"===typeof this.options.onUpdate)if(this.options.scope)this.options.onUpdate.call(this.options.scope,this.result);else this.options.onUpdate(this.result)},\r\ntoggleInput:function(){this.$cache.input.toggleClass(\"irs-hidden-input\");this.has_tab_index?this.$cache.input.prop(\"tabindex\",-1):this.$cache.input.removeProp(\"tabindex\");this.has_tab_index=!this.has_tab_index},convertToPercent:function(a,b){var d=this.options.max-this.options.min;return d?this.toFixed((b?a:a-this.options.min)/(d/100)):(this.no_diapason=!0,0)},convertToValue:function(a){var b=this.options.min,d=this.options.max,c=b.toString().split(\".\")[1],e=d.toString().split(\".\")[1],g,l,f=0,h=0;\r\nif(0===a)return this.options.min;if(100===a)return this.options.max;c&&(f=g=c.length);e&&(f=l=e.length);g&&l&&(f=g>=l?g:l);0>b&&(h=Math.abs(b),b=+(b+h).toFixed(f),d=+(d+h).toFixed(f));a=(d-b)/100*a+b;(b=this.options.step.toString().split(\".\")[1])?a=+a.toFixed(b.length):(a/=this.options.step,a*=this.options.step,a=+a.toFixed(0));h&&(a-=h);h=b?+a.toFixed(b.length):this.toFixed(a);h<this.options.min?h=this.options.min:h>this.options.max&&(h=this.options.max);return h},calcWithStep:function(a){var b=\r\nMath.round(a/this.coords.p_step)*this.coords.p_step;100<b&&(b=100);100===a&&(b=100);return this.toFixed(b)},checkMinInterval:function(a,b,d){var c=this.options;if(!c.min_interval)return a;a=this.convertToValue(a);b=this.convertToValue(b);\"from\"===d?b-a<c.min_interval&&(a=b-c.min_interval):a-b<c.min_interval&&(a=b+c.min_interval);return this.convertToPercent(a)},checkMaxInterval:function(a,b,d){var c=this.options;if(!c.max_interval)return a;a=this.convertToValue(a);b=this.convertToValue(b);\"from\"===\r\nd?b-a>c.max_interval&&(a=b-c.max_interval):a-b>c.max_interval&&(a=b+c.max_interval);return this.convertToPercent(a)},checkDiapason:function(a,b,d){a=this.convertToValue(a);var c=this.options;\"number\"!==typeof b&&(b=c.min);\"number\"!==typeof d&&(d=c.max);a<b&&(a=b);a>d&&(a=d);return this.convertToPercent(a)},toFixed:function(a){a=a.toFixed(20);return+a},_prettify:function(a){return this.options.prettify_enabled?this.options.prettify&&\"function\"===typeof this.options.prettify?this.options.prettify(a):\r\nthis.prettify(a):a},prettify:function(a){return a.toString().replace(/(\\d{1,3}(?=(?:\\d\\d\\d)+(?!\\d)))/g,\"$1\"+this.options.prettify_separator)},checkEdges:function(a,b){if(!this.options.force_edges)return this.toFixed(a);0>a?a=0:a>100-b&&(a=100-b);return this.toFixed(a)},validate:function(){var a=this.options,b=this.result,d=a.values,c=d.length,e;\"string\"===typeof a.min&&(a.min=+a.min);\"string\"===typeof a.max&&(a.max=+a.max);\"string\"===typeof a.from&&(a.from=+a.from);\"string\"===typeof a.to&&(a.to=+a.to);\r\n\"string\"===typeof a.step&&(a.step=+a.step);\"string\"===typeof a.from_min&&(a.from_min=+a.from_min);\"string\"===typeof a.from_max&&(a.from_max=+a.from_max);\"string\"===typeof a.to_min&&(a.to_min=+a.to_min);\"string\"===typeof a.to_max&&(a.to_max=+a.to_max);\"string\"===typeof a.grid_num&&(a.grid_num=+a.grid_num);a.max<a.min&&(a.max=a.min);if(c)for(a.p_values=[],a.min=0,a.max=c-1,a.step=1,a.grid_num=a.max,a.grid_snap=!0,e=0;e<c;e++){var g=+d[e];isNaN(g)?g=d[e]:(d[e]=g,g=this._prettify(g));a.p_values.push(g)}if(\"number\"!==\r\ntypeof a.from||isNaN(a.from))a.from=a.min;if(\"number\"!==typeof a.to||isNaN(a.to))a.to=a.max;\"single\"===a.type?(a.from<a.min&&(a.from=a.min),a.from>a.max&&(a.from=a.max)):(a.from<a.min&&(a.from=a.min),a.from>a.max&&(a.from=a.max),a.to<a.min&&(a.to=a.min),a.to>a.max&&(a.to=a.max),this.update_check.from&&(this.update_check.from!==a.from&&a.from>a.to&&(a.from=a.to),this.update_check.to!==a.to&&a.to<a.from&&(a.to=a.from)),a.from>a.to&&(a.from=a.to),a.to<a.from&&(a.to=a.from));if(\"number\"!==typeof a.step||\r\nisNaN(a.step)||!a.step||0>a.step)a.step=1;\"number\"===typeof a.from_min&&a.from<a.from_min&&(a.from=a.from_min);\"number\"===typeof a.from_max&&a.from>a.from_max&&(a.from=a.from_max);\"number\"===typeof a.to_min&&a.to<a.to_min&&(a.to=a.to_min);\"number\"===typeof a.to_max&&a.from>a.to_max&&(a.to=a.to_max);if(b){b.min!==a.min&&(b.min=a.min);b.max!==a.max&&(b.max=a.max);if(b.from<b.min||b.from>b.max)b.from=a.from;if(b.to<b.min||b.to>b.max)b.to=a.to}if(\"number\"!==typeof a.min_interval||isNaN(a.min_interval)||\r\n!a.min_interval||0>a.min_interval)a.min_interval=0;if(\"number\"!==typeof a.max_interval||isNaN(a.max_interval)||!a.max_interval||0>a.max_interval)a.max_interval=0;a.min_interval&&a.min_interval>a.max-a.min&&(a.min_interval=a.max-a.min);a.max_interval&&a.max_interval>a.max-a.min&&(a.max_interval=a.max-a.min)},decorate:function(a,b){var d=\"\",c=this.options;c.prefix&&(d+=c.prefix);d+=a;c.max_postfix&&(c.values.length&&a===c.p_values[c.max]?(d+=c.max_postfix,c.postfix&&(d+=\" \")):b===c.max&&(d+=c.max_postfix,\r\nc.postfix&&(d+=\" \")));c.postfix&&(d+=c.postfix);return d},updateFrom:function(){this.result.from=this.options.from;this.result.from_percent=this.convertToPercent(this.result.from);this.result.from_pretty=this._prettify(this.result.from);this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to;this.result.to_percent=this.convertToPercent(this.result.to);this.result.to_pretty=this._prettify(this.result.to);this.options.values&&\r\n(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min;this.result.max=this.options.max;this.updateFrom();this.updateTo()},appendGrid:function(){if(this.options.grid){var a=this.options,b;var d=a.max-a.min;var c=a.grid_num,e=4,g=\"\";this.calcGridMargin();if(a.grid_snap)if(50<d){c=50/a.step;var f=this.toFixed(a.step/.5)}else c=d/a.step,f=this.toFixed(a.step/(d/100));else f=this.toFixed(100/c);4<c&&(e=3);7<c&&(e=2);14<c&&(e=1);28<c&&(e=0);\r\nfor(d=0;d<c+1;d++){var k=e;var h=this.toFixed(f*d);100<h&&(h=100);this.coords.big[d]=h;var m=(h-f*(d-1))/(k+1);for(b=1;b<=k&&0!==h;b++){var n=this.toFixed(h-m*b);g+='<span class=\"irs-grid-pol small\" style=\"left: '+n+'%\"></span>'}g+='<span class=\"irs-grid-pol\" style=\"left: '+h+'%\"></span>';b=this.convertToValue(h);b=a.values.length?a.p_values[b]:this._prettify(b);g+='<span class=\"irs-grid-text js-grid-text-'+d+'\" style=\"left: '+h+'%\">'+b+\"</span>\"}this.coords.big_num=Math.ceil(c+1);this.$cache.cont.addClass(\"irs-with-grid\");\r\nthis.$cache.grid.html(g);this.cacheGridLabels()}},cacheGridLabels:function(){var a,b=this.coords.big_num;for(a=0;a<b;a++){var d=this.$cache.grid.find(\".js-grid-text-\"+a);this.$cache.grid_labels.push(d)}this.calcGridLabels()},calcGridLabels:function(){var a;var b=[];var d=[],c=this.coords.big_num;for(a=0;a<c;a++)this.coords.big_w[a]=this.$cache.grid_labels[a].outerWidth(!1),this.coords.big_p[a]=this.toFixed(this.coords.big_w[a]/this.coords.w_rs*100),this.coords.big_x[a]=this.toFixed(this.coords.big_p[a]/\r\n2),b[a]=this.toFixed(this.coords.big[a]-this.coords.big_x[a]),d[a]=this.toFixed(b[a]+this.coords.big_p[a]);this.options.force_edges&&(b[0]<-this.coords.grid_gap&&(b[0]=-this.coords.grid_gap,d[0]=this.toFixed(b[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),d[c-1]>100+this.coords.grid_gap&&(d[c-1]=100+this.coords.grid_gap,b[c-1]=this.toFixed(d[c-1]-this.coords.big_p[c-1]),this.coords.big_x[c-1]=this.toFixed(this.coords.big_p[c-1]-this.coords.grid_gap)));this.calcGridCollision(2,\r\nb,d);this.calcGridCollision(4,b,d);for(a=0;a<c;a++)b=this.$cache.grid_labels[a][0],this.coords.big_x[a]!==Number.POSITIVE_INFINITY&&(b.style.marginLeft=-this.coords.big_x[a]+\"%\")},calcGridCollision:function(a,b,d){var c,e=this.coords.big_num;for(c=0;c<e;c+=a){var g=c+a/2;if(g>=e)break;var f=this.$cache.grid_labels[g][0];f.style.visibility=d[c]<=b[g]?\"visible\":\"hidden\"}},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_handle=\r\n\"single\"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+\"%\",this.$cache.grid[0].style.left=this.coords.grid_gap+\"%\"))},update:function(a){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.update_check.from=\r\nthis.result.from,this.update_check.to=this.result.to,this.options=f.extend(this.options,a),this.validate(),this.updateResult(a),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop(\"readonly\",!1),f.data(this.input,\"ionRangeSlider\",null),this.remove(),this.options=this.input=null)}};f.fn.ionRangeSlider=function(a){return this.each(function(){f.data(this,\"ionRangeSlider\")||\r\nf.data(this,\"ionRangeSlider\",new q(this,a,t++))})};(function(){for(var a=0,b=[\"ms\",\"moz\",\"webkit\",\"o\"],d=0;d<b.length&&!k.requestAnimationFrame;++d)k.requestAnimationFrame=k[b[d]+\"RequestAnimationFrame\"],k.cancelAnimationFrame=k[b[d]+\"CancelAnimationFrame\"]||k[b[d]+\"CancelRequestAnimationFrame\"];k.requestAnimationFrame||(k.requestAnimationFrame=function(b,d){var c=(new Date).getTime(),e=Math.max(0,16-(c-a)),f=k.setTimeout(function(){b(c+e)},e);a=c+e;return f});k.cancelAnimationFrame||(k.cancelAnimationFrame=\r\nfunction(a){clearTimeout(a)})})()});\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "(function (factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD. Register as an anonymous module.\n        define(['jquery'], factory);\n    } else if (typeof exports === 'object') {\n        // Node/CommonJS\n        factory(require('jquery'));\n    } else {\n        // Browser globals\n        factory(jQuery);\n    }\n}(function ($) {\n\nvar ua = navigator.userAgent,\n\tiPhone = /iphone/i.test(ua),\n\tchrome = /chrome/i.test(ua),\n\tandroid = /android/i.test(ua),\n\tcaretTimeoutId;\n\n$.mask = {\n\t//Predefined character definitions\n\tdefinitions: {\n\t\t'9': \"[0-9]\",\n\t\t'a': \"[A-Za-z]\",\n\t\t'*': \"[A-Za-z0-9]\"\n\t},\n\tautoclear: true,\n\tdataName: \"rawMaskFn\",\n\tplaceholder: '_'\n};\n\n$.fn.extend({\n\t//Helper Function for Caret positioning\n\tcaret: function(begin, end) {\n\t\tvar range;\n\n\t\tif (this.length === 0 || this.is(\":hidden\") || this.get(0) !== document.activeElement) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (typeof begin == 'number') {\n\t\t\tend = (typeof end === 'number') ? end : begin;\n\t\t\treturn this.each(function() {\n\t\t\t\tif (this.setSelectionRange) {\n\t\t\t\t\tthis.setSelectionRange(begin, end);\n\t\t\t\t} else if (this.createTextRange) {\n\t\t\t\t\trange = this.createTextRange();\n\t\t\t\t\trange.collapse(true);\n\t\t\t\t\trange.moveEnd('character', end);\n\t\t\t\t\trange.moveStart('character', begin);\n\t\t\t\t\trange.select();\n\t\t\t\t}\n\t\t\t});\n\t\t} else {\n\t\t\tif (this[0].setSelectionRange) {\n\t\t\t\tbegin = this[0].selectionStart;\n\t\t\t\tend = this[0].selectionEnd;\n\t\t\t} else if (document.selection && document.selection.createRange) {\n\t\t\t\trange = document.selection.createRange();\n\t\t\t\tbegin = 0 - range.duplicate().moveStart('character', -100000);\n\t\t\t\tend = begin + range.text.length;\n\t\t\t}\n\t\t\treturn { begin: begin, end: end };\n\t\t}\n\t},\n\tunmask: function() {\n\t\treturn this.trigger(\"unmask\");\n\t},\n\tmask: function(mask, settings) {\n\t\tvar input,\n\t\t\tdefs,\n\t\t\ttests,\n\t\t\tpartialPosition,\n\t\t\tfirstNonMaskPos,\n            lastRequiredNonMaskPos,\n            len,\n            oldVal;\n\n\t\tif (!mask && this.length > 0) {\n\t\t\tinput = $(this[0]);\n            var fn = input.data($.mask.dataName)\n\t\t\treturn fn?fn():undefined;\n\t\t}\n\n\t\tsettings = $.extend({\n\t\t\tautoclear: $.mask.autoclear,\n\t\t\tplaceholder: $.mask.placeholder, // Load default placeholder\n\t\t\tcompleted: null\n\t\t}, settings);\n\n\n\t\tdefs = $.mask.definitions;\n\t\ttests = [];\n\t\tpartialPosition = len = mask.length;\n\t\tfirstNonMaskPos = null;\n\n\t\tmask = String(mask);\n\n\t\t$.each(mask.split(\"\"), function(i, c) {\n\t\t\tif (c == '?') {\n\t\t\t\tlen--;\n\t\t\t\tpartialPosition = i;\n\t\t\t} else if (defs[c]) {\n\t\t\t\ttests.push(new RegExp(defs[c]));\n\t\t\t\tif (firstNonMaskPos === null) {\n\t\t\t\t\tfirstNonMaskPos = tests.length - 1;\n\t\t\t\t}\n                if(i < partialPosition){\n                    lastRequiredNonMaskPos = tests.length - 1;\n                }\n\t\t\t} else {\n\t\t\t\ttests.push(null);\n\t\t\t}\n\t\t});\n\n\t\treturn this.trigger(\"unmask\").each(function() {\n\t\t\tvar input = $(this),\n\t\t\t\tbuffer = $.map(\n    \t\t\t\tmask.split(\"\"),\n    \t\t\t\tfunction(c, i) {\n    \t\t\t\t\tif (c != '?') {\n    \t\t\t\t\t\treturn defs[c] ? getPlaceholder(i) : c;\n    \t\t\t\t\t}\n    \t\t\t\t}),\n\t\t\t\tdefaultBuffer = buffer.join(''),\n\t\t\t\tfocusText = input.val();\n\n            function tryFireCompleted(){\n                if (!settings.completed) {\n                    return;\n                }\n\n                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {\n                    if (tests[i] && buffer[i] === getPlaceholder(i)) {\n                        return;\n                    }\n                }\n                settings.completed.call(input);\n            }\n\n            function getPlaceholder(i){\n                if(i < settings.placeholder.length)\n                    return settings.placeholder.charAt(i);\n                return settings.placeholder.charAt(0);\n            }\n\n\t\t\tfunction seekNext(pos) {\n\t\t\t\twhile (++pos < len && !tests[pos]);\n\t\t\t\treturn pos;\n\t\t\t}\n\n\t\t\tfunction seekPrev(pos) {\n\t\t\t\twhile (--pos >= 0 && !tests[pos]);\n\t\t\t\treturn pos;\n\t\t\t}\n\n\t\t\tfunction shiftL(begin,end) {\n\t\t\t\tvar i,\n\t\t\t\t\tj;\n\n\t\t\t\tif (begin<0) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tfor (i = begin, j = seekNext(end); i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tif (j < len && tests[i].test(buffer[j])) {\n\t\t\t\t\t\t\tbuffer[i] = buffer[j];\n\t\t\t\t\t\t\tbuffer[j] = getPlaceholder(j);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tj = seekNext(j);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\twriteBuffer();\n\t\t\t\tinput.caret(Math.max(firstNonMaskPos, begin));\n\t\t\t}\n\n\t\t\tfunction shiftR(pos) {\n\t\t\t\tvar i,\n\t\t\t\t\tc,\n\t\t\t\t\tj,\n\t\t\t\t\tt;\n\n\t\t\t\tfor (i = pos, c = getPlaceholder(pos); i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tj = seekNext(i);\n\t\t\t\t\t\tt = buffer[i];\n\t\t\t\t\t\tbuffer[i] = c;\n\t\t\t\t\t\tif (j < len && tests[j].test(t)) {\n\t\t\t\t\t\t\tc = t;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction androidInputEvent(e) {\n\t\t\t\tvar curVal = input.val();\n\t\t\t\tvar pos = input.caret();\n\t\t\t\tif (oldVal && oldVal.length && oldVal.length > curVal.length ) {\n\t\t\t\t\t// a deletion or backspace happened\n\t\t\t\t\tcheckVal(true);\n\t\t\t\t\twhile (pos.begin > 0 && !tests[pos.begin-1])\n\t\t\t\t\t\tpos.begin--;\n\t\t\t\t\tif (pos.begin === 0)\n\t\t\t\t\t{\n\t\t\t\t\t\twhile (pos.begin < firstNonMaskPos && !tests[pos.begin])\n\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t}\n\t\t\t\t\tinput.caret(pos.begin,pos.begin);\n\t\t\t\t} else {\n\t\t\t\t\tvar pos2 = checkVal(true);\n\t\t\t\t\tvar lastEnteredValue = curVal.charAt(pos.begin);\n\t\t\t\t\tif (pos.begin < len){\n\t\t\t\t\t\tif(!tests[pos.begin]){\n\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t\t\tif(tests[pos.begin].test(lastEnteredValue)){\n\t\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tif(tests[pos.begin].test(lastEnteredValue)){\n\t\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tinput.caret(pos.begin,pos.begin);\n\t\t\t\t}\n\t\t\t\ttryFireCompleted();\n\t\t\t}\n\n\n\t\t\tfunction blurEvent(e) {\n                checkVal();\n\n                if (input.val() != focusText)\n                    input.change();\n            }\n\n\t\t\tfunction keydownEvent(e) {\n                if (input.prop(\"readonly\")){\n                    return;\n                }\n\n\t\t\t\tvar k = e.which || e.keyCode,\n\t\t\t\t\tpos,\n\t\t\t\t\tbegin,\n\t\t\t\t\tend;\n                    oldVal = input.val();\n\t\t\t\t//backspace, delete, and escape get special treatment\n\t\t\t\tif (k === 8 || k === 46 || (iPhone && k === 127)) {\n\t\t\t\t\tpos = input.caret();\n\t\t\t\t\tbegin = pos.begin;\n\t\t\t\t\tend = pos.end;\n\n\t\t\t\t\tif (end - begin === 0) {\n\t\t\t\t\t\tbegin=k!==46?seekPrev(begin):(end=seekNext(begin-1));\n\t\t\t\t\t\tend=k===46?seekNext(end):end;\n\t\t\t\t\t}\n\t\t\t\t\tclearBuffer(begin, end);\n\t\t\t\t\tshiftL(begin, end - 1);\n\n\t\t\t\t\te.preventDefault();\n\t\t\t\t} else if( k === 13 ) { // enter\n\t\t\t\t\tblurEvent.call(this, e);\n\t\t\t\t} else if (k === 27) { // escape\n\t\t\t\t\tinput.val(focusText);\n\t\t\t\t\tinput.caret(0, checkVal());\n\t\t\t\t\te.preventDefault();\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction keypressEvent(e) {\n                if (input.prop(\"readonly\")){\n                    return;\n                }\n\n\t\t\t\tvar k = e.which || e.keyCode,\n\t\t\t\t\tpos = input.caret(),\n\t\t\t\t\tp,\n\t\t\t\t\tc,\n\t\t\t\t\tnext;\n\n\t\t\t\tif (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore\n\t\t\t\t\treturn;\n\t\t\t\t} else if ( k && k !== 13 ) {\n\t\t\t\t\tif (pos.end - pos.begin !== 0){\n\t\t\t\t\t\tclearBuffer(pos.begin, pos.end);\n\t\t\t\t\t\tshiftL(pos.begin, pos.end-1);\n\t\t\t\t\t}\n\n\t\t\t\t\tp = seekNext(pos.begin - 1);\n\t\t\t\t\tif (p < len) {\n\t\t\t\t\t\tc = String.fromCharCode(k);\n\t\t\t\t\t\tif (tests[p].test(c)) {\n\t\t\t\t\t\t\tshiftR(p);\n\n\t\t\t\t\t\t\tbuffer[p] = c;\n\t\t\t\t\t\t\twriteBuffer();\n\t\t\t\t\t\t\tnext = seekNext(p);\n\n\t\t\t\t\t\t\tif(android){\n\t\t\t\t\t\t\t\t//Path for CSP Violation on FireFox OS 1.1\n\t\t\t\t\t\t\t\tvar proxy = function() {\n\t\t\t\t\t\t\t\t\t$.proxy($.fn.caret,input,next)();\n\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\tsetTimeout(proxy,0);\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\tinput.caret(next);\n\t\t\t\t\t\t\t}\n                            if(pos.begin <= lastRequiredNonMaskPos){\n\t\t                         tryFireCompleted();\n                             }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\te.preventDefault();\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction clearBuffer(start, end) {\n\t\t\t\tvar i;\n\t\t\t\tfor (i = start; i < end && i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tbuffer[i] = getPlaceholder(i);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction writeBuffer() { input.val(buffer.join('')); }\n\n\t\t\tfunction checkVal(allow) {\n\t\t\t\t//try to place characters where they belong\n\t\t\t\tvar test = input.val(),\n\t\t\t\t\tlastMatch = -1,\n\t\t\t\t\ti,\n\t\t\t\t\tc,\n\t\t\t\t\tpos;\n\n\t\t\t\tfor (i = 0, pos = 0; i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tbuffer[i] = getPlaceholder(i);\n\t\t\t\t\t\twhile (pos++ < test.length) {\n\t\t\t\t\t\t\tc = test.charAt(pos - 1);\n\t\t\t\t\t\t\tif (tests[i].test(c)) {\n\t\t\t\t\t\t\t\tbuffer[i] = c;\n\t\t\t\t\t\t\t\tlastMatch = i;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (pos > test.length) {\n\t\t\t\t\t\t\tclearBuffer(i + 1, len);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n                        if (buffer[i] === test.charAt(pos)) {\n                            pos++;\n                        }\n                        if( i < partialPosition){\n                            lastMatch = i;\n                        }\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (allow) {\n\t\t\t\t\twriteBuffer();\n\t\t\t\t} else if (lastMatch + 1 < partialPosition) {\n\t\t\t\t\tif (settings.autoclear || buffer.join('') === defaultBuffer) {\n\t\t\t\t\t\t// Invalid value. Remove it and replace it with the\n\t\t\t\t\t\t// mask, which is the default behavior.\n\t\t\t\t\t\tif(input.val()) input.val(\"\");\n\t\t\t\t\t\tclearBuffer(0, len);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Invalid value, but we opt to show the value to the\n\t\t\t\t\t\t// user and allow them to correct their mistake.\n\t\t\t\t\t\twriteBuffer();\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\twriteBuffer();\n\t\t\t\t\tinput.val(input.val().substring(0, lastMatch + 1));\n\t\t\t\t}\n\t\t\t\treturn (partialPosition ? i : firstNonMaskPos);\n\t\t\t}\n\n\t\t\tinput.data($.mask.dataName,function(){\n\t\t\t\treturn $.map(buffer, function(c, i) {\n\t\t\t\t\treturn tests[i]&&c!=getPlaceholder(i) ? c : null;\n\t\t\t\t}).join('');\n\t\t\t});\n\n\n\t\t\tinput\n\t\t\t\t.one(\"unmask\", function() {\n\t\t\t\t\tinput\n\t\t\t\t\t\t.off(\".mask\")\n\t\t\t\t\t\t.removeData($.mask.dataName);\n\t\t\t\t})\n\t\t\t\t.on(\"focus.mask\", function() {\n                    if (input.prop(\"readonly\")){\n                        return;\n                    }\n\n\t\t\t\t\tclearTimeout(caretTimeoutId);\n\t\t\t\t\tvar pos;\n\n\t\t\t\t\tfocusText = input.val();\n\n\t\t\t\t\tpos = checkVal();\n\n\t\t\t\t\tcaretTimeoutId = setTimeout(function(){\n                        if(input.get(0) !== document.activeElement){\n                            return;\n                        }\n\t\t\t\t\t\twriteBuffer();\n\t\t\t\t\t\tif (pos == mask.replace(\"?\",\"\").length) {\n\t\t\t\t\t\t\tinput.caret(0, pos);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tinput.caret(pos);\n\t\t\t\t\t\t}\n\t\t\t\t\t}, 10);\n\t\t\t\t})\n\t\t\t\t.on(\"blur.mask\", blurEvent)\n\t\t\t\t.on(\"keydown.mask\", keydownEvent)\n\t\t\t\t.on(\"keypress.mask\", keypressEvent)\n\t\t\t\t.on(\"input.mask paste.mask\", function() {\n                    if (input.prop(\"readonly\")){\n                        return;\n                    }\n\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\tvar pos=checkVal(true);\n\t\t\t\t\t\tinput.caret(pos);\n                        tryFireCompleted();\n\t\t\t\t\t}, 0);\n\t\t\t\t});\n                if (chrome && android)\n                {\n                    input\n                        .off('input.mask')\n                        .on('input.mask', androidInputEvent);\n                }\n\t\t\t\tcheckVal(); //Perform initial check for existing values\n\t\t});\n\t}\n});\n}));\n"

/***/ }),

/***/ "./node_modules/script-loader/index.js!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js */ "./node_modules/raw-loader/index.js!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js"))

/***/ }),

/***/ "./node_modules/script-loader/index.js!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js */ "./node_modules/raw-loader/index.js!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js"))

/***/ }),

/***/ "./node_modules/script-loader/index.js!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js */ "./node_modules/raw-loader/index.js!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js"))

/***/ }),

/***/ "./src/app/shared/forms/input/colorpicker.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/forms/input/colorpicker.directive.ts ***!
  \*************************************************************/
/*! exports provided: ColorpickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorpickerDirective", function() { return ColorpickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var bootstrap_colorpicker_dist_js_bootstrap_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js */ "./node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js");
/* harmony import */ var bootstrap_colorpicker_dist_js_bootstrap_colorpicker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker_dist_js_bootstrap_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorpickerDirective = /** @class */ (function () {
    function ColorpickerDirective(el) {
        this.el = el;
    }
    ColorpickerDirective.prototype.ngOnInit = function () {
        $(this.el.nativeElement).colorpicker(this.saColorpicker || {});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColorpickerDirective.prototype, "saColorpicker", void 0);
    ColorpickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[saColorpicker]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorpickerDirective);
    return ColorpickerDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/duallistbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/forms/input/duallistbox.component.ts ***!
  \*************************************************************/
/*! exports provided: DuallistboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuallistboxComponent", function() { return DuallistboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var script_loader_bootstrap_duallistbox_dist_jquery_bootstrap_duallistbox_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! script-loader!bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js */ "./node_modules/script-loader/index.js!./node_modules/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js");
/* harmony import */ var script_loader_bootstrap_duallistbox_dist_jquery_bootstrap_duallistbox_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(script_loader_bootstrap_duallistbox_dist_jquery_bootstrap_duallistbox_min_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DuallistboxComponent = /** @class */ (function () {
    function DuallistboxComponent(el) {
        this.el = el;
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = [];
        this.nonSelectedListLabel = "Non-selected";
        this.selectedListLabel = "Selected";
        this.preserveSelectionOnMove = "moved";
        this.moveOnSelect = false;
        this.size = 10;
        this.element = $(this.el.nativeElement);
    }
    DuallistboxComponent.prototype.onClick = function () {
        var _this = this;
        var selected = this.element.find(".smart-duallistbox").val() || [];
        if (selected.some(function (it) { return _this.selected.indexOf(it) == -1; }) ||
            this.selected.some(function (it) { return selected.indexOf(it) == -1; })) {
            this.selected = selected;
            this.items.forEach(function (item) {
                if (_this.selected.indexOf(item.key) > -1) {
                    item.selected = true;
                }
                else {
                    delete item.selected;
                }
            });
            this.itemsChange.emit(this.items);
        }
    };
    DuallistboxComponent.prototype.ngOnInit = function () {
        this.selected = this.items
            .filter(function (item) { return item.selected; })
            .map(function (item) { return item.key; });
        var options = {
            nonSelectedFilter: this.nonSelectedFilter,
            nonSelectedListLabel: this.nonSelectedListLabel,
            selectedListLabel: this.selectedListLabel,
            preserveSelectionOnMove: this.preserveSelectionOnMove,
            moveOnSelect: this.moveOnSelect,
            size: this.size
        };
        this.element.bootstrapDualListbox(options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DuallistboxComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DuallistboxComponent.prototype, "itemsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DuallistboxComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DuallistboxComponent.prototype, "nonSelectedFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DuallistboxComponent.prototype, "nonSelectedListLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DuallistboxComponent.prototype, "selectedListLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DuallistboxComponent.prototype, "preserveSelectionOnMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DuallistboxComponent.prototype, "moveOnSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DuallistboxComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DuallistboxComponent.prototype, "onClick", null);
    DuallistboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "duallistbox",
            template: "\n     <select multiple class=\"smart-duallistbox\">\n        <option *ngFor=\"let item of items\" [selected]=\"item.selected\" [value]=\"item.key\">{{item.value}}</option>\n      </select>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DuallistboxComponent);
    return DuallistboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/file-input/file-input.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/forms/input/file-input/file-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: FileInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileInputComponent = /** @class */ (function () {
    function FileInputComponent() {
    }
    FileInputComponent.prototype.ngOnInit = function () {
    };
    FileInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-file-input',
            template: "\n    <div class=\"input input-file\">\n        <span class=\"button\"><input type=\"file\" #file  (change)=\"viewport.value = file.value\"/>Browse</span><input #viewport type=\"text\" placeholder=\"Include some files\" readonly/>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], FileInputComponent);
    return FileInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/ionslider.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/forms/input/ionslider.directive.ts ***!
  \***********************************************************/
/*! exports provided: IonSliderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSliderDirective", function() { return IonSliderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var script_loader_ion_rangeslider_js_ion_rangeSlider_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! script-loader!ion-rangeslider/js/ion.rangeSlider.min.js */ "./node_modules/script-loader/index.js!./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js");
/* harmony import */ var script_loader_ion_rangeslider_js_ion_rangeSlider_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(script_loader_ion_rangeslider_js_ion_rangeSlider_min_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonSliderDirective = /** @class */ (function () {
    function IonSliderDirective(el) {
        this.el = el;
    }
    IonSliderDirective.prototype.ngOnInit = function () {
        $(this.el.nativeElement).ionRangeSlider();
    };
    IonSliderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ionSlider]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], IonSliderDirective);
    return IonSliderDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/knob.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/forms/input/knob.directive.ts ***!
  \******************************************************/
/*! exports provided: KnobDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnobDirective", function() { return KnobDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KnobDirective = /** @class */ (function () {
    function KnobDirective(el) {
        var _this = this;
        this.el = el;
        __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! jquery-knob */ "./node_modules/jquery-knob/dist/jquery.knob.min.js", 7)).then(function () {
            _this.render();
        });
    }
    KnobDirective.prototype.render = function () {
        $(this.el.nativeElement).knob(this.saKnob || {});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KnobDirective.prototype, "saKnob", void 0);
    KnobDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[saKnob]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], KnobDirective);
    return KnobDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/masked-input.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/forms/input/masked-input.directive.ts ***!
  \**************************************************************/
/*! exports provided: MaskedInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedInput", function() { return MaskedInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var script_loader_jquery_maskedinput_src_jquery_maskedinput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! script-loader!jquery.maskedinput/src/jquery.maskedinput.js */ "./node_modules/script-loader/index.js!./node_modules/jquery.maskedinput/src/jquery.maskedinput.js");
/* harmony import */ var script_loader_jquery_maskedinput_src_jquery_maskedinput_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(script_loader_jquery_maskedinput_src_jquery_maskedinput_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaskedInput = /** @class */ (function () {
    function MaskedInput(el) {
        this.el = el;
    }
    MaskedInput.prototype.ngOnInit = function () {
        var options = this.saMaskedPlaceholder
            ? { placeholder: this.saMaskedPlaceholder }
            : "";
        $(this.el.nativeElement).mask(this.saMaskedInput, options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MaskedInput.prototype, "saMaskedInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MaskedInput.prototype, "saMaskedPlaceholder", void 0);
    MaskedInput = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[saMaskedInput]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MaskedInput);
    return MaskedInput;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/nouislider.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/forms/input/nouislider.directive.ts ***!
  \************************************************************/
/*! exports provided: NouisliderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouisliderDirective", function() { return NouisliderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NouisliderDirective = /** @class */ (function () {
    function NouisliderDirective(el) {
        this.el = el;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NouisliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! nouislider/distribute/nouislider.min.js */ "./node_modules/nouislider/distribute/nouislider.min.js", 7)).then(function (noUiSlider) {
            var slider = _this.el.nativeElement;
            var options = _this.nouiSlider || {
                range: {
                    min: 0,
                    max: 1000
                },
            };
            noUiSlider.create(slider, options);
            slider.noUiSlider.on('change', function () {
                _this.change.emit(slider.noUiSlider.get());
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NouisliderDirective.prototype, "nouiSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NouisliderDirective.prototype, "change", void 0);
    NouisliderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[nouiSlider]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NouisliderDirective);
    return NouisliderDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/smart-clockpicker.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/forms/input/smart-clockpicker.directive.ts ***!
  \*******************************************************************/
/*! exports provided: SmartClockpickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartClockpickerDirective", function() { return SmartClockpickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartClockpickerDirective = /** @class */ (function () {
    function SmartClockpickerDirective(el) {
        this.el = el;
    }
    SmartClockpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! clockpicker/dist/bootstrap-clockpicker.min.js */ "./node_modules/clockpicker/dist/bootstrap-clockpicker.min.js", 7)).then(function () {
            _this.render();
        });
    };
    SmartClockpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).clockpicker(this.smartClockpicker || {
            placement: 'top',
            donetext: 'Done'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmartClockpickerDirective.prototype, "smartClockpicker", void 0);
    SmartClockpickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[smartClockpicker]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SmartClockpickerDirective);
    return SmartClockpickerDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/smart-slider.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/forms/input/smart-slider.directive.ts ***!
  \**************************************************************/
/*! exports provided: SmartSliderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartSliderDirective", function() { return SmartSliderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartSliderDirective = /** @class */ (function () {
    function SmartSliderDirective(el) {
        this.el = el;
    }
    SmartSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.t.bind(null, /*! bootstrap-slider/dist/bootstrap-slider.min.js */ "./node_modules/bootstrap-slider/dist/bootstrap-slider.min.js", 7)).then(function () {
            _this.render();
        });
    };
    SmartSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).bootstrapSlider();
    };
    SmartSliderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[smartSlider]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SmartSliderDirective);
    return SmartSliderDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/smart-tags.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/forms/input/smart-tags.directive.ts ***!
  \************************************************************/
/*! exports provided: SmartTagsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTagsDirective", function() { return SmartTagsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartTagsDirective = /** @class */ (function () {
    function SmartTagsDirective(el) {
        this.el = el;
    }
    SmartTagsDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.t.bind(null, /*! bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js */ "./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js", 7)).then(function () {
            _this.render();
        });
    };
    SmartTagsDirective.prototype.render = function () {
        $(this.el.nativeElement).tagsinput();
    };
    SmartTagsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[smartTags]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SmartTagsDirective);
    return SmartTagsDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/smart-timepicker.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/forms/input/smart-timepicker.directive.ts ***!
  \******************************************************************/
/*! exports provided: SmartTimepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTimepickerDirective", function() { return SmartTimepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartTimepickerDirective = /** @class */ (function () {
    function SmartTimepickerDirective(el) {
        this.el = el;
    }
    SmartTimepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.t.bind(null, /*! bootstrap-timepicker/js/bootstrap-timepicker.min.js */ "./node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js", 7)).then(function () {
            _this.render();
        });
    };
    SmartTimepickerDirective.prototype.render = function () {
        $(this.el.nativeElement).timepicker();
    };
    SmartTimepickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[smartTimepicker]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SmartTimepickerDirective);
    return SmartTimepickerDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/smartadmin-input.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/forms/input/smartadmin-input.module.ts ***!
  \***************************************************************/
/*! exports provided: SmartadminInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartadminInputModule", function() { return SmartadminInputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _colorpicker_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorpicker.directive */ "./src/app/shared/forms/input/colorpicker.directive.ts");
/* harmony import */ var _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-input/file-input.component */ "./src/app/shared/forms/input/file-input/file-input.component.ts");
/* harmony import */ var _knob_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knob.directive */ "./src/app/shared/forms/input/knob.directive.ts");
/* harmony import */ var _masked_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked-input.directive */ "./src/app/shared/forms/input/masked-input.directive.ts");
/* harmony import */ var _ui_datepicker_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-datepicker.directive */ "./src/app/shared/forms/input/ui-datepicker.directive.ts");
/* harmony import */ var _ui_spinner_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-spinner.directive */ "./src/app/shared/forms/input/ui-spinner.directive.ts");
/* harmony import */ var _x_editable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./x-editable.component */ "./src/app/shared/forms/input/x-editable.component.ts");
/* harmony import */ var _duallistbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duallistbox.component */ "./src/app/shared/forms/input/duallistbox.component.ts");
/* harmony import */ var _nouislider_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nouislider.directive */ "./src/app/shared/forms/input/nouislider.directive.ts");
/* harmony import */ var _ionslider_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionslider.directive */ "./src/app/shared/forms/input/ionslider.directive.ts");
/* harmony import */ var _smart_slider_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smart-slider.directive */ "./src/app/shared/forms/input/smart-slider.directive.ts");
/* harmony import */ var _smart_tags_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./smart-tags.directive */ "./src/app/shared/forms/input/smart-tags.directive.ts");
/* harmony import */ var _smart_timepicker_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./smart-timepicker.directive */ "./src/app/shared/forms/input/smart-timepicker.directive.ts");
/* harmony import */ var _smart_clockpicker_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./smart-clockpicker.directive */ "./src/app/shared/forms/input/smart-clockpicker.directive.ts");
/* harmony import */ var _select2_select2_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select2/select2.module */ "./src/app/shared/forms/input/select2/select2.module.ts");
/* harmony import */ var _on_off_switch_on_off_switch_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./on-off-switch/on-off-switch.module */ "./src/app/shared/forms/input/on-off-switch/on-off-switch.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SmartadminInputModule = /** @class */ (function () {
    function SmartadminInputModule() {
    }
    SmartadminInputModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _colorpicker_directive__WEBPACK_IMPORTED_MODULE_2__["ColorpickerDirective"],
                _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_3__["FileInputComponent"],
                _knob_directive__WEBPACK_IMPORTED_MODULE_4__["KnobDirective"],
                _masked_input_directive__WEBPACK_IMPORTED_MODULE_5__["MaskedInput"],
                _ui_datepicker_directive__WEBPACK_IMPORTED_MODULE_6__["UiDatepickerDirective"],
                _ui_spinner_directive__WEBPACK_IMPORTED_MODULE_7__["UiSpinner"],
                _x_editable_component__WEBPACK_IMPORTED_MODULE_8__["XEditableComponent"],
                _duallistbox_component__WEBPACK_IMPORTED_MODULE_9__["DuallistboxComponent"],
                _nouislider_directive__WEBPACK_IMPORTED_MODULE_10__["NouisliderDirective"],
                _ionslider_directive__WEBPACK_IMPORTED_MODULE_11__["IonSliderDirective"],
                _smart_slider_directive__WEBPACK_IMPORTED_MODULE_12__["SmartSliderDirective"],
                _smart_tags_directive__WEBPACK_IMPORTED_MODULE_13__["SmartTagsDirective"],
                _smart_timepicker_directive__WEBPACK_IMPORTED_MODULE_14__["SmartTimepickerDirective"],
                _smart_clockpicker_directive__WEBPACK_IMPORTED_MODULE_15__["SmartClockpickerDirective"],
            ],
            exports: [
                _colorpicker_directive__WEBPACK_IMPORTED_MODULE_2__["ColorpickerDirective"],
                _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_3__["FileInputComponent"],
                _knob_directive__WEBPACK_IMPORTED_MODULE_4__["KnobDirective"],
                _masked_input_directive__WEBPACK_IMPORTED_MODULE_5__["MaskedInput"],
                _ui_datepicker_directive__WEBPACK_IMPORTED_MODULE_6__["UiDatepickerDirective"],
                _ui_spinner_directive__WEBPACK_IMPORTED_MODULE_7__["UiSpinner"],
                _x_editable_component__WEBPACK_IMPORTED_MODULE_8__["XEditableComponent"],
                _duallistbox_component__WEBPACK_IMPORTED_MODULE_9__["DuallistboxComponent"],
                _nouislider_directive__WEBPACK_IMPORTED_MODULE_10__["NouisliderDirective"],
                _ionslider_directive__WEBPACK_IMPORTED_MODULE_11__["IonSliderDirective"],
                _smart_slider_directive__WEBPACK_IMPORTED_MODULE_12__["SmartSliderDirective"],
                _smart_tags_directive__WEBPACK_IMPORTED_MODULE_13__["SmartTagsDirective"],
                _smart_timepicker_directive__WEBPACK_IMPORTED_MODULE_14__["SmartTimepickerDirective"],
                _smart_clockpicker_directive__WEBPACK_IMPORTED_MODULE_15__["SmartClockpickerDirective"],
                _select2_select2_module__WEBPACK_IMPORTED_MODULE_16__["Select2Module"],
                _on_off_switch_on_off_switch_module__WEBPACK_IMPORTED_MODULE_17__["OnOffSwitchModule"],
            ]
        })
    ], SmartadminInputModule);
    return SmartadminInputModule;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/ui-datepicker.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/forms/input/ui-datepicker.directive.ts ***!
  \***************************************************************/
/*! exports provided: UiDatepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiDatepickerDirective", function() { return UiDatepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiDatepickerDirective = /** @class */ (function () {
    function UiDatepickerDirective(el) {
        this.el = el;
    }
    UiDatepickerDirective.prototype.ngOnInit = function () {
        var onSelectCallbacks = [];
        var saUiDatepicker = this.saUiDatepicker || {};
        var element = $(this.el.nativeElement);
        if (saUiDatepicker.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (saUiDatepicker.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }
        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");
            var form = element.closest('form');
            if (typeof form.bootstrapValidator == 'function') {
                try {
                    form.bootstrapValidator('revalidateField', element);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
        var options = $.extend(saUiDatepicker, {
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                onSelectCallbacks.forEach(function (callback) {
                    callback.call(callback, selectedDate);
                });
            }
        });
        element.datepicker(options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiDatepickerDirective.prototype, "saUiDatepicker", void 0);
    UiDatepickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[saUiDatepicker]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiDatepickerDirective);
    return UiDatepickerDirective;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/ui-spinner.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/forms/input/ui-spinner.directive.ts ***!
  \************************************************************/
/*! exports provided: UiSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSpinner", function() { return UiSpinner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiSpinner = /** @class */ (function () {
    function UiSpinner(el) {
        this.el = el;
    }
    UiSpinner.prototype.ngOnInit = function () {
        var options;
        if (this.saUiSpinner == 'decimal') {
            options = {
                step: 0.01,
                numberFormat: "n"
            };
        }
        else if (this.saUiSpinner == 'currency') {
            options = {
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            };
        }
        $(this.el.nativeElement).spinner((options || this.saUiSpinner) || {});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UiSpinner.prototype, "saUiSpinner", void 0);
    UiSpinner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[saUiSpinner]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UiSpinner);
    return UiSpinner;
}());



/***/ }),

/***/ "./src/app/shared/forms/input/x-editable.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/forms/input/x-editable.component.ts ***!
  \************************************************************/
/*! exports provided: XEditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XEditableComponent", function() { return XEditableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var XEditableComponent = /** @class */ (function () {
    function XEditableComponent(el) {
        this.el = el;
        this.model = '';
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = 'text';
        this.disabled = false;
        this.widgetId = 'x-editable' + XEditableComponent_1.widgetsCounter++;
    }
    XEditableComponent_1 = XEditableComponent;
    XEditableComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js */ "./node_modules/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js", 7)).then(function () {
            _this.render();
        });
    };
    XEditableComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this._options && ['type',
            'placement',
            'mode',
            'value',
            'disabled',
            'placeholder',
            'originalTitle',
            'source',
            'showbuttons',
            'template',
            'viewformat',
            'format',
            'pk',
        ].some(function (it) {
            return _this._options[it] != _this[it];
        })) {
            this.render();
        }
    };
    XEditableComponent.prototype.render = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var options = {
            type: this.type,
            placement: this.placement,
            mode: this.mode,
            value: this.value,
            disabled: this.disabled,
            placeholder: this.placeholder,
            originalTitle: this.originalTitle,
            source: this.source,
            showbuttons: this.showbuttons,
            template: this.template,
            viewformat: this.viewformat,
            format: this.format,
            pk: this.pk,
        };
        element.editable('destroy');
        element.editable(options);
        element.on('save', function (e, params) {
            _this.model = params.newValue;
            _this.modelChange.emit(params.newValue);
        });
        this._options = options;
    };
    var XEditableComponent_1;
    XEditableComponent.widgetsCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "originalTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "showbuttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "viewformat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "format", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XEditableComponent.prototype, "pk", void 0);
    XEditableComponent = XEditableComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'x-editable',
            template: '<a attr.id="{{widgetId}}" class="{{className}}"><ng-content></ng-content>{{model }}</a>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], XEditableComponent);
    return XEditableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~form-layouts-form-layouts-module~form-plugins-form-plugins-module.js.map