(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.13.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))))
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOfBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))))
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException())
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException())
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException()
  };
  return arg0
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return $throwNullPointerException()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1))
  } else {
    return r
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4)
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4)
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)])
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4)
    } else {
      $throwArrayStoreException(null)
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4)
  } else {
    $throwArrayStoreException(null)
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
function $ct_O__($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException()
      };
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_LFrontend__main__AT__V(args) {
  $m_LFrontend$().main__AT__V(args)
}
/** @constructor */
function $c_LFrontend$() {
  this.LFrontend$__f_myApp = null;
  $n_LFrontend$ = this;
  var \u03b4tick = $n($n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$()).EventStream__Lcom_raquo_airstream_core_EventStream$()).periodic__I__Z__Z__Lcom_raquo_airstream_timing_PeriodicEventStream(1000, ($n($n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$()).EventStream__Lcom_raquo_airstream_core_EventStream$()), true), ($n($n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$()).EventStream__Lcom_raquo_airstream_core_EventStream$()), true));
  var this$1 = $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
  var $$x8 = this$1.div__Lcom_raquo_laminar_builders_HtmlTag();
  var this$2 = $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
  var $$x7 = $n(this$2.div__Lcom_raquo_laminar_builders_HtmlTag());
  $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
  var $$x6 = new $c_Lcom_raquo_laminar_nodes_TextNode("Tick #: ");
  var $$x5 = $n($n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$()).child__Lcom_raquo_laminar_receivers_ChildReceiver$()).text__Lcom_raquo_laminar_receivers_TextChildReceiver$();
  var this$6 = $n(\u03b4tick);
  var project = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $uI(x$1$2);
    return ("" + x$1)
  }));
  var array = [$$x6, $n($$x5).$less$minus$minus__Lcom_raquo_airstream_core_Source__F1__Lcom_raquo_laminar_modifiers_Inserter(new $c_Lcom_raquo_airstream_misc_MapEventStream(this$6, project, $m_s_None$()), new $c_sjsr_AnonFunction1(((text$2) => {
    var text = $as_T(text$2);
    $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
    return new $c_Lcom_raquo_laminar_nodes_TextNode(text)
  })))];
  var $$x4 = $n($$x7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array));
  var this$11 = $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
  var $$x3 = this$11.div__Lcom_raquo_laminar_builders_HtmlTag();
  $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
  var $$x2 = new $c_Lcom_raquo_laminar_nodes_TextNode("Random #: ");
  var $$x1 = $n($n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$()).child__Lcom_raquo_laminar_receivers_ChildReceiver$()).text__Lcom_raquo_laminar_receivers_TextChildReceiver$();
  var this$17 = $n(\u03b4tick);
  var value = new $c_sjsr_AnonFunction0((() => {
    var this$13 = $m_s_util_Random$();
    var this$14 = $n(this$13.s_util_Random__f_self);
    var this$15 = ((this$14.next__I__I(32) % 100) | 0);
    return ("" + this$15)
  }));
  var array$1 = [$$x2, $n($$x1).$less$minus$minus__Lcom_raquo_airstream_core_Source__F1__Lcom_raquo_laminar_modifiers_Inserter($f_Lcom_raquo_airstream_core_BaseObservable__mapTo__F0__Lcom_raquo_airstream_core_Observable(this$17, value), new $c_sjsr_AnonFunction1(((text$3$2) => {
    var text$3 = $as_T(text$3$2);
    $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
    return new $c_Lcom_raquo_laminar_nodes_TextNode(text$3)
  })))];
  var array$2 = [$$x4, $n($$x3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$1))];
  this.LFrontend$__f_myApp = $n($$x8).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$2))
}
$c_LFrontend$.prototype = new $h_O();
$c_LFrontend$.prototype.constructor = $c_LFrontend$;
/** @constructor */
function $h_LFrontend$() {
  /*<skip>*/
}
$h_LFrontend$.prototype = $c_LFrontend$.prototype;
$c_LFrontend$.prototype.main__AT__V = (function(args) {
  var this$1 = $m_Lcom_raquo_laminar_api_Laminar$documentEvents$();
  var this$4 = $n(this$1.onDomContentLoaded__Lcom_raquo_airstream_core_EventStream());
  var onNext = new $c_sjsr_AnonFunction1(((x$2$2) => {
    $n($m_Lcom_raquo_laminar_api_package$().L__Lcom_raquo_laminar_api_Laminar$());
    var container = document.getElementById("appContainer");
    var rootNode = $m_LFrontend$().LFrontend$__f_myApp;
    new $c_Lcom_raquo_laminar_nodes_RootNode(container, rootNode)
  }));
  var owner = $m_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$();
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$4, onNext, owner)
});
var $d_LFrontend$ = new $TypeData().initClass({
  LFrontend$: 0
}, false, "Frontend$", {
  LFrontend$: 1,
  O: 1
});
$c_LFrontend$.prototype.$classData = $d_LFrontend$;
var $n_LFrontend$;
function $m_LFrontend$() {
  if ((!$n_LFrontend$)) {
    $n_LFrontend$ = new $c_LFrontend$()
  };
  return $n_LFrontend$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_EventStream$() {
  $n_Lcom_raquo_airstream_core_EventStream$ = this;
  this.fromCustomSource__F1__F4__F1__Lcom_raquo_airstream_core_EventStream(new $c_sjsr_AnonFunction1(((x$3$2) => {
    $uI(x$3$2);
    return false
  })), new $c_sjsr_AnonFunction4(((x$4$2, x$5$2, x$6$2, x$7$2) => {
    $as_F1(x$4$2);
    $as_F1(x$5$2);
    $as_F0(x$6$2);
    $as_F0(x$7$2)
  })), new $c_sjsr_AnonFunction1(((x$8$2) => {
    $uI(x$8$2)
  })))
}
$c_Lcom_raquo_airstream_core_EventStream$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_EventStream$.prototype.constructor = $c_Lcom_raquo_airstream_core_EventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_EventStream$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_EventStream$.prototype = $c_Lcom_raquo_airstream_core_EventStream$.prototype;
$c_Lcom_raquo_airstream_core_EventStream$.prototype.fromCustomSource__F1__F4__F1__Lcom_raquo_airstream_core_EventStream = (function(shouldStart, start, stop) {
  var config = new $c_sjsr_AnonFunction4(((fireValue$2, fireError$2, getStartIndex$2, getIsStarted$2) => {
    var fireValue = $as_F1(fireValue$2);
    var fireError = $as_F1(fireError$2);
    var getStartIndex = $as_F0(getStartIndex$2);
    var getIsStarted = $as_F0(getIsStarted$2);
    var onStart = new $c_sjsr_AnonFunction0((() => {
      $n(start).apply__O__O__O__O__O(fireValue, fireError, getStartIndex, getIsStarted)
    }));
    var onStop = new $c_sjsr_AnonFunction0((() => {
      var $$x1 = $n(stop);
      var this$2 = $n(getStartIndex);
      $n($$x1).apply$mcVI$sp__I__V($uI(this$2.apply__O()))
    }));
    return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(onStart, onStop).when__F0__Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0((() => {
      var $$x2 = $n(shouldStart);
      var this$4 = $n(getStartIndex);
      return $n($$x2).apply$mcZI$sp__I__Z($uI(this$4.apply__O()))
    })))
  }));
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(config)
});
$c_Lcom_raquo_airstream_core_EventStream$.prototype.periodic__I__Z__Z__Lcom_raquo_airstream_timing_PeriodicEventStream = (function(intervalMs, emitInitial, resetOnStop) {
  return new $c_Lcom_raquo_airstream_timing_PeriodicEventStream(0, new $c_sjsr_AnonFunction1(((eventNumber$2) => {
    var eventNumber = $uI(eventNumber$2);
    return new $c_s_Some(new $c_T2$mcII$sp(((1 + eventNumber) | 0), intervalMs))
  })), emitInitial, resetOnStop)
});
var $d_Lcom_raquo_airstream_core_EventStream$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_EventStream$: 0
}, false, "com.raquo.airstream.core.EventStream$", {
  Lcom_raquo_airstream_core_EventStream$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_EventStream$.prototype.$classData = $d_Lcom_raquo_airstream_core_EventStream$;
var $n_Lcom_raquo_airstream_core_EventStream$;
function $m_Lcom_raquo_airstream_core_EventStream$() {
  if ((!$n_Lcom_raquo_airstream_core_EventStream$)) {
    $n_Lcom_raquo_airstream_core_EventStream$ = new $c_Lcom_raquo_airstream_core_EventStream$()
  };
  return $n_Lcom_raquo_airstream_core_EventStream$
}
function $is_Lcom_raquo_airstream_core_InternalObserver(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_InternalObserver)))
}
function $as_Lcom_raquo_airstream_core_InternalObserver(obj) {
  return (($is_Lcom_raquo_airstream_core_InternalObserver(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.InternalObserver"))
}
function $isArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_InternalObserver)))
}
function $asArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.InternalObserver;", depth))
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var value = $thiz.maybeDisplayName__sjs_js_$bar();
  return $as_T(((value === (void 0)) ? $c_O.prototype.toString__T.call($thiz) : value))
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  var this$2 = $m_Lcom_raquo_airstream_core_Observer$();
  var onNext = new $c_sjsr_AnonFunction1(((x$1$2) => (void 0)));
  this$2.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true)
}
$c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $c_Lcom_raquo_airstream_core_Observer$.prototype;
$c_Lcom_raquo_airstream_core_Observer$.prototype.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$1(onNext, handleObserverErrors, onError)
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Observer$: 0
}, false, "com.raquo.airstream.core.Observer$", {
  Lcom_raquo_airstream_core_Observer$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Observer$.prototype.$classData = $d_Lcom_raquo_airstream_core_Observer$;
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$()
  };
  return $n_Lcom_raquo_airstream_core_Observer$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $c_Lcom_raquo_airstream_core_ObserverList$.prototype;
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.removeObserverNow$extension__sjs_js_Array__O__Z = (function(this$, observer) {
  var index = $m_sjs_js_ArrayOps$().indexOf$extension__sjs_js_Array__O__I__I(this$, observer, 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1)
  };
  return shouldRemove
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_ObserverList$: 0
}, false, "com.raquo.airstream.core.ObserverList$", {
  Lcom_raquo_airstream_core_ObserverList$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.$classData = $d_Lcom_raquo_airstream_core_ObserverList$;
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$()
  };
  return $n_Lcom_raquo_airstream_core_ObserverList$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_core_Protected.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Protected.prototype.constructor = $c_Lcom_raquo_airstream_core_Protected;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Protected.prototype = $c_Lcom_raquo_airstream_core_Protected.prototype;
