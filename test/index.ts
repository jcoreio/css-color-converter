import { expect } from 'chai'
import { describe, it } from 'mocha'

import Color from '../src/index'

describe(`Color`, function () {
  it(`works`, function () {
    expect(new Color('blue').toRgbaArray()).to.deep.equal([0, 0, 255, 1])
    expect(new Color('blue').toHslaArray()).to.deep.equal([240, 100, 50, 1])
    expect(new Color('blue').toHexString()).to.deep.equal('#0000ff')
    expect(new Color('rgb(255, 255, 255)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 1,
    ])
    expect(new Color('rgb(100%, 100%, 100%)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 1,
    ])
    expect(new Color('rgb(100%, 100%, 100%)').toHslaArray()).to.deep.equal([
      0, 0, 100, 1,
    ])
    expect(new Color('rgba(100%, 100%, 100%, .5)').toHexString()).to.deep.equal(
      '#ffffff7f'
    )
    expect(new Color('rgba(255, 255, 255, .5)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 0.5,
    ])
    expect(new Color('rgba(255, 255, 255, .5)').toHslaArray()).to.deep.equal([
      0, 0, 100, 0.5,
    ])
    expect(new Color('rgb(255 255 255)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 1,
    ])
    expect(new Color('rgb(100% 100% 100%)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 1,
    ])
    expect(new Color('rgb(100% 100% 100%)').toHslaArray()).to.deep.equal([
      0, 0, 100, 1,
    ])
    expect(new Color('rgba(100% 100% 100% / .5)').toHexString()).to.deep.equal(
      '#ffffff7f'
    )
    expect(new Color('rgba(255 255 255 / .5)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 0.5,
    ])
    expect(new Color('rgba(255 255 255 / .5)').toHslaArray()).to.deep.equal([
      0, 0, 100, 0.5,
    ])
    expect(new Color('rgba(0, 0, 0, 0)').toRgbaArray()).to.deep.equal([
      0, 0, 0, 0,
    ])
    expect(new Color('rgba(3, 2, 1, 0)').toRgbaArray()).to.deep.equal([
      3, 2, 1, 0,
    ])
    expect(new Color('hsl(0, 0%, 100%)').toHslaArray()).to.deep.equal([
      0, 0, 100, 1,
    ])
    expect(new Color('hsl(0, 0%, 100%)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 1,
    ])
    expect(new Color('hsla(0, 0%, 100%, .5)').toHslaArray()).to.deep.equal([
      0, 0, 100, 0.5,
    ])
    expect(new Color('hsla(0, 0%, 100%, .5)').toRgbaArray()).to.deep.equal([
      255, 255, 255, 0.5,
    ])
    expect(new Color('#ffffff').toRgbaArray()).to.deep.equal([255, 255, 255, 1])
    expect(new Color('#ffffff').toHslaArray()).to.deep.equal([0, 0, 100, 1])
    expect(new Color('#ffffffff').toRgbaArray()).to.deep.equal([
      255, 255, 255, 1,
    ])
    expect(new Color('#ffffffff').toHslaArray()).to.deep.equal([0, 0, 100, 1])
    expect(new Color('#fff').toRgbaArray()).to.deep.equal([255, 255, 255, 1])
    expect(new Color('#fff').toHslaArray()).to.deep.equal([0, 0, 100, 1])
    expect(new Color('#ffff').toRgbaArray()).to.deep.equal([255, 255, 255, 1])
    expect(new Color('#ffff').toHslaArray()).to.deep.equal([0, 0, 100, 1])
    expect(new Color('#ffffff7f').toRgbaArray()).to.deep.equal([
      255, 255, 255, 0.5,
    ])
    expect(new Color('#ffffff7f').toHslaArray()).to.deep.equal([0, 0, 100, 0.5])
    expect(new Color('#ffffff').toHexString()).to.deep.equal('#ffffff')
    expect(new Color('#ffffff').toRgbString()).to.equal('rgb(255, 255, 255)')
    expect(new Color('#ffffff7f').toRgbString()).to.equal(
      'rgba(255, 255, 255, 0.5)'
    )
    expect(new Color('#ffffff00').toRgbString()).to.equal(
      'rgba(255, 255, 255, 0)'
    )
    expect(new Color('#fff0').toRgbString()).to.equal('rgba(255, 255, 255, 0)')
    expect(new Color('#ffffff').toHslString()).to.equal('hsl(0, 0%, 100%)')
    expect(new Color('#ffffff7f').toHslString()).to.equal(
      'hsla(0, 0%, 100%, 0.5)'
    )
    expect(new Color('#ffffff').toHexString()).to.equal('#ffffff')
    expect(new Color('#ffffff7f').toHexString()).to.equal('#ffffff7f')
    expect(Color.fromRgb([255, 255, 255]).toRgbString()).to.equal(
      'rgb(255, 255, 255)'
    )
    expect(Color.fromRgba([255, 255, 255, 1]).toRgbString()).to.equal(
      'rgb(255, 255, 255)'
    )
    expect(Color.fromRgba([255, 255, 255, 0.5]).toRgbString()).to.equal(
      'rgba(255, 255, 255, 0.5)'
    )
    expect(Color.fromRgba([255, 255, 255, 1]).toHslString()).to.equal(
      'hsl(0, 0%, 100%)'
    )
    expect(Color.fromRgba([255, 255, 255, 0.5]).toHslString()).to.equal(
      'hsla(0, 0%, 100%, 0.5)'
    )
    expect(Color.fromRgba([255, 255, 255, 1]).toHexString()).to.equal('#ffffff')
    expect(Color.fromRgba([255, 255, 255, 0.5]).toHexString()).to.equal(
      '#ffffff7f'
    )
    expect(Color.fromRgba([0, 0, 0, 0]).toRgbaArray()).to.deep.equal([
      0, 0, 0, 0,
    ])
    expect(Color.fromRgba([3, 2, 1, 0]).toRgbaArray()).to.deep.equal([
      3, 2, 1, 0,
    ])
    expect(Color.fromHsl([0, 0, 100]).toHslString()).to.equal(
      'hsl(0, 0%, 100%)'
    )
    expect(Color.fromHsla([0, 0, 100, 1]).toRgbString()).to.equal(
      'rgb(255, 255, 255)'
    )
    expect(Color.fromHsla([0, 0, 100, 0.5]).toRgbString()).to.equal(
      'rgba(255, 255, 255, 0.5)'
    )
    expect(Color.fromHsla([0, 0, 100, 1]).toHslString()).to.equal(
      'hsl(0, 0%, 100%)'
    )
    expect(Color.fromHsla([0, 0, 100, 0.5]).toHslString()).to.equal(
      'hsla(0, 0%, 100%, 0.5)'
    )
    expect(Color.fromHsla([0, 0, 100, 1]).toHexString()).to.equal('#ffffff')
    expect(Color.fromHsla([0, 0, 100, 0.5]).toHexString()).to.equal('#ffffff7f')
    expect(new Color([0, 0, 0, 0]).toRgbaArray()).to.deep.equal([0, 0, 0, 0])
    expect(new Color('rgba(0, 0, 0, 0)').toRgbaArray()).to.deep.equal([
      0, 0, 0, 0,
    ])
    expect(new Color([3, 2, 1, 0]).toRgbaArray()).to.deep.equal([3, 2, 1, 0])
    expect(new Color('rgba(3, 2, 1, 0)').toRgbaArray()).to.deep.equal([
      3, 2, 1, 0,
    ])
    expect(() => new Color('nonsense')).to.throw('invalid css color: nonsense')
  })
})
