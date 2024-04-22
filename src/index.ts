const colorNames = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
}

const hex =
  /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/
const shortHex = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/
const rgb =
  /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/
const rgbfn =
  /^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/
const rgbperc =
  /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/
const rgbpercfn =
  /^rgba?\(\s*(\d+%)\s+(\d+%)\s+(\d+%)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/
const hsl =
  /^hsla?\(\s*(\d+)(deg|rad|grad|turn)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/

function rgbToHsl(r: number, g: number, b: number) {
  const rprim = r / 255
  const gprim = g / 255
  const bprim = b / 255
  const cmax = Math.max(rprim, gprim, bprim)
  const cmin = Math.min(rprim, gprim, bprim)
  const delta = cmax - cmin
  const l = (cmax + cmin) / 2

  if (delta === 0) {
    return [0, 0, l * 100]
  }
  const s = delta / (1 - Math.abs(2 * l - 1))
  const h = (() => {
    switch (cmax) {
      case rprim: {
        return ((gprim - bprim) / delta) % 6
      }
      case gprim: {
        return (bprim - rprim) / delta + 2
      }
      default: {
        return (rprim - gprim) / delta + 4
      }
    }
  })()

  return [h * 60, s * 100, l * 100]
}

function hslToRgb(h: number, s: number, l: number) {
  const hprim = h / 60
  const sprim = s / 100
  const lprim = l / 100
  const c = (1 - Math.abs(2 * lprim - 1)) * sprim
  const x = c * (1 - Math.abs((hprim % 2) - 1))
  const m = lprim - c / 2
  const [rprim, gprim, bprim] = (() => {
    if (hprim < 1) return [c, x, 0]
    if (hprim < 2) return [x, c, 0]
    if (hprim < 3) return [0, c, x]
    if (hprim < 4) return [0, x, c]
    if (hprim < 5) return [x, 0, c]
    return [c, 0, x]
  })()

  return [(rprim + m) * 255, (gprim + m) * 255, (bprim + m) * 255]
}

export default class Color {
  declare values: [number, number, number, number]

  constructor(value: string)
  constructor([r, g, b]: [number, number, number])
  constructor([r, g, b]: [string, string, string])
  constructor([r, g, b, a]: [number, number, number, number])
  constructor([r, g, b, a]: [string, string, string, string])
  constructor(
    input:
      | string
      | [number, number, number]
      | [number, number, number, number]
      | [string, string, string]
      | [string, string, string, string]
  ) {
    const [r, g, b, a] = typeof input === 'string' ? fromString(input) : input
    this.values = [
      Math.max(Math.min(typeof r === 'string' ? parseInt(r) : r, 255), 0),
      Math.max(Math.min(typeof g === 'string' ? parseInt(g) : g, 255), 0),
      Math.max(Math.min(typeof b === 'string' ? parseInt(b) : b, 255), 0),
      Math.round(
        (a == null
          ? 1
          : Math.max(
              Math.min(typeof a === 'string' ? parseFloat(a) : a, 255),
              0
            )) * 10
      ) / 10,
    ]
  }

  toRgbString() {
    const [r, g, b, a] = this.values
    if (a === 1) {
      return `rgb(${r}, ${g}, ${b})`
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  toHslString() {
    const [h, s, l, a] = this.toHslaArray()
    if (a === 1) {
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    return `hsla(${h}, ${s}%, ${l}%, ${a})`
  }

  toHexString() {
    const r = Number(this.values[0]).toString(16).padStart(2, '0')
    const g = Number(this.values[1]).toString(16).padStart(2, '0')
    const b = Number(this.values[2]).toString(16).padStart(2, '0')
    const a =
      this.values[3] < 1
        ? Math.floor(this.values[3] * 255)
            .toString(16)
            .padStart(2, '0')
        : ''
    return `#${r}${g}${b}${a}`
  }

  toRgbaArray() {
    return this.values
  }

  toHslaArray() {
    const [r, g, b, a] = this.values
    const [h, s, l] = rgbToHsl(r, g, b)
    return [h, s, l, a]
  }

  static fromRgba(vals: [number, number, number, number]) {
    return new Color(fromRgba(vals))
  }
  static fromRgb(vals: [number, number, number]) {
    return new Color(fromRgb(vals))
  }
  static fromHsla(vals: [number, number, number, number]) {
    return new Color(fromHsla(vals))
  }
  static fromHsl(vals: [number, number, number]) {
    return new Color(fromHsl(vals))
  }
}

function fromRgba([r, g, b, a]: [number, number, number, number]): [
  number,
  number,
  number,
  number
] {
  return [r, g, b, a]
}

function fromRgb([r, g, b]: [number, number, number]) {
  return fromRgba([r, g, b, 1])
}

function fromHsla([h, s, l, a]: [number, number, number, number]) {
  const [r, g, b] = hslToRgb(h, s, l)
  return fromRgba([r, g, b, a])
}

function fromHsl([h, s, l]: [number, number, number]) {
  return fromHsla([h, s, l, 1])
}

function fromHexString(str: string) {
  const match = hex.exec(str) || shortHex.exec(str)
  if (!match) throw new Error(`invalid hex string: ${str}`)
  const [, r, g, b, a] = match

  return fromRgba([
    parseInt(r.length < 2 ? r.repeat(2) : r, 16),
    parseInt(g.length < 2 ? g.repeat(2) : g, 16),
    parseInt(b.length < 2 ? b.repeat(2) : b, 16),
    (a ? parseInt(a.length < 2 ? a.repeat(2) : a, 16) / 255 : undefined) ?? 1,
  ])
}

function fromRgbString(str: string) {
  const match =
    rgb.exec(str) || rgbperc.exec(str) || rgbfn.exec(str) || rgbpercfn.exec(str)
  if (!match) throw new Error(`invalid rgb string: ${str}`)
  const [, r, g, b, a] = match
  return fromRgba([
    r.includes('%') ? (parseInt(r, 10) * 255) / 100 : parseInt(r, 10),
    g.includes('%') ? (parseInt(g, 10) * 255) / 100 : parseInt(g, 10),
    b.includes('%') ? (parseInt(b, 10) * 255) / 100 : parseInt(b, 10),
    a === undefined ? 1 : parseFloat(a) / (a.includes('%') ? 100 : 1),
  ])
}

function fromHslString(str: string) {
  const match = hsl.exec(str)
  if (!match) throw new Error(`invalid hsl string: ${str}`)
  const [, h, unit, s, l, a] = match
  if (
    unit != null &&
    unit !== 'deg' &&
    unit !== 'grad' &&
    unit !== 'rad' &&
    unit !== 'turn'
  ) {
    throw new Error(`invalid angle unit: ${unit}`)
  }
  return fromHsla([
    parseFloat(h) *
      (unit === 'grad'
        ? 180 / 200
        : unit === 'rad'
        ? 180 / Math.PI
        : unit === 'turn'
        ? 360
        : 1),
    parseFloat(s),
    parseFloat(l),
    a === undefined ? 1 : parseFloat(a) / (a.includes('%') ? 100 : 1),
  ])
}

function fromString(str: string) {
  if (str in colorNames) {
    return fromRgb((colorNames as any)[str])
  }

  if (hex.test(str) || shortHex.test(str)) {
    return fromHexString(str)
  }

  if (
    rgb.test(str) ||
    rgbperc.test(str) ||
    rgbfn.test(str) ||
    rgbpercfn.test(str)
  ) {
    return fromRgbString(str)
  }

  if (hsl.test(str)) {
    return fromHslString(str)
  }

  throw new Error(`invalid css color: ${str}`)
}
