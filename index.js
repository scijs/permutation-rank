"use strict"

var inverse = require("invert-permutation")

function rank(permutation) {
  switch(permutation.length) {
    case 0:
    case 1:
      return 0
    case 2:
      return permutation[1]
    default:
      break
  }
  var p = permutation.slice(0)
    , pinv = inverse(p)
    , r = 0, s, t, i
  for(i=p.length-1; i>0; --i) {
    t = pinv[i]
    s = p[i]
    p[i] = p[t]
    p[t] = s
    pinv[i] = pinv[s]
    pinv[s] = t
    r = (r + s) * i
  }
  return r
}

function unrank(n, r) {
  switch(n) {
    case 0:
      return []
    case 1:
      return [0]
    case 2:
      return r ? [0,1] : [1,0]
    default:
      break
  }
  var p = new Array(n)
    , s, t, i, nf=1
  p[0] = 0
  for(i=1; i<p.length; ++i) {
    p[i] = i
    nf = (nf*i)|0
  }
  for(i=n-1; i>0; --i) {
    s = (r / nf)|0
    r = (r - s * nf)|0
    nf = (nf / i)|0
    t = p[i]|0
    p[i] = p[s]|0
    p[s] = t|0
  }
  return p
}

exports.rank = rank
exports.unrank = unrank