var $d_Lcom_raquo_airstream_core_Protected = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Protected: 0
}, false, "com.raquo.airstream.core.Protected", {
  Lcom_raquo_airstream_core_Protected: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Protected.prototype.$classData = $d_Lcom_raquo_airstream_core_Protected;
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  new $c_Lcom_raquo_airstream_core_Protected()
}
$c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Protected$.prototype.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $c_Lcom_raquo_airstream_core_Protected$.prototype;
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Protected$: 0
}, false, "com.raquo.airstream.core.Protected$", {
  Lcom_raquo_airstream_core_Protected$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Protected$.prototype.$classData = $d_Lcom_raquo_airstream_core_Protected$;
var $n_Lcom_raquo_airstream_core_Protected$;
function $m_Lcom_raquo_airstream_core_Protected$() {
  if ((!$n_Lcom_raquo_airstream_core_Protected$)) {
    $n_Lcom_raquo_airstream_core_Protected$ = new $c_Lcom_raquo_airstream_core_Protected$()
  };
  return $n_Lcom_raquo_airstream_core_Protected$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Signal$.prototype.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $c_Lcom_raquo_airstream_core_Signal$.prototype;
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Signal$: 0
}, false, "com.raquo.airstream.core.Signal$", {
  Lcom_raquo_airstream_core_Signal$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Signal$.prototype.$classData = $d_Lcom_raquo_airstream_core_Signal$;
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$()
  };
  return $n_Lcom_raquo_airstream_core_Signal$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code = null;
  this.Lcom_raquo_airstream_core_Transaction__f_pendingObservables = null;
  this.Lcom_raquo_airstream_core_Transaction__f_bitmap$init$0 = false;
  this.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code = code;
  this.Lcom_raquo_airstream_core_Transaction__f_pendingObservables = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1(((observable$2) => {
    var observable = $as_Lcom_raquo_airstream_core_BaseObservable(observable$2);
    $m_Lcom_raquo_airstream_core_Protected$();
    return $n(observable).topoRank__I()
  })));
  this.Lcom_raquo_airstream_core_Transaction__f_bitmap$init$0 = true;
  $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().add__Lcom_raquo_airstream_core_Transaction__V(this)
}
$c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $c_Lcom_raquo_airstream_core_Transaction.prototype;
$c_Lcom_raquo_airstream_core_Transaction.prototype.pendingObservables__Lcom_raquo_airstream_util_JsPriorityQueue = (function() {
  if ((!this.Lcom_raquo_airstream_core_Transaction__f_bitmap$init$0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/Transaction.scala: 20")
  };
  return this.Lcom_raquo_airstream_core_Transaction__f_pendingObservables
});
function $as_Lcom_raquo_airstream_core_Transaction(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_Transaction) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.Transaction"))
}
function $isArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_Transaction)))
}
function $asArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.Transaction;", depth))
}
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction: 0
}, false, "com.raquo.airstream.core.Transaction", {
  Lcom_raquo_airstream_core_Transaction: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction;
function $p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver__Z($thiz) {
  if (((((2 & $thiz.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/Transaction.scala: 169")
  };
  return $thiz.Lcom_raquo_airstream_core_Transaction$__f_isSafeToRemoveObserver
}
function $p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver_$eq__Z__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_core_Transaction$__f_isSafeToRemoveObserver = x$1;
  $thiz.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0 = (((2 | $thiz.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0) << 24) >> 24)
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.Lcom_raquo_airstream_core_Transaction$__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_core_Transaction$__f_pendingObserverRemovals = null;
  this.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0 = 0;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.Lcom_raquo_airstream_core_Transaction$__f_isSafeToRemoveObserver = true;
  this.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_core_Transaction$__f_pendingObserverRemovals = [];
  this.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0 = (((4 | this.Lcom_raquo_airstream_core_Transaction$__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $c_Lcom_raquo_airstream_core_Transaction$.prototype;
$c_Lcom_raquo_airstream_core_Transaction$.prototype.removeExternalObserver__Lcom_raquo_airstream_core_Observable__Lcom_raquo_airstream_core_Observer__V = (function(observable, observer) {
  if ($p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver__Z(this)) {
    var this$1 = $n(observable);
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V(this$1, observer)
  } else {
    this.Lcom_raquo_airstream_core_Transaction$__f_pendingObserverRemovals.push(new $c_sjsr_AnonFunction0((() => {
      var this$3 = $n(observable);
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V(this$3, observer)
    })))
  }
});
$c_Lcom_raquo_airstream_core_Transaction$.prototype.removeInternalObserver__Lcom_raquo_airstream_core_Observable__Lcom_raquo_airstream_core_InternalObserver__V = (function(observable, observer) {
  if ($p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver__Z(this)) {
    var this$1 = $n(observable);
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V(this$1, observer)
  } else {
    this.Lcom_raquo_airstream_core_Transaction$__f_pendingObserverRemovals.push(new $c_sjsr_AnonFunction0((() => {
      var this$3 = $n(observable);
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V(this$3, observer)
    })))
  }
});
$c_Lcom_raquo_airstream_core_Transaction$.prototype.com$raquo$airstream$core$Transaction$$resolvePendingObserverRemovals__V = (function() {
  if ((!$p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver__Z(this))) {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "It's not safe to remove observers right now!");
    throw th
  };
  var array = this.Lcom_raquo_airstream_core_Transaction$__f_pendingObserverRemovals;
  var len = $uI(array.length);
  var i = 0;
  while ((i < len)) {
    var arg1 = array[i];
    var remove = $as_F0(arg1);
    var this$4 = $n(remove);
    this$4.apply__O();
    i = ((1 + i) | 0)
  };
  var array$1 = this.Lcom_raquo_airstream_core_Transaction$__f_pendingObserverRemovals;
  array$1.length = 0
});
$c_Lcom_raquo_airstream_core_Transaction$.prototype.com$raquo$airstream$core$Transaction$$run__Lcom_raquo_airstream_core_Transaction__V = (function(transaction) {
  $p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver_$eq__Z__V(this, false);
  try {
    $n($n(transaction).Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code).apply__O__O(transaction);
    var this$1 = $n(transaction);
    while (true) {
      var this$2 = $n(this$1.pendingObservables__Lcom_raquo_airstream_util_JsPriorityQueue());
      if (($uI(this$2.Lcom_raquo_airstream_util_JsPriorityQueue__f_com$raquo$airstream$util$JsPriorityQueue$$queue.length) !== 0)) {
        var this$3 = $n(this$1.pendingObservables__Lcom_raquo_airstream_util_JsPriorityQueue());
        if (($uI(this$3.Lcom_raquo_airstream_util_JsPriorityQueue__f_com$raquo$airstream$util$JsPriorityQueue$$queue.length) === 0)) {
          var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
          throw th
        };
        $n($as_Lcom_raquo_airstream_core_SyncObservable(this$3.Lcom_raquo_airstream_util_JsPriorityQueue__f_com$raquo$airstream$util$JsPriorityQueue$$queue.shift())).syncFire__Lcom_raquo_airstream_core_Transaction__V(this$1)
      } else {
        break
      }
    }
  } finally {
    $p_Lcom_raquo_airstream_core_Transaction$__isSafeToRemoveObserver_$eq__Z__V(this, true);
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().done__Lcom_raquo_airstream_core_Transaction__V(transaction)
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction$: 0
}, false, "com.raquo.airstream.core.Transaction$", {
  Lcom_raquo_airstream_core_Transaction$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction$.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction$;
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$()
  };
  return $n_Lcom_raquo_airstream_core_Transaction$
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List($thiz) {
  if (((((1 & $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/Transaction.scala: 47")
  };
  return $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack_$eq__sci_List__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = x$1;
  $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0 = (((1 | $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0) << 24) >> 24)
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($thiz) {
  if (((((2 & $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/Transaction.scala: 49")
  };
  return $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__childrenFor__Lcom_raquo_airstream_core_Transaction__sci_List($thiz, transaction) {
  var map = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($thiz);
  return $as_sci_List(($uZ(map.has(transaction)) ? map.get(transaction) : $m_s_package$().s_package$__f_Nil))
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  var this$1 = $n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List($thiz));
  $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack_$eq__sci_List__V($thiz, new $c_sci_$colon$colon(transaction, this$1))
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__s_Option($thiz) {
  var result = $n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List($thiz)).headOption__s_Option();
  var this$1 = $n(result);
  if ((!this$1.isEmpty__Z())) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack_$eq__sci_List__V($thiz, $as_sci_List($n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List($thiz)).tail__O()))
  };
  return result
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var this$1 = $n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__childrenFor__Lcom_raquo_airstream_core_Transaction__sci_List($thiz, parent));
  var newChildren = $as_sci_List($f_sc_StrictOptimizedSeqOps__appended__O__O(this$1, newChild));
  var map = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($thiz);
  map.set(parent, newChildren)
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__s_Option($thiz, parent) {
  var parentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__childrenFor__Lcom_raquo_airstream_core_Transaction__sci_List($thiz, parent);
  var this$1 = $n(parentChildren);
  if ((!this$1.isEmpty__Z())) {
    var nextChild = $as_Lcom_raquo_airstream_core_Transaction($n(parentChildren).head__O());
    var updatedChildren = $as_sci_List($n(parentChildren).tail__O());
    var this$2 = $n(updatedChildren);
    if ((!this$2.isEmpty__Z())) {
      var map = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($thiz);
      map.set(parent, updatedChildren)
    } else {
      var map$1 = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($thiz);
      map$1.delete(parent)
    };
    return new $c_s_Some(nextChild)
  } else {
    return $m_s_None$()
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = null;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children = null;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0 = 0;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = $m_s_package$().s_package$__f_Nil;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0 = (((1 | this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children = new Map();
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype;
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.add__Lcom_raquo_airstream_core_Transaction__V = (function(newTransaction) {
  var this$1 = $n($n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List(this)).headOption__s_Option());
  if (this$1.isEmpty__Z()) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$(), newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$run__Lcom_raquo_airstream_core_Transaction__V(newTransaction)
  } else {
    var arg1 = this$1.get__O();
    var currentTransaction = $as_Lcom_raquo_airstream_core_Transaction(arg1);
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$(), currentTransaction, newTransaction)
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.done__Lcom_raquo_airstream_core_Transaction__V = (function(transaction) {
  if ((!$n($n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List(this)).headOption__s_Option()).contains__O__Z(transaction))) {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    throw th
  };
  $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$resolvePendingObserverRemovals__V();
  this.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V(transaction);
  var this$2 = $n($n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List(this)).headOption__s_Option());
  if (this$2.isEmpty__Z()) {
    var map = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$());
    var self = map[Symbol.iterator]();
    var this$7 = new $c_sjs_js_Iterator$WrappedIterator(self);
    var f = new $c_sjsr_AnonFunction1(((kv$2) => $ct_T2__O__O__(new $c_T2(), kv$2[0], kv$2[1])));
    if (new $c_sc_Iterator$$anon$9(this$7, f).hasNext__Z()) {
      var map$1 = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$());
      var result = 0;
      var self$1 = map$1[Symbol.iterator]();
      var this$12 = new $c_sjs_js_Iterator$WrappedIterator(self$1);
      var f$1 = new $c_sjsr_AnonFunction1(((kv$2$1) => $ct_T2__O__O__(new $c_T2(), kv$2$1[0], kv$2$1[1])));
      var it = new $c_sc_Iterator$$anon$9(this$12, f$1);
      while (it.hasNext__Z()) {
        var arg1 = result;
        var arg2 = it.next__O();
        var acc = $uI(arg1);
        var t = $as_T2(arg2);
        var this$13 = $n($as_sc_SeqOps($n(t)._2__O()));
        result = ((acc + this$13.length__I()) | 0)
      };
      var th$1 = $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + result) + " children for ") + $uI($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__children__sjs_js_Map($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$()).size)) + " transactions remain. This is a bug in Airstream."));
      throw th$1
    }
  } else {
    var arg1$1 = this$2.get__O();
    var nextTransaction = $as_Lcom_raquo_airstream_core_Transaction(arg1$1);
    $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$run__Lcom_raquo_airstream_core_Transaction__V(nextTransaction)
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V = (function(doneTransaction) {
  var this$1 = $n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__s_Option(this, doneTransaction));
  if (this$1.isEmpty__Z()) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__s_Option($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$());
    var this$2 = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
    var this$3 = $n($n($p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__stack__sci_List(this$2)).headOption__s_Option());
    if ((!this$3.isEmpty__Z())) {
      var arg1 = this$3.get__O();
      var parentTransaction = $as_Lcom_raquo_airstream_core_Transaction(arg1);
      $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V(parentTransaction)
    }
  } else {
    var arg1$1 = this$1.get__O();
    var nextChild = $as_Lcom_raquo_airstream_core_Transaction(arg1$1);
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$(), nextChild)
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction$pendingTransactions$: 0
}, false, "com.raquo.airstream.core.Transaction$pendingTransactions$", {
  Lcom_raquo_airstream_core_Transaction$pendingTransactions$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$()
  };
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config(onStart, onStop) {
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart = null;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop = null;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart = onStart;
  this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop = onStop
}
$c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype;
$c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype.when__F0__Lcom_raquo_airstream_custom_CustomSource$Config = (function(passes) {
  var started = new $c_sr_BooleanRef(false);
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0((() => {
    var this$3 = $n(passes);
    if ($uZ(this$3.apply__O())) {
      started.sr_BooleanRef__f_elem = true;
      var this$4 = $n(this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart);
      this$4.apply__O()
    }
  })), new $c_sjsr_AnonFunction0((() => {
    if (started.sr_BooleanRef__f_elem) {
      var this$5 = $n(this.Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop);
      this$5.apply__O()
    };
    started.sr_BooleanRef__f_elem = false
  })))
});
function $as_Lcom_raquo_airstream_custom_CustomSource$Config(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_custom_CustomSource$Config) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.custom.CustomSource$Config"))
}
function $isArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_custom_CustomSource$Config)))
}
function $asArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_custom_CustomSource$Config(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.custom.CustomSource$Config;", depth))
}
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().initClass({
  Lcom_raquo_airstream_custom_CustomSource$Config: 0
}, false, "com.raquo.airstream.custom.CustomSource$Config", {
  Lcom_raquo_airstream_custom_CustomSource$Config: 1,
  O: 1
});
$c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype.$classData = $d_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBus$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_eventbus_EventBus$.prototype = new $h_O();
$c_Lcom_raquo_airstream_eventbus_EventBus$.prototype.constructor = $c_Lcom_raquo_airstream_eventbus_EventBus$;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBus$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_eventbus_EventBus$.prototype = $c_Lcom_raquo_airstream_eventbus_EventBus$.prototype;
var $d_Lcom_raquo_airstream_eventbus_EventBus$ = new $TypeData().initClass({
  Lcom_raquo_airstream_eventbus_EventBus$: 0
}, false, "com.raquo.airstream.eventbus.EventBus$", {
  Lcom_raquo_airstream_eventbus_EventBus$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_eventbus_EventBus$.prototype.$classData = $d_Lcom_raquo_airstream_eventbus_EventBus$;
var $n_Lcom_raquo_airstream_eventbus_EventBus$;
function $m_Lcom_raquo_airstream_eventbus_EventBus$() {
  if ((!$n_Lcom_raquo_airstream_eventbus_EventBus$)) {
    $n_Lcom_raquo_airstream_eventbus_EventBus$ = new $c_Lcom_raquo_airstream_eventbus_EventBus$()
  };
  return $n_Lcom_raquo_airstream_eventbus_EventBus$
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_WriteBus$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_eventbus_WriteBus$.prototype = new $h_O();
$c_Lcom_raquo_airstream_eventbus_WriteBus$.prototype.constructor = $c_Lcom_raquo_airstream_eventbus_WriteBus$;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_WriteBus$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_eventbus_WriteBus$.prototype = $c_Lcom_raquo_airstream_eventbus_WriteBus$.prototype;
var $d_Lcom_raquo_airstream_eventbus_WriteBus$ = new $TypeData().initClass({
  Lcom_raquo_airstream_eventbus_WriteBus$: 0
}, false, "com.raquo.airstream.eventbus.WriteBus$", {
  Lcom_raquo_airstream_eventbus_WriteBus$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_eventbus_WriteBus$.prototype.$classData = $d_Lcom_raquo_airstream_eventbus_WriteBus$;
var $n_Lcom_raquo_airstream_eventbus_WriteBus$;
function $m_Lcom_raquo_airstream_eventbus_WriteBus$() {
  if ((!$n_Lcom_raquo_airstream_eventbus_WriteBus$)) {
    $n_Lcom_raquo_airstream_eventbus_WriteBus$ = new $c_Lcom_raquo_airstream_eventbus_WriteBus$()
  };
  return $n_Lcom_raquo_airstream_eventbus_WriteBus$
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription__Z($thiz) {
  if (((((2 & $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/DynamicOwner.scala: 30")
  };
  return $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription_$eq__Z__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = x$1;
  $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((2 | $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24)
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__pendingSubscriptionRemovals__sjs_js_Array($thiz) {
  if (((((4 & $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/DynamicOwner.scala: 32")
  };
  return $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner_$eq__s_Option__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = x$1;
  $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((8 | $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24)
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = $uI($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.indexOf(subscription));
  if ((index !== (-1))) {
    $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.splice(index, 1);
    var this$1 = $n($thiz.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
    if ((!this$1.isEmpty__Z())) {
      $n(subscription).onDeactivate__V()
    }
  } else {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
    throw th
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while (($uI($p_Lcom_raquo_airstream_ownership_DynamicOwner__pendingSubscriptionRemovals__sjs_js_Array($thiz).length) > 0)) {
    var subscriptionToRemove = $as_Lcom_raquo_airstream_ownership_DynamicSubscription($p_Lcom_raquo_airstream_ownership_DynamicOwner__pendingSubscriptionRemovals__sjs_js_Array($thiz).shift());
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscriptionToRemove)
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = 0;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled = onAccessAfterKilled;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions = Array();
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((1 | this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals = [];
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((4 | this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = $m_s_None$();
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((8 | this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0 = (((16 | this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option = (function() {
  if (((((8 & this.Lcom_raquo_airstream_ownership_DynamicOwner__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/DynamicOwner.scala: 34")
  };
  return this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.activate__V = (function() {
  var this$1 = $n(this.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
  if ((!(!this$1.isEmpty__Z()))) {
    var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled);
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner_$eq__s_Option__V(this, new $c_s_Some(newOwner));
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription_$eq__Z__V(this, false);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
    var i = 0;
    var originalNumSubs = $uI(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.length);
    while ((i < originalNumSubs)) {
      var ix = ((i + this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs) | 0);
      var sub = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions[ix]);
      $n(sub).onActivate__Lcom_raquo_airstream_ownership_Owner__V(newOwner);
      i = ((1 + i) | 0)
    };
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription_$eq__Z__V(this, true);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0
  } else {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
    throw th
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.deactivate__V = (function() {
  var this$1 = $n(this.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
  if ((!this$1.isEmpty__Z())) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription_$eq__Z__V(this, false);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.forEach(((arg1$2) => {
      var arg1 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1$2);
      $n(arg1).onDeactivate__V()
    }));
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$2 = $n(this.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
    if ((!this$2.isEmpty__Z())) {
      var arg1$1 = this$2.get__O();
      var x$2 = $as_Lcom_raquo_airstream_ownership_Owner(arg1$1);
      var this$3 = $n(x$2);
      this$3.killSubscriptions__V()
    };
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription_$eq__Z__V(this, true);
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner_$eq__s_Option__V(this, $m_s_None$())
  } else {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
    throw th
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.addSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__Z__V = (function(subscription, prepend) {
  if (prepend) {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = ((1 + this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs) | 0);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.unshift(subscription)
  } else {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.push(subscription)
  };
  var this$1 = $n(this.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var o = $as_Lcom_raquo_airstream_ownership_Owner(arg1);
    $n(subscription).onActivate__Lcom_raquo_airstream_ownership_Owner__V(o)
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.removeSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__V = (function(subscription) {
  if ($p_Lcom_raquo_airstream_ownership_DynamicOwner__isSafeToRemoveSubscription__Z(this)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription)
  } else {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__pendingSubscriptionRemovals__sjs_js_Array(this).push(subscription)
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_DynamicOwner: 0
}, false, "com.raquo.airstream.ownership.DynamicOwner", {
  Lcom_raquo_airstream_ownership_DynamicOwner: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.$classData = $d_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner = dynamicOwner;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate = activate;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $m_s_None$();
  $n(dynamicOwner).addSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__Z__V(this, prepend)
}
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.kill__V = (function() {
  $n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner).removeSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this)
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.onActivate__Lcom_raquo_airstream_ownership_Owner__V = (function(owner) {
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $as_s_Option($n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate).apply__O__O(owner))
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.onDeactivate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var currentSubscription = $as_Lcom_raquo_airstream_ownership_Subscription(arg1);
    $n(currentSubscription).kill__V();
    this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $m_s_None$()
  }
});
function $as_Lcom_raquo_airstream_ownership_DynamicSubscription(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_DynamicSubscription) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.DynamicSubscription"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_DynamicSubscription)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.DynamicSubscription;", depth))
}
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_DynamicSubscription: 0
}, false, "com.raquo.airstream.ownership.DynamicSubscription", {
  Lcom_raquo_airstream_ownership_DynamicSubscription: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.$classData = $d_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.apply__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    return new $c_s_Some($n(activate).apply__O__O(owner))
  })), prepend)
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    $n(activate).apply__O__O(owner);
    return $m_s_None$()
  })), prepend)
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_DynamicSubscription$: 0
}, false, "com.raquo.airstream.ownership.DynamicSubscription$", {
  Lcom_raquo_airstream_ownership_DynamicSubscription$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.$classData = $d_Lcom_raquo_airstream_ownership_DynamicSubscription$;
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$()
  };
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  $thiz.subscriptions__sjs_js_Array().forEach(((arg1$2) => {
    var arg1 = $as_Lcom_raquo_airstream_ownership_Subscription(arg1$2);
    var this$1 = $n(arg1);
    this$1.com$raquo$airstream$ownership$Subscription$$safeCleanup__V()
  }));
  $thiz.subscriptions__sjs_js_Array().length = 0
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = $uI($thiz.subscriptions__sjs_js_Array().indexOf(subscription));
  if ((index !== (-1))) {
    $thiz.subscriptions__sjs_js_Array().splice(index, 1)
  } else {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
    throw th
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.subscriptions__sjs_js_Array().push(subscription)
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.com$raquo$airstream$ownership$Owner$_setter_$subscriptions_$eq__sjs_js_Array__V([])
}
function $is_Lcom_raquo_airstream_ownership_Owner(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_ownership_Owner)))
}
function $as_Lcom_raquo_airstream_ownership_Owner(obj) {
  return (($is_Lcom_raquo_airstream_ownership_Owner(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.Owner"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_Owner)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.Owner;", depth))
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.Lcom_raquo_airstream_ownership_Subscription__f_owner = null;
  this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup = null;
  this.Lcom_raquo_airstream_ownership_Subscription__f_isKilled = false;
  this.Lcom_raquo_airstream_ownership_Subscription__f_owner = owner;
  this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup = cleanup;
  this.Lcom_raquo_airstream_ownership_Subscription__f_isKilled = false;
  $n(owner).own__Lcom_raquo_airstream_ownership_Subscription__V(this)
}
$c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $c_Lcom_raquo_airstream_ownership_Subscription.prototype;
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.kill__V = (function() {
  this.com$raquo$airstream$ownership$Subscription$$safeCleanup__V();
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_Subscription__f_owner);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this$1, this)
});
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.com$raquo$airstream$ownership$Subscription$$safeCleanup__V = (function() {
  if ((!this.Lcom_raquo_airstream_ownership_Subscription__f_isKilled)) {
    var this$1 = $n(this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup);
    this$1.apply__O();
    this.Lcom_raquo_airstream_ownership_Subscription__f_isKilled = true
  } else {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
    throw th
  }
});
function $as_Lcom_raquo_airstream_ownership_Subscription(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_Subscription) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.Subscription"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_Subscription)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.Subscription;", depth))
}
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_Subscription: 0
}, false, "com.raquo.airstream.ownership.Subscription", {
  Lcom_raquo_airstream_ownership_Subscription: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.$classData = $d_Lcom_raquo_airstream_ownership_Subscription;
function $p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription__s_Option($thiz) {
  if (((((1 & $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/TransferableSubscription.scala: 31")
  };
  return $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription
}
function $p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription_$eq__s_Option__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = x$1;
  $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0 = (((1 | $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0) << 24) >> 24)
}
function $p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress__Z($thiz) {
  if (((((2 & $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/TransferableSubscription.scala: 34")
  };
  return $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress
}
function $p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress_$eq__Z__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = x$1;
  $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0 = (((2 | $thiz.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0) << 24) >> 24)
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0 = 0;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate = activate;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate = deactivate;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$();
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0 = (((1 | this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype;
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.isCurrentOwnerActive__Z = (function() {
  var this$1 = $n($p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription__s_Option(this));
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var x$1 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    var this$2 = $n(x$1);
    var this$3 = $n(this$2.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner);
    var this$4 = $n(this$3.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
    return (!this$4.isEmpty__Z())
  } else {
    return false
  }
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.setOwner__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(nextOwner) {
  if ($p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress__Z(this)) {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
    throw th
  };
  var this$2 = $n($p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription__s_Option(this));
  if ((!this$2.isEmpty__Z())) {
    var arg1 = this$2.get__O();
    var x$2 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    var this$3 = $n(x$2);
    var x$2$1 = this$3.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner;
    if ((nextOwner === null)) {
      var $$x1 = (x$2$1 === null)
    } else {
      var this$4 = $n(nextOwner);
      var $$x1 = (this$4 === x$2$1)
    }
  } else {
    var $$x1 = false
  };
  if ((!$$x1)) {
    if (this.isCurrentOwnerActive__Z()) {
      var this$5 = $n(nextOwner);
      var this$6 = $n(this$5.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
      var $$x2 = (!this$6.isEmpty__Z())
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      $p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress_$eq__Z__V(this, true)
    };
    var this$7 = $n($p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription__s_Option(this));
    if ((!this$7.isEmpty__Z())) {
      var arg1$1 = this$7.get__O();
      var subscription = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1$1);
      $n(subscription).kill__V();
      $p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription_$eq__s_Option__V(this, $m_s_None$())
    };
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().apply__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription(nextOwner, new $c_sjsr_AnonFunction1(((parentOwner$2) => {
      var parentOwner = $as_Lcom_raquo_airstream_ownership_Owner(parentOwner$2);
      if ((!$p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress__Z(this))) {
        var this$8 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate);
        this$8.apply__O()
      };
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0((() => {
        if ((!$p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress__Z(this))) {
          var this$9 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate);
          this$9.apply__O()
        }
      })))
    })), false);
    $p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription_$eq__s_Option__V(this, new $c_s_Some(newPilotSubscription));
    $p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress_$eq__Z__V(this, false)
  }
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.clearOwner__V = (function() {
  if ($p_Lcom_raquo_airstream_ownership_TransferableSubscription__isLiveTransferInProgress__Z(this)) {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
    throw th
  };
  var this$2 = $n($p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription__s_Option(this));
  if ((!this$2.isEmpty__Z())) {
    var arg1 = this$2.get__O();
    var subscription = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    $n(subscription).kill__V()
  };
  $p_Lcom_raquo_airstream_ownership_TransferableSubscription__maybeSubscription_$eq__s_Option__V(this, $m_s_None$())
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_TransferableSubscription: 0
}, false, "com.raquo.airstream.ownership.TransferableSubscription", {
  Lcom_raquo_airstream_ownership_TransferableSubscription: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.$classData = $d_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $c_Lcom_raquo_airstream_state_Val$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_state_Val$.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_Val$.prototype.constructor = $c_Lcom_raquo_airstream_state_Val$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Val$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_state_Val$.prototype = $c_Lcom_raquo_airstream_state_Val$.prototype;
var $d_Lcom_raquo_airstream_state_Val$ = new $TypeData().initClass({
  Lcom_raquo_airstream_state_Val$: 0
}, false, "com.raquo.airstream.state.Val$", {
  Lcom_raquo_airstream_state_Val$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_state_Val$.prototype.$classData = $d_Lcom_raquo_airstream_state_Val$;
var $n_Lcom_raquo_airstream_state_Val$;
function $m_Lcom_raquo_airstream_state_Val$() {
  if ((!$n_Lcom_raquo_airstream_state_Val$)) {
    $n_Lcom_raquo_airstream_state_Val$ = new $c_Lcom_raquo_airstream_state_Val$()
  };
  return $n_Lcom_raquo_airstream_state_Val$
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_Var$.prototype.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $c_Lcom_raquo_airstream_state_Var$.prototype;
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().initClass({
  Lcom_raquo_airstream_state_Var$: 0
}, false, "com.raquo.airstream.state.Var$", {
  Lcom_raquo_airstream_state_Var$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_state_Var$.prototype.$classData = $d_Lcom_raquo_airstream_state_Var$;
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$()
  };
  return $n_Lcom_raquo_airstream_state_Var$
}
/** @constructor */
function $c_Lcom_raquo_airstream_util_JsPriorityQueue(getRank) {
  this.Lcom_raquo_airstream_util_JsPriorityQueue__f_com$raquo$airstream$util$JsPriorityQueue$$queue = null;
  this.Lcom_raquo_airstream_util_JsPriorityQueue__f_com$raquo$airstream$util$JsPriorityQueue$$queue = []
}
$c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype;
var $d_Lcom_raquo_airstream_util_JsPriorityQueue = new $TypeData().initClass({
  Lcom_raquo_airstream_util_JsPriorityQueue: 0
}, false, "com.raquo.airstream.util.JsPriorityQueue", {
  Lcom_raquo_airstream_util_JsPriorityQueue: 1,
  O: 1
});
$c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype.$classData = $d_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype;
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype.apply__Lorg_scalajs_dom_EventTarget__T__Z__Lcom_raquo_airstream_core_EventStream = (function(eventTarget, eventKey, useCapture) {
  var config = new $c_sjsr_AnonFunction4(((fireValue$2, x$1$2, x$2$2, x$3$2) => {
    var fireValue = $as_F1(fireValue$2);
    $as_F1(x$1$2);
    $as_F0(x$2$2);
    $as_F0(x$3$2);
    var eventHandler = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(fireValue);
    var onStart = new $c_sjsr_AnonFunction0((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture)
    }));
    var onStop = new $c_sjsr_AnonFunction0((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture)
    }));
    return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(onStart, onStop)
  }));
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(config)
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().initClass({
  Lcom_raquo_airstream_web_DomEventStream$: 0
}, false, "com.raquo.airstream.web.DomEventStream$", {
  Lcom_raquo_airstream_web_DomEventStream$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_web_DomEventStream$.prototype.$classData = $d_Lcom_raquo_airstream_web_DomEventStream$;
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$()
  };
  return $n_Lcom_raquo_airstream_web_DomEventStream$
}
function $is_Lcom_raquo_domtypes_generic_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_domtypes_generic_Modifier)))
}
function $as_Lcom_raquo_domtypes_generic_Modifier(obj) {
  return (($is_Lcom_raquo_domtypes_generic_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.domtypes.generic.Modifier"))
}
function $isArrayOf_Lcom_raquo_domtypes_generic_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_domtypes_generic_Modifier)))
}
function $asArrayOf_Lcom_raquo_domtypes_generic_Modifier(obj, depth) {
  return (($isArrayOf_Lcom_raquo_domtypes_generic_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.domtypes.generic.Modifier;", depth))
}
function $ct_Lcom_raquo_domtypes_generic_builders_Tag__T__Z__($thiz, name, void$1) {
  $thiz.Lcom_raquo_domtypes_generic_builders_Tag__f_name = name;
  return $thiz
}
/** @constructor */
function $c_Lcom_raquo_domtypes_generic_builders_Tag() {
  this.Lcom_raquo_domtypes_generic_builders_Tag__f_name = null
}
$c_Lcom_raquo_domtypes_generic_builders_Tag.prototype = new $h_O();
$c_Lcom_raquo_domtypes_generic_builders_Tag.prototype.constructor = $c_Lcom_raquo_domtypes_generic_builders_Tag;
/** @constructor */
function $h_Lcom_raquo_domtypes_generic_builders_Tag() {
  /*<skip>*/
}
$h_Lcom_raquo_domtypes_generic_builders_Tag.prototype = $c_Lcom_raquo_domtypes_generic_builders_Tag.prototype;
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$c_Lcom_raquo_laminar_DomApi$.prototype.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $c_Lcom_raquo_laminar_DomApi$.prototype;
$c_Lcom_raquo_laminar_DomApi$.prototype.appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  try {
    $n(parent).ref__Lorg_scalajs_dom_Node().appendChild($n(child).ref__Lorg_scalajs_dom_Node());
    return true
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, newChild, oldChild) {
  try {
    $n(parent).ref__Lorg_scalajs_dom_Node().replaceChild($n(newChild).ref__Lorg_scalajs_dom_Node(), $n(oldChild).ref__Lorg_scalajs_dom_Node());
    return true
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lorg_scalajs_dom_HTMLElement = (function(element) {
  var $$x1 = document;
  var this$1 = $n($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag);
  return $$x1.createElement(this$1.Lcom_raquo_domtypes_generic_builders_Tag__f_name)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createCommentNode__T__Lorg_scalajs_dom_Comment = (function(text) {
  return document.createComment(text)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createTextNode__T__Lorg_scalajs_dom_Text = (function(text) {
  return document.createTextNode(text)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugPath__Lorg_scalajs_dom_Node__sci_List__sci_List = (function(element, initial) {
  while (true) {
    var x1 = element;
    if ((x1 === null)) {
      return initial
    } else {
      var temp$element = element.parentNode;
      var rassoc$1 = this.debugNodeDescription__Lorg_scalajs_dom_Node__T(element);
      var this$1 = $n(initial);
      var temp$initial = new $c_sci_$colon$colon(rassoc$1, this$1);
      element = temp$element;
      initial = temp$initial
    }
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugNodeDescription__Lorg_scalajs_dom_Node__T = (function(node) {
  if ($uZ((node instanceof HTMLElement))) {
    var id = $as_T(node.id);
    $m_sc_StringOps$();
    var this$3 = $n(id);
    if ((!(this$3 === ""))) {
      var suffixStr = ("#" + id)
    } else {
      var classes = $as_T(node.className);
      $m_sc_StringOps$();
      var this$6 = $n(classes);
      if ((!(this$6 === ""))) {
        var this$7 = $n(classes);
        var target = $as_T(String.fromCharCode(32));
        var replacement = $as_T(String.fromCharCode(46));
        var this$10 = $n(target);
        var $$x2 = this$7.split(this$10);
        var this$11 = $n(replacement);
        var $$x1 = $$x2.join(this$11);
        var suffixStr = ("." + $as_T($$x1))
      } else {
        var suffixStr = ""
      }
    };
    var this$12 = $n($as_T(node.tagName));
    return ($as_T(this$12.toLowerCase()) + suffixStr)
  } else {
    return $as_T(node.nodeName)
  }
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().initClass({
  Lcom_raquo_laminar_DomApi$: 0
}, false, "com.raquo.laminar.DomApi$", {
  Lcom_raquo_laminar_DomApi$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_DomApi$.prototype.$classData = $d_Lcom_raquo_laminar_DomApi$;
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$()
  };
  return $n_Lcom_raquo_laminar_DomApi$
}
function $f_Lcom_raquo_laminar_api_Airstream__$init$__V($thiz) {
  $thiz.com$raquo$laminar$api$Airstream$_setter_$EventStream_$eq__Lcom_raquo_airstream_core_EventStream$__V($m_Lcom_raquo_airstream_core_EventStream$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$Signal_$eq__Lcom_raquo_airstream_core_Signal$__V($m_Lcom_raquo_airstream_core_Signal$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$Observer_$eq__Lcom_raquo_airstream_core_Observer$__V($m_Lcom_raquo_airstream_core_Observer$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$AirstreamError_$eq__Lcom_raquo_airstream_core_AirstreamError$__V($m_Lcom_raquo_airstream_core_AirstreamError$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$EventBus_$eq__Lcom_raquo_airstream_eventbus_EventBus$__V($m_Lcom_raquo_airstream_eventbus_EventBus$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$WriteBus_$eq__Lcom_raquo_airstream_eventbus_WriteBus$__V($m_Lcom_raquo_airstream_eventbus_WriteBus$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$Val_$eq__Lcom_raquo_airstream_state_Val$__V($m_Lcom_raquo_airstream_state_Val$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$Var_$eq__Lcom_raquo_airstream_state_Var$__V($m_Lcom_raquo_airstream_state_Var$());
  $thiz.com$raquo$laminar$api$Airstream$_setter_$DynamicSubscription_$eq__Lcom_raquo_airstream_ownership_DynamicSubscription$__V($m_Lcom_raquo_airstream_ownership_DynamicSubscription$())
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, extraNodeCount, extraNodes) {
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode = parentNode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = sentinelNode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = extraNodes;
  $m_Lcom_raquo_laminar_lifecycle_InsertContext$().nodesToMap__sci_Seq__Lcom_raquo_airstream_JsMap(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes)
}
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_InsertContext() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_lifecycle_InsertContext.prototype = $c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype;
function $as_Lcom_raquo_laminar_lifecycle_InsertContext(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_lifecycle_InsertContext) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.lifecycle.InsertContext"))
}
function $isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_lifecycle_InsertContext)))
}
function $asArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.lifecycle.InsertContext;", depth))
}
var $d_Lcom_raquo_laminar_lifecycle_InsertContext = new $TypeData().initClass({
  Lcom_raquo_laminar_lifecycle_InsertContext: 0
}, false, "com.raquo.laminar.lifecycle.InsertContext", {
  Lcom_raquo_laminar_lifecycle_InsertContext: 1,
  O: 1
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.$classData = $d_Lcom_raquo_laminar_lifecycle_InsertContext;
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype = $c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype;
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.reserveSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_lifecycle_InsertContext = (function(parentNode) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, sentinelNode);
  return new $c_Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, 0, $m_s_package$().s_package$__f_Nil)
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.nodesToMap__sci_Seq__Lcom_raquo_airstream_JsMap = (function(nodes) {
  var acc = new Map();
  $n(nodes).foreach__F1__V(new $c_sjsr_AnonFunction1(((node$2) => {
    var node = $as_Lcom_raquo_laminar_nodes_ChildNode(node$2);
    return acc.set($n(node).ref__Lorg_scalajs_dom_Node(), node)
  })));
  return acc
});
var $d_Lcom_raquo_laminar_lifecycle_InsertContext$ = new $TypeData().initClass({
  Lcom_raquo_laminar_lifecycle_InsertContext$: 0
}, false, "com.raquo.laminar.lifecycle.InsertContext$", {
  Lcom_raquo_laminar_lifecycle_InsertContext$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.$classData = $d_Lcom_raquo_laminar_lifecycle_InsertContext$;
var $n_Lcom_raquo_laminar_lifecycle_InsertContext$;
function $m_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_lifecycle_InsertContext$)) {
    $n_Lcom_raquo_laminar_lifecycle_InsertContext$ = new $c_Lcom_raquo_laminar_lifecycle_InsertContext$()
  };
  return $n_Lcom_raquo_laminar_lifecycle_InsertContext$
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode = null;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_owner = null;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode = thisNode;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_owner = owner
}
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype;
function $as_Lcom_raquo_laminar_lifecycle_MountContext(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_lifecycle_MountContext) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.lifecycle.MountContext"))
}
function $isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_lifecycle_MountContext)))
}
function $asArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.lifecycle.MountContext;", depth))
}
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().initClass({
  Lcom_raquo_laminar_lifecycle_MountContext: 0
}, false, "com.raquo.laminar.lifecycle.MountContext", {
  Lcom_raquo_laminar_lifecycle_MountContext: 1,
  O: 1
});
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype.$classData = $d_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype = $c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype;
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.apply__F1__s_Option__Lcom_raquo_laminar_modifiers_Inserter = (function(\u03b4child, initialInsertContext) {
  return new $c_Lcom_raquo_laminar_modifiers_Inserter(initialInsertContext, new $c_sjsr_AnonFunction2(((c$2, owner$2) => {
    var c = $as_Lcom_raquo_laminar_lifecycle_InsertContext(c$2);
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    var mountContext = new $c_Lcom_raquo_laminar_lifecycle_MountContext($n(c).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, owner);
    var this$2 = $n($as_Lcom_raquo_airstream_core_BaseObservable($n(\u03b4child).apply__O__O(mountContext)));
    var onNext = new $c_sjsr_AnonFunction1(((newChildNode$2) => {
      var newChildNode = $as_Lcom_raquo_laminar_nodes_ChildNode(newChildNode$2);
      $m_Lcom_raquo_laminar_nodes_ParentNode$().replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z($n(c).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, $n(c).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode, newChildNode);
      $n(c).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = newChildNode
    }));
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$2, onNext, owner)
  })))
});
var $d_Lcom_raquo_laminar_modifiers_ChildInserter$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_ChildInserter$: 0
}, false, "com.raquo.laminar.modifiers.ChildInserter$", {
  Lcom_raquo_laminar_modifiers_ChildInserter$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_ChildInserter$;
var $n_Lcom_raquo_laminar_modifiers_ChildInserter$;
function $m_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_ChildInserter$)) {
    $n_Lcom_raquo_laminar_modifiers_ChildInserter$ = new $c_Lcom_raquo_laminar_modifiers_ChildInserter$()
  };
  return $n_Lcom_raquo_laminar_modifiers_ChildInserter$
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ChildNode$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ChildNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ChildNode$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_ChildNode$.prototype = $c_Lcom_raquo_laminar_nodes_ChildNode$.prototype;
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype.isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(node, ancestor) {
  while (true) {
    if ((node.parentNode !== null)) {
      var effectiveParentNode = node.parentNode
    } else {
      var maybeShadowHost = node.host;
      var this$2 = $m_s_$less$colon$less$();
      var ev = this$2.s_$less$colon$less$__f_singleton;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? ($n(ev), null) : maybeShadowHost)
    };
    if ((effectiveParentNode !== null)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(ancestor, effectiveParentNode)) {
        return true
      } else {
        node = effectiveParentNode
      }
    } else {
      return false
    }
  }
});
var $d_Lcom_raquo_laminar_nodes_ChildNode$ = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_ChildNode$: 0
}, false, "com.raquo.laminar.nodes.ChildNode$", {
  Lcom_raquo_laminar_nodes_ChildNode$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_nodes_ChildNode$.prototype.$classData = $d_Lcom_raquo_laminar_nodes_ChildNode$;
var $n_Lcom_raquo_laminar_nodes_ChildNode$;
function $m_Lcom_raquo_laminar_nodes_ChildNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ChildNode$)) {
    $n_Lcom_raquo_laminar_nodes_ChildNode$ = new $c_Lcom_raquo_laminar_nodes_ChildNode$()
  };
  return $n_Lcom_raquo_laminar_nodes_ChildNode$
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype;
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  var nextParent = new $c_s_Some(parent);
  $n(child).willSetParent__s_Option__V(nextParent);
  var appended = $m_Lcom_raquo_laminar_DomApi$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, child);
  if (appended) {
    var this$1 = $n(child);
    var this$2 = $n(this$1.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option());
    if ((!this$2.isEmpty__Z())) {
      var arg1 = this$2.get__O();
      var childParent = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
      var this$3 = $n($n(childParent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__s_Option());
      if ((!this$3.isEmpty__Z())) {
        var arg1$1 = this$3.get__O();
        var ix = $uI(arg1$1.indexOf(child));
        arg1$1.splice(ix, 1)
      }
    };
    if ($n($n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__s_Option()).isEmpty__Z()) {
      $n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__s_Option__V(new $c_s_Some(Array(child)))
    } else {
      var this$4 = $n($n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__s_Option());
      if ((!this$4.isEmpty__Z())) {
        var arg1$2 = this$4.get__O();
        $uI(arg1$2.push(child))
      }
    };
    $n(child).setParent__s_Option__V(nextParent)
  };
  return appended
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, oldChild, newChild) {
  var elem = false;
  elem = false;
  var this$2 = $n($n(parent).com$raquo$laminar$nodes$ParentNode$$_maybeChildren__s_Option());
  if ((!this$2.isEmpty__Z())) {
    var arg1 = this$2.get__O();
    if ((oldChild === null)) {
      var $$x1 = (newChild === null)
    } else {
      var this$3 = $n(oldChild);
      var $$x1 = (this$3 === newChild)
    };
    if ((!$$x1)) {
      var indexOfChild = $uI(arg1.indexOf(oldChild));
      if ((indexOfChild !== (-1))) {
        var newChildNextParent = new $c_s_Some(parent);
        $n(oldChild).willSetParent__s_Option__V($m_s_None$());
        $n(newChild).willSetParent__s_Option__V(newChildNextParent);
        elem = $m_Lcom_raquo_laminar_DomApi$().replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parent, newChild, oldChild);
        arg1[indexOfChild] = newChild;
        $n(oldChild).setParent__s_Option__V($m_s_None$());
        $n(newChild).setParent__s_Option__V(newChildNextParent)
      }
    }
  };
  return elem
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_ParentNode$: 0
}, false, "com.raquo.laminar.nodes.ParentNode$", {
  Lcom_raquo_laminar_nodes_ParentNode$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.$classData = $d_Lcom_raquo_laminar_nodes_ParentNode$;
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$()
  };
  return $n_Lcom_raquo_laminar_nodes_ParentNode$
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_text = null;
  this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0 = 0;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0 = (((1 | this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_text = $m_Lcom_raquo_laminar_receivers_TextChildReceiver$();
  this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0 = (((2 | this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0 = (((4 | this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype;
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype.text__Lcom_raquo_laminar_receivers_TextChildReceiver$ = (function() {
  if (((((2 & this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/receivers/ChildReceiver.scala: 12")
  };
  return this.Lcom_raquo_laminar_receivers_ChildReceiver$__f_text
});
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().initClass({
  Lcom_raquo_laminar_receivers_ChildReceiver$: 0
}, false, "com.raquo.laminar.receivers.ChildReceiver$", {
  Lcom_raquo_laminar_receivers_ChildReceiver$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype.$classData = $d_Lcom_raquo_laminar_receivers_ChildReceiver$;
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$()
  };
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype;
var $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $TypeData().initClass({
  Lcom_raquo_laminar_receivers_ChildrenReceiver$: 0
}, false, "com.raquo.laminar.receivers.ChildrenReceiver$", {
  Lcom_raquo_laminar_receivers_ChildrenReceiver$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype.$classData = $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
var $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildrenReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$()
  };
  return $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_TextChildReceiver$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_receivers_TextChildReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_TextChildReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_TextChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_TextChildReceiver$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_receivers_TextChildReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_TextChildReceiver$.prototype;
$c_Lcom_raquo_laminar_receivers_TextChildReceiver$.prototype.$less$minus$minus__Lcom_raquo_airstream_core_Source__F1__Lcom_raquo_laminar_modifiers_Inserter = (function(\u03b4node, ev) {
  return $m_Lcom_raquo_laminar_modifiers_ChildInserter$().apply__F1__s_Option__Lcom_raquo_laminar_modifiers_Inserter(new $c_sjsr_AnonFunction1(((x$1$2) => {
    $as_Lcom_raquo_laminar_lifecycle_MountContext(x$1$2);
    var this$2 = $n(\u03b4node);
    var project = new $c_sjsr_AnonFunction1(((x$2$2) => $as_Lcom_raquo_laminar_nodes_TextNode($n(ev).apply__O__O(x$2$2))));
    return new $c_Lcom_raquo_airstream_misc_MapEventStream(this$2, project, $m_s_None$())
  })), $m_s_None$())
});
var $d_Lcom_raquo_laminar_receivers_TextChildReceiver$ = new $TypeData().initClass({
  Lcom_raquo_laminar_receivers_TextChildReceiver$: 0
}, false, "com.raquo.laminar.receivers.TextChildReceiver$", {
  Lcom_raquo_laminar_receivers_TextChildReceiver$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_receivers_TextChildReceiver$.prototype.$classData = $d_Lcom_raquo_laminar_receivers_TextChildReceiver$;
var $n_Lcom_raquo_laminar_receivers_TextChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_TextChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_TextChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_TextChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_TextChildReceiver$()
  };
  return $n_Lcom_raquo_laminar_receivers_TextChildReceiver$
}
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom($n(that).jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return $as_jl_Class(this.jl_Class__f_data.getComponentType())
});
$c_jl_Class.prototype.newArrayOfThisClass__O__O = (function(dimensions) {
  return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
});
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < $uI(lines.length))) {
    var line = $as_T(lines[i]);
    var this$1 = $n(line);
    if ((!(this$1 === ""))) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var x = mtch[1];
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
        var $$x6 = $as_T(classAndMethodName[0]);
        var $$x5 = $as_T(classAndMethodName[1]);
        var x$1 = mtch[2];
        var $$x4 = $as_T(x$1);
        var x$2 = mtch[3];
        var s = $as_T(x$2);
        var $$x3 = $uI(parseInt(s));
        var x$3 = mtch[4];
        if ((x$3 !== (void 0))) {
          var x$1$1 = $as_T(x$3);
          var $$x2 = $uI(parseInt(x$1$1))
        } else {
          var $$x2 = (-1)
        };
        var $$x1 = trace.push(new $c_jl_StackTraceElement($$x6, $$x5, $$x4, $$x3, $$x2));
        $uI($$x1)
      } else {
        $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))))
      }
    };
    i = ((1 + i) | 0)
  };
  var len = $uI(trace.length);
  var result = new ($d_jl_StackTraceElement.getArrayOf().constr)(len);
  i = 0;
  while ((i < len)) {
    $n(result).set(i, $as_jl_StackTraceElement(trace[i]));
    i = ((1 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    var x = matchBCOrS[1];
    var $$x1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
    var x$1 = matchBCOrS[2];
    return [$$x1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))]
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      var x$2 = matchCTOrN[1];
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"]
    } else {
      var matchM = PatM.exec(functionName);
      if ((matchM !== null)) {
        var x$3 = matchM[1];
        return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"]
      } else {
        return ["<jscode>", functionName]
      }
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = $as_T(dict$1[encodedName])
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName)
  };
  var this$3 = $n(base);
  var this$4 = $n($as_T(this$3.split("_").join(".")));
  return $as_T(this$4.split("\uff3f").join("_"))
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    var dict = {};
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value
      };
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0)
    };
    $thiz.jl_StackTrace$__f_decompressedClasses = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedClasses
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses)
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    var dict = {};
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedPrefixes
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes)
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_compressedPrefixes
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes)
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  var this$1 = $n(encodedName);
  if (((this$1.length >= 0) && ($as_T(this$1.substring(0, 7)) === "init___"))) {
    return "<init>"
  } else {
    var this$2 = $n(encodedName);
    var methodNameLen = $uI(this$2.indexOf("__"));
    return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)))
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ($uZ((!(!(!e)))) ? [] : ($uZ((!(!(e.arguments && e.stack)))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ($uZ((!(!(e.stack && e.sourceURL)))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ($uZ((!(!(e.stack && e.number)))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ($uZ((!(!(e.stack && e.fileName)))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ($uZ((!(!(e.message && e["opera#sourceloc"])))) ? ($uZ((!(!(!e.stacktrace)))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ($uZ((!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ($uZ((!(!((e.message && e.stack) && e.stacktrace)))) ? ($uZ((!(!(e.stacktrace.indexOf("called from line") < 0.0)))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ($uZ((!(!(e.stack && (!e.fileName))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))))
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return $as_T($as_T($as_T($as_T($as_T(($as_T(e.stack) + "\n").replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2")).split("\n").slice(0, (-1))
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return $as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("(?:\\n@:0)?\\s+$", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@")).split("\n")
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2")).split("\n");
  return qual$1.slice(1)
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("\\[native code\\]\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^@", "gm"), "{anonymous}()@")).split("\n")
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = $as_T(e.message).split("\n");
  var result = [];
  var i = 2;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[2];
      var x$1 = mtch[1];
      var $$x1 = result.push(((("{anonymous}()@" + x) + ":") + x$1));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = $as_T(((x !== (void 0)) ? x : "{anonymous}"));
      var x$1 = mtch[2];
      var x$2 = mtch[1];
      var $$x1 = result.push(((((fnName + "()@") + x$1) + ":") + x$2));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(.*)@(.+):(\\d+)$");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[1];
      if ((x !== (void 0))) {
        var x$2 = $as_T(x);
        var fnName = (x$2 + "()")
      } else {
        var fnName = "global code"
      };
      var x$1 = mtch[2];
      var x$3 = mtch[3];
      var $$x1 = result.push(((((fnName + "@") + x$1) + ":") + x$3));
      $uI($$x1)
    };
    i = ((1 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[4];
      var $$x1 = $as_T(x);
      var x$1 = mtch[1];
      var x$2 = mtch[2];
      var location = (((($$x1 + ":") + x$1) + ":") + x$2);
      var x$3 = mtch[2];
      var fnName0 = $as_T(((x$3 !== (void 0)) ? x$3 : "global code"));
      var fnName = $as_T($as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function: (\\S+)>"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function>"), "{anonymous}"));
      $uI(result.push(((fnName + "@") + location)))
    };
    i = ((2 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return []
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
      var prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
      var this$1 = $n(encodedName$1);
      if ((this$1.length >= 0)) {
        var this$2 = $n(prefix);
        var $$x2 = this$1.substring(0, this$2.length);
        var $$x1 = ($as_T($$x2) === prefix)
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        var $$x4 = $as_T(dict[prefix]);
        var this$4 = $n(prefix);
        var $$x3 = encodedName$1.substring(this$4.length);
        return (("" + $$x4) + $as_T($$x3))
      } else {
        i = ((1 + i) | 0)
      }
    } else {
      var this$5 = $n(encodedName$1);
      if (((this$5.length >= 0) && ($as_T(this$5.substring(0, 1)) === "L"))) {
        return $as_T(encodedName$1.substring(1))
      } else {
        return encodedName$1
      }
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.jl_StackTrace$__f_decompressedClasses = null;
  this.jl_StackTrace$__f_decompressedPrefixes = null;
  this.jl_StackTrace$__f_compressedPrefixes = null;
  this.jl_StackTrace$__f_bitmap$0 = 0
}
$c_jl_StackTrace$.prototype = new $h_O();
$c_jl_StackTrace$.prototype.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
  /*<skip>*/
}
$h_jl_StackTrace$.prototype = $c_jl_StackTrace$.prototype;
$c_jl_StackTrace$.prototype.extract__O__Ajl_StackTraceElement = (function(jsError) {
  var lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError);
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, lines)
});
var $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
  /*<skip>*/
}
$c_jl_StackTrace$StringRE$.prototype = new $h_O();
$c_jl_StackTrace$StringRE$.prototype.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
  /*<skip>*/
}
$h_jl_StackTrace$StringRE$.prototype = $c_jl_StackTrace$StringRE$.prototype;
$c_jl_StackTrace$StringRE$.prototype.re$extension0__T__O = (function(this$) {
  return new RegExp(this$)
});
$c_jl_StackTrace$StringRE$.prototype.re$extension1__T__T__O = (function(this$, mods) {
  return new RegExp(this$, mods)
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().initClass({
  jl_StackTrace$StringRE$: 0
}, false, "java.lang.StackTrace$StringRE$", {
  jl_StackTrace$StringRE$: 1,
  O: 1
});
$c_jl_StackTrace$StringRE$.prototype.$classData = $d_jl_StackTrace$StringRE$;
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$()
  };
  return $n_jl_StackTrace$StringRE$
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
  /*<skip>*/
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1))
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1)
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
  /*<skip>*/
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  var this$1 = $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
}
/** @constructor */
function $c_jl_reflect_Array$() {
  /*<skip>*/
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
  /*<skip>*/
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__I__O = (function(componentType, length) {
  return $n(componentType).newArrayOfThisClass__O__O([length])
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array)
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid
      } else if ((cmp === 0)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = $n(a).get(i$1);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var i$2 = i;
    var t$1 = $n(b).get(i$2);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
  };
  var len = $n(original).u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), retLength), 1);
  $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
  return ret
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $$x1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_s_PartialFunction$() {
  this.s_PartialFunction$__f_fallback_fn = null;
  this.s_PartialFunction$__f_empty_pf = null;
  $n_s_PartialFunction$ = this;
  this.s_PartialFunction$__f_fallback_fn = new $c_sjsr_AnonFunction1(((x$2$2) => $m_s_PartialFunction$().s_PartialFunction$__f_fallback_fn));
  new $c_sjsr_AnonFunction1(((x$3$2) => false));
  this.s_PartialFunction$__f_empty_pf = new $c_s_PartialFunction$$anon$1()
}
$c_s_PartialFunction$.prototype = new $h_O();
$c_s_PartialFunction$.prototype.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
  /*<skip>*/
}
$h_s_PartialFunction$.prototype = $c_s_PartialFunction$.prototype;
var $d_s_PartialFunction$ = new $TypeData().initClass({
  s_PartialFunction$: 0
}, false, "scala.PartialFunction$", {
  s_PartialFunction$: 1,
  O: 1
});
$c_s_PartialFunction$.prototype.$classData = $d_s_PartialFunction$;
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$()
  };
  return $n_s_PartialFunction$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O())
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ((res && $n(it).hasNext__Z())) {
    res = $uZ($n(p).apply__O__O($n(it).next__O()))
  };
  return res
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $n(it).hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback))
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
  /*<skip>*/
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
var $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 64
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
  /*<skip>*/
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = null
}
$c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
  /*<skip>*/
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $c_sci_LazyList$LazyBuilder$DeferredState.prototype;
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.eval__sci_LazyList$State = (function() {
  var state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized")
  };
  return $as_sci_LazyList$State($n(state).apply__O())
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.init__F0__V = (function(state) {
  if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
    throw new $c_jl_IllegalStateException("already initialized")
  };
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = state
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass({
  sci_LazyList$LazyBuilder$DeferredState: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", {
  sci_LazyList$LazyBuilder$DeferredState: 1,
  O: 1
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.$classData = $d_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0)
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
  /*<skip>*/
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var this$1 = $n(a);
  var componentType = $objectGetClass(this$1).getComponentType__jl_Class();
  var length = ((1 + $n(a).u.length) | 0);
  var ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
  var length$1 = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
  $n(ac).set(0, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0)
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0)
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
/** @constructor */
function $c_scm_MutationTracker$() {
  /*<skip>*/
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
  /*<skip>*/
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message)
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass({
  scm_MutationTracker$: 0
}, false, "scala.collection.mutable.MutationTracker$", {
  scm_MutationTracker$: 1,
  O: 1
});
$c_scm_MutationTracker$.prototype.$classData = $d_scm_MutationTracker$;
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$()
  };
  return $n_scm_MutationTracker$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_Nil = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Iterable$();
  $m_sc_Iterable$();
  $m_sci_Seq$();
  $m_sci_IndexedSeq$();
  $m_sc_Iterator$();
  $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  $m_sci_LazyList$();
  $m_sci_Vector$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC($n(x3));
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC($n(x3));
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC($n(xc));
    var this$2 = $uC($n(x2));
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC($n(xc));
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC($n(xc));
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
var $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I($n(x))
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
  /*<skip>*/
}
$c_sjs_js_ArrayOps$.prototype = new $h_O();
$c_sjs_js_ArrayOps$.prototype.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
  /*<skip>*/
}
$h_sjs_js_ArrayOps$.prototype = $c_sjs_js_ArrayOps$.prototype;
$c_sjs_js_ArrayOps$.prototype.indexOf$extension__sjs_js_Array__O__I__I = (function(this$, elem, from) {
  var len = $uI(this$.length);
  var i = from;
  while ((i < len)) {
    var arg1 = this$[i];
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, arg1)) {
      return i
    };
    i = ((1 + i) | 0)
  };
  return (-1)
});
var $d_sjs_js_ArrayOps$ = new $TypeData().initClass({
  sjs_js_ArrayOps$: 0
}, false, "scala.scalajs.js.ArrayOps$", {
  sjs_js_ArrayOps$: 1,
  O: 1
});
$c_sjs_js_ArrayOps$.prototype.$classData = $d_sjs_js_ArrayOps$;
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$()
  };
  return $n_sjs_js_ArrayOps$
}
/** @constructor */
function $c_sjs_js_timers_package$() {
  /*<skip>*/
}
$c_sjs_js_timers_package$.prototype = new $h_O();
$c_sjs_js_timers_package$.prototype.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
  /*<skip>*/
}
$h_sjs_js_timers_package$.prototype = $c_sjs_js_timers_package$.prototype;
$c_sjs_js_timers_package$.prototype.setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle = (function(interval, body) {
  return setTimeout((() => {
    var this$2 = $n(body);
    this$2.apply__O()
  }), interval)
});
$c_sjs_js_timers_package$.prototype.clearTimeout__sjs_js_timers_SetTimeoutHandle__V = (function(handle) {
  clearTimeout(handle)
});
var $d_sjs_js_timers_package$ = new $TypeData().initClass({
  sjs_js_timers_package$: 0
}, false, "scala.scalajs.js.timers.package$", {
  sjs_js_timers_package$: 1,
  O: 1
});
$c_sjs_js_timers_package$.prototype.$classData = $d_sjs_js_timers_package$;
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$()
  };
  return $n_sjs_js_timers_package$
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
  /*<skip>*/
}
$c_s_util_control_NonFatal$.prototype = new $h_O();
$c_s_util_control_NonFatal$.prototype.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
  /*<skip>*/
}
$h_s_util_control_NonFatal$.prototype = $c_s_util_control_NonFatal$.prototype;
$c_s_util_control_NonFatal$.prototype.apply__jl_Throwable__Z = (function(t) {
  return (!((t instanceof $c_jl_VirtualMachineError) || (false || (false || (false || false)))))
});
$c_s_util_control_NonFatal$.prototype.unapply__jl_Throwable__s_Option = (function(t) {
  return (this.apply__jl_Throwable__Z(t) ? new $c_s_Some(t) : $m_s_None$())
});
var $d_s_util_control_NonFatal$ = new $TypeData().initClass({
  s_util_control_NonFatal$: 0
}, false, "scala.util.control.NonFatal$", {
  s_util_control_NonFatal$: 1,
  O: 1
});
$c_s_util_control_NonFatal$.prototype.$classData = $d_s_util_control_NonFatal$;
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$()
  };
  return $n_s_util_control_NonFatal$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_s_util_hashing_MurmurHash3.prototype.tuple2Hash__I__I__I__I = (function(x, y, seed) {
  var h = seed;
  h = this.mix__I__I__I(h, $f_T__hashCode__I("Tuple2"));
  h = this.mix__I__I__I(h, x);
  h = this.mix__I__I__I(h, y);
  return this.finalizeHash__I__I__I(h, 2)
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()))
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())))
    };
    var i = 0;
    while ((i < arr)) {
      var $$x1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0)
  };
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0)
  };
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
  };
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $$x1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, i)
    };
    prev = hash;
    i = ((1 + i) | 0)
  };
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3
        };
        break
      }
    };
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail
  };
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, ($n(a).get(0) ? 1231 : 1237)), 1);
      break
    }
    default: {
      var initial = ($n(a).get(0) ? 1231 : 1237);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = ($n(a).get(1) ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = ($n(a).get(i) ? 1231 : 1237);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, ($n(a).get(i) ? 1231 : 1237));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var dv = $n(a).get(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
      break
    }
    default: {
      var dv$1 = $n(a).get(0);
      var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var dv$2 = $n(a).get(1);
      var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var dv$3 = $n(a).get(i);
        var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var dv$4 = $n(a).get(i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().doubleHash__D__I(dv$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var fv = $n(a).get(0);
      var this$1 = $m_sr_Statics$();
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, this$1.doubleHash__D__I(fv)), 1);
      break
    }
    default: {
      var fv$1 = $n(a).get(0);
      var this$2 = $m_sr_Statics$();
      var initial = this$2.doubleHash__D__I(fv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var fv$2 = $n(a).get(1);
      var this$3 = $m_sr_Statics$();
      var prev = this$3.doubleHash__D__I(fv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var fv$3 = $n(a).get(i);
        var this$4 = $m_sr_Statics$();
        var hash = this$4.doubleHash__D__I(fv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var fv$4 = $n(a).get(i);
            var this$5 = $m_sr_Statics$();
            h = this.mix__I__I__I($$x2, this$5.doubleHash__D__I(fv$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var t = $n(a).get(0);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
      break
    }
    default: {
      var t$1 = $n(a).get(0);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var t$2 = $n(a).get(1);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var t$3 = $n(a).get(i);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var t$4 = $n(a).get(i);
            var lo$4 = t$4.RTLong__f_lo;
            var hi$4 = t$4.RTLong__f_hi;
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
      break
    }
    default: {
      h = this.mix__I__I__I(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        if ((rangeDiff !== ((-prev) | 0))) {
          h = this.mix__I__I__I(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = 0;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0 = 0;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks = $as_scm_Buffer($m_scm_Buffer$().apply__sci_Seq__sc_SeqOps($m_sci_Nil$()));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0 = (64 | this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0);
  this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback = new $c_sjsr_AnonFunction1(((err$2) => {
    var err = $as_jl_Throwable(err$2);
    try {
      var $$x2 = console;
      var $$x1 = $n(err).getMessage__T();
      var this$2 = $n($m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($n(err).getStackTrace__Ajl_StackTraceElement()));
      $$x2.error((($$x1 + "\n") + $f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", "\n", "")))
    } catch (e) {
      /*<skip>*/
    }
  }));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0 = (128 | this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0);
  new $c_sjsr_AnonFunction1(((x$4$2) => {
    $as_jl_Throwable(x$4$2);
    debugger
  }));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0 = (256 | this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0);
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback = new $c_sjsr_AnonFunction1(((err$3$2) => {
    var err$3 = $as_jl_Throwable(err$3$2);
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    throw ((err$3 instanceof $c_sjs_js_JavaScriptException) ? err$3.sjs_js_JavaScriptException__f_exception : $n(err$3))
  }));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0 = (512 | this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0);
  new $c_sjsr_AnonFunction1(((err$4$2) => {
    var err$4 = $as_jl_Throwable(err$4$2);
    $m_sjs_js_timers_package$().setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle(0.0, new $c_sjsr_AnonFunction0((() => {
      throw ((err$4 instanceof $c_sjs_js_JavaScriptException) ? err$4.sjs_js_JavaScriptException__f_exception : $n(err$4))
    })))
  }));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0 = (1024 | this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0);
  this.registerUnhandledErrorCallback__F1__V(this.consoleErrorCallback__F1())
}
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype;
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.consoleErrorCallback__F1 = (function() {
  if (((128 & this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/AirstreamError.scala: 73")
  };
  return this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.unsafeRethrowErrorCallback__F1 = (function() {
  if (((512 & this.Lcom_raquo_airstream_core_AirstreamError$__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/AirstreamError.scala: 90")
  };
  return this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.registerUnhandledErrorCallback__F1__V = (function(fn) {
  var this$1 = $n(this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks);
  $as_scm_Buffer(this$1.addOne__O__scm_Growable(fn))
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.sendUnhandledError__jl_Throwable__V = (function(err) {
  var this$1 = $n(this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks);
  var it = this$1.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var arg1 = $n(it).next__O();
    var fn = $as_F1(arg1);
    try {
      $n(fn).apply__O__O(err)
    } catch (e) {
      var e$1 = e;
      var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
      var x$2 = $m_Lcom_raquo_airstream_core_AirstreamError$().unsafeRethrowErrorCallback__F1();
      if (((fn === null) ? (x$2 === null) : $n(fn).equals__O__Z(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
      } else {
        console.warn("Error processing an unhandled error callback:");
        $m_sjs_js_timers_package$().setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle(0.0, new $c_sjsr_AnonFunction0(((e$2) => (() => {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
        }))(e$2)))
      }
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$: 0
}, false, "com.raquo.airstream.core.AirstreamError$", {
  Lcom_raquo_airstream_core_AirstreamError$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$;
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$()
  };
  return $n_Lcom_raquo_airstream_core_AirstreamError$
}
function $p_Lcom_raquo_airstream_ownership_OneTimeOwner__com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever_$eq__Z__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever = x$1;
  $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0 = (((1 | $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0) << 24) >> 24)
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled = null;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever = false;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions = null;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0 = 0;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever = false;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0 = (((1 | this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype;
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.subscriptions__sjs_js_Array = (function() {
  if (((((2 & this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/OneTimeOwner.scala: 9")
  };
  return this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.com$raquo$airstream$ownership$Owner$_setter_$subscriptions_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions = x$1;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever__Z = (function() {
  if (((((1 & this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/ownership/OneTimeOwner.scala: 11")
  };
  return this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.own__Lcom_raquo_airstream_ownership_Subscription__V = (function(subscription) {
  if (this.com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever__Z()) {
    var this$1 = $n(subscription);
    this$1.com$raquo$airstream$ownership$Subscription$$safeCleanup__V();
    var this$2 = $n(this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled);
    this$2.apply__O()
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription)
  }
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.killSubscriptions__V = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  $p_Lcom_raquo_airstream_ownership_OneTimeOwner__com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever_$eq__Z__V(this, true)
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_OneTimeOwner: 0
}, false, "com.raquo.airstream.ownership.OneTimeOwner", {
  Lcom_raquo_airstream_ownership_OneTimeOwner: 1,
  O: 1,
  Lcom_raquo_airstream_ownership_Owner: 1
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.$classData = $d_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype;
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype.apply__O__V = (function(element) {
  /*<skip>*/
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$$anon$1: 0
}, false, "com.raquo.laminar.api.Laminar$$anon$1", {
  Lcom_raquo_laminar_api_Laminar$$anon$1: 1,
  O: 1,
  Lcom_raquo_domtypes_generic_Modifier: 1
});
$c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$3(fn$4) {
  this.Lcom_raquo_laminar_api_Laminar$$anon$3__f_fn$4 = null;
  this.Lcom_raquo_laminar_api_Laminar$$anon$3__f_fn$4 = fn$4
}
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$3;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$3() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype = $c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype;
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  var this$2 = $n($n(element).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
  var this$3 = $n(this$2.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
  var elem = (!this$3.isEmpty__Z());
  var ignoreNextActivation = new $c_sr_BooleanRef(elem);
  var activate = new $c_sjsr_AnonFunction1(((c$2) => {
    var c = $as_Lcom_raquo_laminar_lifecycle_MountContext(c$2);
    if (ignoreNextActivation.sr_BooleanRef__f_elem) {
      ignoreNextActivation.sr_BooleanRef__f_elem = false
    } else {
      $n(this.Lcom_raquo_laminar_api_Laminar$$anon$3__f_fn$4).apply__O__O(c)
    }
  }));
  $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner(), new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    activate.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner))
  })), false)
});
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype.apply__O__V = (function(element) {
  this.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V($as_Lcom_raquo_laminar_nodes_ReactiveElement(element))
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$3 = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$$anon$3: 0
}, false, "com.raquo.laminar.api.Laminar$$anon$3", {
  Lcom_raquo_laminar_api_Laminar$$anon$3: 1,
  O: 1,
  Lcom_raquo_domtypes_generic_Modifier: 1
});
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$$anon$3;
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
  this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_subscriptions = null;
  this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_bitmap$init$0 = false;
  $n_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = this;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this)
}
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype;
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.killSubscriptions__V = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this)
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.own__Lcom_raquo_airstream_ownership_Subscription__V = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription)
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.subscriptions__sjs_js_Array = (function() {
  if ((!this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_bitmap$init$0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/api/Laminar.scala: 81")
  };
  return this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_subscriptions
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.com$raquo$airstream$ownership$Owner$_setter_$subscriptions_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_subscriptions = x$1;
  this.Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$__f_bitmap$init$0 = true
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$: 0
}, false, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", {
  Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$: 1,
  O: 1,
  Lcom_raquo_airstream_ownership_Owner: 1
});
$c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
var $n_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
function $m_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
  if ((!$n_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$)) {
    $n_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$()
  };
  return $n_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = 0;
  $f_Lcom_raquo_laminar_api_Airstream__$init$__V(this)
}
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype;
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$EventStream_$eq__Lcom_raquo_airstream_core_EventStream$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (1 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$Signal_$eq__Lcom_raquo_airstream_core_Signal$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (2 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$Observer_$eq__Lcom_raquo_airstream_core_Observer$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (4 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$AirstreamError_$eq__Lcom_raquo_airstream_core_AirstreamError$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (8 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$EventBus_$eq__Lcom_raquo_airstream_eventbus_EventBus$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (16 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$WriteBus_$eq__Lcom_raquo_airstream_eventbus_WriteBus$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (32 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$Val_$eq__Lcom_raquo_airstream_state_Val$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (64 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$Var_$eq__Lcom_raquo_airstream_state_Var$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (128 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.com$raquo$laminar$api$Airstream$_setter_$DynamicSubscription_$eq__Lcom_raquo_airstream_ownership_DynamicSubscription$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0 = (256 | this.Lcom_raquo_laminar_api_package$$anon$1__f_bitmap$init$0)
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_api_package$$anon$1: 0
}, false, "com.raquo.laminar.api.package$$anon$1", {
  Lcom_raquo_laminar_api_package$$anon$1: 1,
  O: 1,
  Lcom_raquo_laminar_api_Airstream: 1
});
$c_Lcom_raquo_laminar_api_package$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_api_package$$anon$1;
function $ct_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder__Lorg_scalajs_dom_EventTarget__($thiz, eventTarget) {
  $thiz.Lcom_raquo_laminar_builders_DomEventStreamPropBuilder__f_eventTarget = eventTarget;
  return $thiz
}
/** @constructor */
function $c_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder() {
  this.Lcom_raquo_laminar_builders_DomEventStreamPropBuilder__f_eventTarget = null
}
$c_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder.prototype = new $h_O();
$c_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder.prototype.constructor = $c_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder;
/** @constructor */
function $h_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder.prototype = $c_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder.prototype;
$c_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder.prototype.eventProp__T__Lcom_raquo_airstream_core_EventStream = (function(eventKey) {
  return $m_Lcom_raquo_airstream_web_DomEventStream$().apply__Lorg_scalajs_dom_EventTarget__T__Z__Lcom_raquo_airstream_core_EventStream(this.Lcom_raquo_laminar_builders_DomEventStreamPropBuilder__f_eventTarget, eventKey, false)
});
/** @constructor */
function $c_Lcom_raquo_laminar_builders_HtmlTag(name, void$1) {
  this.Lcom_raquo_domtypes_generic_builders_Tag__f_name = null;
  $ct_Lcom_raquo_domtypes_generic_builders_Tag__T__Z__(this, name, void$1)
}
$c_Lcom_raquo_laminar_builders_HtmlTag.prototype = new $h_Lcom_raquo_domtypes_generic_builders_Tag();
$c_Lcom_raquo_laminar_builders_HtmlTag.prototype.constructor = $c_Lcom_raquo_laminar_builders_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_builders_HtmlTag() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_builders_HtmlTag.prototype = $c_Lcom_raquo_laminar_builders_HtmlTag.prototype;
$c_Lcom_raquo_laminar_builders_HtmlTag.prototype.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(modifiers) {
  var element = new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
  $n(modifiers).foreach__F1__V(new $c_sjsr_AnonFunction1(((modifier$2) => {
    var modifier = $as_Lcom_raquo_domtypes_generic_Modifier(modifier$2);
    $n(modifier).apply__O__V(element)
  })));
  return element
});
var $d_Lcom_raquo_laminar_builders_HtmlTag = new $TypeData().initClass({
  Lcom_raquo_laminar_builders_HtmlTag: 0
}, false, "com.raquo.laminar.builders.HtmlTag", {
  Lcom_raquo_laminar_builders_HtmlTag: 1,
  Lcom_raquo_domtypes_generic_builders_Tag: 1,
  O: 1
});
$c_Lcom_raquo_laminar_builders_HtmlTag.prototype.$classData = $d_Lcom_raquo_laminar_builders_HtmlTag;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Inserter(initialContext, insertFn) {
  this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext = null;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn = null;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext = initialContext;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn = insertFn
}
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Inserter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Inserter() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Inserter.prototype = $c_Lcom_raquo_laminar_modifiers_Inserter.prototype;
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element) {
  var this$1 = $n(this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext);
  var insertContext = $as_Lcom_raquo_laminar_lifecycle_InsertContext((this$1.isEmpty__Z() ? $m_Lcom_raquo_laminar_lifecycle_InsertContext$().reserveSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_lifecycle_InsertContext(element) : this$1.get__O()));
  var subscribe = new $c_sjsr_AnonFunction1(((mountContext$2) => {
    var mountContext = $as_Lcom_raquo_laminar_lifecycle_MountContext(mountContext$2);
    return $as_Lcom_raquo_airstream_ownership_Subscription($n(this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn).apply__O__O__O(insertContext, $n(mountContext).Lcom_raquo_laminar_lifecycle_MountContext__f_owner))
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().apply__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner(), new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    return $as_Lcom_raquo_airstream_ownership_Subscription(subscribe.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))
  })), false)
});
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.apply__O__V = (function(element) {
  var element$1 = $as_Lcom_raquo_laminar_nodes_ReactiveElement(element);
  this.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_airstream_ownership_DynamicSubscription(element$1)
});
var $d_Lcom_raquo_laminar_modifiers_Inserter = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Inserter: 0
}, false, "com.raquo.laminar.modifiers.Inserter", {
  Lcom_raquo_laminar_modifiers_Inserter: 1,
  O: 1,
  Lcom_raquo_domtypes_generic_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Inserter;
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0((() => {
    var this$3 = $n($m_Lcom_raquo_laminar_DomApi$().debugPath__Lorg_scalajs_dom_Node__sci_List__sci_List($thiz.ref__Lorg_scalajs_dom_Node(), $m_s_package$().s_package$__f_Nil));
    var path = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", " > ", "");
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + path));
    throw th
  }))));
  $thiz.com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__s_Option__V($m_s_None$())
}
function $is_Lcom_raquo_laminar_nodes_ParentNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ParentNode)))
}
function $as_Lcom_raquo_laminar_nodes_ParentNode(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ParentNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ParentNode"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ParentNode)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ParentNode;", depth))
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  if ((s === null)) {
    var len = 0
  } else {
    var this$1 = $n(s);
    var len = this$1.length
  };
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  var $$x1 = i;
  var this$3 = $n(s);
  if (($$x1 >= this$3.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $$x2 = $m_jl_Character$();
    var this$4 = $n(s);
    var index = i;
    var digit = $n($$x2).digitWithValidRadix__I__I__I($charAt(this$4, index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return $uI((n | 0.0))
  } else {
    var n$1 = result;
    return $uI((n$1 | 0.0))
  }
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.jl_StackTraceElement__f_declaringClass = null;
  this.jl_StackTraceElement__f_methodName = null;
  this.jl_StackTraceElement__f_fileName = null;
  this.jl_StackTraceElement__f_lineNumber = 0;
  this.jl_StackTraceElement__f_columnNumber = 0;
  this.jl_StackTraceElement__f_declaringClass = declaringClass;
  this.jl_StackTraceElement__f_methodName = methodName;
  this.jl_StackTraceElement__f_fileName = fileName;
  this.jl_StackTraceElement__f_lineNumber = lineNumber;
  this.jl_StackTraceElement__f_columnNumber = columnNumber
}
$c_jl_StackTraceElement.prototype = new $h_O();
$c_jl_StackTraceElement.prototype.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
  /*<skip>*/
}
$h_jl_StackTraceElement.prototype = $c_jl_StackTraceElement.prototype;
$c_jl_StackTraceElement.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_jl_StackTraceElement)) {
    var x2 = $as_jl_StackTraceElement(that);
    return (((((this.jl_StackTraceElement__f_fileName === $n(x2).jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === $n(x2).jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_columnNumber === $n(x2).jl_StackTraceElement__f_columnNumber)) && (this.jl_StackTraceElement__f_declaringClass === $n(x2).jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === $n(x2).jl_StackTraceElement__f_methodName))
  } else {
    return false
  }
});
$c_jl_StackTraceElement.prototype.toString__T = (function() {
  var result = "";
  if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
    result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".")
  };
  result = (("" + result) + this.jl_StackTraceElement__f_methodName);
  if ((this.jl_StackTraceElement__f_fileName === null)) {
    result = (result + "(Unknown Source)")
  } else {
    result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
    if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
      result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
      if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
        result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber)
      }
    };
    result = (result + ")")
  };
  return result
});
$c_jl_StackTraceElement.prototype.hashCode__I = (function() {
  return (((($f_T__hashCode__I($n(this.jl_StackTraceElement__f_declaringClass)) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_methodName))) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_fileName))) ^ this.jl_StackTraceElement__f_lineNumber) ^ this.jl_StackTraceElement__f_columnNumber)
});
function $as_jl_StackTraceElement(obj) {
  return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"))
}
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_StackTraceElement)))
}
function $asArrayOf_jl_StackTraceElement(obj, depth) {
  return (($isArrayOf_jl_StackTraceElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth))
}
var $d_jl_StackTraceElement = new $TypeData().initClass({
  jl_StackTraceElement: 0
}, false, "java.lang.StackTraceElement", {
  jl_StackTraceElement: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackTraceElement.prototype.$classData = $d_jl_StackTraceElement;
/** @constructor */
function $c_jl_String$() {
  /*<skip>*/
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
  /*<skip>*/
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > $n(value).u.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException())
  };
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $$x1 = result;
    var this$1 = $n(value).get(i);
    result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
    i = ((1 + i) | 0)
  };
  return result
});
var $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_jsErrorForStackTrace = null;
    this.jl_Throwable__f_stackTrace = null
  };
  initCause__jl_Throwable__jl_Throwable(cause) {
    return this
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $$x1 = this;
    var reference = (($$x1 instanceof $c_sjs_js_JavaScriptException) ? $$x1.sjs_js_JavaScriptException__f_exception : $n($$x1));
    var identifyingString = Object.prototype.toString.call(reference);
    this.jl_Throwable__f_jsErrorForStackTrace = ((identifyingString === "[object Error]") ? reference : ((Error.captureStackTrace === (void 0)) ? new Error() : (Error.captureStackTrace(this), this)));
    return this
  };
  getStackTrace__Ajl_StackTraceElement() {
    if ((this.jl_Throwable__f_stackTrace === null)) {
      if (this.jl_Throwable__f_writableStackTrace) {
        this.jl_Throwable__f_stackTrace = $m_jl_StackTrace$().extract__O__Ajl_StackTraceElement(this.jl_Throwable__f_jsErrorForStackTrace)
      } else {
        this.jl_Throwable__f_stackTrace = new ($d_jl_StackTraceElement.getArrayOf().constr)(0)
      }
    };
    return this.jl_Throwable__f_stackTrace
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  get "name"() {
    return $objectClassName(this)
  };
  "toString"() {
    return this.toString__T()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
function $ct_ju_Random__J__($thiz, seed_in) {
  $thiz.setSeed__J__V(seed_in);
  return $thiz
}
function $ct_ju_Random__($thiz) {
  $ct_ju_Random__J__($thiz, $m_ju_Random$().java$util$Random$$randomSeed__J());
  return $thiz
}
/** @constructor */
function $c_ju_Random() {
  this.ju_Random__f_seedHi = 0;
  this.ju_Random__f_seedLo = 0
}
$c_ju_Random.prototype = new $h_O();
$c_ju_Random.prototype.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
  /*<skip>*/
}
$h_ju_Random.prototype = $c_ju_Random.prototype;
$c_ju_Random.prototype.setSeed__J__V = (function(seed_in) {
  var lo = ((-554899859) ^ seed_in.RTLong__f_lo);
  var hi = (5 ^ seed_in.RTLong__f_hi);
  var hi$1 = (65535 & hi);
  var lo$1 = (((lo >>> 24) | 0) | (hi$1 << 8));
  this.ju_Random__f_seedHi = lo$1;
  this.ju_Random__f_seedLo = (16777215 & lo)
});
$c_ju_Random.prototype.next__I__I = (function(bits) {
  var oldSeedHi = this.ju_Random__f_seedHi;
  var oldSeedLo = this.ju_Random__f_seedLo;
  var loProd = ((1.5525485E7 * oldSeedLo) + 11.0);
  var hiProd = ((1502.0 * oldSeedLo) + (1.5525485E7 * oldSeedHi));
  var x = (loProd / 1.6777216E7);
  var newSeedHi = (16777215 & (($uI((x | 0)) + (16777215 & $uI((hiProd | 0)))) | 0));
  var newSeedLo = (16777215 & $uI((loProd | 0)));
  this.ju_Random__f_seedHi = newSeedHi;
  this.ju_Random__f_seedLo = newSeedLo;
  var result32 = ((newSeedHi << 8) | (newSeedLo >> 16));
  return ((result32 >>> ((32 - bits) | 0)) | 0)
});
var $d_ju_Random = new $TypeData().initClass({
  ju_Random: 0
}, false, "java.util.Random", {
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random.prototype.$classData = $d_ju_Random;
function $p_ju_Random$__randomInt__I($thiz) {
  var a = (4.294967296E9 * $uD(Math.random()));
  return $doubleToInt(($uD(Math.floor(a)) - 2.147483648E9))
}
/** @constructor */
function $c_ju_Random$() {
  /*<skip>*/
}
$c_ju_Random$.prototype = new $h_O();
$c_ju_Random$.prototype.constructor = $c_ju_Random$;
/** @constructor */
function $h_ju_Random$() {
  /*<skip>*/
}
$h_ju_Random$.prototype = $c_ju_Random$.prototype;
$c_ju_Random$.prototype.java$util$Random$$randomSeed__J = (function() {
  var value = $p_ju_Random$__randomInt__I(this);
  var value$1 = $p_ju_Random$__randomInt__I(this);
  return new $c_RTLong(value$1, value)
});
var $d_ju_Random$ = new $TypeData().initClass({
  ju_Random$: 0
}, false, "java.util.Random$", {
  ju_Random$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random$.prototype.$classData = $d_ju_Random$;
var $n_ju_Random$;
function $m_ju_Random$() {
  if ((!$n_ju_Random$)) {
    $n_ju_Random$ = new $c_ju_Random$()
  };
  return $n_ju_Random$
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
  /*<skip>*/
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  if ($n(srcClass).isArray__Z()) {
    var this$2 = $n(dest);
    var $$x1 = $n($objectGetClass(this$2)).isAssignableFrom__jl_Class__Z(srcClass)
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true
  };
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false
  };
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
$c_s_LowPriorityImplicits.prototype.wrapRefArray__AO__scm_ArraySeq$ofRef = (function(xs) {
  if ((xs === null)) {
    return null
  } else if (($n(xs).u.length === 0)) {
    var this$3 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$3.scm_ArraySeq$__f_EmptyArraySeq
  } else {
    return new $c_scm_ArraySeq$ofRef(xs)
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.isDefinedAt__O__Z(x) ? $thiz.apply__O__O(x) : $n(default$1).apply__O__O(x))
}
function $is_s_PartialFunction(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)))
}
function $as_s_PartialFunction(obj) {
  return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"))
}
function $isArrayOf_s_PartialFunction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_PartialFunction)))
}
function $asArrayOf_s_PartialFunction(obj, depth) {
  return (($isArrayOf_s_PartialFunction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.PartialFunction;", depth))
}
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return $uZ(this)
});
$c_sci_List$$anon$1.prototype.apply$mcVI$sp__I__V = (function(v1) {
  /*<skip>*/
});
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, xs) {
  if ((xs === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(xs))
  } else {
    var it = $n(xs).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O())
    }
  };
  return $thiz
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return $uZ(this.apply__O__O(v1))
});
$c_sr_AbstractFunction1.prototype.apply$mcVI$sp__I__V = (function(v1) {
  this.apply__O__O(v1)
});
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_AbstractFunction4() {
  /*<skip>*/
}
$c_sr_AbstractFunction4.prototype = new $h_O();
$c_sr_AbstractFunction4.prototype.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
  /*<skip>*/
}
$h_sr_AbstractFunction4.prototype = $c_sr_AbstractFunction4.prototype;
$c_sr_AbstractFunction4.prototype.toString__T = (function() {
  return "<function4>"
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.sr_BooleanRef__f_elem = false;
  this.sr_BooleanRef__f_elem = elem
}
$c_sr_BooleanRef.prototype = new $h_O();
$c_sr_BooleanRef.prototype.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
  /*<skip>*/
}
$h_sr_BooleanRef.prototype = $c_sr_BooleanRef.prototype;
$c_sr_BooleanRef.prototype.toString__T = (function() {
  var b = this.sr_BooleanRef__f_elem;
  return ("" + b)
});
var $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
function $ct_s_util_Random__ju_Random__($thiz, self) {
  $thiz.s_util_Random__f_self = self;
  return $thiz
}
/** @constructor */
function $c_s_util_Random() {
  this.s_util_Random__f_self = null
}
$c_s_util_Random.prototype = new $h_O();
$c_s_util_Random.prototype.constructor = $c_s_util_Random;
/** @constructor */
function $h_s_util_Random() {
  /*<skip>*/
}
$h_s_util_Random.prototype = $c_s_util_Random.prototype;
/** @constructor */
function $c_s_util_Try$() {
  /*<skip>*/
}
$c_s_util_Try$.prototype = new $h_O();
$c_s_util_Try$.prototype.constructor = $c_s_util_Try$;
/** @constructor */
function $h_s_util_Try$() {
  /*<skip>*/
}
$h_s_util_Try$.prototype = $c_s_util_Try$.prototype;
$c_s_util_Try$.prototype.apply__F0__s_util_Try = (function(r) {
  try {
    return new $c_s_util_Success($n(r).apply__O())
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
    if ((!$n(o11).isEmpty__Z())) {
      var e$3 = $as_jl_Throwable($n(o11).get__O());
      return new $c_s_util_Failure(e$3)
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
var $d_s_util_Try$ = new $TypeData().initClass({
  s_util_Try$: 0
}, false, "scala.util.Try$", {
  s_util_Try$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Try$.prototype.$classData = $d_s_util_Try$;
var $n_s_util_Try$;
function $m_s_util_Try$() {
  if ((!$n_s_util_Try$)) {
    $n_s_util_Try$ = new $c_s_util_Try$()
  };
  return $n_s_util_Try$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_s_package$().s_package$__f_Nil, this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.tuple2Hash__O__O__I = (function(x, y) {
  return this.tuple2Hash__I__I__I__I($m_sr_Statics$().anyHash__O__I(x), $m_sr_Statics$().anyHash__O__I(y), (-889275714))
});
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
$c_s_util_hashing_MurmurHash3$.prototype.mapHash__sc_Map__I = (function(xs) {
  if ($n(xs).isEmpty__Z()) {
    return this.s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.s_util_hashing_MurmurHash3$__f_mapSeed;
    $n(xs).foreachEntry__F2__V(accum);
    h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_a);
    h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_b);
    h = this.mixLast__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_c);
    return this.finalizeHash__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_n)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_c = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_c = 1
}
$c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3$accum$1.prototype.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $c_s_util_hashing_MurmurHash3$accum$1.prototype;
$c_s_util_hashing_MurmurHash3$accum$1.prototype.toString__T = (function() {
  return "<function2>"
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__V = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(k, v);
  this.s_util_hashing_MurmurHash3$accum$1__f_a = ((this.s_util_hashing_MurmurHash3$accum$1__f_a + h) | 0);
  this.s_util_hashing_MurmurHash3$accum$1__f_b = (this.s_util_hashing_MurmurHash3$accum$1__f_b ^ h);
  this.s_util_hashing_MurmurHash3$accum$1__f_c = Math.imul(this.s_util_hashing_MurmurHash3$accum$1__f_c, (1 | h));
  this.s_util_hashing_MurmurHash3$accum$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$accum$1__f_n) | 0)
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__O = (function(v1, v2) {
  this.apply__O__O__V(v1, v2)
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$accum$1: 0
}, false, "scala.util.hashing.MurmurHash3$accum$1", {
  s_util_hashing_MurmurHash3$accum$1: 1,
  O: 1,
  F2: 1
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.$classData = $d_s_util_hashing_MurmurHash3$accum$1;
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
function $f_Lcom_raquo_airstream_core_BaseObservable__mapTo__F0__Lcom_raquo_airstream_core_Observable($thiz, value) {
  var project = new $c_sjsr_AnonFunction1(((x$1$2) => $n(value).apply__O()));
  return new $c_Lcom_raquo_airstream_misc_MapEventStream($thiz, project, $m_s_None$())
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Observer$();
  var observer = this$1.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner)
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0)
}
function $is_Lcom_raquo_airstream_core_BaseObservable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_BaseObservable)))
}
function $as_Lcom_raquo_airstream_core_BaseObservable(obj) {
  return (($is_Lcom_raquo_airstream_core_BaseObservable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.BaseObservable"))
}
function $isArrayOf_Lcom_raquo_airstream_core_BaseObservable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_BaseObservable)))
}
function $asArrayOf_Lcom_raquo_airstream_core_BaseObservable(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_BaseObservable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.BaseObservable;", depth))
}
function $is_Lcom_raquo_airstream_core_Observer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_Observer)))
}
function $as_Lcom_raquo_airstream_core_Observer(obj) {
  return (($is_Lcom_raquo_airstream_core_Observer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.Observer"))
}
function $isArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_Observer)))
}
function $asArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.Observer;", depth))
}
function $is_Lcom_raquo_laminar_nodes_ChildNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ChildNode)))
}
function $as_Lcom_raquo_laminar_nodes_ChildNode(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ChildNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ChildNode"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ChildNode)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ChildNode;", depth))
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_child = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0 = 0;
  this.Lcom_raquo_laminar_nodes_RootNode__f_child = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    var th = $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container.");
    throw th
  };
  var this$2 = $m_Lcom_raquo_laminar_nodes_ChildNode$();
  if ((!this$2.isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z(container, document))) {
    var th$1 = $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container.");
    throw th$1
  };
  this.Lcom_raquo_laminar_nodes_RootNode__f_ref = container;
  this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0 = (((1 | this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0) << 24) >> 24);
  var this$4 = $m_Lcom_raquo_laminar_nodes_ChildNode$();
  if (this$4.isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z(container, document)) {
    this.mount__Z()
  }
}
$c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $c_Lcom_raquo_laminar_nodes_RootNode.prototype;
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner = (function() {
  if (((((2 & this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/RootNode.scala: 18")
  };
  return this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren__s_Option = (function() {
  if (((((4 & this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/RootNode.scala: 18")
  };
  return this.Lcom_raquo_laminar_nodes_RootNode__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__s_Option__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = x$1;
  this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0 = (((4 | this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner = x$1;
  this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0 = (((2 | this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.ref__Lorg_scalajs_dom_Element = (function() {
  if (((((1 & this.Lcom_raquo_laminar_nodes_RootNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/RootNode.scala: 34")
  };
  return this.Lcom_raquo_laminar_nodes_RootNode__f_ref
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.mount__Z = (function() {
  $n(this.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner()).activate__V();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(this, this.Lcom_raquo_laminar_nodes_RootNode__f_child)
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.ref__Lorg_scalajs_dom_Element()
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_RootNode: 0
}, false, "com.raquo.laminar.nodes.RootNode", {
  Lcom_raquo_laminar_nodes_RootNode: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ParentNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.$classData = $d_Lcom_raquo_laminar_nodes_RootNode;
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
/** @constructor */
function $c_s_$less$colon$less() {
  /*<skip>*/
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
  /*<skip>*/
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
$c_s_$less$colon$less.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return $uZ(v1)
});
$c_s_$less$colon$less.prototype.apply$mcVI$sp__I__V = (function(v1) {
  /*<skip>*/
});
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$();
  this.s_Predef$__f_Map = $m_sci_Map$()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null
}
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  /*<skip>*/
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
  var this$3 = $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  $m_s_reflect_ManifestFactory$AnyManifest$();
  var n = $n(it).knownSize__I();
  if ((n > (-1))) {
    var elements = new $ac_O(n);
    var iterator = $n(it).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      elements.set(i, $n(iterator).next__O());
      i = ((1 + i) | 0)
    };
    var $$x1 = elements
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var iterator$2 = $n(it).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $$x1 = new $ac_O(jsElems)
  };
  return this$3.make__O__scm_ArraySeq($$x1)
});
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.newBuilder__scm_Builder = (function() {
  $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  $m_s_reflect_ManifestFactory$AnyManifest$();
  var this$6 = new $c_scm_ArrayBuilder$generic($d_O.getClassOf());
  var f = new $c_sjsr_AnonFunction1(((x$2) => $m_scm_ArraySeq$().make__O__scm_ArraySeq(x$2)));
  return new $c_scm_Builder$$anon$1(this$6, f)
});
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.apply__sci_Seq__O = (function(elems) {
  var this$3 = $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  $m_s_reflect_ManifestFactory$AnyManifest$();
  var n = $n(elems).knownSize__I();
  if ((n > (-1))) {
    var elements = new $ac_O(n);
    var iterator = $n(elems).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      elements.set(i, $n(iterator).next__O());
      i = ((1 + i) | 0)
    };
    var $$x1 = elements
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var iterator$2 = $n(elems).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $$x1 = new $ac_O(jsElems)
  };
  return this$3.make__O__scm_ArraySeq($$x1)
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.sc_IterableFactory$Delegate__f_delegate = null
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    var known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      var i = 0;
      var it = $thiz.iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        if ((i === otherSize)) {
          return 1
        };
        $n(it).next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z())
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.sc_MapFactory$Delegate__f_delegate = null
}
$c_sc_MapFactory$Delegate.prototype = new $h_O();
$c_sc_MapFactory$Delegate.prototype.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
  /*<skip>*/
}
$h_sc_MapFactory$Delegate.prototype = $c_sc_MapFactory$Delegate.prototype;
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.sci_LazyList$State$Cons__f_head = null;
  this.sci_LazyList$State$Cons__f_tail = null;
  this.sci_LazyList$State$Cons__f_head = head;
  this.sci_LazyList$State$Cons__f_tail = tail
}
$c_sci_LazyList$State$Cons.prototype = new $h_O();
$c_sci_LazyList$State$Cons.prototype.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
  /*<skip>*/
}
$h_sci_LazyList$State$Cons.prototype = $c_sci_LazyList$State$Cons.prototype;
$c_sci_LazyList$State$Cons.prototype.head__O = (function() {
  return this.sci_LazyList$State$Cons__f_head
});
$c_sci_LazyList$State$Cons.prototype.tail__sci_LazyList = (function() {
  return this.sci_LazyList$State$Cons__f_tail
});
var $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
/** @constructor */
function $c_sci_Map$() {
  /*<skip>*/
}
$c_sci_Map$.prototype = new $h_O();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
  /*<skip>*/
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
var $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
/** @constructor */
function $c_sr_AbstractPartialFunction() {
  /*<skip>*/
}
$c_sr_AbstractPartialFunction.prototype = new $h_O();
$c_sr_AbstractPartialFunction.prototype.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
  /*<skip>*/
}
$h_sr_AbstractPartialFunction.prototype = $c_sr_AbstractPartialFunction.prototype;
$c_sr_AbstractPartialFunction.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sr_AbstractPartialFunction.prototype.apply__O__O = (function(x) {
  var default$1 = $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf;
  return this.applyOrElse__jl_Throwable__F1__O($as_jl_Throwable(x), default$1)
});
$c_sr_AbstractPartialFunction.prototype.apply$mcZI$sp__I__Z = (function(x) {
  var default$1 = $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf;
  return $uZ(this.applyOrElse__jl_Throwable__F1__O($as_jl_Throwable(x), default$1))
});
$c_sr_AbstractPartialFunction.prototype.apply$mcVI$sp__I__V = (function(x) {
  var default$1 = $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf;
  this.applyOrElse__jl_Throwable__F1__O($as_jl_Throwable(x), default$1)
});
var $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
/** @constructor */
function $c_sjs_js_Any$() {
  /*<skip>*/
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
  /*<skip>*/
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
  return ((arg1$2) => $n(f).apply__O__O(arg1$2))
});
var $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_sjsr_AnonFunction4(f) {
  this.sjsr_AnonFunction4__f_f = null;
  this.sjsr_AnonFunction4__f_f = f
}
$c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$c_sjsr_AnonFunction4.prototype.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
  /*<skip>*/
}
$h_sjsr_AnonFunction4.prototype = $c_sjsr_AnonFunction4.prototype;
$c_sjsr_AnonFunction4.prototype.apply__O__O__O__O__O = (function(arg1, arg2, arg3, arg4) {
  return (0, this.sjsr_AnonFunction4__f_f)(arg1, arg2, arg3, arg4)
});
var $d_sjsr_AnonFunction4 = new $TypeData().initClass({
  sjsr_AnonFunction4: 0
}, false, "scala.scalajs.runtime.AnonFunction4", {
  sjsr_AnonFunction4: 1,
  sr_AbstractFunction4: 1,
  O: 1,
  F4: 1
});
$c_sjsr_AnonFunction4.prototype.$classData = $d_sjsr_AnonFunction4;
/** @constructor */
function $c_s_util_Random$() {
  this.s_util_Random__f_self = null;
  $ct_s_util_Random__ju_Random__(this, $ct_ju_Random__(new $c_ju_Random()))
}
$c_s_util_Random$.prototype = new $h_s_util_Random();
$c_s_util_Random$.prototype.constructor = $c_s_util_Random$;
/** @constructor */
function $h_s_util_Random$() {
  /*<skip>*/
}
$h_s_util_Random$.prototype = $c_s_util_Random$.prototype;
var $d_s_util_Random$ = new $TypeData().initClass({
  s_util_Random$: 0
}, false, "scala.util.Random$", {
  s_util_Random$: 1,
  s_util_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Random$.prototype.$classData = $d_s_util_Random$;
var $n_s_util_Random$;
function $m_s_util_Random$() {
  if ((!$n_s_util_Random$)) {
    $n_s_util_Random$ = new $c_s_util_Random$()
  };
  return $n_s_util_Random$
}
function $as_s_util_control_ControlThrowable(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.control.ControlThrowable"))
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_control_ControlThrowable)))
}
function $asArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (($isArrayOf_s_util_control_ControlThrowable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth))
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$1(onNextParam$1, handleObserverErrors$1, onErrorParam$1) {
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_bitmap$init$0 = false;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onNextParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_handleObserverErrors$1 = false;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onNextParam$1 = onNextParam$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_handleObserverErrors$1 = handleObserverErrors$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1 = onErrorParam$1;
  this.maybeDisplayName_$eq__sjs_js_$bar__V((void 0))
}
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Observer$$anon$1.prototype = $c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype;
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  if ((!this.Lcom_raquo_airstream_core_Observer$$anon$1__f_bitmap$init$0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/core/Observer.scala: 132")
  };
  return this.Lcom_raquo_airstream_core_Observer$$anon$1__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.maybeDisplayName_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_maybeDisplayName = x$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_bitmap$init$0 = true
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.onNext__O__V = (function(nextValue) {
  try {
    $n(this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onNextParam$1).apply__O__O(nextValue)
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    if (this.Lcom_raquo_airstream_core_Observer$$anon$1__f_handleObserverErrors$1) {
      this.onError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
    }
  }
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.onError__jl_Throwable__V = (function(error) {
  try {
    if ($n(this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1).isDefinedAt__O__Z(error)) {
      $n(this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1).apply__O__O(error)
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(error)
    }
  } catch (e) {
    var e$1 = e;
    var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
    $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error))
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Observer$$anon$1: 0
}, false, "com.raquo.airstream.core.Observer$$anon$1", {
  Lcom_raquo_airstream_core_Observer$$anon$1: 1,
  O: 1,
  Lcom_raquo_airstream_core_Observer: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.$classData = $d_Lcom_raquo_airstream_core_Observer$$anon$1;
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.Lcom_raquo_laminar_api_package$__f_L = null;
  this.Lcom_raquo_laminar_api_package$__f_bitmap$init$0 = 0;
  $n_Lcom_raquo_laminar_api_package$ = this;
  new $c_Lcom_raquo_laminar_api_package$$anon$1();
  this.Lcom_raquo_laminar_api_package$__f_bitmap$init$0 = (1 | this.Lcom_raquo_laminar_api_package$__f_bitmap$init$0);
  this.Lcom_raquo_laminar_api_package$__f_L = $m_Lcom_raquo_laminar_api_Laminar$();
  this.Lcom_raquo_laminar_api_package$__f_bitmap$init$0 = (2 | this.Lcom_raquo_laminar_api_package$__f_bitmap$init$0)
}
$c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_package$.prototype.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_package$.prototype = $c_Lcom_raquo_laminar_api_package$.prototype;
$c_Lcom_raquo_laminar_api_package$.prototype.L__Lcom_raquo_laminar_api_Laminar$ = (function() {
  if (((2 & this.Lcom_raquo_laminar_api_package$__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/api/package.scala: 12")
  };
  return this.Lcom_raquo_laminar_api_package$__f_L
});
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().initClass({
  Lcom_raquo_laminar_api_package$: 0
}, false, "com.raquo.laminar.api.package$", {
  Lcom_raquo_laminar_api_package$: 1,
  O: 1,
  Lcom_raquo_laminar_Implicits: 1,
  Lcom_raquo_laminar_Implicits$LowPriorityImplicits: 1,
  Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers: 1
});
$c_Lcom_raquo_laminar_api_package$.prototype.$classData = $d_Lcom_raquo_laminar_api_package$;
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$()
  };
  return $n_Lcom_raquo_laminar_api_package$
}
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($n($as_jl_Character(that)));
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return $as_T(String.fromCharCode($thiz))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $as_jl_InterruptedException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.InterruptedException"))
}
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_InterruptedException)))
}
function $asArrayOf_jl_InterruptedException(obj, depth) {
  return (($isArrayOf_jl_InterruptedException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth))
}
function $as_jl_LinkageError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.LinkageError"))
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_LinkageError)))
}
function $asArrayOf_jl_LinkageError(obj, depth) {
  return (($isArrayOf_jl_LinkageError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth))
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
  var this$1 = $m_jl_String$();
  var count = $n(str).u.length;
  var str$1 = this$1.new__AC__I__I__T(str, 0, count);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
  return this
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
function $as_jl_ThreadDeath(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ThreadDeath"))
}
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ThreadDeath)))
}
function $asArrayOf_jl_ThreadDeath(obj, depth) {
  return (($isArrayOf_jl_ThreadDeath(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth))
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_jl_VirtualMachineError(obj) {
  return (((obj instanceof $c_jl_VirtualMachineError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.VirtualMachineError"))
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_VirtualMachineError)))
}
function $asArrayOf_jl_VirtualMachineError(obj, depth) {
  return (($isArrayOf_jl_VirtualMachineError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth))
}
/** @constructor */
function $c_s_$eq$colon$eq() {
  /*<skip>*/
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
  /*<skip>*/
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
  new $c_sjsr_AnonFunction1(((x$2) => $m_s_None$()))
}
$c_s_PartialFunction$$anon$1.prototype = new $h_O();
$c_s_PartialFunction$$anon$1.prototype.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
  /*<skip>*/
}
$h_s_PartialFunction$$anon$1.prototype = $c_s_PartialFunction$$anon$1.prototype;
$c_s_PartialFunction$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_s_PartialFunction$$anon$1.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  this.apply__O__E(v1)
});
$c_s_PartialFunction$$anon$1.prototype.apply$mcVI$sp__I__V = (function(v1) {
  this.apply__O__E(v1)
});
$c_s_PartialFunction$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_s_PartialFunction$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return false
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__E = (function(x) {
  throw new $c_s_MatchError(x)
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__E(v1)
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().initClass({
  s_PartialFunction$$anon$1: 0
}, false, "scala.PartialFunction$$anon$1", {
  s_PartialFunction$$anon$1: 1,
  O: 1,
  s_PartialFunction: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_PartialFunction$$anon$1.prototype.$classData = $d_s_PartialFunction$$anon$1;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sc_AbstractIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1))
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1)
});
/** @constructor */
function $c_sc_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
}
$c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
/** @constructor */
function $c_sc_Map$() {
  this.sc_MapFactory$Delegate__f_delegate = null;
  this.sc_Map$__f_DefaultSentinel = null;
  this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.sc_Map$__f_DefaultSentinel = $ct_O__(new $c_O());
  this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = new $c_sjsr_AnonFunction0((() => $m_sc_Map$().sc_Map$__f_DefaultSentinel))
}
$c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$c_sc_Map$.prototype.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
  /*<skip>*/
}
$h_sc_Map$.prototype = $c_sc_Map$.prototype;
var $d_sc_Map$ = new $TypeData().initClass({
  sc_Map$: 0
}, false, "scala.collection.Map$", {
  sc_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Map$.prototype.$classData = $d_sc_Map$;
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$()
  };
  return $n_sc_Map$
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__sc_SeqOps = (function(elems) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).apply__sci_Seq__O(elems))
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it))
});
$c_sc_SeqFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return $n(this.sc_SeqFactory$Delegate__f_delegate).newBuilder__scm_Builder()
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source)
});
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__O = (function(elems) {
  return this.apply__sci_Seq__sc_SeqOps(elems)
});
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.lengthCompare__I__I(idx) > 0))
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    var knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
/** @constructor */
function $c_sci_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
  new $c_sjsr_AnonFunction1(((x$10$2) => $m_sr_Statics$PFMarker$()))
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
  /*<skip>*/
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_LazyList(elems)
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = $as_sci_LazyList(restRef.sr_ObjectRef__f_elem);
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!$n(rest).isEmpty__Z()))) {
      var this$4 = $n(rest);
      rest = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i
    };
    return $n(rest).scala$collection$immutable$LazyList$$state__sci_LazyList$State()
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__sci_LazyList = (function(coll) {
  if ((coll instanceof $c_sci_LazyList)) {
    var x2 = $as_sci_LazyList(coll);
    return x2
  } else if (($n(coll).knownSize__I() === 0)) {
    return this.sci_LazyList$__f__empty
  } else {
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State($n(coll).iterator__sc_Iterator())));
    return new $c_sci_LazyList(state)
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State = (function(it, suffix) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $as_sci_LazyList$State($n(suffix).apply__O())
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State = (function(it) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $m_sci_LazyList$State$Empty$()
  }
});
$c_sci_LazyList$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_LazyList$LazyBuilder()
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_LazyList(source)
});
var $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_$outer = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.scm_Builder$$anon$1__f_$outer = outer
  };
  this.scm_Builder$$anon$1__f_f$1 = f$1
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Builder$$anon$1 = (function(x) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addOne__O__scm_Growable(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Builder$$anon$1 = (function(xs) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  $n(this.scm_Builder$$anon$1__f_$outer).sizeHint__I__V(size)
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return $n(this.scm_Builder$$anon$1__f_f$1).apply__O__O($n(this.scm_Builder$$anon$1__f_$outer).result__O())
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
/** @constructor */
function $c_scm_GrowableBuilder(elems) {
  this.scm_GrowableBuilder__f_elems = null;
  this.scm_GrowableBuilder__f_elems = elems
}
$c_scm_GrowableBuilder.prototype = new $h_O();
$c_scm_GrowableBuilder.prototype.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
  /*<skip>*/
}
$h_scm_GrowableBuilder.prototype = $c_scm_GrowableBuilder.prototype;
$c_scm_GrowableBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_GrowableBuilder = (function(elem) {
  var this$1 = $n(this.scm_GrowableBuilder__f_elems);
  this$1.addOne__O__scm_Growable(elem);
  return this
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_GrowableBuilder = (function(xs) {
  $n(this.scm_GrowableBuilder__f_elems).addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_GrowableBuilder(xs)
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_GrowableBuilder(elem)
});
$c_scm_GrowableBuilder.prototype.result__O = (function() {
  return this.scm_GrowableBuilder__f_elems
});
var $d_scm_GrowableBuilder = new $TypeData().initClass({
  scm_GrowableBuilder: 0
}, false, "scala.collection.mutable.GrowableBuilder", {
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_GrowableBuilder.prototype.$classData = $d_scm_GrowableBuilder;
/** @constructor */
function $c_sjs_js_Iterator$WrappedIterator(self) {
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$self = null;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = null;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$self = self;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = self.next()
}
$c_sjs_js_Iterator$WrappedIterator.prototype = new $h_O();
$c_sjs_js_Iterator$WrappedIterator.prototype.constructor = $c_sjs_js_Iterator$WrappedIterator;
/** @constructor */
function $h_sjs_js_Iterator$WrappedIterator() {
  /*<skip>*/
}
$h_sjs_js_Iterator$WrappedIterator.prototype = $c_sjs_js_Iterator$WrappedIterator.prototype;
$c_sjs_js_Iterator$WrappedIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sjs_js_Iterator$WrappedIterator.prototype.isEmpty__Z = (function() {
  return $uZ(this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.done)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, n, (-1))
});
$c_sjs_js_Iterator$WrappedIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sjs_js_Iterator$WrappedIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.knownSize__I = (function() {
  return (-1)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.hasNext__Z = (function() {
  return (!$uZ(this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.done))
});
$c_sjs_js_Iterator$WrappedIterator.prototype.next__O = (function() {
  var value = this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.value;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$self.next();
  return value
});
var $d_sjs_js_Iterator$WrappedIterator = new $TypeData().initClass({
  sjs_js_Iterator$WrappedIterator: 0
}, false, "scala.scalajs.js.Iterator$WrappedIterator", {
  sjs_js_Iterator$WrappedIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sjs_js_Iterator$WrappedIterator.prototype.$classData = $d_sjs_js_Iterator$WrappedIterator;
/** @constructor */
function $c_s_util_Try() {
  /*<skip>*/
}
$c_s_util_Try.prototype = new $h_O();
$c_s_util_Try.prototype.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
  /*<skip>*/
}
$h_s_util_Try.prototype = $c_s_util_Try.prototype;
function $is_Lcom_raquo_airstream_core_SyncObservable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_SyncObservable)))
}
function $as_Lcom_raquo_airstream_core_SyncObservable(obj) {
  return (($is_Lcom_raquo_airstream_core_SyncObservable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.SyncObservable"))
}
function $isArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_SyncObservable)))
}
function $asArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.SyncObservable;", depth))
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
  $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  return subscription
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0((() => {
    $m_Lcom_raquo_airstream_core_Transaction$().removeExternalObserver__Lcom_raquo_airstream_core_Observable__Lcom_raquo_airstream_core_Observer__V($thiz, observer)
  })));
  var this$ = $thiz.externalObservers__sjs_js_Array();
  this$.push(observer);
  return subscription
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  var this$ = $thiz.internalObservers__sjs_js_Array();
  this$.push(observer);
  $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz)
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  var removed = $m_Lcom_raquo_airstream_core_ObserverList$().removeObserverNow$extension__sjs_js_Array__O__Z($thiz.internalObservers__sjs_js_Array(), observer);
  if (removed) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz)
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  var removed = $m_Lcom_raquo_airstream_core_ObserverList$().removeObserverNow$extension__sjs_js_Array__O__Z($thiz.externalObservers__sjs_js_Array(), observer);
  if (removed) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz)
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  var isStarting = ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1);
  if (isStarting) {
    $thiz.onStart__V()
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.onStop__V()
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.externalObservers__sjs_js_Array();
  var $$x1 = $uI(this$.length);
  var this$$1 = $thiz.internalObservers__sjs_js_Array();
  return (($$x1 + $uI(this$$1.length)) | 0)
}
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__sjs_js_Array__V([]);
  $thiz.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__sjs_js_Array__V([])
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1(outer) {
  this.Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1__f_$outer = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1__f_$outer = outer
  }
}
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype = new $h_sr_AbstractPartialFunction();
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype = $c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype;
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype.applyOrElse__jl_Throwable__F1__O = (function(x1, default$1) {
  return ((x1 !== null) ? $n($n(this.Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1__f_$outer)._fireError__F1()).apply__O__O(x1) : $n(default$1).apply__O__O(x1))
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype.isDefinedAt__jl_Throwable__Z = (function(x1) {
  return (x1 !== null)
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($as_jl_Throwable(x))
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($as_jl_Throwable(x), default$1)
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1 = new $TypeData().initClass({
  Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1: 0
}, false, "com.raquo.airstream.custom.CustomSource$$anonfun$onStart$1", {
  Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1.prototype.$classData = $d_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayStoreException = new $TypeData().initClass({
  jl_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", {
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayStoreException.prototype.$classData = $d_jl_ArrayStoreException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass({
  ju_ConcurrentModificationException: 0
}, false, "java.util.ConcurrentModificationException", {
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_ConcurrentModificationException.prototype.$classData = $d_ju_ConcurrentModificationException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint"
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $n($objectGetClass(this$1)).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($n($thiz.s_MatchError__f_obj)) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$())
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1)
});
$c_s_Option.prototype.contains__O__Z = (function(elem) {
  return ((!this.isEmpty__Z()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.get__O(), elem))
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    $m_sc_Iterator$();
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a)
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"))
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)))
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth))
}
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.T2__f__1 = _1;
  $thiz.T2__f__2 = _2;
  return $thiz
}
/** @constructor */
function $c_T2() {
  this.T2__f__1 = null;
  this.T2__f__2 = null
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype._1__O = (function() {
  return this.T2__f__1
});
$c_T2.prototype._2__O = (function() {
  return this.T2__f__2
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this._1__O()) + ",") + this._2__O()) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this._1__O(), $n(Tuple2$1)._1__O()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this._2__O(), $n(Tuple2$1)._2__O()))
  } else {
    return false
  }
});
$c_T2.prototype._2$mcI$sp__I = (function() {
  return $uI(this._2__O())
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate)
}
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
  /*<skip>*/
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass({
  sc_ClassTagSeqFactory$AnySeqDelegate: 0
}, false, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", {
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
});
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.$classData = $d_sc_ClassTagSeqFactory$AnySeqDelegate;
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator")
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed)
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this)
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.sc_Iterator$$anon$9__f_$outer = null;
  this.sc_Iterator$$anon$9__f_f$2 = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.sc_Iterator$$anon$9__f_$outer = outer
  };
  this.sc_Iterator$$anon$9__f_f$2 = f$2
}
$c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$9.prototype.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$9.prototype = $c_sc_Iterator$$anon$9.prototype;
$c_sc_Iterator$$anon$9.prototype.knownSize__I = (function() {
  return $n(this.sc_Iterator$$anon$9__f_$outer).knownSize__I()
});
$c_sc_Iterator$$anon$9.prototype.hasNext__Z = (function() {
  return $n(this.sc_Iterator$$anon$9__f_$outer).hasNext__Z()
});
$c_sc_Iterator$$anon$9.prototype.next__O = (function() {
  return $n(this.sc_Iterator$$anon$9__f_f$2).apply__O__O($n(this.sc_Iterator$$anon$9__f_$outer).next__O())
});
var $d_sc_Iterator$$anon$9 = new $TypeData().initClass({
  sc_Iterator$$anon$9: 0
}, false, "scala.collection.Iterator$$anon$9", {
  sc_Iterator$$anon$9: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$9.prototype.$classData = $d_sc_Iterator$$anon$9;
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
  /*<skip>*/
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1)
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize)
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z())
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O()
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
  } else if ((until <= lo)) {
    var rest = 0
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0)
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that)
  };
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $as_sc_LinearSeq($thiz);
  var len = 0;
  while (true) {
    var this$1 = $n(these);
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq($n(these).tail__O())
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.lengthCompare__I__I(x) > 0))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return $n(skipped).head__O()
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeq($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $$x1 = (!this$2.isEmpty__Z())
      } else {
        var $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z())
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z())
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = $as_sci_IndexedSeq(it);
    return x2
  } else {
    return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source)
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it)
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.sci_LazyList$LazyBuilder__f_next = null;
  this.sci_LazyList$LazyBuilder__f_list = null;
  this.clear__V()
}
$c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder.prototype.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
  /*<skip>*/
}
$h_sci_LazyList$LazyBuilder.prototype = $c_sci_LazyList$LazyBuilder.prototype;
$c_sci_LazyList$LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_LazyList$LazyBuilder.prototype.clear__V = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
  this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
  this.sci_LazyList$LazyBuilder__f_next = deferred
});
$c_sci_LazyList$LazyBuilder.prototype.result__sci_LazyList = (function() {
  $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$())));
  return this.sci_LazyList$LazyBuilder__f_list
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__sci_LazyList$LazyBuilder = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => {
    $m_sci_LazyList$();
    $m_sci_LazyList$();
    var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(elem, tl)
  })));
  this.sci_LazyList$LazyBuilder__f_next = deferred;
  return this
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder = (function(xs) {
  if (($n(xs).knownSize__I() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State($n(xs).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()))))));
    this.sci_LazyList$LazyBuilder__f_next = deferred
  };
  return this
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs)
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_LazyList$LazyBuilder(elem)
});
$c_sci_LazyList$LazyBuilder.prototype.result__O = (function() {
  return this.result__sci_LazyList()
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().initClass({
  sci_LazyList$LazyBuilder: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder", {
  sci_LazyList$LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_LazyList$LazyBuilder.prototype.$classData = $d_sci_LazyList$LazyBuilder;
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
  /*<skip>*/
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!$n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z())
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if ($n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z()) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    var this$1 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    var res = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    var this$2 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    this.sci_LazyList$LazyIterator__f_lazyList = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    return res
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  $ct_T2__O__O__(new $c_T2(), $m_sci_Nil$(), $m_sci_Nil$());
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.apply__sci_Seq__O = (function(elems) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
});
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
}
$c_sci_NewVectorIterator.prototype = new $h_O();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
  /*<skip>*/
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sci_NewVectorIterator.prototype.isEmpty__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sci_NewVectorIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this)
  };
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this)
      };
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io
      };
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      }
    }
  };
  return this
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    var a = ((total - copied) | 0);
    var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count)
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count)
    };
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0)
  };
  return total
});
var $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
/** @constructor */
function $c_sci_Seq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
}
$c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.from__sc_IterableOnce__sci_Seq = (function(it) {
  if ($is_sci_Seq(it)) {
    var x2 = $as_sci_Seq(it);
    return x2
  } else {
    return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Seq(source)
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_Seq(it)
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 250
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_Vector(elems)
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2
  } else {
    var knownSize = $n(it).knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$()
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if (false) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
          if ((x !== null)) {
            var this$1 = $n(x);
            var $$x1 = (this$1 === $d_O.getClassOf())
          } else {
            var $$x1 = false
          };
          if ($$x1) {
            var a1$3 = $n(x2$2).unsafeArray__AO();
            break matchEnd5
          }
        };
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          var this$2 = $n(x3);
          this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5
        };
        var a1$2 = new $ac_O(knownSize);
        var this$3 = $n($n(it).iterator__sc_Iterator());
        this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2
      };
      return new $c_sci_Vector1(a1$3)
    } else {
      var this$4 = new $c_sci_VectorBuilder();
      var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
      return this$5.result__sci_Vector()
    }
  }
});
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder()
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source)
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = $n(data).u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = $n(xs).vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2) => {
        var data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data)
      })))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1)
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2)
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3)
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4)
  } else if ((xor < 1073741824)) {
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $n($thiz.sci_VectorBuilder__f_a6).set((31 & ((idx >>> 25) | 0)), $thiz.sci_VectorBuilder__f_a5)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_offset = 0;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_offset = 0;
  this.sci_VectorBuilder__f_depth = 1
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = $n(v).vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = $n(v1).sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = $n(v2).sci_Vector2__f_data2;
      var a$1 = $n(v2).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
      var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = $n(d2).u.length;
      $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
      $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
      break
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = $n(v3).sci_Vector3__f_data3;
      var s2 = $n(v3).sci_Vector3__f_suffix2;
      var a$2 = $n(v3).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
      var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = $n(d3).u.length;
      $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = $n(v4).sci_Vector4__f_data4;
      var s3 = $n(v4).sci_Vector4__f_suffix3;
      var s2$2 = $n(v4).sci_Vector4__f_suffix2;
      var a$3 = $n(v4).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
      var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = $n(d4).u.length;
      $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = $n(v5).sci_Vector5__f_data5;
      var s4 = $n(v5).sci_Vector5__f_suffix4;
      var s3$2 = $n(v5).sci_Vector5__f_suffix3;
      var s2$3 = $n(v5).sci_Vector5__f_suffix2;
      var a$4 = $n(v5).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
      var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = $n(d5).u.length;
      $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = $n(v6).sci_Vector6__f_data6;
      var s5 = $n(v6).sci_Vector6__f_suffix5;
      var s4$2 = $n(v6).sci_Vector6__f_suffix4;
      var s3$3 = $n(v6).sci_Vector6__f_suffix3;
      var s2$4 = $n(v6).sci_Vector6__f_suffix2;
      var a$5 = $n(v6).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
      var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = $n(d6).u.length;
      $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
      $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
  };
  return this
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this)
  };
  $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$()
  } else if ((len <= 32)) {
    if ((realLen === 32)) {
      return new $c_sci_Vector1(this.sci_VectorBuilder__f_a1)
    } else {
      var original = this.sci_VectorBuilder__f_a1;
      return new $c_sci_Vector1($m_ju_Arrays$().copyOf__AO__I__AO(original, realLen))
    }
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original$1 = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i2), 2);
    var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
    var a = $n(this.sci_VectorBuilder__f_a2).get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = (($n(a).u.length === len$1) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_offset) | 0), data, suffix1, realLen)
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$2 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, 1, i3), 3);
    var a$1 = $n(this.sci_VectorBuilder__f_a3).get(0);
    var to = $n(a$1).u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 1, to), 2);
    var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
    var original$3 = $n(this.sci_VectorBuilder__f_a3).get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$3, i2$2), 2);
    var a$2 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = (($n(a$2).u.length === len$2) ? a$2 : $m_ju_Arrays$().copyOf__AO__I__AO(a$2, len$2));
    var len1 = $n(prefix1$2).u.length;
    var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$4 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, 1, i4), 4);
    var a$3 = $n(this.sci_VectorBuilder__f_a4).get(0);
    var to$1 = $n(a$3).u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 1, to$1), 3);
    var a$4 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
    var to$2 = $n(a$4).u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$2), 2);
    var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
    var original$5 = $n(this.sci_VectorBuilder__f_a4).get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i3$2), 3);
    var original$6 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$6, i2$3), 2);
    var a$5 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = (($n(a$5).u.length === len$3) ? a$5 : $m_ju_Arrays$().copyOf__AO__I__AO(a$5, len$3));
    var len1$2 = $n(prefix1$3).u.length;
    var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
    var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$7 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$7, 1, i5), 5);
    var a$6 = $n(this.sci_VectorBuilder__f_a5).get(0);
    var to$3 = $n(a$6).u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$6, 1, to$3), 4);
    var a$7 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
    var to$4 = $n(a$7).u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$4), 3);
    var a$8 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
    var to$5 = $n(a$8).u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$5), 2);
    var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
    var original$8 = $n(this.sci_VectorBuilder__f_a5).get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i4$2), 4);
    var original$9 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i3$3), 3);
    var original$10 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$10, i2$4), 2);
    var a$9 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = (($n(a$9).u.length === len$4) ? a$9 : $m_ju_Arrays$().copyOf__AO__I__AO(a$9, len$4));
    var len1$3 = $n(prefix1$4).u.length;
    var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
    var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
    var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$11 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$11, 1, i6), 6);
    var a$10 = $n(this.sci_VectorBuilder__f_a6).get(0);
    var to$6 = $n(a$10).u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$10, 1, to$6), 5);
    var a$11 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
    var to$7 = $n(a$11).u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$7), 4);
    var a$12 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
    var to$8 = $n(a$12).u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$8), 3);
    var a$13 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
    var to$9 = $n(a$13).u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$9), 2);
    var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
    var original$12 = $n(this.sci_VectorBuilder__f_a6).get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i5$2), 5);
    var original$13 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i4$3), 4);
    var original$14 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i3$4), 3);
    var original$15 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$15, i2$5), 2);
    var a$14 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = (($n(a$14).u.length === len$5) ? a$14 : $m_ju_Arrays$().copyOf__AO__I__AO(a$14, len$5));
    var len1$4 = $n(prefix1$5).u.length;
    var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
    var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
    var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$())
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
  /*<skip>*/
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass({
  scm_Buffer$: 0
}, false, "scala.collection.mutable.Buffer$", {
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Buffer$.prototype.$classData = $d_scm_Buffer$;
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$()
  };
  return $n_scm_Buffer$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  /*<skip>*/
}
$c_scm_ListBuffer$.prototype = new $h_O();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.apply__sci_Seq__O = (function(elems) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(elems)
});
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowableBuilder(new $c_scm_ListBuffer())
});
$c_scm_ListBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(source)
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.scm_MutationTracker$CheckedIterator__f_underlying = null;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
  this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
  var this$1 = $n(mutationCount);
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = $uI(this$1.apply__O())
}
$c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
  /*<skip>*/
}
$h_scm_MutationTracker$CheckedIterator.prototype = $c_scm_MutationTracker$CheckedIterator.prototype;
$c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_MutationTracker$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).hasNext__Z()
});
$c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).next__O()
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().initClass({
  scm_MutationTracker$CheckedIterator: 0
}, false, "scala.collection.mutable.MutationTracker$CheckedIterator", {
  scm_MutationTracker$CheckedIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_MutationTracker$CheckedIterator.prototype.$classData = $d_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems)
});
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$c_sjsr_WrappedVarArgs$.prototype.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs$.prototype = $c_sjsr_WrappedVarArgs$.prototype;
$c_sjsr_WrappedVarArgs$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(elems)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__sjsr_WrappedVarArgs = (function(source) {
  var this$1 = $n(this.newBuilder__scm_Builder());
  return $as_sjsr_WrappedVarArgs($n($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source))).result__O())
});
$c_sjsr_WrappedVarArgs$.prototype.newBuilder__scm_Builder = (function() {
  var array = [];
  var this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var f = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_sjs_js_WrappedArray(x$1$2);
    return new $c_sjsr_WrappedVarArgs($n(x$1).sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
  }));
  return new $c_scm_Builder$$anon$1(this$4, f)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.s_util_Failure__f_exception = null;
  this.s_util_Failure__f_exception = exception
}
$c_s_util_Failure.prototype = new $h_s_util_Try();
$c_s_util_Failure.prototype.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
  /*<skip>*/
}
$h_s_util_Failure.prototype = $c_s_util_Failure.prototype;
$c_s_util_Failure.prototype.recover__s_PartialFunction__s_util_Try = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = $n(pf).applyOrElse__O__F1__O(this.s_util_Failure__f_exception, new $c_sjsr_AnonFunction1(((x$2) => {
      $as_jl_Throwable(x$2);
      return marker
    })));
    return ((marker !== v) ? new $c_s_util_Success(v) : this)
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
    if ((!$n(o11).isEmpty__Z())) {
      var e$3 = $as_jl_Throwable($n(o11).get__O());
      return new $c_s_util_Failure(e$3)
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_s_util_Failure.prototype.fold__F1__F1__O = (function(fa, fb) {
  return $n(fa).apply__O__O(this.s_util_Failure__f_exception)
});
$c_s_util_Failure.prototype.productPrefix__T = (function() {
  return "Failure"
});
$c_s_util_Failure.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Failure.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Failure__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Failure.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Failure.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Failure.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Failure.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var Failure$1 = $as_s_util_Failure(x$1);
    var x = this.s_util_Failure__f_exception;
    var x$2 = $n(Failure$1).s_util_Failure__f_exception;
    return ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))
  } else {
    return false
  }
});
function $as_s_util_Failure(obj) {
  return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"))
}
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Failure)))
}
function $asArrayOf_s_util_Failure(obj, depth) {
  return (($isArrayOf_s_util_Failure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Failure;", depth))
}
var $d_s_util_Failure = new $TypeData().initClass({
  s_util_Failure: 0
}, false, "scala.util.Failure", {
  s_util_Failure: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Failure.prototype.$classData = $d_s_util_Failure;
/** @constructor */
function $c_s_util_Success(value) {
  this.s_util_Success__f_value = null;
  this.s_util_Success__f_value = value
}
$c_s_util_Success.prototype = new $h_s_util_Try();
$c_s_util_Success.prototype.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
  /*<skip>*/
}
$h_s_util_Success.prototype = $c_s_util_Success.prototype;
$c_s_util_Success.prototype.recover__s_PartialFunction__s_util_Try = (function(pf) {
  return this
});
$c_s_util_Success.prototype.fold__F1__F1__O = (function(fa, fb) {
  try {
    return $n(fb).apply__O__O(this.s_util_Success__f_value)
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
    if ((!$n(o11).isEmpty__Z())) {
      var e$3 = $as_jl_Throwable($n(o11).get__O());
      return $n(fa).apply__O__O(e$3)
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_s_util_Success.prototype.productPrefix__T = (function() {
  return "Success"
});
$c_s_util_Success.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Success.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Success.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Success.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Success.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Success.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Success)) {
    var Success$1 = $as_s_util_Success(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, $n(Success$1).s_util_Success__f_value)
  } else {
    return false
  }
});
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"))
}
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)))
}
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth))
}
var $d_s_util_Success = new $TypeData().initClass({
  s_util_Success: 0
}, false, "scala.util.Success", {
  s_util_Success: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Success.prototype.$classData = $d_s_util_Success;
function $f_Lcom_raquo_airstream_common_SingleParentObservable__onStart__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_MapEventStream__f_parent);
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(this$1, $thiz)
}
function $f_Lcom_raquo_airstream_common_SingleParentObservable__onStop__V($thiz) {
  $m_Lcom_raquo_airstream_core_Transaction$().removeInternalObserver__Lcom_raquo_airstream_core_Observable__Lcom_raquo_airstream_core_InternalObserver__V($thiz.Lcom_raquo_airstream_misc_MapEventStream__f_parent, $thiz)
}
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error = error;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause = cause;
    var message = ((("ErrorHandlingError: " + $n(error).getMessage__T()) + "; cause: ") + $n(cause).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
    this.initCause__jl_Throwable__jl_Throwable(cause)
  };
  toString__T() {
    return ((("ErrorHandlingError: " + this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause)
  };
  productPrefix__T() {
    return "ErrorHandlingError"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
        break
      }
      case 1: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var ErrorHandlingError$1 = $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(x$1);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
      var x$2 = $n(ErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        var x$3 = this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        var x$4 = $n(ErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        var $$x1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        $n(ErrorHandlingError$1);
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError"))
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)))
}
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ErrorHandlingError;", depth))
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError: 0
}, false, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", {
  Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError;
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error = error;
    var message = ("ObserverError: " + $n(error).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true)
  };
  toString__T() {
    return ("ObserverError: " + this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error)
  };
  productPrefix__T() {
    return "ObserverError"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var ObserverError$1 = $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError(x$1);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
      var x$2 = $n(ObserverError$1).Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        $n(ObserverError$1);
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ObserverError"))
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ObserverError)))
}
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ObserverError;", depth))
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$ObserverError: 0
}, false, "com.raquo.airstream.core.AirstreamError$ObserverError", {
  Lcom_raquo_airstream_core_AirstreamError$ObserverError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$ObserverError.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError;
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error = error;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause = cause;
    var message = ((("ObserverErrorHandlingError: " + $n(error).getMessage__T()) + "; cause: ") + $n(cause).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
    this.initCause__jl_Throwable__jl_Throwable(cause)
  };
  toString__T() {
    return ((("ObserverErrorHandlingError: " + this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause)
  };
  productPrefix__T() {
    return "ObserverErrorHandlingError"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
        break
      }
      case 1: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var ObserverErrorHandlingError$1 = $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(x$1);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
      var x$2 = $n(ObserverErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        var x$3 = this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        var x$4 = $n(ObserverErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        var $$x1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        $n(ObserverErrorHandlingError$1);
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError"))
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)))
}
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError;", depth))
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError: 0
}, false, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", {
  Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError;
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  $thiz.startIndex_$eq__I__V(((1 + $thiz.startIndex__I()) | 0));
  $n($m_s_util_Try$().apply__F0__s_util_Try($n($thiz.config__Lcom_raquo_airstream_custom_CustomSource$Config()).Lcom_raquo_airstream_custom_CustomSource$Config__f_onStart)).recover__s_PartialFunction__s_util_Try(new $c_Lcom_raquo_airstream_custom_CustomSource$$anonfun$onStart$1($thiz))
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  var this$1 = $n($n($thiz.config__Lcom_raquo_airstream_custom_CustomSource$Config()).Lcom_raquo_airstream_custom_CustomSource$Config__f_onStop);
  this$1.apply__O()
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.com$raquo$airstream$custom$CustomSource$_setter_$topoRank_$eq__I__V(1);
  $thiz.startIndex_$eq__I__V(0);
  $thiz.com$raquo$airstream$custom$CustomSource$_setter_$_fireValue_$eq__F1__V(new $c_sjsr_AnonFunction1(((value$2) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((x$1$2) => {
      var x$1 = $as_Lcom_raquo_airstream_core_Transaction(x$1$2);
      $f_Lcom_raquo_airstream_core_WritableEventStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, value$2, x$1)
    })))
  })));
  $thiz.com$raquo$airstream$custom$CustomSource$_setter_$_fireError_$eq__F1__V(new $c_sjsr_AnonFunction1(((error$2) => {
    var error = $as_jl_Throwable(error$2);
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((x$2$2) => {
      var x$2 = $as_Lcom_raquo_airstream_core_Transaction(x$2$2);
      $f_Lcom_raquo_airstream_core_WritableEventStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, error, x$2)
    })))
  })));
  $thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (32 | $thiz.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0);
  $thiz.com$raquo$airstream$custom$CustomSource$_setter_$getStartIndex_$eq__F0__V(new $c_sjsr_AnonFunction0((() => $thiz.startIndex__I())));
  $thiz.com$raquo$airstream$custom$CustomSource$_setter_$getIsStarted_$eq__F0__V(new $c_sjsr_AnonFunction0((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))))
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(text) {
  this.Lcom_raquo_laminar_nodes_CommentNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0 = 0;
  this.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V($m_s_None$());
  this.Lcom_raquo_laminar_nodes_CommentNode__f_ref = $m_Lcom_raquo_laminar_DomApi$().createCommentNode__T__Lorg_scalajs_dom_Comment(text);
  this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0 = (((1 | this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype;
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  this.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V(maybeNextParent)
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  /*<skip>*/
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  if (((((2 & this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/CommentNode.scala: 7")
  };
  return this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = x$1;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0 = (((2 | this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.ref__Lorg_scalajs_dom_Comment = (function() {
  if (((((1 & this.Lcom_raquo_laminar_nodes_CommentNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/CommentNode.scala: 11")
  };
  return this.Lcom_raquo_laminar_nodes_CommentNode__f_ref
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.apply__O__V = (function(element) {
  var parentNode = $as_Lcom_raquo_laminar_nodes_ParentNode(element);
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this)
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.ref__Lorg_scalajs_dom_Comment()
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_CommentNode: 0
}, false, "com.raquo.laminar.nodes.CommentNode", {
  Lcom_raquo_laminar_nodes_CommentNode: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_domtypes_generic_Modifier: 1,
  Lcom_raquo_domtypes_generic_nodes_Comment: 1,
  Lcom_raquo_domtypes_generic_nodes_Node: 1
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.$classData = $d_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.Lcom_raquo_laminar_nodes_TextNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0 = 0;
  this.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V($m_s_None$());
  this.Lcom_raquo_laminar_nodes_TextNode__f_ref = $m_Lcom_raquo_laminar_DomApi$().createTextNode__T__Lorg_scalajs_dom_Text(initialText);
  this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0 = (((1 | this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $c_Lcom_raquo_laminar_nodes_TextNode.prototype;
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  this.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V(maybeNextParent)
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  /*<skip>*/
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  if (((((2 & this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/TextNode.scala: 7")
  };
  return this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = x$1;
  this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0 = (((2 | this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.ref__Lorg_scalajs_dom_Text = (function() {
  if (((((1 & this.Lcom_raquo_laminar_nodes_TextNode__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/TextNode.scala: 11")
  };
  return this.Lcom_raquo_laminar_nodes_TextNode__f_ref
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.apply__O__V = (function(element) {
  var parentNode = $as_Lcom_raquo_laminar_nodes_ParentNode(element);
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this)
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.ref__Lorg_scalajs_dom_Text()
});
function $as_Lcom_raquo_laminar_nodes_TextNode(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_nodes_TextNode) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.TextNode"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_TextNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_TextNode)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_TextNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_TextNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.TextNode;", depth))
}
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_TextNode: 0
}, false, "com.raquo.laminar.nodes.TextNode", {
  Lcom_raquo_laminar_nodes_TextNode: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_domtypes_generic_Modifier: 1,
  Lcom_raquo_domtypes_generic_nodes_Text: 1,
  Lcom_raquo_domtypes_generic_nodes_Node: 1
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.$classData = $d_Lcom_raquo_laminar_nodes_TextNode;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ArrayIndexOutOfBoundsException(obj) {
  return (((obj instanceof $c_jl_ArrayIndexOutOfBoundsException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ArrayIndexOutOfBoundsException"))
}
function $isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ArrayIndexOutOfBoundsException)))
}
function $asArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (($isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ArrayIndexOutOfBoundsException;", depth))
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $$x1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($$x1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  var s = ("String index out of range: " + index);
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T()
});
$c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1)
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
  return $thiz
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len)
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  try {
    var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $$x1 = this.sc_ArrayOps$ArrayIterator__f_len
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $$x1 = ((a < newPos) ? a : newPos)
    };
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $$x1
  };
  return this
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator: 0
}, false, "scala.collection.ArrayOps$ArrayIterator", {
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator.prototype.$classData = $d_sc_ArrayOps$ArrayIterator;
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value))
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I()
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b)
  };
  return this
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.getOrElse__O__F0__O(x, new $c_sjsr_AnonFunction0((() => $n(default$1).apply__O__O(x))))
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var next = $as_T2($n(it).next__O());
    $n(f).apply__O__O__O($n(next)._1__O(), $n(next)._2__O())
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  var this$2 = $n($thiz.iterator__sc_Iterator());
  var f = new $c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      var k = $n(x0$1)._1__O();
      var v = $n(x0$1)._2__O();
      return ((k + " -> ") + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }));
  var this$3 = new $c_sc_Iterator$$anon$9(this$2, f);
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, sb, start, sep, end)
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $n($thiz.iterableFactory__sc_SeqFactory()).newBuilder__scm_Builder();
  if (($thiz.knownSize__I() >= 0)) {
    $n(b).sizeHint__I__V(((1 + $thiz.length__I()) | 0))
  };
  var this$1 = $n(b);
  this$1.addAll__sc_IterableOnce__scm_Growable($thiz);
  var this$2 = $n(b);
  this$2.addOne__O__scm_Growable(elem);
  return $n(b).result__O()
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.scm_ArrayBuilder__f_capacity = 0;
  return $thiz
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.scm_ArrayBuilder__f_capacity = 0
}
$c_scm_ArrayBuilder.prototype = new $h_O();
$c_scm_ArrayBuilder.prototype.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
  /*<skip>*/
}
$h_scm_ArrayBuilder.prototype = $c_scm_ArrayBuilder.prototype;
$c_scm_ArrayBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.scm_ArraySeq$__f_untagged = null;
  this.scm_ArraySeq$__f_EmptyArraySeq = null;
  $n_scm_ArraySeq$ = this;
  this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef(new $ac_O(0))
}
$c_scm_ArraySeq$.prototype = new $h_O();
$c_scm_ArraySeq$.prototype.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
  /*<skip>*/
}
$h_scm_ArraySeq$.prototype = $c_scm_ArraySeq$.prototype;
$c_scm_ArraySeq$.prototype.make__O__scm_ArraySeq = (function(x) {
  if ((x === null)) {
    return null
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_scm_ArraySeq$ofRef(x3)
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_scm_ArraySeq$ofInt(x4)
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_scm_ArraySeq$ofDouble(x5)
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_scm_ArraySeq$ofLong(x6)
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_scm_ArraySeq$ofFloat(x7)
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_scm_ArraySeq$ofChar(x8)
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_scm_ArraySeq$ofByte(x9)
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_scm_ArraySeq$ofShort(x10)
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_scm_ArraySeq$ofBoolean(x11)
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_scm_ArraySeq$ofUnit(x12)
  } else {
    throw new $c_s_MatchError(x)
  }
});
var $d_scm_ArraySeq$ = new $TypeData().initClass({
  scm_ArraySeq$: 0
}, false, "scala.collection.mutable.ArraySeq$", {
  scm_ArraySeq$: 1,
  O: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$.prototype.$classData = $d_scm_ArraySeq$;
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$()
  };
  return $n_scm_ArraySeq$
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent)
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option();
  $thiz.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent)
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var this$1 = $n(maybePrevParent);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var x$5 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
    var this$2 = $n($n(x$5).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
    var this$3 = $n(this$2.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
    var isPrevParentActive = (!this$3.isEmpty__Z())
  } else {
    var isPrevParentActive = false
  };
  var this$4 = $n(maybeNextParent);
  if ((!this$4.isEmpty__Z())) {
    var arg1$1 = this$4.get__O();
    var x$6 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1$1);
    var this$5 = $n($n(x$6).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
    var this$6 = $n(this$5.com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner__s_Option());
    var isNextParentActive = (!this$6.isEmpty__Z())
  } else {
    var isNextParentActive = false
  };
  return (isPrevParentActive && (!isNextParentActive))
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  var this$1 = $n(maybeNextParent);
  if (this$1.isEmpty__Z()) {
    $n($thiz.com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription__Lcom_raquo_airstream_ownership_TransferableSubscription()).clearOwner__V()
  } else {
    var arg1 = this$1.get__O();
    var nextParent = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
    $n($thiz.com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription__Lcom_raquo_airstream_ownership_TransferableSubscription()).setOwner__Lcom_raquo_airstream_ownership_DynamicOwner__V($n(nextParent).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner())
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.com$raquo$laminar$nodes$ReactiveElement$_setter_$com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription_$eq__Lcom_raquo_airstream_ownership_TransferableSubscription__V(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0((() => {
    $n($thiz.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner()).activate__V()
  })), new $c_sjsr_AnonFunction0((() => {
    $n($thiz.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner()).deactivate__V()
  }))));
  $thiz.com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners_$eq__sjs_js_$bar__V((void 0));
  $thiz.com$raquo$laminar$nodes$ReactiveElement$$_compositeValues_$eq__sci_Map__V(($n($m_s_Predef$().s_Predef$__f_Map), $m_sci_Map$EmptyMap$()))
}
function $is_Lcom_raquo_laminar_nodes_ReactiveElement(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ReactiveElement)))
}
function $as_Lcom_raquo_laminar_nodes_ReactiveElement(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ReactiveElement(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveElement"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveElement)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveElement;", depth))
}
/** @constructor */
function $c_T2$mcII$sp(_1$mcI$sp, _2$mcI$sp) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2$mcII$sp__f__1$mcI$sp = 0;
  this.T2$mcII$sp__f__2$mcI$sp = 0;
  this.T2$mcII$sp__f__1$mcI$sp = _1$mcI$sp;
  this.T2$mcII$sp__f__2$mcI$sp = _2$mcI$sp;
  $ct_T2__O__O__(this, null, null)
}
$c_T2$mcII$sp.prototype = new $h_T2();
$c_T2$mcII$sp.prototype.constructor = $c_T2$mcII$sp;
/** @constructor */
function $h_T2$mcII$sp() {
  /*<skip>*/
}
$h_T2$mcII$sp.prototype = $c_T2$mcII$sp.prototype;
$c_T2$mcII$sp.prototype._2$mcI$sp__I = (function() {
  return this.T2$mcII$sp__f__2$mcI$sp
});
$c_T2$mcII$sp.prototype._2__O = (function() {
  return this.T2$mcII$sp__f__2$mcI$sp
});
$c_T2$mcII$sp.prototype._1__O = (function() {
  return this.T2$mcII$sp__f__1$mcI$sp
});
var $d_T2$mcII$sp = new $TypeData().initClass({
  T2$mcII$sp: 0
}, false, "scala.Tuple2$mcII$sp", {
  T2$mcII$sp: 1,
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1,
  s_Product2$mcII$sp: 1
});
$c_T2$mcII$sp.prototype.$classData = $d_T2$mcII$sp;
class $c_s_UninitializedFieldError extends $c_jl_RuntimeException {
  constructor(msg) {
    super();
    this.s_UninitializedFieldError__f_msg = null;
    this.s_UninitializedFieldError__f_msg = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, msg, null, true, true)
  };
  productPrefix__T() {
    return "UninitializedFieldError"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_UninitializedFieldError__f_msg : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_UninitializedFieldError)) {
      var UninitializedFieldError$1 = $as_s_UninitializedFieldError(x$1);
      return (this.s_UninitializedFieldError__f_msg === $n(UninitializedFieldError$1).s_UninitializedFieldError__f_msg)
    } else {
      return false
    }
  };
}
function $as_s_UninitializedFieldError(obj) {
  return (((obj instanceof $c_s_UninitializedFieldError) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.UninitializedFieldError"))
}
function $isArrayOf_s_UninitializedFieldError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_UninitializedFieldError)))
}
function $asArrayOf_s_UninitializedFieldError(obj, depth) {
  return (($isArrayOf_s_UninitializedFieldError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.UninitializedFieldError;", depth))
}
var $d_s_UninitializedFieldError = new $TypeData().initClass({
  s_UninitializedFieldError: 0
}, false, "scala.UninitializedFieldError", {
  s_UninitializedFieldError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_s_UninitializedFieldError.prototype.$classData = $d_s_UninitializedFieldError;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uB($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
  return this.next$mcB$sp__B()
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcB$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", {
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uC($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
  return $bC(this.next$mcC$sp__C())
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcC$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", {
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uD($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
  return this.next$mcD$sp__D()
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcD$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", {
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uF($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
  return this.next$mcF$sp__F()
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcF$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", {
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uI($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
  return this.next$mcI$sp__I()
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcI$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", {
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
  try {
    var t = $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return new $c_RTLong(lo, hi)
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uJ($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
  return this.next$mcJ$sp__J()
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", {
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uS($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
  return this.next$mcS$sp__S()
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcS$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", {
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
  try {
    $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
  this.next$mcV$sp__V()
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcV$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", {
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
  try {
    var r = $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uZ($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
  return this.next$mcZ$sp__Z()
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", {
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcZ$sp;
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.scm_ArrayBuilder__f_capacity = 0;
  this.scm_ArrayBuilder$generic__f_elementClass = null;
  this.scm_ArrayBuilder$generic__f_isCharArrayBuilder = false;
  this.scm_ArrayBuilder$generic__f_jsElems = null;
  this.scm_ArrayBuilder$generic__f_elementClass = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.scm_ArrayBuilder$generic__f_isCharArrayBuilder = (elementClass === $d_C.getClassOf());
  this.scm_ArrayBuilder$generic__f_jsElems = []
}
$c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$c_scm_ArrayBuilder$generic.prototype.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
  /*<skip>*/
}
$h_scm_ArrayBuilder$generic.prototype = $c_scm_ArrayBuilder$generic.prototype;
$c_scm_ArrayBuilder$generic.prototype.addOne__O__scm_ArrayBuilder$generic = (function(elem) {
  var unboxedElem = (this.scm_ArrayBuilder$generic__f_isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(this.scm_ArrayBuilder$generic__f_elementClass).jl_Class__f_data.zero : elem));
  this.scm_ArrayBuilder$generic__f_jsElems.push(unboxedElem);
  return this
});
$c_scm_ArrayBuilder$generic.prototype.addAll__sc_IterableOnce__scm_ArrayBuilder$generic = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var elem = $n(it).next__O();
    this.addOne__O__scm_ArrayBuilder$generic(elem)
  };
  return this
});
$c_scm_ArrayBuilder$generic.prototype.result__O = (function() {
  var x$2 = this.scm_ArrayBuilder$generic__f_elementClass;
  if ((x$2 === $d_V.getClassOf())) {
    var elemRuntimeClass = $d_jl_Void.getClassOf()
  } else {
    var x$4 = this.scm_ArrayBuilder$generic__f_elementClass;
    if ((x$4 === $d_sr_Null$.getClassOf())) {
      var $$x1 = true
    } else {
      var x$6 = this.scm_ArrayBuilder$generic__f_elementClass;
      var $$x1 = (x$6 === $d_sr_Nothing$.getClassOf())
    };
    if ($$x1) {
      var elemRuntimeClass = $d_O.getClassOf()
    } else {
      var elemRuntimeClass = this.scm_ArrayBuilder$generic__f_elementClass
    }
  };
  return $n(elemRuntimeClass).jl_Class__f_data.getArrayOf().wrapArray(this.scm_ArrayBuilder$generic__f_jsElems)
});
$c_scm_ArrayBuilder$generic.prototype.toString__T = (function() {
  return "ArrayBuilder.generic"
});
$c_scm_ArrayBuilder$generic.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_ArrayBuilder$generic(xs)
});
$c_scm_ArrayBuilder$generic.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ArrayBuilder$generic(elem)
});
var $d_scm_ArrayBuilder$generic = new $TypeData().initClass({
  scm_ArrayBuilder$generic: 0
}, false, "scala.collection.mutable.ArrayBuilder$generic", {
  scm_ArrayBuilder$generic: 1,
  scm_ArrayBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuilder$generic.prototype.$classData = $d_scm_ArrayBuilder$generic;
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T($n(this.sjs_js_JavaScriptException__f_exception))
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      var JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      var x = this.sjs_js_JavaScriptException__f_exception;
      var y = $n(JavaScriptException$1).sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
var $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
function $f_Lcom_raquo_airstream_core_WritableEventStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  var this$ = $thiz.externalObservers__sjs_js_Array();
  var index = 0;
  while ((index < $uI(this$.length))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    var observer$1 = $as_Lcom_raquo_airstream_core_Observer(observer);
    try {
      $n(observer$1).onNext__O__V(nextValue)
    } catch (e) {
      var e$1 = e;
      var e$2 = ((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1));
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
    }
  };
  var this$$1 = $thiz.internalObservers__sjs_js_Array();
  var index$1 = 0;
  while ((index$1 < $uI(this$$1.length))) {
    var observer$2 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    var observer$3 = $as_Lcom_raquo_airstream_core_InternalObserver(observer$2);
    $n(observer$3).onNext__O__Lcom_raquo_airstream_core_Transaction__V(nextValue, transaction)
  }
}
function $f_Lcom_raquo_airstream_core_WritableEventStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  var this$ = $thiz.externalObservers__sjs_js_Array();
  var index = 0;
  while ((index < $uI(this$.length))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    var observer$1 = $as_Lcom_raquo_airstream_core_Observer(observer);
    $n(observer$1).onError__jl_Throwable__V(nextError)
  };
  var this$$1 = $thiz.internalObservers__sjs_js_Array();
  var index$1 = 0;
  while ((index$1 < $uI(this$$1.length))) {
    var observer$2 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    var observer$3 = $as_Lcom_raquo_airstream_core_InternalObserver(observer$2);
    $n(observer$3).onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(nextError, transaction)
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = 0;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag = tag;
  this.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V($m_s_None$());
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref = $m_Lcom_raquo_laminar_DomApi$().createHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lorg_scalajs_dom_HTMLElement(this);
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (1 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0);
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (2 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0);
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (4 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0);
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (8 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0);
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (16 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
}
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype;
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription__Lcom_raquo_airstream_ownership_TransferableSubscription = (function() {
  if (((32 & this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/ReactiveHtmlElement.scala: 13")
  };
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (64 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ReactiveElement$$_compositeValues_$eq__sci_Map__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (128 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ReactiveElement$_setter_$com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription_$eq__Lcom_raquo_airstream_ownership_TransferableSubscription__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription = x$1;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (32 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner = (function() {
  if (((256 & this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/ReactiveHtmlElement.scala: 13")
  };
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren__s_Option = (function() {
  if (((512 & this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/ReactiveHtmlElement.scala: 13")
  };
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$$_maybeChildren_$eq__s_Option__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ParentNode$$_maybeChildren = x$1;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (512 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner = x$1;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (256 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  if (((1024 & this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/ReactiveHtmlElement.scala: 13")
  };
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent_$eq__s_Option__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = x$1;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0 = (1024 | this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.ref__Lorg_scalajs_dom_HTMLElement = (function() {
  if (((1 & this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/nodes/ReactiveHtmlElement.scala: 16")
  };
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.toString__T = (function() {
  if ((this.ref__Lorg_scalajs_dom_HTMLElement() !== null)) {
    var $$x1 = $as_T(this.ref__Lorg_scalajs_dom_HTMLElement().outerHTML)
  } else {
    var this$1 = $n(this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag);
    var $$x1 = ("tag=" + this$1.Lcom_raquo_domtypes_generic_builders_Tag__f_name)
  };
  return (("ReactiveHtmlElement(" + $$x1) + ")")
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.apply__O__V = (function(element) {
  var parentNode = $as_Lcom_raquo_laminar_nodes_ParentNode(element);
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.ref__Lorg_scalajs_dom_HTMLElement()
});
function $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveHtmlElement"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveHtmlElement)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveHtmlElement;", depth))
}
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_ReactiveHtmlElement: 0
}, false, "com.raquo.laminar.nodes.ReactiveHtmlElement", {
  Lcom_raquo_laminar_nodes_ReactiveHtmlElement: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ReactiveElement: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_domtypes_generic_Modifier: 1,
  Lcom_raquo_laminar_nodes_ParentNode: 1,
  Lcom_raquo_domtypes_generic_nodes_Element: 1,
  Lcom_raquo_domtypes_generic_nodes_Node: 1
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.$classData = $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"))
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth))
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
});
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__currentValue__O($thiz) {
  if (((((2 & $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/timing/PeriodicEventStream.scala: 21")
  };
  return $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_currentValue
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__currentValue_$eq__O__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_currentValue = x$1;
  $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((2 | $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24)
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__maybeTimeoutHandle__sjs_js_$bar($thiz) {
  if (((((4 & $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/timing/PeriodicEventStream.scala: 23")
  };
  return $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeTimeoutHandle
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__maybeTimeoutHandle_$eq__sjs_js_$bar__V($thiz, x$1) {
  $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeTimeoutHandle = x$1;
  $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((4 | $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24)
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__resetTo__O__Z__V($thiz, value, tickNext) {
  $p_Lcom_raquo_airstream_timing_PeriodicEventStream__clearTimeout__V($thiz);
  $p_Lcom_raquo_airstream_timing_PeriodicEventStream__currentValue_$eq__O__V($thiz, value);
  if ((tickNext && $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $p_Lcom_raquo_airstream_timing_PeriodicEventStream__tick__Z__V($thiz, true)
  }
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__clearTimeout__V($thiz) {
  var value = $p_Lcom_raquo_airstream_timing_PeriodicEventStream__maybeTimeoutHandle__sjs_js_$bar($thiz);
  if ((value !== (void 0))) {
    $m_sjs_js_timers_package$().clearTimeout__sjs_js_timers_SetTimeoutHandle__V(value)
  };
  $p_Lcom_raquo_airstream_timing_PeriodicEventStream__maybeTimeoutHandle_$eq__sjs_js_$bar__V($thiz, (void 0))
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__tick__Z__V($thiz, isStarting) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((trx$2) => {
    var trx = $as_Lcom_raquo_airstream_core_Transaction(trx$2);
    if (($thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_emitInitial || (!isStarting))) {
      var nextValue = $p_Lcom_raquo_airstream_timing_PeriodicEventStream__currentValue__O($thiz);
      $f_Lcom_raquo_airstream_core_WritableEventStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, trx)
    };
    $p_Lcom_raquo_airstream_timing_PeriodicEventStream__setNext__V($thiz)
  })))
}
function $p_Lcom_raquo_airstream_timing_PeriodicEventStream__setNext__V($thiz) {
  var rc11 = false;
  var x2 = null;
  try {
    var x1 = new $c_s_util_Success($as_s_Option($n($thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_next).apply__O__O($p_Lcom_raquo_airstream_timing_PeriodicEventStream__currentValue__O($thiz))))
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var x1;
      var o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
      if ((!$n(o11).isEmpty__Z())) {
        var e$3 = $as_jl_Throwable($n(o11).get__O());
        var x1 = new $c_s_util_Failure(e$3);
        break matchEnd8
      };
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
    }
  };
  matchEnd12: {
    if ((x1 instanceof $c_s_util_Success)) {
      rc11 = true;
      x2 = $as_s_util_Success(x1);
      var p3 = $as_s_Option($n(x2).s_util_Success__f_value);
      if ((p3 instanceof $c_s_Some)) {
        var x4 = $as_s_Some(p3);
        var p5 = $as_T2($n(x4).s_Some__f_value);
        if ((p5 !== null)) {
          var nextValue = $n(p5)._1__O();
          var nextIntervalMs = $n(p5)._2$mcI$sp__I();
          $p_Lcom_raquo_airstream_timing_PeriodicEventStream__currentValue_$eq__O__V($thiz, nextValue);
          var a = $m_sjs_js_timers_package$().setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle(nextIntervalMs, new $c_sjsr_AnonFunction0((() => {
            $p_Lcom_raquo_airstream_timing_PeriodicEventStream__tick__Z__V($thiz, false)
          })));
          $p_Lcom_raquo_airstream_timing_PeriodicEventStream__maybeTimeoutHandle_$eq__sjs_js_$bar__V($thiz, a);
          break matchEnd12
        }
      }
    };
    if (rc11) {
      var p7 = $as_s_Option($n(x2).s_util_Success__f_value);
      var x = $m_s_None$();
      if ((x === p7)) {
        $p_Lcom_raquo_airstream_timing_PeriodicEventStream__resetTo__O__Z__V($thiz, $thiz.Lcom_raquo_airstream_timing_PeriodicEventStream__f_initial, false);
        break matchEnd12
      }
    };
    if ((x1 instanceof $c_s_util_Failure)) {
      var x9 = $as_s_util_Failure(x1);
      var err = $n(x9).s_util_Failure__f_exception;
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((x$1$2) => {
        var x$1 = $as_Lcom_raquo_airstream_core_Transaction(x$1$2);
        $f_Lcom_raquo_airstream_core_WritableEventStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, err, x$1)
      })));
      break matchEnd12
    };
    throw new $c_s_MatchError(x1)
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_timing_PeriodicEventStream(initial, next, emitInitial, resetOnStop) {
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_initial = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_next = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_emitInitial = false;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_resetOnStop = false;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_topoRank = 0;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_currentValue = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeTimeoutHandle = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_externalObservers = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_internalObservers = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = 0;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_initial = initial;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_next = next;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_emitInitial = emitInitial;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_resetOnStop = resetOnStop;
  this.maybeDisplayName_$eq__sjs_js_$bar__V((void 0));
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_topoRank = 1;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((1 | this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_currentValue = initial;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24);
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeTimeoutHandle = (void 0);
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((4 | this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype = new $h_O();
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.constructor = $c_Lcom_raquo_airstream_timing_PeriodicEventStream;
/** @constructor */
function $h_Lcom_raquo_airstream_timing_PeriodicEventStream() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype = $c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype;
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.externalObservers__sjs_js_Array = (function() {
  if (((((8 & this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/timing/PeriodicEventStream.scala: 12")
  };
  return this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_externalObservers
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.internalObservers__sjs_js_Array = (function() {
  if (((((16 & this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/timing/PeriodicEventStream.scala: 12")
  };
  return this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_internalObservers
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_externalObservers = x$1;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((8 | this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_internalObservers = x$1;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((16 | this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  if (((((32 & this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/timing/PeriodicEventStream.scala: 12")
  };
  return this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.maybeDisplayName_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_maybeDisplayName = x$1;
  this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0 = (((32 | this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.topoRank__I = (function() {
  if (((((1 & this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/timing/PeriodicEventStream.scala: 19")
  };
  return this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_topoRank
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.onStart__V = (function() {
  $p_Lcom_raquo_airstream_timing_PeriodicEventStream__tick__Z__V(this, true)
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.onStop__V = (function() {
  $p_Lcom_raquo_airstream_timing_PeriodicEventStream__clearTimeout__V(this);
  if (this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_resetOnStop) {
    var value = this.Lcom_raquo_airstream_timing_PeriodicEventStream__f_initial;
    $p_Lcom_raquo_airstream_timing_PeriodicEventStream__resetTo__O__Z__V(this, value, true)
  }
});
var $d_Lcom_raquo_airstream_timing_PeriodicEventStream = new $TypeData().initClass({
  Lcom_raquo_airstream_timing_PeriodicEventStream: 0
}, false, "com.raquo.airstream.timing.PeriodicEventStream", {
  Lcom_raquo_airstream_timing_PeriodicEventStream: 1,
  O: 1,
  Lcom_raquo_airstream_core_WritableEventStream: 1,
  Lcom_raquo_airstream_core_EventStream: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Source$EventSource: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1
});
$c_Lcom_raquo_airstream_timing_PeriodicEventStream.prototype.$classData = $d_Lcom_raquo_airstream_timing_PeriodicEventStream;
/** @constructor */
function $c_sc_AbstractView() {
  /*<skip>*/
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
  /*<skip>*/
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_config = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_topoRank = 0;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex = 0;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f__fireValue = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f__fireError = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_getStartIndex = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_getIsStarted = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_externalObservers = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_internalObservers = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = 0;
  this.maybeDisplayName_$eq__sjs_js_$bar__V((void 0));
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_config = $as_Lcom_raquo_airstream_custom_CustomSource$Config($n(makeConfig).apply__O__O__O__O__O(this._fireValue__F1(), this._fireError__F1(), this.getStartIndex__F0(), this.getIsStarted__F0()));
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (1 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
}
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype;
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.onStop__V = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.topoRank__I = (function() {
  if (((2 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_topoRank
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.startIndex__I = (function() {
  if (((4 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.startIndex_$eq__I__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_startIndex = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (4 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype._fireValue__F1 = (function() {
  if (((8 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f__fireValue
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype._fireError__F1 = (function() {
  if (((16 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f__fireError
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.getStartIndex__F0 = (function() {
  if (((64 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_getStartIndex
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.getIsStarted__F0 = (function() {
  if (((128 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_getIsStarted
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$custom$CustomSource$_setter_$topoRank_$eq__I__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_topoRank = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (2 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$custom$CustomSource$_setter_$_fireValue_$eq__F1__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f__fireValue = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (8 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$custom$CustomSource$_setter_$_fireError_$eq__F1__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f__fireError = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (16 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$custom$CustomSource$_setter_$getStartIndex_$eq__F0__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_getStartIndex = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (64 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$custom$CustomSource$_setter_$getIsStarted_$eq__F0__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_getIsStarted = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (128 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.externalObservers__sjs_js_Array = (function() {
  if (((256 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_externalObservers
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.internalObservers__sjs_js_Array = (function() {
  if (((512 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_internalObservers
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_externalObservers = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (256 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_internalObservers = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (512 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  if (((1024 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 10")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.maybeDisplayName_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_maybeDisplayName = x$1;
  this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0 = (1024 | this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0)
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.config__Lcom_raquo_airstream_custom_CustomSource$Config = (function() {
  if (((1 & this.Lcom_raquo_airstream_custom_CustomStreamSource__f_bitmap$init$0) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/custom/CustomStreamSource.scala: 14")
  };
  return this.Lcom_raquo_airstream_custom_CustomStreamSource__f_config
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().initClass({
  Lcom_raquo_airstream_custom_CustomStreamSource: 0
}, false, "com.raquo.airstream.custom.CustomStreamSource", {
  Lcom_raquo_airstream_custom_CustomStreamSource: 1,
  O: 1,
  Lcom_raquo_airstream_core_WritableEventStream: 1,
  Lcom_raquo_airstream_core_EventStream: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Source$EventSource: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_custom_CustomSource: 1
});
$c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype.$classData = $d_Lcom_raquo_airstream_custom_CustomStreamSource;
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2)
      }
    };
    return false
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Map(o)) {
      var x2 = $as_sc_Map(o);
      if (($n(x2), true)) {
        if (($thiz.size__I() === $n(x2).size__I())) {
          try {
            return $thiz.forall__F1__Z(new $c_sjsr_AnonFunction1(((kv$2) => {
              var kv = $as_T2(kv$2);
              return $m_sr_BoxesRunTime$().equals__O__O__Z($n(x2).getOrElse__O__F0__O($n(kv)._1__O(), $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinelFn), $n(kv)._2__O())
            })))
          } catch (e) {
            if ((e instanceof $c_jl_ClassCastException)) {
              return false
            } else {
              throw e
            }
          }
        } else {
          return false
        }
      }
    };
    return false
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth))
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapEventStream(parent, project, recover) {
  this.Lcom_raquo_airstream_misc_MapEventStream__f_parent = null;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_project = null;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_recover = null;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_topoRank = 0;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_externalObservers = null;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_internalObservers = null;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0 = 0;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_parent = parent;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_project = project;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_recover = recover;
  this.maybeDisplayName_$eq__sjs_js_$bar__V((void 0));
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapEventStream__f_topoRank = ((1 + ($m_Lcom_raquo_airstream_core_Protected$(), $n(parent).topoRank__I())) | 0);
  this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0 = (((1 | this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24)
}
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype = new $h_O();
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.constructor = $c_Lcom_raquo_airstream_misc_MapEventStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapEventStream() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_misc_MapEventStream.prototype = $c_Lcom_raquo_airstream_misc_MapEventStream.prototype;
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentObservable__onStart__V(this)
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.onStop__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentObservable__onStop__V(this)
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.externalObservers__sjs_js_Array = (function() {
  if (((((2 & this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/misc/MapEventStream.scala: 23")
  };
  return this.Lcom_raquo_airstream_misc_MapEventStream__f_externalObservers
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.internalObservers__sjs_js_Array = (function() {
  if (((((4 & this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/misc/MapEventStream.scala: 23")
  };
  return this.Lcom_raquo_airstream_misc_MapEventStream__f_internalObservers
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapEventStream__f_externalObservers = x$1;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0 = (((2 | this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__sjs_js_Array__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapEventStream__f_internalObservers = x$1;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0 = (((4 | this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  if (((((8 & this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/misc/MapEventStream.scala: 23")
  };
  return this.Lcom_raquo_airstream_misc_MapEventStream__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.maybeDisplayName_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapEventStream__f_maybeDisplayName = x$1;
  this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0 = (((8 | this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24)
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.topoRank__I = (function() {
  if (((((1 & this.Lcom_raquo_airstream_misc_MapEventStream__f_bitmap$init$0) << 24) >> 24) === 0)) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/airstream/src/main/scala/com/raquo/airstream/misc/MapEventStream.scala: 29")
  };
  return this.Lcom_raquo_airstream_misc_MapEventStream__f_topoRank
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.onNext__O__Lcom_raquo_airstream_core_Transaction__V = (function(nextParentValue, transaction) {
  try {
    var $$x1 = new $c_s_util_Success($n(this.Lcom_raquo_airstream_misc_MapEventStream__f_project).apply__O__O(nextParentValue))
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $$x1;
      var o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
      if ((!$n(o11).isEmpty__Z())) {
        var e$3 = $as_jl_Throwable($n(o11).get__O());
        var $$x1 = new $c_s_util_Failure(e$3);
        break matchEnd8
      };
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
    }
  };
  $n($$x1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_jl_Throwable(x$1$2);
    this.onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(x$1, transaction)
  })), new $c_sjsr_AnonFunction1(((x$2$2) => {
    $f_Lcom_raquo_airstream_core_WritableEventStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, x$2$2, transaction)
  })))
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V = (function(nextError, transaction) {
  var this$1 = $n(this.Lcom_raquo_airstream_misc_MapEventStream__f_recover);
  if (this$1.isEmpty__Z()) {
    $f_Lcom_raquo_airstream_core_WritableEventStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction)
  } else {
    var arg1 = this$1.get__O();
    var pf = $as_s_PartialFunction(arg1);
    try {
      var $$x1 = new $c_s_util_Success($as_s_Option($n(pf).applyOrElse__O__F1__O(nextError, new $c_sjsr_AnonFunction1(((x$3$2) => {
        $as_jl_Throwable(x$3$2);
        return null
      })))))
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $$x1;
        var o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!$n(o11).isEmpty__Z())) {
          var e$3 = $as_jl_Throwable($n(o11).get__O());
          var $$x1 = new $c_s_util_Failure(e$3);
          break matchEnd8
        };
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
      }
    };
    $n($$x1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((tryError$2) => {
      var tryError = $as_jl_Throwable(tryError$2);
      var nextError$1 = new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError);
      $f_Lcom_raquo_airstream_core_WritableEventStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$1, transaction)
    })), new $c_sjsr_AnonFunction1(((nextValue$2) => {
      var nextValue = $as_s_Option(nextValue$2);
      if ((nextValue === null)) {
        $f_Lcom_raquo_airstream_core_WritableEventStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction)
      } else {
        var this$4 = $n(nextValue);
        if ((!this$4.isEmpty__Z())) {
          var arg1$1 = this$4.get__O();
          $f_Lcom_raquo_airstream_core_WritableEventStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, arg1$1, transaction)
        }
      }
    })))
  }
});
var $d_Lcom_raquo_airstream_misc_MapEventStream = new $TypeData().initClass({
  Lcom_raquo_airstream_misc_MapEventStream: 0
}, false, "com.raquo.airstream.misc.MapEventStream", {
  Lcom_raquo_airstream_misc_MapEventStream: 1,
  O: 1,
  Lcom_raquo_airstream_core_WritableEventStream: 1,
  Lcom_raquo_airstream_core_EventStream: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Source$EventSource: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_common_SingleParentObservable: 1,
  Lcom_raquo_airstream_core_InternalObserver: 1,
  Lcom_raquo_airstream_common_InternalNextErrorObserver: 1
});
$c_Lcom_raquo_airstream_misc_MapEventStream.prototype.$classData = $d_Lcom_raquo_airstream_misc_MapEventStream;
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractSeq.prototype.isDefinedAt__I__Z = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sc_AbstractSeq.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_sc_AbstractSeq.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return $uZ(this.apply__O__O(v1))
});
$c_sc_AbstractSeq.prototype.apply$mcVI$sp__I__V = (function(v1) {
  this.apply__O__O(v1)
});
$c_sc_AbstractSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z($uI(x))
});
/** @constructor */
function $c_sc_AbstractSeqView() {
  /*<skip>*/
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
  /*<skip>*/
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
/** @constructor */
function $c_sc_AbstractMap() {
  /*<skip>*/
}
$c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
  /*<skip>*/
}
$h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
$c_sc_AbstractMap.prototype.equals__O__Z = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o)
});
$c_sc_AbstractMap.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().mapHash__sc_Map__I(this)
});
$c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
  return "Map"
});
$c_sc_AbstractMap.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractMap.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1)
});
$c_sc_AbstractMap.prototype.foreachEntry__F2__V = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f)
});
$c_sc_AbstractMap.prototype.isDefinedAt__O__Z = (function(key) {
  return this.contains__O__Z(key)
});
$c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end)
});
$c_sc_AbstractMap.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return $uZ(this.apply__O__O(v1))
});
$c_sc_AbstractMap.prototype.apply$mcVI$sp__I__V = (function(v1) {
  this.apply__O__O(v1)
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
  /*<skip>*/
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx)
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I()
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z()
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
function $p_Lcom_raquo_laminar_api_Laminar$documentEvents$__onDomContentLoaded$lzycompute__Lcom_raquo_airstream_core_EventStream($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_bitmap$0;
  var lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_onDomContentLoaded = $thiz.eventProp__T__Lcom_raquo_airstream_core_EventStream("DOMContentLoaded");
    var b$1 = $thiz.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_bitmap$0;
    var lo$1 = (8 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_onDomContentLoaded
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$documentEvents$() {
  this.Lcom_raquo_laminar_builders_DomEventStreamPropBuilder__f_eventTarget = null;
  this.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_onDomContentLoaded = null;
  this.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_bitmap$0 = $L0;
  $ct_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder__Lorg_scalajs_dom_EventTarget__(this, document)
}
$c_Lcom_raquo_laminar_api_Laminar$documentEvents$.prototype = new $h_Lcom_raquo_laminar_builders_DomEventStreamPropBuilder();
$c_Lcom_raquo_laminar_api_Laminar$documentEvents$.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$documentEvents$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$documentEvents$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$documentEvents$.prototype = $c_Lcom_raquo_laminar_api_Laminar$documentEvents$.prototype;
$c_Lcom_raquo_laminar_api_Laminar$documentEvents$.prototype.onDomContentLoaded__Lcom_raquo_airstream_core_EventStream = (function() {
  var b = this.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_bitmap$0;
  var lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_Laminar$documentEvents$__onDomContentLoaded$lzycompute__Lcom_raquo_airstream_core_EventStream(this)
  } else {
    return this.Lcom_raquo_laminar_api_Laminar$documentEvents$__f_onDomContentLoaded
  }
});
var $d_Lcom_raquo_laminar_api_Laminar$documentEvents$ = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$documentEvents$: 0
}, false, "com.raquo.laminar.api.Laminar$documentEvents$", {
  Lcom_raquo_laminar_api_Laminar$documentEvents$: 1,
  Lcom_raquo_laminar_builders_DomEventStreamPropBuilder: 1,
  O: 1,
  Lcom_raquo_domtypes_generic_builders_EventPropBuilder: 1,
  Lcom_raquo_domtypes_jsdom_defs_package$eventProps$DocumentEventProps: 1,
  Lcom_raquo_domtypes_jsdom_defs_package$eventProps$GlobalEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_ErrorEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_FormEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_KeyboardEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_MediaEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_MiscellaneousEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_MouseEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_PointerEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_DocumentOnlyEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_ClipboardEventProps: 1
});
$c_Lcom_raquo_laminar_api_Laminar$documentEvents$.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$documentEvents$;
var $n_Lcom_raquo_laminar_api_Laminar$documentEvents$;
function $m_Lcom_raquo_laminar_api_Laminar$documentEvents$() {
  if ((!$n_Lcom_raquo_laminar_api_Laminar$documentEvents$)) {
    $n_Lcom_raquo_laminar_api_Laminar$documentEvents$ = new $c_Lcom_raquo_laminar_api_Laminar$documentEvents$()
  };
  return $n_Lcom_raquo_laminar_api_Laminar$documentEvents$
}
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I()
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
/** @constructor */
function $c_sci_AbstractSeq() {
  /*<skip>*/
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
  /*<skip>*/
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
/** @constructor */
function $c_sci_AbstractMap() {
  /*<skip>*/
}
$c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_sci_AbstractMap.prototype.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
  /*<skip>*/
}
$h_sci_AbstractMap.prototype = $c_sci_AbstractMap.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength
        } else {
          var maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$c_sci_Map$EmptyMap$.prototype.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$h_sci_Map$EmptyMap$.prototype = $c_sci_Map$EmptyMap$.prototype;
$c_sci_Map$EmptyMap$.prototype.size__I = (function() {
  return 0
});
$c_sci_Map$EmptyMap$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Map$EmptyMap$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Map$EmptyMap$.prototype.apply__O__E = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key))
});
$c_sci_Map$EmptyMap$.prototype.contains__O__Z = (function(key) {
  return false
});
$c_sci_Map$EmptyMap$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return $n(default$1).apply__O()
});
$c_sci_Map$EmptyMap$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Map$EmptyMap$.prototype.apply__O__O = (function(key) {
  this.apply__O__E(key)
});
var $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
function $is_scm_Buffer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Buffer)))
}
function $as_scm_Buffer(obj) {
  return (($is_scm_Buffer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Buffer"))
}
function $isArrayOf_scm_Buffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Buffer)))
}
function $asArrayOf_scm_Buffer(obj, depth) {
  return (($isArrayOf_scm_Buffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Buffer;", depth))
}
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements")
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $as_sci_LazyList$State($n($thiz.sci_LazyList__f_lazyState).apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  var this$1 = $n(b);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    var this$2 = $n(b);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    var this$3 = $n(b);
    var obj = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    var elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
        var this$6 = $n($as_sci_LazyList(elem$2));
        elem$2 = $n(this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) && ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          var this$7 = $n(b);
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$8 = $n($as_sci_LazyList(elem));
          var obj$1 = $n(this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          var this$9 = $n($as_sci_LazyList(elem));
          elem = $n(this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$10 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
            var this$11 = $n($as_sci_LazyList(elem$2));
            elem$2 = $n(this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        var this$12 = $n(b);
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$13 = $n($as_sci_LazyList(elem));
        var obj$2 = $n(this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        var this$14 = $n($as_sci_LazyList(elem));
        elem = $n(this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
      };
      if ((!$n($as_sci_LazyList(elem)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        var this$15 = $n(b);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || ($n(a).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$16 = $n(runner);
          runner = $n(this$16.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$17 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$17.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      var a$1 = $as_sci_LazyList(elem);
      var b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || ($n(a$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        var this$18 = $n(b);
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$19 = $n($as_sci_LazyList(elem));
        var obj$3 = $n(this$19.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        var this$20 = $n($as_sci_LazyList(elem));
        elem = $n(this$20.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
      };
      while (true) {
        var a$2 = $as_sci_LazyList(elem);
        var b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || ($n(a$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$3).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$21 = $n(b);
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$22 = $n($as_sci_LazyList(elem));
          var obj$4 = $n(this$22.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          var this$23 = $n($as_sci_LazyList(elem));
          elem = $n(this$23.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
        } else {
          break
        }
      };
      var this$24 = $n(b);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  var this$25 = $n(b);
  this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return this$25
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
  /*<skip>*/
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this)
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
});
$c_sci_LazyList.prototype.isDefinedAt__I__Z = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
});
$c_sci_LazyList.prototype.head__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O()
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!$n(these).isEmpty__Z())) {
    var this$1 = $n(these);
    these = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  while ((those !== these)) {
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$2 = $n(these);
    these = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$3 = $n(these);
    these = $n(this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ((these === those)) {
      return this
    };
    var this$4 = $n(those);
    those = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  return this
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
});
$c_sci_LazyList.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!$n(_$this).isEmpty__Z())) {
    var $$x1 = $n(f);
    var this$1 = $n(_$this);
    $n($$x1).apply__O__O($n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O());
    var this$2 = $n(_$this);
    _$this = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  }
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList"
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $n(sb).scm_StringBuilder__f_underlying, start, sep, end);
  return sb
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $n($p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")")).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.isDefinedAt__O__Z = (function(x) {
  var x$1 = $uI(x);
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n)
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
});
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
var $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sjsr_WrappedVarArgs.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_sjsr_WrappedVarArgs.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return $uZ(this.apply__I__O(v1))
});
$c_sjsr_WrappedVarArgs.prototype.apply$mcVI$sp__I__V = (function(v1) {
  this.apply__I__O(v1)
});
$c_sjsr_WrappedVarArgs.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjsr_WrappedVarArgs.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjsr_WrappedVarArgs$()
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs"
});
$c_sjsr_WrappedVarArgs.prototype.isDefinedAt__O__Z = (function(x) {
  var idx = $uI(x);
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_Vector$()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length)
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector"
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len)
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $$x1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $n($$x1).foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0)
  }
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
/** @constructor */
function $c_scm_ArraySeq() {
  /*<skip>*/
}
$c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
  /*<skip>*/
}
$h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
$c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_scm_ArraySeq.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ArraySeq$().scm_ArraySeq$__f_untagged
});
$c_scm_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq"
});
$c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    var x2 = $as_scm_ArraySeq(other);
    var xs = this.array__O();
    var $$x1 = $m_jl_reflect_Array$().getLength__O__I(xs);
    var xs$1 = $n(x2).array__O();
    if (($$x1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
      return false
    }
  };
  return $f_sc_Seq__equals__O__Z(this, other)
});
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"))
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)))
}
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth))
}
function $as_sci_ArraySeq$ofRef(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth))
}
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_List.prototype.isDefinedAt__I__Z = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_List.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix
  } else if ($n(prefix).isEmpty__Z()) {
    return this
  } else {
    var result = new $c_sci_$colon$colon($n(prefix).head__O(), this);
    var curr = result;
    var that = $as_sci_List($n(prefix).tail__O());
    while ((!$n(that).isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon($n(that).head__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
      that = $as_sci_List($n(that).tail__O())
    };
    return result
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$())
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = $as_sci_List(prefix);
    return this.$colon$colon$colon__sci_List__sci_List(x2)
  };
  if (($n(prefix).knownSize__I() === 0)) {
    return this
  };
  if ((prefix instanceof $c_scm_ListBuffer)) {
    var x3 = $as_scm_ListBuffer(prefix);
    if (this.isEmpty__Z()) {
      return $n(x3).toList__sci_List()
    }
  };
  var iter = $n(prefix).iterator__sc_Iterator();
  if ($n(iter).hasNext__Z()) {
    var result = new $c_sci_$colon$colon($n(iter).next__O(), this);
    var curr = result;
    while ($n(iter).hasNext__Z()) {
      var temp = new $c_sci_$colon$colon($n(iter).next__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp
    };
    return result
  } else {
    return this
  }
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    $n(f).apply__O__O($n(these).head__O());
    these = $as_sci_List($n(these).tail__O())
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O())
  };
  return len
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
});
$c_sci_List.prototype.className__T = (function() {
  return "List"
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
  } else {
    return $f_sc_Seq__equals__O__Z(this, o)
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.isDefinedAt__O__Z = (function(x) {
  var x$1 = $uI(x);
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
  /*<skip>*/
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.scm_ArraySeq$ofBoolean__f_array = null;
  this.scm_ArraySeq$ofBoolean__f_array = array
}
$c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofBoolean.prototype.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofBoolean.prototype = $c_scm_ArraySeq$ofBoolean.prototype;
$c_scm_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).u.length
});
$c_scm_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofBoolean__f_array;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
    var x2 = $as_scm_ArraySeq$ofBoolean(that);
    var a = this.scm_ArraySeq$ofBoolean__f_array;
    var b = $n(x2).scm_ArraySeq$ofBoolean__f_array;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array)
});
$c_scm_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(index) {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).get(index)
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcZI$sp__I__Z(index)
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i)
});
$c_scm_ArraySeq$ofBoolean.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofBoolean__f_array
});
function $as_scm_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofBoolean"))
}
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)))
}
function $asArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofBoolean;", depth))
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass({
  scm_ArraySeq$ofBoolean: 0
}, false, "scala.collection.mutable.ArraySeq$ofBoolean", {
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofBoolean.prototype.$classData = $d_scm_ArraySeq$ofBoolean;
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.scm_ArraySeq$ofByte__f_array = null;
  this.scm_ArraySeq$ofByte__f_array = array
}
$c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofByte.prototype.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofByte.prototype = $c_scm_ArraySeq$ofByte.prototype;
$c_scm_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofByte__f_array).u.length
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__B = (function(index) {
  return $n(this.scm_ArraySeq$ofByte__f_array).get(index)
});
$c_scm_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofByte__f_array;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofByte)) {
    var x2 = $as_scm_ArraySeq$ofByte(that);
    var a = this.scm_ArraySeq$ofByte__f_array;
    var b = $n(x2).scm_ArraySeq$ofByte__f_array;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array)
});
$c_scm_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1))
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i)
});
$c_scm_ArraySeq$ofByte.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofByte__f_array
});
function $as_scm_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofByte"))
}
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)))
}
function $asArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofByte;", depth))
}
var $d_scm_ArraySeq$ofByte = new $TypeData().initClass({
  scm_ArraySeq$ofByte: 0
}, false, "scala.collection.mutable.ArraySeq$ofByte", {
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofByte.prototype.$classData = $d_scm_ArraySeq$ofByte;
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.scm_ArraySeq$ofChar__f_array = null;
  this.scm_ArraySeq$ofChar__f_array = array
}
$c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofChar.prototype = $c_scm_ArraySeq$ofChar.prototype;
$c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofChar__f_array).u.length
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
  return $n(this.scm_ArraySeq$ofChar__f_array).get(index)
});
$c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofChar__f_array;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofChar)) {
    var x2 = $as_scm_ArraySeq$ofChar(that);
    var a = this.scm_ArraySeq$ofChar__f_array;
    var b = $n(x2).scm_ArraySeq$ofChar__f_array;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array)
});
$c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  var jsb = $n(sb).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var len = $n(this.scm_ArraySeq$ofChar__f_array).u.length;
  if ((len !== 0)) {
    var this$3 = $n(sep);
    if ((this$3 === "")) {
      $n(jsb).append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array)
    } else {
      $n(jsb);
      $n(jsb).length__I();
      $n(end);
      $n(sep);
      var this$6 = $n(jsb);
      var c = $n(this.scm_ArraySeq$ofChar__f_array).get(0);
      var str = $as_T(String.fromCharCode(c));
      this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
      var i = 1;
      while ((i < len)) {
        var this$8 = $n(jsb);
        this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$9 = $n(jsb);
        var c$1 = $n(this.scm_ArraySeq$ofChar__f_array).get(i);
        var str$1 = $as_T(String.fromCharCode(c$1));
        this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
        i = ((1 + i) | 0)
      }
    }
  };
  var this$11 = $n(end);
  if ((this$11.length !== 0)) {
    var this$12 = $n(jsb);
    this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return sb
});
$c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)))
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i))
});
$c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofChar__f_array
});
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
var $d_scm_ArraySeq$ofChar = new $TypeData().initClass({
  scm_ArraySeq$ofChar: 0
}, false, "scala.collection.mutable.ArraySeq$ofChar", {
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofChar.prototype.$classData = $d_scm_ArraySeq$ofChar;
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.scm_ArraySeq$ofDouble__f_array = null;
  this.scm_ArraySeq$ofDouble__f_array = array
}
$c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofDouble.prototype.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofDouble.prototype = $c_scm_ArraySeq$ofDouble.prototype;
$c_scm_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofDouble__f_array).u.length
});
$c_scm_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofDouble__f_array;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var x2 = $as_scm_ArraySeq$ofDouble(that);
    var a = this.scm_ArraySeq$ofDouble__f_array;
    var b = $n(x2).scm_ArraySeq$ofDouble__f_array;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array)
});
$c_scm_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(index) {
  return $n(this.scm_ArraySeq$ofDouble__f_array).get(index)
});
$c_scm_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcDI$sp__I__D(index)
});
$c_scm_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i)
});
$c_scm_ArraySeq$ofDouble.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofDouble__f_array
});
function $as_scm_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofDouble"))
}
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)))
}
function $asArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofDouble;", depth))
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().initClass({
  scm_ArraySeq$ofDouble: 0
}, false, "scala.collection.mutable.ArraySeq$ofDouble", {
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofDouble.prototype.$classData = $d_scm_ArraySeq$ofDouble;
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.scm_ArraySeq$ofFloat__f_array = null;
  this.scm_ArraySeq$ofFloat__f_array = array
}
$c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofFloat.prototype.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofFloat.prototype = $c_scm_ArraySeq$ofFloat.prototype;
$c_scm_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofFloat__f_array).u.length
});
$c_scm_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofFloat__f_array;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var x2 = $as_scm_ArraySeq$ofFloat(that);
    var a = this.scm_ArraySeq$ofFloat__f_array;
    var b = $n(x2).scm_ArraySeq$ofFloat__f_array;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array)
});
$c_scm_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(index) {
  return $n(this.scm_ArraySeq$ofFloat__f_array).get(index)
});
$c_scm_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcFI$sp__I__F(index)
});
$c_scm_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i)
});
$c_scm_ArraySeq$ofFloat.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofFloat__f_array
});
function $as_scm_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofFloat"))
}
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)))
}
function $asArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofFloat;", depth))
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().initClass({
  scm_ArraySeq$ofFloat: 0
}, false, "scala.collection.mutable.ArraySeq$ofFloat", {
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofFloat.prototype.$classData = $d_scm_ArraySeq$ofFloat;
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.scm_ArraySeq$ofInt__f_array = null;
  this.scm_ArraySeq$ofInt__f_array = array
}
$c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofInt.prototype.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofInt.prototype = $c_scm_ArraySeq$ofInt.prototype;
$c_scm_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofInt__f_array).u.length
});
$c_scm_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofInt__f_array;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofInt)) {
    var x2 = $as_scm_ArraySeq$ofInt(that);
    var a = this.scm_ArraySeq$ofInt__f_array;
    var b = $n(x2).scm_ArraySeq$ofInt__f_array;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array)
});
$c_scm_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(index) {
  return $n(this.scm_ArraySeq$ofInt__f_array).get(index)
});
$c_scm_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcII$sp__I__I(index)
});
$c_scm_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i)
});
$c_scm_ArraySeq$ofInt.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofInt__f_array
});
function $as_scm_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofInt"))
}
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)))
}
function $asArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofInt;", depth))
}
var $d_scm_ArraySeq$ofInt = new $TypeData().initClass({
  scm_ArraySeq$ofInt: 0
}, false, "scala.collection.mutable.ArraySeq$ofInt", {
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofInt.prototype.$classData = $d_scm_ArraySeq$ofInt;
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.scm_ArraySeq$ofLong__f_array = null;
  this.scm_ArraySeq$ofLong__f_array = array
}
$c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofLong.prototype.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofLong.prototype = $c_scm_ArraySeq$ofLong.prototype;
$c_scm_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofLong__f_array).u.length
});
$c_scm_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofLong__f_array;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofLong)) {
    var x2 = $as_scm_ArraySeq$ofLong(that);
    var a = this.scm_ArraySeq$ofLong__f_array;
    var b = $n(x2).scm_ArraySeq$ofLong__f_array;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array)
});
$c_scm_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(index) {
  return $n(this.scm_ArraySeq$ofLong__f_array).get(index)
});
$c_scm_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcJI$sp__I__J(index)
});
$c_scm_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i)
});
$c_scm_ArraySeq$ofLong.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofLong__f_array
});
function $as_scm_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofLong"))
}
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)))
}
function $asArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofLong;", depth))
}
var $d_scm_ArraySeq$ofLong = new $TypeData().initClass({
  scm_ArraySeq$ofLong: 0
}, false, "scala.collection.mutable.ArraySeq$ofLong", {
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofLong.prototype.$classData = $d_scm_ArraySeq$ofLong;
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.scm_ArraySeq$ofRef__f_array = null;
  this.scm_ArraySeq$ofRef__f_array = array
}
$c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofRef.prototype.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofRef.prototype = $c_scm_ArraySeq$ofRef.prototype;
$c_scm_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofRef__f_array).u.length
});
$c_scm_ArraySeq$ofRef.prototype.apply__I__O = (function(index) {
  return $n(this.scm_ArraySeq$ofRef__f_array).get(index)
});
$c_scm_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofRef__f_array;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofRef)) {
    var x2 = $as_scm_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, $n(x2).scm_ArraySeq$ofRef__f_array)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array)
});
$c_scm_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
$c_scm_ArraySeq$ofRef.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofRef__f_array
});
function $as_scm_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofRef"))
}
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)))
}
function $asArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofRef;", depth))
}
var $d_scm_ArraySeq$ofRef = new $TypeData().initClass({
  scm_ArraySeq$ofRef: 0
}, false, "scala.collection.mutable.ArraySeq$ofRef", {
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofRef.prototype.$classData = $d_scm_ArraySeq$ofRef;
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.scm_ArraySeq$ofShort__f_array = null;
  this.scm_ArraySeq$ofShort__f_array = array
}
$c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofShort.prototype.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofShort.prototype = $c_scm_ArraySeq$ofShort.prototype;
$c_scm_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofShort__f_array).u.length
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__S = (function(index) {
  return $n(this.scm_ArraySeq$ofShort__f_array).get(index)
});
$c_scm_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofShort__f_array;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofShort)) {
    var x2 = $as_scm_ArraySeq$ofShort(that);
    var a = this.scm_ArraySeq$ofShort__f_array;
    var b = $n(x2).scm_ArraySeq$ofShort__f_array;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array)
});
$c_scm_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1))
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i)
});
$c_scm_ArraySeq$ofShort.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofShort__f_array
});
function $as_scm_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofShort"))
}
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)))
}
function $asArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofShort;", depth))
}
var $d_scm_ArraySeq$ofShort = new $TypeData().initClass({
  scm_ArraySeq$ofShort: 0
}, false, "scala.collection.mutable.ArraySeq$ofShort", {
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofShort.prototype.$classData = $d_scm_ArraySeq$ofShort;
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.scm_ArraySeq$ofUnit__f_array = null;
  this.scm_ArraySeq$ofUnit__f_array = array
}
$c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofUnit.prototype.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofUnit.prototype = $c_scm_ArraySeq$ofUnit.prototype;
$c_scm_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofUnit__f_array).u.length
});
$c_scm_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofUnit__f_array;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
    var x2 = $as_scm_ArraySeq$ofUnit(that);
    return ($n(this.scm_ArraySeq$ofUnit__f_array).u.length === $n($n(x2).scm_ArraySeq$ofUnit__f_array).u.length)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array)
});
$c_scm_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(index) {
  $n(this.scm_ArraySeq$ofUnit__f_array).get(index)
});
$c_scm_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  this.apply$mcVI$sp__I__V(index)
});
$c_scm_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i)
});
$c_scm_ArraySeq$ofUnit.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofUnit__f_array
});
function $as_scm_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofUnit"))
}
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)))
}
function $asArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofUnit;", depth))
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().initClass({
  scm_ArraySeq$ofUnit: 0
}, false, "scala.collection.mutable.ArraySeq$ofUnit", {
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofUnit.prototype.$classData = $d_scm_ArraySeq$ofUnit;
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
  /*<skip>*/
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1)
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
  /*<skip>*/
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index)
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index)
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"))
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth))
}
var $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next
});
$c_sci_$colon$colon.prototype.headOption__s_Option = (function() {
  return new $c_s_Some(this.sci_$colon$colon__f_head)
});
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  $ct_T2__O__O__(new $c_T2(), $m_sci_Nil$(), $m_sci_Nil$())
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list")
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Nil$.prototype.headOption__s_Option = (function() {
  return $m_s_None$()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
  /*<skip>*/
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1))
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i)
});
var $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
  /*<skip>*/
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"))
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth))
}
var $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
  /*<skip>*/
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"))
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth))
}
var $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
  /*<skip>*/
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"))
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth))
}
var $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
  /*<skip>*/
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"))
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth))
}
var $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
  /*<skip>*/
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"))
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth))
}
var $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0)
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = $n(buf).scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = $n(buf).scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_MutationTracker$CheckedIterator($n(this.scm_ListBuffer__f_first).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => this.scm_ListBuffer__f_mutationCount)))
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.knownSize__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0)
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_first
});
$c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_first = last1
  } else {
    $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = last1
  };
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this
});
$c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
    this.scm_ListBuffer__f_first = last0;
    while ($n(it).hasNext__Z()) {
      var last1 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
      $n(last0).sci_$colon$colon__f_next = last1;
      last0 = last1;
      len = ((1 + len) | 0)
    };
    this.scm_ListBuffer__f_len = len;
    this.scm_ListBuffer__f_last0 = last0
  };
  return this
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var fresh = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = $n(fresh).scm_ListBuffer__f_first
    } else {
      $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = $n(fresh).scm_ListBuffer__f_first
    };
    this.scm_ListBuffer__f_last0 = $n(fresh).scm_ListBuffer__f_last0;
    this.scm_ListBuffer__f_len = ((this.scm_ListBuffer__f_len + $n(fresh).scm_ListBuffer__f_len) | 0)
  };
  return this
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
});
$c_scm_ListBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
function $p_Lcom_raquo_laminar_api_Laminar$__div$lzycompute__Lcom_raquo_laminar_builders_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_Laminar$__f_bitmap$1;
  var lo = (32768 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_Laminar$__f_div = new $c_Lcom_raquo_laminar_builders_HtmlTag("div", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_Laminar$__f_bitmap$1;
    var lo$1 = (32768 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_Laminar$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_Laminar$__f_div
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$() {
  this.Lcom_raquo_laminar_api_Laminar$__f_child = null;
  this.Lcom_raquo_laminar_api_Laminar$__f_div = null;
  this.Lcom_raquo_laminar_api_Laminar$__f_EventStream = null;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$1 = $L0;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = $L0;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = $L0;
  $n_Lcom_raquo_laminar_api_Laminar$ = this;
  $f_Lcom_raquo_laminar_api_Airstream__$init$__V(this);
  new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo = (32 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = new $c_RTLong(lo, hi);
  var b$1 = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo$1 = (64 | b$1.RTLong__f_lo);
  var hi$1 = b$1.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = new $c_RTLong(lo$1, hi$1);
  this.Lcom_raquo_laminar_api_Laminar$__f_child = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
  var b$2 = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo$2 = (128 | b$2.RTLong__f_lo);
  var hi$2 = b$2.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = new $c_RTLong(lo$2, hi$2);
  $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
  var b$3 = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo$3 = (256 | b$3.RTLong__f_lo);
  var hi$3 = b$3.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = new $c_RTLong(lo$3, hi$3);
  var b$4 = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo$4 = (512 | b$4.RTLong__f_lo);
  var hi$4 = b$4.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = new $c_RTLong(lo$4, hi$4);
  var fn = new $c_sjsr_AnonFunction1(((x$2$2) => {
    var x$2 = $as_Lcom_raquo_laminar_lifecycle_MountContext(x$2$2);
    $n($as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement($n(x$2).Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode)).ref__Lorg_scalajs_dom_HTMLElement().focus()
  }));
  new $c_Lcom_raquo_laminar_api_Laminar$$anon$3(fn);
  var b$5 = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo$5 = (1024 | b$5.RTLong__f_lo);
  var hi$5 = b$5.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0 = new $c_RTLong(lo$5, hi$5)
}
$c_Lcom_raquo_laminar_api_Laminar$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$.prototype = $c_Lcom_raquo_laminar_api_Laminar$.prototype;
$c_Lcom_raquo_laminar_api_Laminar$.prototype.div__Lcom_raquo_laminar_builders_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$1;
  var lo = (32768 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_Laminar$__div$lzycompute__Lcom_raquo_laminar_builders_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_Laminar$__f_div
  }
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.EventStream__Lcom_raquo_airstream_core_EventStream$ = (function() {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (128 & b.RTLong__f_lo);
  if ((!(lo !== 0))) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/api/Laminar.scala: 22")
  };
  return this.Lcom_raquo_laminar_api_Laminar$__f_EventStream
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$EventStream_$eq__Lcom_raquo_airstream_core_EventStream$__V = (function(x$1) {
  this.Lcom_raquo_laminar_api_Laminar$__f_EventStream = x$1;
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (128 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$Signal_$eq__Lcom_raquo_airstream_core_Signal$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (256 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$Observer_$eq__Lcom_raquo_airstream_core_Observer$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (512 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$AirstreamError_$eq__Lcom_raquo_airstream_core_AirstreamError$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (1024 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$EventBus_$eq__Lcom_raquo_airstream_eventbus_EventBus$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (2048 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$WriteBus_$eq__Lcom_raquo_airstream_eventbus_WriteBus$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (4096 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$Val_$eq__Lcom_raquo_airstream_state_Val$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (8192 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$Var_$eq__Lcom_raquo_airstream_state_Var$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (16384 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.com$raquo$laminar$api$Airstream$_setter_$DynamicSubscription_$eq__Lcom_raquo_airstream_ownership_DynamicSubscription$__V = (function(x$1) {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1;
  var lo = (32768 | b.RTLong__f_lo);
  var hi = b.RTLong__f_hi;
  this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$1 = new $c_RTLong(lo, hi)
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.child__Lcom_raquo_laminar_receivers_ChildReceiver$ = (function() {
  var b = this.Lcom_raquo_laminar_api_Laminar$__f_bitmap$init$0;
  var lo = (128 & b.RTLong__f_lo);
  if ((!(lo !== 0))) {
    throw new $c_s_UninitializedFieldError("Uninitialized field: /Users/raquo/code/scala/laminar/src/main/scala/com/raquo/laminar/api/Laminar.scala: 218")
  };
  return this.Lcom_raquo_laminar_api_Laminar$__f_child
});
var $d_Lcom_raquo_laminar_api_Laminar$ = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$: 0
}, false, "com.raquo.laminar.api.Laminar$", {
  Lcom_raquo_laminar_api_Laminar$: 1,
  O: 1,
  Lcom_raquo_laminar_api_Airstream: 1,
  Lcom_raquo_laminar_defs_ReactiveComplexHtmlKeys: 1,
  Lcom_raquo_domtypes_generic_defs_complex_ComplexHtmlKeys: 1,
  Lcom_raquo_domtypes_generic_defs_reflectedAttrs_ReflectedHtmlAttrs: 1,
  Lcom_raquo_domtypes_generic_defs_attrs_HtmlAttrs: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_ClipboardEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_ErrorEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_FormEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_KeyboardEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_MediaEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_MiscellaneousEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_MouseEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_eventProps_PointerEventProps: 1,
  Lcom_raquo_domtypes_generic_defs_props_Props: 1,
  Lcom_raquo_domtypes_generic_defs_styles_Styles: 1,
  Lcom_raquo_domtypes_generic_defs_styles_StylesMisc: 1,
  Lcom_raquo_domtypes_generic_defs_styles_Styles2: 1,
  Lcom_raquo_domtypes_generic_defs_tags_DocumentTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_EmbedTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_FormTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_GroupingTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_MiscTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_SectionTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_TableTags: 1,
  Lcom_raquo_domtypes_generic_defs_tags_TextTags: 1,
  Lcom_raquo_laminar_builders_HtmlBuilders: 1,
  Lcom_raquo_domtypes_generic_builders_HtmlAttrBuilder: 1,
  Lcom_raquo_domtypes_generic_builders_ReflectedHtmlAttrBuilder: 1,
  Lcom_raquo_domtypes_generic_builders_PropBuilder: 1,
  Lcom_raquo_domtypes_generic_builders_EventPropBuilder: 1,
  Lcom_raquo_domtypes_generic_builders_StyleBuilders: 1,
  Lcom_raquo_domtypes_generic_builders_HtmlTagBuilder: 1,
  Lcom_raquo_laminar_Implicits: 1,
  Lcom_raquo_laminar_Implicits$LowPriorityImplicits: 1,
  Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers: 1
});
$c_Lcom_raquo_laminar_api_Laminar$.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$;
var $n_Lcom_raquo_laminar_api_Laminar$;
function $m_Lcom_raquo_laminar_api_Laminar$() {
  if ((!$n_Lcom_raquo_laminar_api_Laminar$)) {
    $n_Lcom_raquo_laminar_api_Laminar$ = new $c_Lcom_raquo_laminar_api_Laminar$()
  };
  return $n_Lcom_raquo_laminar_api_Laminar$
}
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_LFrontend__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=main.js.map
