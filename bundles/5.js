(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar React__default = _interopDefault(React);\n\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\n\nvar commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};\n\nfunction unwrapExports (x) {\n\treturn x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;\n}\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar richTextTypes_es5 = createCommonjsModule(function (module, exports) {\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\nvar commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar O = 'object';\nvar check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global_1 =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == O && globalThis) ||\n  check(typeof window == O && window) ||\n  check(typeof self == O && self) ||\n  check(typeof commonjsGlobal$1 == O && commonjsGlobal$1) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\nvar fails = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n// Thank's IE8 for his funny defineProperty\nvar descriptors = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nvar f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\nvar objectPropertyIsEnumerable = {\n\tf: f\n};\n\nvar createPropertyDescriptor = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\nvar toString = {}.toString;\n\nvar classofRaw = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar indexedObject = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nvar requireObjectCoercible = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n// toObject with fallback for non-array-like ES3 strings\n\n\n\nvar toIndexedObject = function (it) {\n  return indexedObject(requireObjectCoercible(it));\n};\n\nvar isObject = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nvar toPrimitive = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\nvar hasOwnProperty = {}.hasOwnProperty;\n\nvar has = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\nvar document = global_1.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nvar documentCreateElement = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n// Thank's IE8 for his funny defineProperty\nvar ie8DomDefine = !descriptors && !fails(function () {\n  return Object.defineProperty(documentCreateElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nvar f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (ie8DomDefine) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);\n};\n\nvar objectGetOwnPropertyDescriptor = {\n\tf: f$1\n};\n\nvar anObject = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nvar f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (ie8DomDefine) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\nvar objectDefineProperty = {\n\tf: f$2\n};\n\nvar hide = descriptors ? function (object, key, value) {\n  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\nvar setGlobal = function (key, value) {\n  try {\n    hide(global_1, key, value);\n  } catch (error) {\n    global_1[key] = value;\n  } return value;\n};\n\nvar shared = createCommonjsModule(function (module) {\nvar SHARED = '__core-js_shared__';\nvar store = global_1[SHARED] || setGlobal(SHARED, {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.1.3',\n  mode: 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n});\n\nvar functionToString = shared('native-function-to-string', Function.toString);\n\nvar WeakMap = global_1.WeakMap;\n\nvar nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));\n\nvar id = 0;\nvar postfix = Math.random();\n\nvar uid = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\nvar keys = shared('keys');\n\nvar sharedKey = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\nvar hiddenKeys = {};\n\nvar WeakMap$1 = global_1.WeakMap;\nvar set, get, has$1;\n\nvar enforce = function (it) {\n  return has$1(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (nativeWeakMap) {\n  var store = new WeakMap$1();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has$1 = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    hide(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return has(it, STATE) ? it[STATE] : {};\n  };\n  has$1 = function (it) {\n    return has(it, STATE);\n  };\n}\n\nvar internalState = {\n  set: set,\n  get: get,\n  has: has$1,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\nvar redefine = createCommonjsModule(function (module) {\nvar getInternalState = internalState.get;\nvar enforceInternalState = internalState.enforce;\nvar TEMPLATE = String(functionToString).split('toString');\n\nshared('inspectSource', function (it) {\n  return functionToString.call(it);\n});\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global_1) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else hide(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);\n});\n});\n\nvar path = global_1;\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nvar getBuiltIn = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])\n    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];\n};\n\nvar ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nvar toInteger = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nvar toLength = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\nvar max = Math.max;\nvar min$1 = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nvar toAbsoluteIndex = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);\n};\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nvar arrayIncludes = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\nvar indexOf = arrayIncludes.indexOf;\n\n\nvar objectKeysInternal = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n// IE8- don't enum bug keys\nvar enumBugKeys = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\nvar hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nvar f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return objectKeysInternal(O, hiddenKeys$1);\n};\n\nvar objectGetOwnPropertyNames = {\n\tf: f$3\n};\n\nvar f$4 = Object.getOwnPropertySymbols;\n\nvar objectGetOwnPropertySymbols = {\n\tf: f$4\n};\n\n// all object keys, includes non-enumerable and symbols\nvar ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = objectGetOwnPropertyNames.f(anObject(it));\n  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\nvar copyConstructorProperties = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = objectDefineProperty.f;\n  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nvar isForced_1 = isForced;\n\nvar getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;\n\n\n\n\n\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nvar _export = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global_1;\n  } else if (STATIC) {\n    target = global_1[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global_1[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor$1(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      hide(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nvar objectKeys = Object.keys || function keys(O) {\n  return objectKeysInternal(O, enumBugKeys);\n};\n\nvar propertyIsEnumerable = objectPropertyIsEnumerable.f;\n\n// `Object.{ entries, values }` methods implementation\nvar createMethod$1 = function (TO_ENTRIES) {\n  return function (it) {\n    var O = toIndexedObject(it);\n    var keys = objectKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!descriptors || propertyIsEnumerable.call(O, key)) {\n        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\nvar objectToArray = {\n  // `Object.entries` method\n  // https://tc39.github.io/ecma262/#sec-object.entries\n  entries: createMethod$1(true),\n  // `Object.values` method\n  // https://tc39.github.io/ecma262/#sec-object.values\n  values: createMethod$1(false)\n};\n\nvar $values = objectToArray.values;\n\n// `Object.values` method\n// https://tc39.github.io/ecma262/#sec-object.values\n_export({ target: 'Object', stat: true }, {\n  values: function values(O) {\n    return $values(O);\n  }\n});\n\nvar values = path.Object.values;\n\nvar nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\nvar Symbol$1 = global_1.Symbol;\nvar store$1 = shared('wks');\n\nvar wellKnownSymbol = function (name) {\n  return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name]\n    || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));\n};\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nvar objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\nvar html = getBuiltIn('document', 'documentElement');\n\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\nvar Empty = function () { /* empty */ };\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n  return createDict();\n};\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nvar objectCreate = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : objectDefineProperties(result, Properties);\n};\n\nhiddenKeys[IE_PROTO] = true;\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  hide(ArrayPrototype, UNSCOPABLES, objectCreate(null));\n}\n\n// add a key to Array.prototype[@@unscopables]\nvar addToUnscopables = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\nvar $includes = arrayIncludes.includes;\n\n\n// `Array.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.includes\n_export({ target: 'Array', proto: true }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\nvar aFunction$1 = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n// optional / simple context binding\nvar bindContext = function (fn, that, length) {\n  aFunction$1(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\nvar call = Function.call;\n\nvar entryUnbind = function (CONSTRUCTOR, METHOD, length) {\n  return bindContext(call, global_1[CONSTRUCTOR].prototype[METHOD], length);\n};\n\nvar includes = entryUnbind('Array', 'includes');\n\n/**\r\n * Map of all Contentful block types. Blocks contain inline or block nodes.\r\n */\r\nvar BLOCKS;\r\n(function (BLOCKS) {\r\n    BLOCKS[\"DOCUMENT\"] = \"document\";\r\n    BLOCKS[\"PARAGRAPH\"] = \"paragraph\";\r\n    BLOCKS[\"HEADING_1\"] = \"heading-1\";\r\n    BLOCKS[\"HEADING_2\"] = \"heading-2\";\r\n    BLOCKS[\"HEADING_3\"] = \"heading-3\";\r\n    BLOCKS[\"HEADING_4\"] = \"heading-4\";\r\n    BLOCKS[\"HEADING_5\"] = \"heading-5\";\r\n    BLOCKS[\"HEADING_6\"] = \"heading-6\";\r\n    BLOCKS[\"OL_LIST\"] = \"ordered-list\";\r\n    BLOCKS[\"UL_LIST\"] = \"unordered-list\";\r\n    BLOCKS[\"LIST_ITEM\"] = \"list-item\";\r\n    BLOCKS[\"HR\"] = \"hr\";\r\n    BLOCKS[\"QUOTE\"] = \"blockquote\";\r\n    BLOCKS[\"EMBEDDED_ENTRY\"] = \"embedded-entry-block\";\r\n    BLOCKS[\"EMBEDDED_ASSET\"] = \"embedded-asset-block\";\r\n})(BLOCKS || (BLOCKS = {}));\r\nvar BLOCKS$1 = BLOCKS;\n\n/**\r\n * Map of all Contentful inline types. Inline contain inline or text nodes.\r\n */\r\nvar INLINES;\r\n(function (INLINES) {\r\n    INLINES[\"HYPERLINK\"] = \"hyperlink\";\r\n    INLINES[\"ENTRY_HYPERLINK\"] = \"entry-hyperlink\";\r\n    INLINES[\"ASSET_HYPERLINK\"] = \"asset-hyperlink\";\r\n    INLINES[\"EMBEDDED_ENTRY\"] = \"embedded-entry-inline\";\r\n})(INLINES || (INLINES = {}));\r\nvar INLINES$1 = INLINES;\n\n/**\r\n * Map of all Contentful marks.\r\n */\r\nvar marks = {\r\n    BOLD: 'bold',\r\n    ITALIC: 'italic',\r\n    UNDERLINE: 'underline',\r\n    CODE: 'code',\r\n};\n\nvar _a;\r\n/**\r\n * Array of all top level block types.\r\n * Only these block types can be the direct children of the document.\r\n */\r\nvar TOP_LEVEL_BLOCKS = [\r\n    BLOCKS$1.PARAGRAPH,\r\n    BLOCKS$1.HEADING_1,\r\n    BLOCKS$1.HEADING_2,\r\n    BLOCKS$1.HEADING_3,\r\n    BLOCKS$1.HEADING_4,\r\n    BLOCKS$1.HEADING_5,\r\n    BLOCKS$1.HEADING_6,\r\n    BLOCKS$1.OL_LIST,\r\n    BLOCKS$1.UL_LIST,\r\n    BLOCKS$1.HR,\r\n    BLOCKS$1.QUOTE,\r\n    BLOCKS$1.EMBEDDED_ENTRY,\r\n    BLOCKS$1.EMBEDDED_ASSET,\r\n];\r\n/**\r\n * Array of all void block types\r\n */\r\nvar VOID_BLOCKS = [BLOCKS$1.HR, BLOCKS$1.EMBEDDED_ENTRY, BLOCKS$1.EMBEDDED_ASSET];\r\n/**\r\n * Dictionary of all container block types, and the set block types they accept as children.\r\n */\r\nvar CONTAINERS = (_a = {},\r\n    _a[BLOCKS$1.OL_LIST] = [BLOCKS$1.LIST_ITEM],\r\n    _a[BLOCKS$1.UL_LIST] = [BLOCKS$1.LIST_ITEM],\r\n    _a[BLOCKS$1.LIST_ITEM] = TOP_LEVEL_BLOCKS.slice(),\r\n    _a[BLOCKS$1.QUOTE] = [BLOCKS$1.PARAGRAPH],\r\n    _a);\n\n/**\r\n * Checks if the node is an instance of Inline.\r\n */\r\nfunction isInline(node) {\r\n    return Object.values(INLINES$1).includes(node.nodeType);\r\n}\r\n/**\r\n * Checks if the node is an instance of Block.\r\n */\r\nfunction isBlock(node) {\r\n    return Object.values(BLOCKS$1).includes(node.nodeType);\r\n}\r\n/**\r\n * Checks if the node is an instance of Text.\r\n */\r\nfunction isText(node) {\r\n    return node.nodeType === 'text';\r\n}\n\nvar helpers = /*#__PURE__*/Object.freeze({\n\tisInline: isInline,\n\tisBlock: isBlock,\n\tisText: isText\n});\n\nexports.BLOCKS = BLOCKS$1;\nexports.CONTAINERS = CONTAINERS;\nexports.INLINES = INLINES$1;\nexports.MARKS = marks;\nexports.TOP_LEVEL_BLOCKS = TOP_LEVEL_BLOCKS;\nexports.VOID_BLOCKS = VOID_BLOCKS;\nexports.helpers = helpers;\n\n});\n\nunwrapExports(richTextTypes_es5);\nvar richTextTypes_es5_1 = richTextTypes_es5.BLOCKS;\nvar richTextTypes_es5_2 = richTextTypes_es5.CONTAINERS;\nvar richTextTypes_es5_3 = richTextTypes_es5.INLINES;\nvar richTextTypes_es5_4 = richTextTypes_es5.MARKS;\nvar richTextTypes_es5_5 = richTextTypes_es5.TOP_LEVEL_BLOCKS;\nvar richTextTypes_es5_6 = richTextTypes_es5.VOID_BLOCKS;\nvar richTextTypes_es5_7 = richTextTypes_es5.helpers;\n\nfunction appendKeyToValidElement(element, key) {\r\n    if (React.isValidElement(element) && element.key === null) {\r\n        return React.cloneElement(element, { key: key });\r\n    }\r\n    return element;\r\n}\n\nfunction nodeListToReactComponents(nodes, options) {\r\n    return nodes.map(function (node, index) {\r\n        return appendKeyToValidElement(nodeToReactComponent(node, options), index);\r\n    });\r\n}\r\nfunction nodeToReactComponent(node, options) {\r\n    var renderNode = options.renderNode, renderMark = options.renderMark, renderText = options.renderText;\r\n    if (richTextTypes_es5_7.isText(node)) {\r\n        return node.marks.reduce(function (value, mark) {\r\n            if (!renderMark[mark.type]) {\r\n                return value;\r\n            }\r\n            return renderMark[mark.type](value);\r\n        }, renderText ? renderText(node.value) : node.value);\r\n    }\r\n    else {\r\n        var children = nodeListToReactComponents(node.content, options);\r\n        if (!node.nodeType || !renderNode[node.nodeType]) {\r\n            return React__default.createElement(React__default.Fragment, null, children);\r\n        }\r\n        return renderNode[node.nodeType](node, children);\r\n    }\r\n}\n\nvar _a, _b;\r\nvar defaultNodeRenderers = (_a = {},\r\n    _a[richTextTypes_es5_1.DOCUMENT] = function (node, children) { return children; },\r\n    _a[richTextTypes_es5_1.PARAGRAPH] = function (node, children) { return React__default.createElement(\"p\", null, children); },\r\n    _a[richTextTypes_es5_1.HEADING_1] = function (node, children) { return React__default.createElement(\"h1\", null, children); },\r\n    _a[richTextTypes_es5_1.HEADING_2] = function (node, children) { return React__default.createElement(\"h2\", null, children); },\r\n    _a[richTextTypes_es5_1.HEADING_3] = function (node, children) { return React__default.createElement(\"h3\", null, children); },\r\n    _a[richTextTypes_es5_1.HEADING_4] = function (node, children) { return React__default.createElement(\"h4\", null, children); },\r\n    _a[richTextTypes_es5_1.HEADING_5] = function (node, children) { return React__default.createElement(\"h5\", null, children); },\r\n    _a[richTextTypes_es5_1.HEADING_6] = function (node, children) { return React__default.createElement(\"h6\", null, children); },\r\n    _a[richTextTypes_es5_1.EMBEDDED_ENTRY] = function (node, children) { return React__default.createElement(\"div\", null, children); },\r\n    _a[richTextTypes_es5_1.UL_LIST] = function (node, children) { return React__default.createElement(\"ul\", null, children); },\r\n    _a[richTextTypes_es5_1.OL_LIST] = function (node, children) { return React__default.createElement(\"ol\", null, children); },\r\n    _a[richTextTypes_es5_1.LIST_ITEM] = function (node, children) { return React__default.createElement(\"li\", null, children); },\r\n    _a[richTextTypes_es5_1.QUOTE] = function (node, children) { return React__default.createElement(\"blockquote\", null, children); },\r\n    _a[richTextTypes_es5_1.HR] = function () { return React__default.createElement(\"hr\", null); },\r\n    _a[richTextTypes_es5_3.ASSET_HYPERLINK] = function (node) { return defaultInline(richTextTypes_es5_3.ASSET_HYPERLINK, node); },\r\n    _a[richTextTypes_es5_3.ENTRY_HYPERLINK] = function (node) { return defaultInline(richTextTypes_es5_3.ENTRY_HYPERLINK, node); },\r\n    _a[richTextTypes_es5_3.EMBEDDED_ENTRY] = function (node) { return defaultInline(richTextTypes_es5_3.EMBEDDED_ENTRY, node); },\r\n    _a[richTextTypes_es5_3.HYPERLINK] = function (node, children) { return React__default.createElement(\"a\", { href: node.data.uri }, children); },\r\n    _a);\r\nvar defaultMarkRenderers = (_b = {},\r\n    _b[richTextTypes_es5_4.BOLD] = function (text) { return React__default.createElement(\"b\", null, text); },\r\n    _b[richTextTypes_es5_4.ITALIC] = function (text) { return React__default.createElement(\"i\", null, text); },\r\n    _b[richTextTypes_es5_4.UNDERLINE] = function (text) { return React__default.createElement(\"u\", null, text); },\r\n    _b[richTextTypes_es5_4.CODE] = function (text) { return React__default.createElement(\"code\", null, text); },\r\n    _b);\r\nfunction defaultInline(type, node) {\r\n    return (React__default.createElement(\"span\", { key: node.data.target.sys.id },\r\n        \"type: \",\r\n        node.nodeType,\r\n        \" id: \",\r\n        node.data.target.sys.id));\r\n}\r\n/**\r\n * Serialize a Contentful Rich Text `document` to React tree\r\n */\r\nfunction documentToReactComponents(richTextDocument, options) {\r\n    if (options === void 0) { options = {}; }\r\n    if (!richTextDocument) {\r\n        return null;\r\n    }\r\n    return nodeToReactComponent(richTextDocument, {\r\n        renderNode: __assign({}, defaultNodeRenderers, options.renderNode),\r\n        renderMark: __assign({}, defaultMarkRenderers, options.renderMark),\r\n        renderText: options.renderText,\r\n    });\r\n}\n\nexports.documentToReactComponents = documentToReactComponents;\n//# sourceMappingURL=rich-text-react-renderer.es5.js.map\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js?");

/***/ })

}]);