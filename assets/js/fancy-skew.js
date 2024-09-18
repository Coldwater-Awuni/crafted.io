
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(function () {
  // Controls the appearing and dissapearing of background while hovering
  var parents = [].slice.call(document.querySelectorAll('div[id$="-fancy-skew"]'));
  var modifiedParents = parents.map(function (parent) {
    var _parent$dataset;
    var cat = ((_parent$dataset = parent.dataset) === null || _parent$dataset === void 0 ? void 0 : _parent$dataset.cat) || '';
    var backgroundArea = parent.querySelector("#".concat(cat, "-skew-list")) || document.createElement('div');
    var items = Array.from(backgroundArea.querySelectorAll('li')) || [];
    return [backgroundArea, items];
  });

  //  throttle mouse event listeners
  var throttle = function throttle(fn, time) {
    var inThrottle;
    return function () {
      if (!inThrottle) {
        fn.apply(this, arguments);
        inThrottle = true;
        setTimeout(function () {
          return inThrottle = false;
        }, time);
      }
    };
  };
  modifiedParents.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      backgroundArea = _ref2[0],
      items = _ref2[1];
    items.forEach(function (item) {
      hoverItem(backgroundArea, item);
    });
  });
  function activateItem(backgroundArea, item) {
    item.classList.add("active");
    backgroundArea.classList.add('active');
  }
  function deActivateItem(backgroundArea, item) {
    item.classList.remove("active");
    backgroundArea.classList.remove('active');
  }
  function hoverItem(backgroundArea, item) {
    item.addEventListener("mouseover", throttle(function () {
      activateItem(backgroundArea, item);
    }, 500));
    item.addEventListener("mouseleave", throttle(function () {
      deActivateItem(backgroundArea, item);
    }, 500));
  }
  ;
  function backgroundEffect(backgroundArea, items) {
    var boundingBox = backgroundArea.getBoundingClientRect();

    // vanishing point is center screen
    var vanishingPoint = window.innerHeight / 2;

    // center of element
    var center = boundingBox.top + boundingBox.height / 2;

    // gety y-position of perspective-origin
    var yPos = Math.round((center - vanishingPoint) / 4);
    items.forEach(function (item) {
      item.style.perspectiveOrigin = "35% " + -yPos + "px";
    });
  }

  // controls the perspective origin of the 3D effect while scrolling
  window.addEventListener("scroll", function scrollingEffect() {
    modifiedParents.forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        backgroundArea = _ref4[0],
        items = _ref4[1];
      backgroundEffect(backgroundArea, items);
    });
  }, {
    passive: true
  });

  // Removes perspective from IE10 and below
  if (navigator.userAgent.indexOf('MSIE') != -1) {
    servicesList.forEach(function (service) {
      service.style.perspectiveOrigin = "none";
      service.style.perspective = "none";
      service.querySelector(".link-wrapper").style.transform = "none";
    });
  }
})();"use strict";
