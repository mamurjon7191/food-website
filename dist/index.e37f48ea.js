// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _searchResultsViewJs = require("./views/searchResultsView.js");
var _searchResultsViewJsDefault = parcelHelpers.interopDefault(_searchResultsViewJs);
var _paginationView = require("./views/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
// https://forkify-api.herokuapp.com/v2
//////////////////////////////////////////////////
let rendor = async function() {
    try {
        const id = window.location.hash.slice(1);
        _recipeViewJsDefault.default.spinner();
        // await model.loadRecipe(id);
        await _modelJs.loadRecipe(id);
        // console.log(race);
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    } catch (err) {
        _recipeViewJsDefault.default.errorNotify();
    }
};
////////////////////////////////////
let controlSearch = async function() {
    try {
        let data = _searchViewJsDefault.default.getValue();
        if (!data) return;
        await _modelJs.loadSearchResults(data);
    } catch (err) {
        alert(err);
    }
};
const controlSearchResults = async function() {
    _searchResultsViewJsDefault.default.spinner();
    await controlSearch();
    _searchResultsViewJsDefault.default.rendor(_modelJs.getSearchResultsPage()); // shu yerda nimaga qavs qoyilvotti
    _paginationViewDefault.default.rendor(_modelJs.state.search);
};
const controlServings = function(servingNum) {
    _modelJs.updataServings(servingNum);
};
const controlBookmarks = function() {
    // model.bookmarks(model.state.recipe);
    if (_modelJs.state.recipe.bookmarked) _modelJs.deleteBookmarks(_modelJs.state.recipe.id);
    else _modelJs.bookmarks(_modelJs.state.recipe);
    _recipeViewJsDefault.default.render(_modelJs.state.recipe);
};
let init = function() {
    _recipeViewJsDefault.default.addHandleEvent(rendor);
    _searchViewJsDefault.default.addHandleEvent(controlSearchResults);
    _recipeViewJsDefault.default.addHandle(controlServings);
    _recipeViewJsDefault.default.addHandleBookmark(controlBookmarks);
};
init();

},{"./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/searchResultsView.js":"cXIN2","./views/paginationView":"6z7bi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults
);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage
);
parcelHelpers.export(exports, "updataServings", ()=>updataServings
);
parcelHelpers.export(exports, "bookmarks", ()=>bookmarks
);
parcelHelpers.export(exports, "deleteBookmarks", ()=>deleteBookmarks
);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        name: '',
        results: [],
        resultsPerPage: _configJs.PER_PAGE,
        currentPage: 1
    },
    bookmarks: []
};
const loadRecipe = async function(id) {
    try {
        let data = await _helpersJs.getJson(_configJs.API_URL + '/' + id);
        const obj = data.data.recipe;
        state.recipe = {
            id: obj.id,
            name: obj.title,
            publisher: obj.publisher,
            image: obj.image_url,
            indegridents: obj.ingredients,
            servings: obj.servings,
            url: obj.source_url
        };
        if (state.bookmarks.some((val)=>val.id == state.recipe.id
        )) state.recipe.bookmarked = true;
    } catch (err) {
        throw err;
    }
};
const loadSearchResults = async function(food) {
    try {
        state.search.name = food;
        let data = await _helpersJs.getJson(`${_configJs.API_URL}?search=${food}`);
        state.search.results = data.data.recipes.map((val)=>{
            return {
                id: val.id,
                name: val.title,
                publisher: val.publisher,
                image: val.image_url
            };
        });
    } catch (err) {
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.currentPage) {
    state.search.currentPage = page;
    const starts = (page - 1) * state.search.resultsPerPage;
    const ends = state.search.resultsPerPage * page;
    return state.search.results.slice(starts, ends);
};
const updataServings = function(peopleNumber = state.recipe.servings) {
    state.recipe.indegridents.map((val)=>{
        val.quantity = peopleNumber * val.quantity / state.recipe.servings;
    });
    state.recipe.servings = peopleNumber;
};
const bookmarks = function(obj) {
    state.bookmarks.push(obj);
    state.recipe.bookmarked = true;
    console.log(state.bookmarks);
    console.log('add');
};
const deleteBookmarks = function(id) {
    const index = state.bookmarks.findIndex((val)=>{
        val.id;
    });
    state.bookmarks.splice(index, 1);
    state.recipe.bookmarked = false;
    console.log('delete');
};

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "PER_PAGE", ()=>PER_PAGE
);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const TIMEOUT_SEC = 7;
const PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJson", ()=>getJson
);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJson = async function(url) {
    try {
        const data = await Promise.race([
            timeout(5),
            fetch(url)
        ]);
        const dataJson = await data.json();
        return dataJson;
    } catch (err) {
        throw err;
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class RecipeView {
    #errorMessage = `Sizning malumotingiz topildi iltimos qaytadan urinib koring`;
    #parentElement = document.querySelector('.recipe');
    #data;
    render(data) {
        this.#data = data;
        if (!data) return;
        this.#clearHTML();
        this.#generatorHtml(this.#data);
    }
    addHandleEvent(handle) {
        [
            'load',
            'hashchange'
        ].map((val)=>{
            window.addEventListener(val, handle);
        });
    }
     #generatorHtml(data) {
        let html = `<figure class="recipe__fig">
      <img src="${data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${data.name}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${_iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">45</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${_iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${data.servings}</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" id="${data.servings - 1}">
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" id="${data.servings + 1}"/>
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    
      <div class="recipe__user-generated">
        <svg>
          <use href="${_iconsSvgDefault.default}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${_iconsSvgDefault.default}#icon-bookmark${data.bookmarked ? '-fill' : ''}"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this.#renderIng(data.indegridents).join('')}  
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">The Pioneer Woman</span>. Please
        check out directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
        this.#parentElement.insertAdjacentHTML('afterbegin', html);
    }
     #renderIng(fun) {
        let arr = fun.map((val)=>{
            return `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${_iconsSvgDefault.default}#icon-check"></use>
      </svg> 
      <div class="recipe__quantity">${val.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${val.unit}</span>
        ${val.description}
      </div>
    </li>`;
        });
        return arr;
    }
     #clearHTML() {
        this.#parentElement.innerHTML = '';
    }
    spinner() {
        const html = `<div class="spinner">
    <svg>
      <use href="${_iconsSvgDefault.default}#icon-loader"></use>
    </svg>
  </div> `;
        this.#clearHTML();
        this.#parentElement.insertAdjacentHTML('afterbegin', html);
    }
    errorNotify() {
        let html = `<div class="error">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${this.#errorMessage}</p>
        </div>`;
        this.#clearHTML();
        this.#parentElement.insertAdjacentHTML('afterbegin', html);
    }
    addHandle(handle) {
        this.#parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--tiny');
            if (!btn) return;
            const servingsNumber = +btn.getAttribute('id');
            console.log(servingsNumber);
            if (servingsNumber > 0) handle(servingsNumber);
            else return;
        });
    }
    addHandleBookmark(handle) {
        this.#parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--round');
            handle();
        });
    }
}
exports.default = new RecipeView();

},{"../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMpiy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.21bad73c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentElement = document.querySelector('.search');
    data;
    getValue() {
        const val = document.querySelector('.search__field').value;
        this.clearInput();
        return val;
    }
    clearInput() {
        document.querySelector('.search__field').value = '';
    }
    addHandleEvent(data) {
        this.#parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            data();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXIN2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class SearchResult {
    #parentElement = document.querySelector('.results');
    #data;
    rendor(data) {
        this.#data = data;
        this.#clearHtml();
        this.#rendorHtml();
    }
     #rendorHtml() {
        this.#data.forEach((data)=>{
            const html = ` <li class="preview">
          <a class="preview__link preview__link--active" href="#${data.id}">
            <figure class="preview__fig">
              <img src="${data.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${data.name}</h4>
              <p class="preview__publisher">${data.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${_iconsSvgDefault.default}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>`;
            this.#parentElement.insertAdjacentHTML('afterbegin', html);
        });
    }
     #clearHtml() {
        this.#parentElement.innerHTML = '';
    }
    spinner() {
        const html = `<div class="spinner">
        <svg>
          <use href="${_iconsSvgDefault.default}#icon-loader"></use>
        </svg>
      </div> `;
        this.#clearHtml();
        this.#parentElement.insertAdjacentHTML('afterbegin', html);
    }
}
exports.default = new SearchResult();

},{"../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class Pagination {
    #parentElement = document.querySelector('.pagination');
    #data;
    rendor(data) {
        this.#data = data;
        this.rendorPages();
    }
    rendorPages() {
        const lastPage = Number(Math.ceil(this.#data.results.length / this.#data.resultsPerPage));
        const currentPage = this.#data.currentPage;
    }
}
exports.default = new Pagination(); // <!-- <button class="btn--inline pagination__btn--prev">
 /* <svg class="search__icon">
<use href="src/img/icons.svg#icon-arrow-left"></use>
</svg>
<span>Page 1</span>
</button>
<button class="btn--inline pagination__btn--next">
<span>Page 3</span>
<svg class="search__icon">
<use href="src/img/icons.svg#icon-arrow-right"></use>
</svg>
</button> --> */ 

},{"../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire9b13")

//# sourceMappingURL=index.e37f48ea.js.map
